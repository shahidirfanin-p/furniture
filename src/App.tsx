import React, { useState } from 'react';
import { Header } from './components/Header';
import { Showroom } from './components/Showroom';
import { AIConsultant } from './components/AIConsultant';
import { RoomPlanner } from './components/RoomPlanner';
import { CareAndPolicies } from './components/CareAndPolicies';
import { ProductDetailModal } from './components/ProductDetailModal';
import { MoodboardModal } from './components/MoodboardModal';
import { FreeSwatchesModal } from './components/FreeSwatchesModal';
import { AIConciergeDrawer } from './components/AIConciergeDrawer';
import { FurnitureProduct } from './types/furniture';
import { FURNITURE_CATALOG } from './data/furnitureData';
import { Sparkles, ShieldCheck, Truck, RotateCcw, Heart, Mail } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'showroom' | 'advisor' | 'planner' | 'care'>('showroom');
  const [selectedProduct, setSelectedProduct] = useState<FurnitureProduct | null>(null);
  const [aiContextProduct, setAiContextProduct] = useState<FurnitureProduct | null>(null);
  const [moodboard, setMoodboard] = useState<FurnitureProduct[]>([]);
  const [isMoodboardOpen, setIsMoodboardOpen] = useState(false);
  const [isSwatchesOpen, setIsSwatchesOpen] = useState(false);
  const [isConciergeOpen, setIsConciergeOpen] = useState(false);

  // Toggle moodboard
  const handleToggleMoodboard = (product: FurnitureProduct) => {
    setMoodboard((prev) => {
      const exists = prev.some((p) => p.id === product.id);
      if (exists) {
        return prev.filter((p) => p.id !== product.id);
      } else {
        return [...prev, product];
      }
    });
  };

  const handleRemoveFromMoodboard = (id: string) => {
    setMoodboard((prev) => prev.filter((p) => p.id !== id));
  };

  // Switch to AI consultation with specific product context
  const handleConsultAIAboutProduct = (product: FurnitureProduct, customQuery?: string) => {
    setAiContextProduct(product);
    setActiveTab('advisor');
  };

  // Start full AI consultation from query
  const handleStartConsultationWithPrompt = (prompt?: string) => {
    setActiveTab('advisor');
  };

  const handleConsultAboutMoodboard = (products: FurnitureProduct[]) => {
    setIsMoodboardOpen(false);
    setActiveTab('advisor');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1E1B18] font-sans">
      {/* Brand Header & Navigation */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        moodboardCount={moodboard.length}
        onOpenMoodboard={() => setIsMoodboardOpen(true)}
        onOpenSwatches={() => setIsSwatchesOpen(true)}
        onTriggerQuickAI={() => setIsConciergeOpen(true)}
      />

      {/* Main Tab Views */}
      <main className="flex-1">
        {activeTab === 'showroom' && (
          <Showroom
            onOpenDetails={(p) => setSelectedProduct(p)}
            onConsultAI={handleConsultAIAboutProduct}
            onStartFullConsultation={handleStartConsultationWithPrompt}
            moodboardIds={moodboard.map((p) => p.id)}
            onToggleMoodboard={handleToggleMoodboard}
          />
        )}

        {activeTab === 'advisor' && (
          <AIConsultant
            initialProductContext={aiContextProduct}
            onClearProductContext={() => setAiContextProduct(null)}
            onSelectProduct={(p) => setSelectedProduct(p)}
            onAddToMoodboard={handleToggleMoodboard}
          />
        )}

        {activeTab === 'planner' && (
          <RoomPlanner
            onConsultAIWithPlan={(prompt) => {
              setActiveTab('advisor');
            }}
          />
        )}

        {activeTab === 'care' && (
          <CareAndPolicies
            onConsultAIAboutPolicy={(query) => {
              setActiveTab('advisor');
            }}
            onOpenSwatches={() => setIsSwatchesOpen(true)}
          />
        )}
      </main>

      {/* Floating AI Concierge Summoner Button (Shown on non-advisor tabs) */}
      {activeTab !== 'advisor' && !isConciergeOpen && (
        <button
          type="button"
          onClick={() => setIsConciergeOpen(true)}
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#231B15] text-[#FAF8F5] shadow-xl hover:bg-[#3B2E24] hover:scale-103 transition-all cursor-pointer border border-[#6B5A4B]"
          title="Open AI Concierge"
        >
          <div className="w-6 h-6 rounded-full bg-[#C2A676] text-[#231B15] flex items-center justify-center font-bold">
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <div className="text-left hidden sm:block">
            <div className="text-xs font-semibold leading-none">Standard Furnitures AI</div>
            <div className="text-[10px] text-[#C0B3A3] mt-0.5">Ask questions & dimensions</div>
          </div>
        </button>
      )}

      {/* Floating AI Concierge Mini Drawer */}
      <AIConciergeDrawer
        isOpen={isConciergeOpen}
        onClose={() => setIsConciergeOpen(false)}
        onExpandToFullStudio={() => {
          setIsConciergeOpen(false);
          setActiveTab('advisor');
        }}
        onSelectProduct={(p) => setSelectedProduct(p)}
      />

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onConsultAI={handleConsultAIAboutProduct}
        isInMoodboard={selectedProduct ? moodboard.some((p) => p.id === selectedProduct.id) : false}
        onToggleMoodboard={handleToggleMoodboard}
        onRequestSwatches={() => {
          setSelectedProduct(null);
          setIsSwatchesOpen(true);
        }}
      />

      {/* Consultation Moodboard Modal */}
      <MoodboardModal
        isOpen={isMoodboardOpen}
        onClose={() => setIsMoodboardOpen(false)}
        products={moodboard}
        onRemoveProduct={handleRemoveFromMoodboard}
        onOpenDetails={(p) => {
          setIsMoodboardOpen(false);
          setSelectedProduct(p);
        }}
        onConsultAIAboutMoodboard={handleConsultAboutMoodboard}
      />

      {/* Free Swatches Modal */}
      <FreeSwatchesModal
        isOpen={isSwatchesOpen}
        onClose={() => setIsSwatchesOpen(false)}
      />

      {/* Editorial Luxury Brand Footer */}
      <footer className="bg-[#1C1611] text-[#EFEBE4] border-t border-[#33271E] mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            {/* Column 1: Brand Mark */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-sm bg-[#FAF8F5] text-[#1C1611] flex items-center justify-center font-serif font-bold text-lg">
                  SF
                </div>
                <div>
                  <div className="font-serif text-xl font-bold tracking-wider text-[#FAF8F5]">
                    STANDARD FURNITURES
                  </div>
                  <div className="text-[9px] tracking-[0.25em] text-[#A69788] uppercase font-sans">
                    Handcrafted • Architectural • Sustainable
                  </div>
                </div>
              </div>
              <p className="text-xs text-[#BCB0A3] max-w-sm leading-relaxed">
                Founded on the premise that modern living spaces require quiet contemplation, enduring joinery, and natural materials that deepen in beauty over decades.
              </p>
              <div className="pt-2 flex items-center gap-4 text-xs text-[#D8C4A7]">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-[#C2A676]" /> 10-Year Guarantee
                </span>
                <span className="flex items-center gap-1">
                  <RotateCcw className="w-4 h-4 text-[#C2A676]" /> 100-Night Trial
                </span>
              </div>
            </div>

            {/* Column 2: Spaces */}
            <div className="space-y-3">
              <div className="text-xs font-semibold uppercase tracking-widest text-[#C2A676]">
                Spaces
              </div>
              <ul className="space-y-2 text-xs text-[#CCC0B3]">
                <li><button onClick={() => setActiveTab('showroom')} className="hover:text-white transition-colors cursor-pointer">Living Room Modulars</button></li>
                <li><button onClick={() => setActiveTab('showroom')} className="hover:text-white transition-colors cursor-pointer">Extendable Dining Tables</button></li>
                <li><button onClick={() => setActiveTab('showroom')} className="hover:text-white transition-colors cursor-pointer">Floating Bedroom Sets</button></li>
                <li><button onClick={() => setActiveTab('showroom')} className="hover:text-white transition-colors cursor-pointer">Solid Walnut Standing Desks</button></li>
                <li><button onClick={() => setActiveTab('showroom')} className="hover:text-white transition-colors cursor-pointer">Sustainable Teak Outdoor</button></li>
              </ul>
            </div>

            {/* Column 3: AI Consultation & Tools */}
            <div className="space-y-3">
              <div className="text-xs font-semibold uppercase tracking-widest text-[#C2A676]">
                Consultation Studio
              </div>
              <ul className="space-y-2 text-xs text-[#CCC0B3]">
                <li><button onClick={() => setActiveTab('advisor')} className="hover:text-white transition-colors cursor-pointer flex items-center gap-1"><Sparkles className="w-3 h-3 text-[#C2A676]" /> Standard Furnitures AI</button></li>
                <li><button onClick={() => setActiveTab('planner')} className="hover:text-white transition-colors cursor-pointer">Room Dimension Calculator</button></li>
                <li><button onClick={() => setActiveTab('care')} className="hover:text-white transition-colors cursor-pointer">Hardwood & Leather Care</button></li>
                <li><button onClick={() => setIsSwatchesOpen(true)} className="hover:text-white transition-colors cursor-pointer">Order 5 Free Swatches</button></li>
                <li><button onClick={() => setIsMoodboardOpen(true)} className="hover:text-white transition-colors cursor-pointer">Design Moodboard</button></li>
              </ul>
            </div>

            {/* Column 4: Flagship Showrooms */}
            <div className="space-y-3">
              <div className="text-xs font-semibold uppercase tracking-widest text-[#C2A676]">
                Flagship Stores
              </div>
              <div className="text-xs text-[#CCC0B3] space-y-2 leading-relaxed">
                <div>
                  <strong className="text-white">New York (SoHo)</strong>
                  <div className="text-[#9E9081]">142 Mercer Street</div>
                </div>
                <div>
                  <strong className="text-white">London (Mayfair)</strong>
                  <div className="text-[#9E9081]">28 Mount Street</div>
                </div>
                <div>
                  <strong className="text-white">Milan (Montenapoleone)</strong>
                  <div className="text-[#9E9081]">Via Santo Spirito 14</div>
                </div>
                <div>
                  <strong className="text-white">Tokyo (Ginza)</strong>
                  <div className="text-[#9E9081]">6-10-1 Ginza, Chuo-ku</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-[#2D221A] flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#8C7D6F] gap-4">
            <div>
              © {new Date().getFullYear()} Standard Furnitures Retail Inc. All rights reserved. FSC® Certified Forests (C132456).
            </div>
            <div className="flex items-center gap-4">
              <span>White-Glove Delivery Guaranteed</span>
              <span>•</span>
              <span>Zero-VOC Hand Finishes</span>
              <span>•</span>
              <span>OEKO-TEX Standard 100</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
