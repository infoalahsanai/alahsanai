export type Provider = "lovable" | "google" | "openai";

export const LOVABLE_MODELS = [
  { id: "google/gemini-3.1-pro-preview", label: "Gemini 3.1 Pro (সবচেয়ে শক্তিশালী যুক্তি)" },
  { id: "google/gemini-3.8-flash", label: "Gemini 3.8 Flash (দ্রুত ও শক্তিশালী)" },
  { id: "google/gemini-3-flash-preview", label: "Gemini 3 Flash" },
  { id: "google/gemini-3.1-flash-lite", label: "Gemini 3.1 Flash Lite (সাশ্রয়ী)" },
  { id: "openai/gpt-6-astra", label: "GPT-6 Astra (সর্বোচ্চ ক্ষমতা)" },
  { id: "openai/gpt-6-sol", label: "GPT-6 Sol" },
  { id: "openai/gpt-5.5", label: "GPT-5.5" },
];

export const GOOGLE_MODELS = [
  { id: "gemini-3.8-flash", label: "Gemini 3.8 Flash (সর্বশেষ, দ্রুত ও শক্তিশালী)" },
  { id: "gemini-3.1-flash-lite", label: "Gemini 3.1 Flash Lite (সাশ্রয়ী)" },
  { id: "gemini-3-flash-preview", label: "Gemini 3 Flash" },
  { id: "gemini-3.1-pro-preview", label: "Gemini 3.1 Pro (পেইড কি লাগে)" },
];

export const OPENAI_MODELS = [
  { id: "openai/gpt-oss-120b", label: "GPT OSS 120B (Groq ফ্ল্যাগশিপ, সর্বোচ্চ বুদ্ধিমান)" },
  { id: "openai/gpt-oss-20b", label: "GPT OSS 20B (সুপার ফাস্ট ১০০০ t/s, ১-২ সেকেন্ড)" },
  { id: "qwen/qwen3.8-27b", label: "Qwen 3.8 27B (শক্তিশালী বহুভাষিক ও যুক্তি)" },
  { id: "minimaxai/minimax-m2.7", label: "MiniMax M2.7 (১৯৬k বিশাল মেমোরি)" },
];

export const DEFAULT_MODELS: Record<Provider, string> = {
  lovable: "openai/gpt-6-astra",
  google: "gemini-3.8-flash",
  openai: "openai/gpt-oss-120b",
};

