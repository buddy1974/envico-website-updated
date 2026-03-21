"use client";

import { useState } from "react";
import ReferralForm from "./ReferralForm";
import AIReferralChatbot from "./AIReferralChatbot";

export default function ReferralSection() {
  const [mode, setMode] = useState<"form" | "chat">("form");

  return (
    <>
      {/* Toggle */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex bg-white/10 rounded-lg p-1 gap-1">
          <button
            onClick={() => setMode("form")}
            className={`px-5 py-2 rounded-md text-sm font-semibold transition-colors ${
              mode === "form"
                ? "bg-white text-envico-navy"
                : "text-white/70 hover:text-white"
            }`}
          >
            📝 Fill in Form
          </button>
          <button
            onClick={() => setMode("chat")}
            className={`px-5 py-2 rounded-md text-sm font-semibold transition-colors ${
              mode === "chat"
                ? "bg-white text-envico-navy"
                : "text-white/70 hover:text-white"
            }`}
          >
            💬 Chat with AI Assistant
          </button>
        </div>
      </div>

      {mode === "form" ? (
        <div className="bg-white rounded-xl shadow-lg p-8">
          <ReferralForm />
        </div>
      ) : (
        <AIReferralChatbot />
      )}
    </>
  );
}
