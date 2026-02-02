
import { GoogleGenAI, Type } from "@google/genai";

// const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getAITutorResponse = async (question: string) => {
  try {
    // const response = await ai.models.generateContent({
    //   model: 'gemini-3-flash-preview',
    //   contents: question,
    //   config: {
    //     systemInstruction: "You are 'WISLY AI', an expert academic tutor for students. Your tone is encouraging, helpful, and precise. Use Indian context and examples where relevant. Focus on school syllabus subjects like Physics, Math, History, and Biology.",
    //   },
    // });
    // return response.text;
  } catch (error) {
    console.error("AI Tutor Error:", error);
    return "I'm sorry, I'm having trouble connecting to my brain right now. Please try again later!";
  }
};

export const generateQuiz = async (topic: string) => {
  try {
    // const response = await ai.models.generateContent({
    //   model: 'gemini-3-flash-preview',
    //   contents: `Generate a 3-question multiple choice quiz for students about ${topic}. Ensure questions are clear and academically relevant. Return only JSON.`,
    //   config: {
    //     responseMimeType: "application/json",
    //     responseSchema: {
    //       type: Type.ARRAY,
    //       items: {
    //         type: Type.OBJECT,
    //         properties: {
    //           question: { type: Type.STRING },
    //           options: { type: Type.ARRAY, items: { type: Type.STRING } },
    //           answer: { type: Type.STRING },
    //         },
    //         propertyOrdering: ["question", "options", "answer"],
    //       }
    //     }
    //   }
    // });
    // return JSON.parse(response.text || "[]");
  } catch (error) {
    console.error("Quiz Generation Error:", error);
    return [];
  }
};
