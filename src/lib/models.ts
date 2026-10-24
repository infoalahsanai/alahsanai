export type Provider = "openrouter" | "google" | "groq";

export const LOVABLE_MODELS = [
  { id: "openrouter/free", label: "OpenRouter Free (সম্পূর্ণ ফ্রি — অটো রাউটার)" },
  { id: "google/gemma-4-31b-it:free", label: "Google Gemma 4 31B (সম্পূর্ণ ফ্রি — গভীর যুক্তি)" },
  { id: "nvidia/nemotron-3.5-super-vl:free", label: "NVIDIA Nemotron 3.5 VL (সম্পূর্ণ ফ্রি — বিশাল মেমোরি)" },
  { id: "meta-llama/llama-3.3-70b-instruct", label: "Llama 3.3 70B (ফ্ল্যাগশিপ — কোডিং ও ওয়েবসাইট)" },
  { id: "deepseek/deepseek-v4.1-flash", label: "DeepSeek V4.1 Flash (সুপার ফাস্ট ও বুদ্ধিমান)" },
  { id: "qwen/qwen3.8-27b", label: "Qwen 3.8 27B (উন্নত বহুভাষিক)" },
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
  openrouter: "openrouter/free",
  google: "gemini-3.8-flash",
  groq: "openai/gpt-oss-120b",
};

