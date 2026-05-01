import { GoogleGenerativeAI } from '@google/generative-ai';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY || 'mock-gemini-key';

// Initialize Gemini API
const genAI = new GoogleGenerativeAI(API_KEY);

export interface ManifestoPromise {
  text: string;
  type: 'concrete' | 'vague';
  score: number;
}

export interface ManifestoAnalysis {
  promises: ManifestoPromise[];
  feasibility: number;
  manipulationIndex: number;
  hiddenCosts: string;
  questions: string[];
  sentiment: string;
}

export const analyzeManifesto = async (text: string): Promise<ManifestoAnalysis> => {
  if (API_KEY === 'mock-gemini-key') {
    // Return enhanced mock data for UI demonstration
    return new Promise(resolve => setTimeout(() => resolve({
      promises: [
        { text: "Create 10 million jobs in 5 years", type: "vague", score: 30 },
        { text: "Build 5 new hospitals in rural districts", type: "concrete", score: 85 },
        { text: "Double the GDP by next year", type: "vague", score: 10 }
      ],
      feasibility: 45,
      manipulationIndex: 65,
      hiddenCosts: "High risk of inflation due to rapid monetary expansion.",
      questions: [
        "Where will the specific budget for the 10 million jobs come from?",
        "Which specific districts are prioritized for the new hospitals?",
        "How will doubling the GDP be achieved without hyperinflation?"
      ],
      sentiment: "Highly Ambitious / Populist"
    }), 2000));
  }

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    const prompt = `
      Analyze the following political manifesto excerpt with deep linguistic and economic scrutiny.
      
      Provide the following:
      1. Promises: Identify concrete (measurable) vs vague (emotional/populistic) promises.
      2. Economic Feasibility: A score (0-100) based on realistic economic constraints.
      3. Manipulation Index: A score (0-100) detecting logical fallacies, emotional manipulation, or hyperbole.
      4. Hidden Costs: Identify potential negative externalities or unmentioned fiscal burdens.
      5. Critical Questions: 3 sharp questions a skeptical citizen should ask.
      6. Sentiment: A brief summary of the rhetorical style.
      
      Respond in strict JSON format matching exactly this interface:
      {
        "promises": [
          {"text": "string", "type": "concrete" | "vague", "score": number}
        ],
        "feasibility": number,
        "manipulationIndex": number,
        "hiddenCosts": "string",
        "questions": ["string"],
        "sentiment": "string"
      }

      Manifesto Text:
      "${text}"
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const textResponse = response.text();
    
    // Robust JSON parsing to handle potential AI markdown formatting
    try {
      // Find the first '{' and the last '}' to extract only the JSON object
      const startIndex = textResponse.indexOf('{');
      const endIndex = textResponse.lastIndexOf('}');
      
      if (startIndex === -1 || endIndex === -1) {
        throw new Error("No JSON object found in response");
      }
      
      const jsonStr = textResponse.slice(startIndex, endIndex + 1);
      return JSON.parse(jsonStr) as ManifestoAnalysis;
    } catch (parseError) {
      console.error("Failed to parse AI response as JSON:", parseError);
      console.log("Raw AI response:", textResponse);
      throw new Error("AI returned malformed data. Please try a different text snippet.");
    }
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Failed to analyze manifesto. Please check your API key or connection.");
  }
};
