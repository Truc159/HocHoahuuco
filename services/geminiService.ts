
import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

const SYSTEM_INSTRUCTION = `Bạn là một trợ lý học tập chuyên về Hóa học hữu cơ cho học sinh Việt Nam. 
Hãy trả lời các câu hỏi về danh pháp (IUPAC, tên thông thường), cấu tạo và tính chất của các hợp chất hữu cơ 
(Ankan, Anken, Ankin, Ancol, Anđehit, Axit cacboxylic, Este, Amin, Amino axit). 
Giải thích rõ ràng, súc tích và chính xác. Nếu người dùng hỏi ngoài phạm vi hóa học, hãy khéo léo đưa họ quay lại chủ đề học tập.`;

export const getGeminiResponse = async (history: ChatMessage[], prompt: string) => {
  // Fix: Directly obtain the API key from process.env.API_KEY as per guidelines.
  const apiKey = process.env.API_KEY;
  
  if (!apiKey) {
    return "Bạn chưa cấu hình API Key. Vui lòng nhấn vào biểu tượng chìa khóa ở góc trên để thiết lập.";
  }

  try {
    // Fix: Always create a new instance right before making the API call to ensure the latest key is used.
    const ai = new GoogleGenAI({ apiKey: apiKey });
    
    // Fix: Select gemini-3-pro-preview for complex STEM (chemistry) reasoning tasks.
    const response = await ai.models.generateContent({
      model: "gemini-3-pro-preview",
      contents: [
        ...history.map(msg => ({ 
          role: msg.role === 'user' ? 'user' : 'model', 
          parts: [{ text: msg.text }] 
        })),
        { role: 'user', parts: [{ text: prompt }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    // Fix: Access the generated text using the .text property (not a method).
    return response.text;
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    // Fix: Handle specific error message for resetting key selection if needed.
    if (error?.message?.includes("Requested entity was not found")) {
      return "Lỗi: Không tìm thấy thực thể hoặc API Key không hợp lệ. Vui lòng thử chọn lại API Key từ dự án trả phí (Paid Project).";
    }
    return "Xin lỗi, mình đang gặp sự cố kết nối hoặc giới hạn API. Bạn hãy kiểm tra lại cấu hình Key nhé!";
  }
};
