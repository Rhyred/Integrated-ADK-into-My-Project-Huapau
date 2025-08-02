import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

// Fungsi untuk mengirim respons JSON
function jsonResponse(data: any, status: number) {
    return new NextResponse(JSON.stringify(data), {
        status,
        headers: { "Content-Type": "application/json" },
    });
}

// Fungsi untuk membangun string konteks dari data frontend
function buildContextString(context: any): string {
    if (!context) {
        return "Tidak ada data real-time yang tersedia saat ini.";
    }

    const parts = [
        `Status CPU: ${context.cpu}`,
        `Penggunaan Memori: ${context.memory}`,
        `Uptime: ${context.uptime}`,
        `Status Internet: ${context.internet_status} dengan ping ${context.ping} ms`,
        `Total Perangkat Aktif (Hotspot & PPPoE): ${context.active_devices}`,
    ];

    return parts.join(". ") + ".";
}

export async function POST(req: NextRequest) {
    try {
        const { message, context, apiKey } = await req.json();

        if (!apiKey) {
            return jsonResponse({ error: "Google AI API key is required." }, 400);
        }

        if (!message) {
            return jsonResponse({ error: "Message is required." }, 400);
        }

        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

        const systemPrompt = `
        Kamu adalah asisten cerdas bernama HuaPau AI, dirancang untuk membantu user memantau dan mengelola router Huawei.
        Tugasmu meliputi:
        - selalu merespon dengan bahasa indonesia
        - Menjawab pertanyaan teknis dasar
        - Menjelaskan arti dari statistik monitoring
        - Menyarankan langkah troubleshooting ringan
        - Menanggapi perintah sederhana seperti restart interface
        - dalam format [Konteks Data:]. Buat jawaban singkat, jelas, dan mudah dimengerti. Jika data tidak cukup  untuk menjawab
        - Kamu hanya menjawab seputar sistem Huawei dan tidak menjawab pertanyaan umum di luar konteks.
        `;

        const contextualData = buildContextString(context);
        const finalUserPrompt = `Konteks Data: [${contextualData}]. Pertanyaan Pengguna: "${message}"`;

        const chat = model.startChat({
            history: [{ role: "user", parts: [{ text: systemPrompt }] }],
            generationConfig: {
                maxOutputTokens: 500,
            },
        });

        const result = await chat.sendMessage(finalUserPrompt);
        const response = result.response;
        const reply = response.text();

        return jsonResponse({ reply }, 200);
    } catch (error: any) {
        console.error("Error calling Google AI:", error);
        return jsonResponse(
            { error: "Failed to connect to Google AI service." },
            500
        );
    }
}
