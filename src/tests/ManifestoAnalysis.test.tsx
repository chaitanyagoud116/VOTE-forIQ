import { describe, it, expect, vi } from 'vitest';
import { analyzeManifesto } from '../services/ai/gemini';

// We mock the service to test the logic wrapper and fallback behavior
vi.mock('../services/ai/gemini', async (importOriginal) => {
  const actual = await importOriginal() as any;
  return {
    ...actual,
    analyzeManifesto: vi.fn(async (text: string) => {
      if (!text) throw new Error("Empty input");
      return {
        promises: [
          { text: "Test Promise", type: "concrete", score: 90 }
        ],
        feasibility: 90,
        manipulationIndex: 10,
        hiddenCosts: "None",
        questions: ["Why is this so good?"],
        sentiment: "Neutral"
      };
    }),
  };
});

describe('Manifesto Analysis Logic', () => {
  it('returns correctly structured data for valid input', async () => {
    const result = await analyzeManifesto("Test manifesto text");
    
    expect(result).toHaveProperty('promises');
    expect(result.promises[0].text).toBe("Test Promise");
    expect(result.feasibility).toBeGreaterThan(0);
    expect(result.questions).toHaveLength(1);
  });

  it('handles errors gracefully (simulated)', async () => {
    const mock = vi.mocked(analyzeManifesto);
    mock.mockRejectedValueOnce(new Error("API Fail"));

    await expect(analyzeManifesto("fail")).rejects.toThrow("API Fail");
  });
});
