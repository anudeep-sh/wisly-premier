
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

export const getAITutorResponse = async (question: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: question,
      config: {
        systemInstruction: "You are an AI tutor for WISLY. Answer educational questions clearly and encourage students.",
      },
    });
    return response.text;
  } catch (error) {
    console.error("AI Tutor Error:", error);
    return "I'm sorry, I'm having trouble connecting right now. Please try again later!";
  }
};

export const generateQuiz = async (topic: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Generate a 3-question multiple choice quiz about ${topic}. Return only JSON.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              question: { type: Type.STRING },
              options: { type: Type.ARRAY, items: { type: Type.STRING } },
              answer: { type: Type.STRING },
            },
            required: ["question", "options", "answer"],
          }
        }
      }
    });
    return JSON.parse(response.text || "[]");
  } catch (error) {
    console.error("Quiz Generation Error:", error);
    return [];
  }
};
