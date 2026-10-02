import React, { useState, useRef, useEffect } from 'react';
import {
  Sparkles,
  Send,
  RotateCcw,
  Volume2,
  VolumeX,
  Sliders,
  CheckCircle2,
  HelpCircle,
  Download,
  Info,
  Layers,
  ArrowRight,
  Maximize2
} from 'lucide-react';
import { ChatMessage, FurnitureProduct, RoomCategory, FurnitureStyle } from '../types/furniture';
import { FURNITURE_CATALOG } from '../data/furnitureData';
import { MarkdownRenderer } from '../utils/markdownRenderer';

interface AIConsultantProps {
  initialProductContext?: FurnitureProduct | null;
  onClearProductContext?: () => void;
  onSelectProduct: (product: FurnitureProduct) => void;
  onAddToMoodboard: (product: FurnitureProduct) => void;
}

const STARTER_PROMPTS = [
  {
    title: 'Open Living Room Layout',
    prompt: 'Help me furnish an open-concept 18×14 ft living room in Scandinavian Minimalist style with a sectional and accent chair.',
    tag: 'Living'
  },
  {
    title: 'Walnut Dining Set Pairing',
    prompt: 'Which dining chairs and lighting pair best with the Soren Extendable Dining Table in a modern dining room?',
    tag: 'Dining'
  },
  {
    title: 'Ergonomic Executive Office',
    prompt: 'I want a luxury home office setup under $3,000 combining the Aris Standing Desk and Form Leather Swivel Chair.',
    tag: 'Office'
  },
  {
    title: 'Solid Wood & Leather Care',
    prompt: 'What are the maintenance rules for American walnut and aniline leather to prevent drying and discoloration?',
    tag: 'Care Guide'
  },
  {
    title: 'White-Glove & Lead Times',
    prompt: 'Explain your white-glove delivery service, staircase clearance guidelines, and the 100-night trial policy.',
    tag: 'Store Policy'
  }
];

export function AIConsultant({
  initialProductContext,
  onClearProductContext,
  onSelectProduct,
  onAddToMoodboard,
}: AIConsultantProps) {
  // Chat state
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: `Welcome to **Standard Furnitures**. I am your dedicated **Interior Advisor & Furniture Consultant**.

Whether you are designing a complete living room layout, seeking the ideal proportions for your dining space, or inquiring about our kiln-dried timber craftsmanship and white-glove service, I am at your service.

### How would you like to begin?
* **Product Consultation:** Share your room dimensions, preferred aesthetic, and budget.
* **Spatial & Material Guidance:** Compare fabrics, full-grain Italian leathers, or solid Appalachian walnut.
* **Store Policies:** Inquire about our 10-Year Craftsmanship Guarantee, 100-Night In-Home Trial, and custom upholstery lead times.`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);

  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  // Room Context Parameters
  const [roomType, setRoomType] = useState<RoomCategory>('living');
  const [roomDimensions, setRoomDimensions] = useState('14 ft × 16 ft');
  const [selectedStyle, setSelectedStyle] = useState<FurnitureStyle>('Scandinavian');
  const [budgetTier, setBudgetTier] = useState('$3,000 – $6,000');
  const [hasPetsOrKids, setHasPetsOrKids] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Handle incoming product context from other tabs
  useEffect(() => {
    if (initialProductContext) {
      const promptText = `I am considering the **${initialProductContext.name}** ($${initialProductContext.price.toLocaleString()}, ${initialProductContext.style} style). Could you suggest matching companion pieces, suitable room dimensions, and color palette pairings?`;
      sendMessage(promptText, initialProductContext);
      if (onClearProductContext) onClearProductContext();
    }
  }, [initialProductContext]);

  // Auto-scroll on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = textToSend || inputValue;
    if (!text.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: text.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages.map((m) => ({ role: m.role, content: m.content })),
          userContext: {
            currentRoomPreference: roomType,
            roomDimensions: roomDimensions,
            preferredDesignStyle: selectedStyle,
            budgetEstimate: budgetTier,
            householdPetsOrKids: hasPetsOrKids,
          },
        }),
      });

      if (!response.ok) {
        throw new Error(`Server returned ${response.status}`);
      }

      const data = await response.json();
      const assistantReply = data.content;

      // Extract clarification chips if the AI is asking clarification questions
      const chips: string[] = [];
      if (assistantReply.includes('?') && (assistantReply.toLowerCase().includes('dimension') || assistantReply.toLowerCase().includes('size') || assistantReply.toLowerCase().includes('color') || assistantReply.toLowerCase().includes('budget'))) {
        chips.push('Living Room: 14 ft × 16 ft');
        chips.push('Warm neutrals & Natural Oak');
        chips.push('Seating for 4–5 people');
        chips.push('Budget: Under $4,500');
      }

      const assistantMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: assistantReply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        clarificationChips: chips.length > 0 ? chips : undefined,
      };

      setMessages((prev) => [...prev, assistantMsg]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: `I apologize, but I had difficulty reaching our design database. Please verify your connection or try again. In the meantime, feel free to browse our [Showroom Catalog](#catalog) or inspect our [Care & Policy Guides](#care).`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const sendMessage = (text: string, contextProduct?: FurnitureProduct) => {
    handleSendMessage(text);
  };

  const handleResetChat = () => {
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    setMessages([
      {
        id: 'welcome-reset',
        role: 'assistant',
        content: `Welcome back to **Standard Furnitures**. The consultation canvas has been cleared. What room or styling query shall we explore next?`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
  };

  // Text to speech toggling
  const toggleSpeech = (text: string) => {
    if (!('speechSynthesis' in window)) return;

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    // Clean markdown symbols for cleaner voice speech
    const cleanText = text.replace(/[*#_`|\[\]()-]/g, ' ');
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.rate = 0.95;
    utterance.pitch = 1.0;
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  // Export consultation as text file
  const handleExportConsultation = () => {
    const textContent = messages
      .map(
        (m) =>
          `[${m.timestamp}] ${m.role === 'assistant' ? 'Standard Furnitures AI' : 'Customer'}:\n${m.content}\n\n`
      )
      .join('---\n\n');

    const blob = new Blob(
      [
        `STANDARD FURNITURES - DESIGN CONSULTATION SPEC SHEET\nGenerated on: ${new Date().toLocaleString()}\nBrand: Standard Furnitures (New York)\n\n============================================\n\n${textContent}`,
      ],
      { type: 'text/plain' }
    );
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Standard-Furnitures-Consultation-${Date.now()}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      {/* Studio Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-[#E6DDD0] gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C2A676] animate-pulse" />
            <span className="text-[11px] font-semibold tracking-widest uppercase text-[#967C57]">
              Live Design Studio
            </span>
          </div>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1611] tracking-tight mt-1">
            Standard Furnitures AI Consultant
          </h1>
          <p className="text-xs sm:text-sm text-[#6C5F53] font-sans mt-0.5">
            Architectural styling advice, spatial dimension clearance calculations, and white-glove order guidance.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setShowPreferences(!showPreferences)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium transition-all cursor-pointer ${
              showPreferences
                ? 'bg-[#231B15] text-[#FAF8F5] border-[#231B15]'
                : 'bg-white border-[#D8CABE] text-[#4F4135] hover:bg-[#F6F1E9]'
            }`}
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>Room & Style Context</span>
            <span className="text-[10px] bg-[#C2A676]/20 text-[#8C6D37] px-1 rounded ml-1 font-semibold">
              {roomType} • {selectedStyle}
            </span>
          </button>

          <button
            type="button"
            onClick={handleExportConsultation}
            className="p-2 rounded-lg border border-[#D8CABE] bg-white text-[#4F4135] hover:bg-[#F6F1E9] transition-colors cursor-pointer"
            title="Download Consultation Notes"
          >
            <Download className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={handleResetChat}
            className="p-2 rounded-lg border border-[#D8CABE] bg-white text-[#4F4135] hover:bg-[#F6F1E9] transition-colors cursor-pointer"
            title="Clear Consultation Canvas"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Expandable Preferences Drawer */}
      {showPreferences && (
        <div className="my-4 p-5 rounded-xl bg-white border border-[#E0D5C7] shadow-sm grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 animate-in slide-in-from-top duration-200">
          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#695B4E] mb-1.5">
              Room Category
            </label>
            <select
              value={roomType}
              onChange={(e) => setRoomType(e.target.value as RoomCategory)}
              className="w-full text-xs p-2 rounded-lg border border-[#DCD1C3] bg-[#FAF8F5] text-[#2C231C] focus:outline-hidden focus:border-[#C2A676]"
            >
              <option value="living">Living Room</option>
              <option value="dining">Dining Room</option>
              <option value="bedroom">Bedroom</option>
              <option value="office">Home Office</option>
              <option value="outdoor">Patio & Outdoor</option>
            </select>
          </div>

          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#695B4E] mb-1.5">
              Room Dimensions
            </label>
            <input
              type="text"
              value={roomDimensions}
              onChange={(e) => setRoomDimensions(e.target.value)}
              placeholder="e.g. 14 ft × 16 ft"
              className="w-full text-xs p-2 rounded-lg border border-[#DCD1C3] bg-[#FAF8F5] text-[#2C231C] focus:outline-hidden focus:border-[#C2A676]"
            />
          </div>

          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#695B4E] mb-1.5">
              Aesthetic Style
            </label>
            <select
              value={selectedStyle}
              onChange={(e) => setSelectedStyle(e.target.value as FurnitureStyle)}
              className="w-full text-xs p-2 rounded-lg border border-[#DCD1C3] bg-[#FAF8F5] text-[#2C231C] focus:outline-hidden focus:border-[#C2A676]"
            >
              <option value="Scandinavian">Scandinavian</option>
              <option value="Modern">Modern</option>
              <option value="Minimalist">Minimalist</option>
              <option value="Japandi">Japandi</option>
              <option value="Traditional">Traditional</option>
              <option value="Industrial">Industrial</option>
            </select>
          </div>

          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#695B4E] mb-1.5">
              Budget Target
            </label>
            <select
              value={budgetTier}
              onChange={(e) => setBudgetTier(e.target.value)}
              className="w-full text-xs p-2 rounded-lg border border-[#DCD1C3] bg-[#FAF8F5] text-[#2C231C] focus:outline-hidden focus:border-[#C2A676]"
            >
              <option value="Under $2,500">Under $2,500</option>
              <option value="$2,500 – $5,000">$2,500 – $5,000</option>
              <option value="$5,000 – $10,000">$5,000 – $10,000</option>
              <option value="$10,000+ (Whole Home)">$10,000+ (Whole Home)</option>
            </select>
          </div>

          <div className="flex flex-col justify-end">
            <label className="flex items-center gap-2 text-xs text-[#4F4135] cursor-pointer pt-2">
              <input
                type="checkbox"
                checked={hasPetsOrKids}
                onChange={(e) => setHasPetsOrKids(e.target.checked)}
                className="rounded border-[#C5B7A5] text-[#231B15] focus:ring-0"
              />
              <span>High-durability (Kids & Pets)</span>
            </label>
            <div className="text-[10px] text-[#8C7A68] mt-1">
              Context auto-syncs with AI
            </div>
          </div>
        </div>
      )}

      {/* Main Conversation Layout */}
      <div className="mt-4 grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left Column: Quick Starters & Catalog Inspiration (Hidden on mobile or stacked) */}
        <div className="hidden lg:block lg:col-span-1 space-y-4">
          <div className="p-4 rounded-xl bg-white border border-[#E3D9CD] shadow-2xs space-y-3">
            <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#352B22]">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#C2A676]" />
                Consultation Starters
              </span>
            </div>
            <p className="text-[11px] text-[#78695C]">
              Click any inquiry to immediately prompt Standard Furnitures AI:
            </p>
            <div className="space-y-2">
              {STARTER_PROMPTS.map((starter, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => sendMessage(starter.prompt)}
                  className="w-full text-left p-2.5 rounded-lg border border-[#ECE3D7] bg-[#FAF8F5] hover:border-[#C2A676] hover:bg-white transition-all text-xs group cursor-pointer"
                >
                  <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-wider text-[#9E8254] mb-1">
                    <span>{starter.tag}</span>
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="font-medium text-[#221B16] line-clamp-2">
                    {starter.title}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Catalog Spotlight Card */}
          <div className="p-4 rounded-xl bg-[#231B15] text-[#FAF8F5] space-y-3 border border-[#3E332A]">
            <div className="text-[10px] uppercase tracking-widest text-[#C2A676] font-semibold">
              Signature Collection
            </div>
            <h4 className="font-serif text-lg font-semibold leading-tight">
              Astrid Modular System
            </h4>
            <p className="text-xs text-[#CCC2B5] leading-relaxed">
              FSC-certified solid ash frame with dual-layer down blend and Belgian bouclé.
            </p>
            <button
              type="button"
              onClick={() => {
                const p = FURNITURE_CATALOG[0];
                sendMessage(`Can you evaluate if the Astrid Modular Sectional would fit my ${roomDimensions} living room and how to style it?`);
              }}
              className="w-full py-2 px-3 rounded-lg bg-[#C2A676] hover:bg-[#B39562] text-[#231B15] font-semibold text-xs transition-colors cursor-pointer text-center"
            >
              Analyze Fit for My Room
            </button>
          </div>
        </div>

        {/* Right 3 Columns: Active Chat Stream */}
        <div className="lg:col-span-3 flex flex-col h-[750px] max-h-[82vh] bg-white rounded-2xl border border-[#DFD4C5] shadow-xs overflow-hidden">
          {/* Active Messages Feed */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 bg-[#FCFBF8]">
            {messages.map((message) => {
              const isAssistant = message.role === 'assistant';
              return (
                <div
                  key={message.id}
                  className={`flex gap-3 sm:gap-4 ${isAssistant ? 'justify-start' : 'justify-end'}`}
                >
                  {isAssistant && (
                    <div className="w-8 h-8 rounded-full bg-[#231B15] text-[#C2A676] flex items-center justify-center shrink-0 border border-[#483B30] shadow-xs mt-1">
                      <Sparkles className="w-4 h-4" />
                    </div>
                  )}

                  <div
                    className={`max-w-[92%] sm:max-w-[85%] rounded-2xl px-5 py-4 ${
                      isAssistant
                        ? 'bg-white border border-[#E5DDD2] text-[#231B15] shadow-2xs'
                        : 'bg-[#231B15] text-[#FAF8F5]'
                    }`}
                  >
                    {/* Role Header & Timestamp */}
                    <div className="flex items-center justify-between gap-4 mb-2 pb-1.5 border-b border-black/5">
                      <div className="flex items-center gap-1.5 text-[11px] font-semibold tracking-wider uppercase">
                        {isAssistant ? (
                          <>
                            <span className="text-[#8C6D37]">Standard Furnitures AI</span>
                            <span className="text-[10px] text-[#A69788]">• Certified Interior Advisor</span>
                          </>
                        ) : (
                          <span className="text-[#CCC1B3]">Client Inquiry</span>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-[#9A8D80]">
                          {message.timestamp}
                        </span>
                        {isAssistant && (
                          <button
                            type="button"
                            onClick={() => toggleSpeech(message.content)}
                            className="p-1 rounded text-[#8F7E70] hover:text-[#231B15] transition-colors cursor-pointer"
                            title="Read response aloud"
                          >
                            {isSpeaking ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Formatted Markdown Content */}
                    <MarkdownRenderer
                      content={message.content}
                      onSelectProduct={onSelectProduct}
                      onSendReply={sendMessage}
                    />

                    {/* Clarification Rule Quick Response Chips */}
                    {message.clarificationChips && message.clarificationChips.length > 0 && (
                      <div className="mt-3.5 pt-3 border-t border-[#EAE2D7]">
                        <div className="text-[11px] font-semibold text-[#8C7A68] mb-2 flex items-center gap-1">
                          <HelpCircle className="w-3 h-3 text-[#C2A676]" />
                          <span>Quick Answer Selection:</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {message.clarificationChips.map((chip, idx) => (
                            <button
                              key={idx}
                              type="button"
                              onClick={() => sendMessage(`My space details: ${chip}`)}
                              className="text-xs px-2.5 py-1 rounded-full bg-[#FAF5EB] hover:bg-[#F2E7D3] text-[#7A6033] border border-[#DECDB7] transition-all cursor-pointer shadow-2xs"
                            >
                              {chip}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Loading Indicator */}
            {isLoading && (
              <div className="flex gap-3 justify-start items-center">
                <div className="w-8 h-8 rounded-full bg-[#231B15] text-[#C2A676] flex items-center justify-center shrink-0 border border-[#483B30] shadow-xs">
                  <Sparkles className="w-4 h-4 animate-spin" />
                </div>
                <div className="bg-white border border-[#E5DDD2] rounded-2xl px-5 py-3.5 shadow-2xs flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#C2A676] animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-2 h-2 rounded-full bg-[#C2A676] animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-2 h-2 rounded-full bg-[#C2A676] animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                  <span className="text-xs font-serif text-[#6F6052] italic">
                    Formulating spatial recommendations & material specs...
                  </span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Query Pill Bar (Mobile & Desktop) */}
          <div className="px-4 py-2 bg-[#F6F2EC] border-t border-[#E8DFD3] flex items-center gap-2 overflow-x-auto text-[11px] no-scrollbar">
            <span className="text-[#8C7A68] shrink-0 font-medium">Quick Prompts:</span>
            <button
              onClick={() => sendMessage('What dining table fits a 12x14 ft dining room?')}
              className="shrink-0 px-2.5 py-1 rounded-full bg-white border border-[#DDD3C5] hover:border-[#C2A676] text-[#4F4135] transition-colors cursor-pointer"
            >
              12×14 Dining Table Proportions
            </button>
            <button
              onClick={() => sendMessage('Which leather chair pairs best with the Astrid Sectional in Boucle?')}
              className="shrink-0 px-2.5 py-1 rounded-full bg-white border border-[#DDD3C5] hover:border-[#C2A676] text-[#4F4135] transition-colors cursor-pointer"
            >
              Bouclé + Leather Pairing
            </button>
            <button
              onClick={() => sendMessage('How does your 100-Night In-Home Trial and return process work?')}
              className="shrink-0 px-2.5 py-1 rounded-full bg-white border border-[#DDD3C5] hover:border-[#C2A676] text-[#4F4135] transition-colors cursor-pointer"
            >
              100-Night Trial Details
            </button>
            <button
              onClick={() => sendMessage('Compare the Vesterbro Lounge Chair vs Ravello Club Chair in terms of seat depth, material, and footprint.')}
              className="shrink-0 px-2.5 py-1 rounded-full bg-white border border-[#DDD3C5] hover:border-[#C2A676] text-[#4F4135] transition-colors cursor-pointer"
            >
              Chair Comparison Table
            </button>
          </div>

          {/* User Input Bar */}
          <div className="p-4 bg-white border-t border-[#E8DFD3]">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2"
            >
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about dimensions, pairing pieces, timber finishes, room plans, or store policies..."
                className="flex-1 text-xs sm:text-sm py-3 px-4 rounded-xl border border-[#D7CCBE] bg-[#FAF8F5] text-[#1E1813] placeholder-[#8F8173] focus:outline-hidden focus:border-[#231B15] focus:bg-white transition-all shadow-inner"
                disabled={isLoading}
              />

              <button
                type="submit"
                disabled={!inputValue.trim() || isLoading}
                className="p-3 sm:px-5 sm:py-3 rounded-xl bg-[#231B15] text-[#FAF8F5] text-xs font-semibold hover:bg-[#3E3024] disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center gap-1.5 cursor-pointer shadow-xs"
              >
                <Send className="w-4 h-4 text-[#C2A676]" />
                <span className="hidden sm:inline">Consult</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
