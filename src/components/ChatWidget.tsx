"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";

interface Message {
  role: "assistant" | "user";
  text: string;
}

const GREETING: Message = {
  role: "assistant",
  text: "👋 Hi! I'm the Envico AI Assistant. I'm here to help you with any questions about our care services, referrals, or availability at Bishops House. How can I help you today?",
};

const STORAGE_KEY = "envico_chat_opened";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Auto-open after 3s on first visit
  useEffect(() => {
    const alreadyOpened = sessionStorage.getItem(STORAGE_KEY);
    if (!alreadyOpened) {
      const timer = setTimeout(() => {
        setOpen(true);
        setVisible(true);
        sessionStorage.setItem(STORAGE_KEY, "1");
      }, 3000);
      return () => clearTimeout(timer);
    } else {
      setVisible(true);
    }
  }, []);

  useEffect(() => {
    if (open) bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  const toggleOpen = () => {
    setOpen((o) => !o);
    sessionStorage.setItem(STORAGE_KEY, "1");
  };

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;
    setInput("");
    setMessages((m) => [...m, { role: "user", text }]);
    setLoading(true);
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_CAREOS_API}/api/assistant/ask`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: text, context: "GENERAL" }),
        }
      );
      const json = await res.json();
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          text:
            json.response ??
            json.message ??
            "Sorry, I couldn't get a response. Please call us on 020 8797 9974.",
        },
      ]);
    } catch {
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          text: "I'm having trouble connecting. Please call 020 8797 9974 or email info@envicosl.co.uk.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  if (!visible) return null;

  return (
    <>
      {/* Chat panel — slide up */}
      <div
        className={`fixed bottom-28 right-4 sm:right-6 z-50 w-[380px] max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden transition-all duration-300 ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        style={{ height: "480px" }}
      >
        {/* Header */}
        <div className="bg-envico-navy px-4 py-3 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="relative w-8 h-8 bg-envico-blue rounded-full flex items-center justify-center">
              <MessageCircle size={15} className="text-white" />
              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-green-400 rounded-full border border-white" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm leading-none">Envico AI Assistant</p>
              <p className="text-green-400 text-xs mt-0.5">Online now</p>
            </div>
          </div>
          <button
            onClick={toggleOpen}
            className="text-white/60 hover:text-white transition-colors p-1"
            aria-label="Close chat"
          >
            <X size={18} />
          </button>
        </div>

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
          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <div className="border-t border-gray-100 p-3 bg-white flex gap-2 flex-shrink-0">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send()}
            placeholder="Type your message..."
            className="flex-1 border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-envico-blue bg-gray-50"
          />
          <button
            onClick={send}
            disabled={!input.trim() || loading}
            className="bg-envico-blue text-white rounded-xl px-3.5 py-2.5 hover:opacity-90 transition-opacity disabled:opacity-40 flex-shrink-0"
            aria-label="Send message"
          >
            <Send size={16} />
          </button>
        </div>
      </div>

      {/* Toggle button */}
      <div className="fixed bottom-5 right-4 sm:right-6 z-50 flex flex-col items-center gap-1.5">
        {!open && (
          <span className="bg-envico-navy text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md whitespace-nowrap">
            Chat with us
          </span>
        )}
        <button
          onClick={toggleOpen}
          className="relative w-16 h-16 bg-envico-navy rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-transform"
          aria-label={open ? "Close chat" : "Open AI chat"}
        >
          {/* Pulsing ring */}
          {!open && (
            <span className="absolute inset-0 rounded-full bg-envico-blue animate-ping opacity-30" />
          )}
          {open ? (
            <X size={24} className="text-white" />
          ) : (
            <MessageCircle size={24} className="text-white" />
          )}
          {/* Green status dot */}
          <span className="absolute top-1 right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white" />
        </button>
      </div>
    </>
  );
}
