"use client";

import { useState, useRef, useEffect } from "react";
import { Send } from "lucide-react";

const API = process.env.NEXT_PUBLIC_CAREOS_API;

const QUESTIONS = [
  "Could you start by telling me their first name?",
  "How old are they?",
  "What is their main diagnosis or condition?",
  "What level of support do they need? (low / medium / high)",
  "What is their current living situation?",
  "How is the placement likely to be funded? (Local Authority / NHS CHC / Self-funded)",
  "How urgent is this referral? (Routine / Urgent / Emergency)",
];

interface Message {
  role: "assistant" | "user";
  text: string;
}

export default function AIReferralChatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      text: `Hi! I'm the Envico AI assistant. I'd like to help find out if Bishops House could be right for your loved one. ${QUESTIONS[0]}`,
    },
  ]);
  const [input, setInput] = useState("");
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [referralSent, setReferralSent] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    const text = input.trim();
    if (!text || loading) return;
    setInput("");

    const newAnswers = [...answers, text];
    setAnswers(newAnswers);
    setMessages((m) => [...m, { role: "user", text }]);

    const nextStep = step + 1;
    setStep(nextStep);

    if (nextStep < QUESTIONS.length) {
      setMessages((m) => [...m, { role: "assistant", text: QUESTIONS[nextStep] }]);
    } else {
      // All 7 questions answered — call AI for assessment
      setLoading(true);
      const contextText = QUESTIONS.map(
        (q, i) => `${q} ${newAnswers[i] ?? ""}`
      ).join("\n");
      try {
        const res = await fetch(`${API}/api/assistant/ask`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            message: `You are the Envico Supported Living AI assistant. Based on the following information about a potential referral to Bishops House in Hayes, Middlesex, provide a warm, professional and encouraging assessment of suitability and clear next steps. Be concise (3-4 sentences). Information provided:\n\n${contextText}`,
            context: "GENERAL",
          }),
        });
        const json = await res.json();
        const reply =
          json.response ??
          json.message ??
          "Thank you for sharing that information. Based on what you've told me, Bishops House could be a great fit. Our team will be in touch within 24 hours to discuss next steps.";
        setMessages((m) => [...m, { role: "assistant", text: reply }]);
      } catch {
        setMessages((m) => [
          ...m,
          {
            role: "assistant",
            text: "Thank you for providing that information. Our team will review your enquiry and be in touch within 24 hours. For urgent referrals please call 020 8797 9974.",
          },
        ]);
      } finally {
        setLoading(false);
        setDone(true);
      }
    }
  };

  const submitReferral = async () => {
    setLoading(true);
    const [firstName, , diagnosis, supportLevel, currentLiving, funding, urgency] = answers;
    const urgencyMap: Record<string, string> = {
      emergency: "Emergency",
      urgent: "Urgent",
    };
    const urgencyNorm =
      urgencyMap[(urgency ?? "").toLowerCase().split(" ")[0]] ?? "Routine";

    try {
      await fetch(`${API}/api/referrals`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: firstName ?? "",
          dateOfBirth: "",
          phone: "",
          email: "",
          supportNeeds: `${diagnosis ?? ""}. Current living: ${currentLiving ?? ""}. Support level: ${supportLevel ?? ""}.`,
          urgency: urgencyNorm,
          fundingType: funding ?? "",
          source: "ai_chatbot",
        }),
      });
      setReferralSent(true);
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          text: "✅ Your referral has been submitted! Our team will contact you within 24 hours. For urgent enquiries please call 020 8797 9974.",
        },
      ]);
    } catch {
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          text: "There was an issue submitting your referral. Please call us on 020 8797 9974 or email info@envicosl.co.uk.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-white" style={{ height: "480px" }}>
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed shadow-sm ${
                msg.role === "user"
                  ? "bg-envico-blue text-white rounded-br-sm"
                  : "bg-white text-gray-800 rounded-bl-sm border border-gray-100"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-white border border-gray-100 rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm">
              <div className="flex gap-1 items-center">
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0ms]" />
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:150ms]" />
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:300ms]" />
              </div>
            </div>
          </div>
        )}
        {done && !referralSent && !loading && (
          <div className="flex justify-center mt-4">
            <button
              onClick={submitReferral}
              className="bg-envico-green text-white font-bold px-8 py-3 rounded-lg hover:bg-envico-green-dark transition-colors shadow"
            >
              Submit Referral →
            </button>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      {!done && (
        <div className="border-t border-gray-100 p-3 bg-white flex gap-2 flex-shrink-0">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Type your answer..."
            className="flex-1 border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-envico-blue bg-gray-50"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || loading}
            className="bg-envico-blue text-white rounded-xl px-3.5 py-2.5 hover:opacity-90 transition-opacity disabled:opacity-40 flex-shrink-0"
            aria-label="Send"
          >
            <Send size={16} />
          </button>
        </div>
      )}
    </div>
  );
}
