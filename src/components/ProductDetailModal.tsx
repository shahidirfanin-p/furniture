import React, { useState } from 'react';
import { X, Sparkles, Heart, ShieldCheck, Truck, RotateCcw, Ruler, Check, Info, Box } from 'lucide-react';
import { FurnitureProduct } from '../types/furniture';

interface ProductDetailModalProps {
  product: FurnitureProduct | null;
  onClose: () => void;
  onConsultAI: (product: FurnitureProduct, customQuery?: string) => void;
  isInMoodboard: boolean;
  onToggleMoodboard: (product: FurnitureProduct) => void;
  onRequestSwatches: (product: FurnitureProduct) => void;
}

export function ProductDetailModal({
  product,
  onClose,
  onConsultAI,
  isInMoodboard,
  onToggleMoodboard,
  onRequestSwatches,
}: ProductDetailModalProps) {
  if (!product) return null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedFinish, setSelectedFinish] = useState(product.finishOptions[0]);

  const allImages = [product.imageUrl, ...(product.additionalImages || [])];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#FAF8F5] rounded-2xl shadow-2xl border border-[#DECBB4] overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E8DFD3] bg-white sticky top-0 z-20">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-[#231B15] text-[#F3EFE9]">
              {product.category}
            </span>
            <span className="text-xs text-[#827162]">
              {product.style} Collection
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => onToggleMoodboard(product)}
              className={`p-2 rounded-full border transition-colors cursor-pointer ${
                isInMoodboard
                  ? 'bg-[#C2A676] text-[#231B15] border-[#C2A676]'
                  : 'border-[#D9CFC2] text-[#4F4236] hover:bg-[#F2ECE2]'
              }`}
              title={isInMoodboard ? 'In your moodboard' : 'Save to moodboard'}
            >
              <Heart className={`w-4 h-4 ${isInMoodboard ? 'fill-current' : ''}`} />
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-full border border-[#D9CFC2] text-[#4F4236] hover:bg-[#F2ECE2] transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto p-6 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left: Imagery Gallery */}
            <div className="space-y-3">
              <div className="aspect-4/3 rounded-xl overflow-hidden bg-[#ECE4D8] border border-[#DDD3C5]">
                <img
                  src={allImages[activeImageIndex]}
                  alt={product.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {allImages.length > 1 && (
                <div className="flex items-center gap-2">
                  {allImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                        activeImageIndex === idx ? 'border-[#C2A676] shadow-xs' : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}

              {/* AI Quick Prompts for this piece */}
              <div className="mt-4 p-4 rounded-xl bg-[#F4EDE2] border border-[#DECDB8] space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#705527]">
                  <Sparkles className="w-3.5 h-3.5 text-[#C2A676]" />
                  <span>Ask Standard Furnitures AI about this piece:</span>
                </div>
                <div className="grid grid-cols-1 gap-1.5">
                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      onConsultAI(
                        product,
                        `Does the ${product.name} pair well with warm wood floors and what rug size would you suggest?`
                      );
                    }}
                    className="text-left text-xs px-2.5 py-1.5 rounded-lg bg-white/80 hover:bg-white text-[#382E25] border border-[#DFD3C2] transition-colors cursor-pointer flex items-center justify-between"
                  >
                    <span>"What rug size and accent pieces pair with this?"</span>
                    <span className="text-[#9E8254] font-medium">Ask →</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      onConsultAI(
                        product,
                        `How do I maintain and protect the ${product.primaryMaterial} on the ${product.name}?`
                      );
                    }}
                    className="text-left text-xs px-2.5 py-1.5 rounded-lg bg-white/80 hover:bg-white text-[#382E25] border border-[#DFD3C2] transition-colors cursor-pointer flex items-center justify-between"
                  >
                    <span>"Care instructions & durability for {product.primaryMaterial}?"</span>
                    <span className="text-[#9E8254] font-medium">Ask →</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      onConsultAI(
                        product,
                        `What are the delivery lead times, doorways clearance, and return policies for the ${product.name}?`
                      );
                    }}
                    className="text-left text-xs px-2.5 py-1.5 rounded-lg bg-white/80 hover:bg-white text-[#382E25] border border-[#DFD3C2] transition-colors cursor-pointer flex items-center justify-between"
                  >
                    <span>"Delivery timeline and doorway clearance rules?"</span>
                    <span className="text-[#9E8254] font-medium">Ask →</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right: Specifications & Craftsmanship */}
            <div className="space-y-6">
              <div>
                <div className="flex items-baseline justify-between">
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1611]">
                    {product.name}
                  </h2>
                  <div className="font-serif text-2xl font-bold text-[#1C1611]">
                    ${product.price.toLocaleString()}
                  </div>
                </div>
                <p className="text-sm text-[#736354] mt-1 font-sans leading-relaxed">
                  {product.tagline}
                </p>
              </div>

              {/* Finish Options & Swatches */}
              <div className="space-y-2">
                <div className="text-xs font-semibold text-[#3C3229] uppercase tracking-wider flex items-center justify-between">
                  <span>Selected Finish: <strong className="text-[#1A140F] normal-case">{selectedFinish}</strong></span>
                  <button
                    onClick={() => onRequestSwatches(product)}
                    className="text-[#9E8254] hover:underline normal-case text-xs font-normal cursor-pointer"
                  >
                    Request Free Swatches
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.finishOptions.map((finish) => {
                    const swatch = product.swatches.find((s) => s.name === finish) || product.swatches[0];
                    const isSelected = selectedFinish === finish;
                    return (
                      <button
                        key={finish}
                        onClick={() => setSelectedFinish(finish)}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-medium transition-all cursor-pointer ${
                          isSelected
                            ? 'border-[#231B15] bg-[#231B15] text-[#FAF8F5] shadow-xs'
                            : 'border-[#DDD2C4] bg-white text-[#4A3D31] hover:bg-[#F8F4ED]'
                        }`}
                      >
                        <span
                          className="w-3.5 h-3.5 rounded-full border border-black/20"
                          style={{ backgroundColor: swatch?.colorHex || '#ccc' }}
                        />
                        <span>{finish}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Dimensions Grid & Diagram Spec */}
              <div className="p-4 rounded-xl bg-white border border-[#E4DBD0] space-y-3">
                <div className="flex items-center justify-between text-xs font-semibold text-[#281F17] uppercase tracking-wider">
                  <span className="flex items-center gap-1.5">
                    <Ruler className="w-3.5 h-3.5 text-[#C2A676]" />
                    Exact Architectural Dimensions
                  </span>
                  <span className="font-mono text-[#8C7A68]">Inches</span>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="p-2 rounded bg-[#FAF7F2] border border-[#EDE5DA]">
                    <div className="text-[10px] text-[#8C7A68] uppercase font-medium">Width</div>
                    <div className="font-serif text-lg font-bold text-[#1C1611]">{product.dimensions.width}"</div>
                  </div>
                  <div className="p-2 rounded bg-[#FAF7F2] border border-[#EDE5DA]">
                    <div className="text-[10px] text-[#8C7A68] uppercase font-medium">Depth</div>
                    <div className="font-serif text-lg font-bold text-[#1C1611]">{product.dimensions.depth}"</div>
                  </div>
                  <div className="p-2 rounded bg-[#FAF7F2] border border-[#EDE5DA]">
                    <div className="text-[10px] text-[#8C7A68] uppercase font-medium">Height</div>
                    <div className="font-serif text-lg font-bold text-[#1C1611]">{product.dimensions.height}"</div>
                  </div>
                </div>

                {product.dimensions.seatHeight && (
                  <div className="text-xs text-[#5D5043] flex items-center justify-between pt-1 border-t border-[#F0EAE1]">
                    <span>Seat Height: <strong>{product.dimensions.seatHeight}"</strong></span>
                    {product.dimensions.clearance && (
                      <span>Under-Clearance: <strong>{product.dimensions.clearance}"</strong></span>
                    )}
                  </div>
                )}

                <div className="p-2.5 rounded bg-[#FAF5EB] border border-[#E9DEC9] text-xs text-[#755928] flex items-start gap-2">
                  <Info className="w-3.5 h-3.5 text-[#C2A676] shrink-0 mt-0.5" />
                  <span>{product.roomFitRecommendation}</span>
                </div>
              </div>

              {/* Description */}
              <div className="text-sm text-[#453B32] leading-relaxed">
                {product.description}
              </div>

              {/* Craftsmanship Highlights */}
              <div className="space-y-2">
                <div className="text-xs font-semibold text-[#281F17] uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C2A676]" />
                  Heirloom Craftsmanship Standards
                </div>
                <ul className="space-y-1.5">
                  {product.craftsmanshipHighlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-[#574A3D]">
                      <Check className="w-3.5 h-3.5 text-[#C2A676] shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Guarantee & Delivery Trust Badges */}
              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#EAE2D7] text-xs text-[#625345]">
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-[#8C7247]" />
                  <span>White-Glove Included ($2k+)</span>
                </div>
                <div className="flex items-center gap-2">
                  <RotateCcw className="w-4 h-4 text-[#8C7247]" />
                  <span>100-Night In-Home Trial</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 border-t border-[#E8DFD3] bg-white flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-[#706051]">
            <span className="font-semibold text-[#211A14]">Lead Time:</span> {product.leadTime}
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => {
                onClose();
                onConsultAI(product);
              }}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#231B15] text-[#FAF8F5] text-xs font-semibold hover:bg-[#3D3025] transition-colors cursor-pointer shadow-xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#C2A676]" />
              <span>Full AI Interior Consultation</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
