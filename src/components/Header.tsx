import React from 'react';
import { Sparkles, Compass, ShieldCheck, Layers, Package, PhoneCall, Heart } from 'lucide-react';

interface HeaderProps {
  activeTab: 'showroom' | 'advisor' | 'planner' | 'care';
  setActiveTab: (tab: 'showroom' | 'advisor' | 'planner' | 'care') => void;
  moodboardCount: number;
  onOpenMoodboard: () => void;
  onOpenSwatches: () => void;
  onTriggerQuickAI: () => void;
}

export function Header({
  activeTab,
  setActiveTab,
  moodboardCount,
  onOpenMoodboard,
  onOpenSwatches,
  onTriggerQuickAI,
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E8DFD3]">
      {/* Top Value Proposition Bar */}
      <div className="bg-[#231B15] text-[#EFE9DF] text-[11px] font-medium tracking-wide py-1.5 px-4 text-center flex items-center justify-between">
        <div className="hidden md:flex items-center gap-4 text-[#C9BFB2]">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-[#C2A676]" />
            10-Year Craftsmanship Guarantee
          </span>
          <span className="text-[#655546]">•</span>
          <span>100-Night In-Home Trial</span>
        </div>
        <div className="mx-auto md:mx-0 flex items-center gap-1.5">
          <span className="text-[#C2A676] font-semibold">Complimentary White-Glove Delivery</span>
          <span>on all orders over $2,000</span>
        </div>
        <div className="hidden lg:flex items-center gap-4 text-[#C9BFB2]">
          <button
            onClick={onOpenSwatches}
            className="hover:text-white transition-colors underline underline-offset-2 decoration-[#C2A676]/60 cursor-pointer"
          >
            Order Free Swatches (5 Pack)
          </button>
          <span className="text-[#655546]">•</span>
          <span className="flex items-center gap-1">
            <PhoneCall className="w-3 h-3 text-[#C2A676]" />
            NYC • London • Milan • Tokyo
          </span>
        </div>
      </div>

      {/* Main Navigation Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand Identity */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('showroom')}>
            <div className="w-10 h-10 rounded-sm bg-[#231B15] flex items-center justify-center text-[#E5D2B4] font-serif font-bold text-xl tracking-tighter shadow-xs border border-[#483B30]">
              SF
            </div>
            <div>
              <div className="font-serif text-xl sm:text-2xl font-semibold tracking-wider text-[#1C1611] leading-none">
                STANDARD FURNITURES
              </div>
              <div className="text-[10px] tracking-[0.25em] text-[#8C7A68] uppercase font-sans mt-0.5">
                New York • Modern Living • Est. 1984
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <button
              onClick={() => setActiveTab('showroom')}
              className={`px-3.5 py-2 rounded-full text-xs font-medium tracking-wide transition-all cursor-pointer ${
                activeTab === 'showroom'
                  ? 'bg-[#231B15] text-[#FAF8F5] shadow-xs'
                  : 'text-[#5A4E42] hover:text-[#1C1611] hover:bg-[#F2ECE2]'
              }`}
            >
              Showroom Catalog
            </button>

            <button
              onClick={() => setActiveTab('advisor')}
              className={`px-3.5 py-2 rounded-full text-xs font-medium tracking-wide transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'advisor'
                  ? 'bg-[#231B15] text-[#FAF8F5] shadow-xs'
                  : 'text-[#8A6C35] bg-[#F7F1E6] hover:bg-[#EFE5D4] border border-[#DFCBB0]'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-[#C2A676] animate-pulse" />
              <span>Standard Furnitures AI</span>
              <span className="text-[9px] bg-[#C2A676] text-[#231B15] font-bold px-1.5 py-0.2 rounded-full uppercase tracking-wider ml-0.5">
                Advisor
              </span>
            </button>

            <button
              onClick={() => setActiveTab('planner')}
              className={`px-3.5 py-2 rounded-full text-xs font-medium tracking-wide transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'planner'
                  ? 'bg-[#231B15] text-[#FAF8F5] shadow-xs'
                  : 'text-[#5A4E42] hover:text-[#1C1611] hover:bg-[#F2ECE2]'
              }`}
            >
              <Compass className="w-3.5 h-3.5 text-[#8C7A68]" />
              Spatial Planner
            </button>

            <button
              onClick={() => setActiveTab('care')}
              className={`px-3.5 py-2 rounded-full text-xs font-medium tracking-wide transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'care'
                  ? 'bg-[#231B15] text-[#FAF8F5] shadow-xs'
                  : 'text-[#5A4E42] hover:text-[#1C1611] hover:bg-[#F2ECE2]'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#8C7A68]" />
              Care & Store Policies
            </button>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={onTriggerQuickAI}
              className="md:hidden flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#231B15] text-[#FAF8F5] cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#C2A676]" />
              <span>AI Advisor</span>
            </button>

            <button
              type="button"
              onClick={onOpenMoodboard}
              className="relative p-2.5 rounded-full border border-[#DED4C7] bg-[#F9F6F0] hover:bg-[#EFE9DF] text-[#42372E] transition-all cursor-pointer"
              title="Saved Consultation Moodboard"
            >
              <Heart className="w-4 h-4 text-[#8C7558]" />
              {moodboardCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#231B15] text-[#FAF8F5] text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border-2 border-[#FAF8F5]">
                  {moodboardCount}
                </span>
              )}
            </button>

            <button
              type="button"
              onClick={onOpenSwatches}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-[#D5C7B4] bg-white text-xs font-medium text-[#4B3E32] hover:bg-[#F8F4EC] transition-all cursor-pointer shadow-2xs"
            >
              <Layers className="w-3.5 h-3.5 text-[#C2A676]" />
              <span>Free Swatches</span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Strip */}
        <div className="md:hidden flex items-center justify-around py-2 border-t border-[#EDE5DA] text-xs font-medium text-[#5E5144]">
          <button
            onClick={() => setActiveTab('showroom')}
            className={`py-1 px-2 rounded ${activeTab === 'showroom' ? 'text-[#1C1611] font-bold border-b-2 border-[#1C1611]' : ''}`}
          >
            Catalog
          </button>
          <button
            onClick={() => setActiveTab('advisor')}
            className={`py-1 px-2 rounded flex items-center gap-1 ${
              activeTab === 'advisor' ? 'text-[#9E8254] font-bold border-b-2 border-[#9E8254]' : ''
            }`}
          >
            <Sparkles className="w-3 h-3 text-[#C2A676]" />
            AI Studio
          </button>
          <button
            onClick={() => setActiveTab('planner')}
            className={`py-1 px-2 rounded ${activeTab === 'planner' ? 'text-[#1C1611] font-bold border-b-2 border-[#1C1611]' : ''}`}
          >
            Dimensions
          </button>
          <button
            onClick={() => setActiveTab('care')}
            className={`py-1 px-2 rounded ${activeTab === 'care' ? 'text-[#1C1611] font-bold border-b-2 border-[#1C1611]' : ''}`}
          >
            Care Guide
          </button>
        </div>
      </div>
    </header>
  );
}
