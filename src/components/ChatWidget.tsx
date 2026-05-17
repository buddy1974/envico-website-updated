"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Phone, ChevronRight } from "lucide-react";

interface Message {
  role: "assistant" | "user";
  text: string;
  isEscalation?: boolean;
}

const GREETING: Message = {
  role: "assistant",
  text: "Hi there! 👋 I'm Sophie, Envico's care advisor. Whether you're looking for support for a loved one or just want to know more about what we do — I'm here and happy to help. What's on your mind?",
};

const SUGGESTED = [
  "What conditions do you support?",
  "How does the family portal work?",
  "Can I arrange a visit to Bishops House?",
  "How do I make a referral?",
];

const STORAGE_KEY = "envico_chat_v2";
const API = process.env.NEXT_PUBLIC_CAREOS_API ?? "https://envico-backend.onrender.com";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSuggested, setShowSuggested] = useState(true);
  const [unread, setUnread] = useState(0);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const seen = sessionStorage.getItem(STORAGE_KEY);
    if (!seen) {
      const t = setTimeout(() => { setOpen(true); setVisible(true); sessionStorage.setItem(STORAGE_KEY, "1"); }, 4000);
      return () => clearTimeout(t);
    } else {
      setVisible(true);
    }
  }, []);

  useEffect(() => {
    if (open) { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); setUnread(0); }
  }, [messages, open]);

  const toggleOpen = () => {
    setOpen(o => !o);
    sessionStorage.setItem(STORAGE_KEY, "1");
    if (!open) setUnread(0);
  };

  const sendMessage = async (text: string) => {
    if (!text.trim() || loading) return;
    setInput("");
    setShowSuggested(false);
    setMessages(m => [...m, { role: "user", text }]);
    setLoading(true);

    try {
      const res = await fetch(`${API}/api/assistant/public-ask`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: text }),
      });
      const json = await res.json();
      const answer = json.answer ?? "I'd love to help — let me connect you with our team for the best answer. Call us on 020 8797 9974 or email info@envicosl.co.uk.";
      setMessages(m => [...m, { role: "assistant", text: answer }]);
      if (!open) setUnread(u => u + 1);
    } catch {
      setMessages(m => [...m, {
        role: "assistant",
        text: "I'm having a moment! 😊 For immediate help, our team is ready on 020 8797 9974.",
      }]);
    } finally {
      setLoading(false);
    }
  };

  const escalate = () => {
    setMessages(m => [...m, {
      role: "assistant",
      text: "Of course — I'll connect you with our care team right now. 📞 Call us on 020 8797 9974 (available 24/7) or email info@envicosl.co.uk and someone will get back to you within the hour.",
      isEscalation: true,
    }]);
    setShowSuggested(false);
  };

  if (!visible) return null;

  return (
    <>
      {/* Chat panel */}
      <div
        className={`fixed bottom-28 right-4 sm:right-6 z-50 flex flex-col bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transition-all duration-300 ${
          open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-6 pointer-events-none"
        }`}
        style={{ width: "min(390px, calc(100vw - 2rem))", height: "520px" }}
      >
        {/* Header */}
        <div className="bg-envico-navy px-4 py-3 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="relative w-9 h-9 bg-envico-blue rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
              S
              <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-white" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm leading-none">Sophie · Envico Advisor</p>
              <p className="text-green-400 text-xs mt-0.5 flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full inline-block" />
                Online now · Typically replies instantly
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={escalate} title="Talk to a person"
              className="text-white/60 hover:text-white text-xs border border-white/20 rounded-full px-2.5 py-1 transition-colors hover:border-white/50">
              <Phone size={11} className="inline mr-1" />Speak to team
            </button>
            <button onClick={toggleOpen} className="text-white/60 hover:text-white p-1 transition-colors">
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50/80">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} items-end gap-2`}>
              {msg.role === "assistant" && (
                <div className="w-7 h-7 bg-envico-blue rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mb-0.5">S</div>
              )}
              <div className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed shadow-sm ${
                msg.role === "user"
                  ? "bg-envico-blue text-white rounded-br-sm"
                  : msg.isEscalation
                    ? "bg-green-50 text-green-900 border border-green-200 rounded-bl-sm"
                    : "bg-white text-gray-800 rounded-bl-sm border border-gray-100"
              }`}>
                {msg.text}
                {msg.isEscalation && (
                  <div className="mt-2 flex gap-2">
                    <a href="tel:02087979974"
                      className="flex items-center gap-1 bg-green-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full hover:bg-green-700 transition-colors">
                      <Phone size={11} /> Call now
                    </a>
                    <a href="mailto:info@envicosl.co.uk"
                      className="flex items-center gap-1 border border-green-600 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-full hover:bg-green-50 transition-colors">
                      Email us
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex items-end gap-2 justify-start">
              <div className="w-7 h-7 bg-envico-blue rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">S</div>
              <div className="bg-white border border-gray-100 rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm">
                <div className="flex gap-1 items-center">
                  <span className="w-2 h-2 bg-gray-300 rounded-full animate-bounce [animation-delay:0ms]" />
                  <span className="w-2 h-2 bg-gray-300 rounded-full animate-bounce [animation-delay:150ms]" />
                  <span className="w-2 h-2 bg-gray-300 rounded-full animate-bounce [animation-delay:300ms]" />
                </div>
              </div>
            </div>
          )}

          {/* Suggested questions */}
          {showSuggested && messages.length === 1 && !loading && (
            <div className="space-y-2 pt-1">
              <p className="text-xs text-gray-400 text-center">Quick questions</p>
              {SUGGESTED.map((q, i) => (
                <button key={i} onClick={() => sendMessage(q)}
                  className="w-full text-left text-xs text-gray-700 bg-white border border-gray-200 rounded-xl px-3.5 py-2.5 hover:border-envico-blue hover:text-envico-blue transition-all flex items-center justify-between group shadow-sm">
                  {q}
                  <ChevronRight size={13} className="text-gray-300 group-hover:text-envico-blue flex-shrink-0" />
                </button>
              ))}
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <div className="border-t border-gray-100 p-3 bg-white flex-shrink-0">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && sendMessage(input)}
              placeholder="Ask me anything about Envico…"
              className="flex-1 border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-envico-blue bg-gray-50 min-w-0"
            />
            <button onClick={() => sendMessage(input)} disabled={!input.trim() || loading}
              className="bg-envico-blue text-white rounded-xl px-3.5 py-2.5 hover:opacity-90 transition-opacity disabled:opacity-40 flex-shrink-0">
              <Send size={16} />
            </button>
          </div>
          <p className="text-center text-xs text-gray-400 mt-2">Powered by AI · 020 8797 9974 for urgent matters</p>
        </div>
      </div>

      {/* Toggle button */}
      <div className="fixed bottom-5 right-4 sm:right-6 z-50 flex flex-col items-end gap-2">
        {!open && unread > 0 && (
          <div className="bg-white border border-gray-100 rounded-xl px-3 py-2 shadow-lg text-sm text-gray-700 max-w-[200px] animate-bounce-gentle">
            Sophie replied to you 👋
          </div>
        )}
        {!open && unread === 0 && (
          <span className="bg-envico-navy text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
            Chat with Sophie
          </span>
        )}
        <button onClick={toggleOpen}
          className="relative w-16 h-16 bg-envico-navy rounded-full shadow-xl flex items-center justify-center hover:scale-105 transition-transform">
          {!open && <span className="absolute inset-0 rounded-full bg-envico-blue animate-ping opacity-20" />}
          {open ? <X size={24} className="text-white" /> : <MessageCircle size={24} className="text-white" />}
          <span className="absolute top-1 right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white" />
          {unread > 0 && !open && (
            <span className="absolute -top-1 -left-1 w-5 h-5 bg-red-500 rounded-full text-white text-xs flex items-center justify-center font-bold">{unread}</span>
          )}
        </button>
      </div>
    </>
  );
}
