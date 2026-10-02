import React, { useState, useRef, useEffect } from 'react';
import { X, Sparkles, Send, Maximize2, RotateCcw } from 'lucide-react';
import { FurnitureProduct } from '../types/furniture';
import { MarkdownRenderer } from '../utils/markdownRenderer';

interface AIConciergeDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onExpandToFullStudio: (customPrompt?: string) => void;
  onSelectProduct: (product: FurnitureProduct) => void;
}

export function AIConciergeDrawer({
  isOpen,
  onClose,
  onExpandToFullStudio,
  onSelectProduct,
}: AIConciergeDrawerProps) {
  if (!isOpen) return null;

  const [messages, setMessages] = useState<Array<{ role: 'user' | 'assistant'; content: string; time: string }>>([
    {
      role: 'assistant',
      content: `Hello, I am **Standard Furnitures AI**. How can I assist your design consultation right now? Ask about room scale, wood finishes, or companion pieces.`,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSend = async (queryText?: string) => {
    const text = queryText || input;
    if (!text.trim() || isLoading) return;

    const userMessage = {
      role: 'user' as const,
      content: text.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMessage].map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      const data = await response.json();
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: data.content,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } catch (e) {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: 'I apologize, could you please repeat that inquiry?',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 w-[94vw] sm:w-[420px] bg-white rounded-2xl shadow-2xl border border-[#D8C7B4] flex flex-col h-[520px] max-h-[85vh] animate-in slide-in-from-bottom-5 duration-200">
      {/* Header */}
      <div className="px-4 py-3 bg-[#231B15] text-[#FAF8F5] rounded-t-2xl flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-[#C2A676] text-[#231B15] flex items-center justify-center">
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <div>
            <div className="text-xs font-semibold">Standard Furnitures AI</div>
            <div className="text-[10px] text-[#C2B5A5]">Concierge Assistant</div>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => onExpandToFullStudio()}
            className="p-1.5 rounded text-[#D2C5B5] hover:text-white transition-colors cursor-pointer"
            title="Expand to Full Design Studio"
          >
            <Maximize2 className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded text-[#D2C5B5] hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#FCFBF8] text-xs">
        {messages.map((m, idx) => (
          <div
            key={idx}
            className={`p-3 rounded-xl ${
              m.role === 'assistant'
                ? 'bg-white border border-[#E8DFD3] text-[#241C15]'
                : 'bg-[#231B15] text-white ml-auto max-w-[85%]'
            }`}
          >
            <MarkdownRenderer content={m.content} onSelectProduct={onSelectProduct} />
            <div className="text-[9px] text-[#9A8D80] mt-1 text-right">{m.time}</div>
          </div>
        ))}
        {isLoading && (
          <div className="text-[11px] text-[#8C7A68] italic flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-[#C2A676] animate-spin" />
            <span>Consulting design specifications...</span>
          </div>
        )}
        <div ref={endRef} />
      </div>

      {/* Input */}
      <div className="p-3 border-t border-[#E8DFD3] bg-white rounded-b-2xl">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="flex items-center gap-2"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask quick question..."
            className="flex-1 text-xs py-2 px-3 rounded-lg border border-[#D5C7B4] bg-[#FAF8F5] focus:outline-hidden text-[#1E1813]"
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="p-2 rounded-lg bg-[#231B15] text-[#FAF8F5] disabled:opacity-40 cursor-pointer"
          >
            <Send className="w-3.5 h-3.5 text-[#C2A676]" />
          </button>
        </form>
      </div>
    </div>
  );
}
