import React from 'react';
import { Sparkles, Maximize2, Heart, Check, Clock } from 'lucide-react';
import { FurnitureProduct } from '../types/furniture';

interface ProductCardProps {
  product: FurnitureProduct;
  onOpenDetails: (product: FurnitureProduct) => void;
  onConsultAI: (product: FurnitureProduct) => void;
  isInMoodboard: boolean;
  onToggleMoodboard: (product: FurnitureProduct) => void;
}

export function ProductCard({
  product,
  onOpenDetails,
  onConsultAI,
  isInMoodboard,
  onToggleMoodboard,
}: ProductCardProps) {
  return (
    <div className="group relative flex flex-col bg-white rounded-xl border border-[#E8E1D5] overflow-hidden hover:border-[#C2A676] hover:shadow-md transition-all duration-300">
      {/* Image Container */}
      <div className="relative aspect-4/3 overflow-hidden bg-[#F2EDE4]">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-700 ease-out"
          loading="lazy"
        />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
          <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.8 rounded-sm bg-[#231B15]/90 text-white backdrop-blur-xs">
            {product.style}
          </span>
          {product.featured && (
            <span className="text-[10px] font-medium tracking-wider uppercase px-2 py-0.8 rounded-sm bg-[#C2A676] text-[#231B15] font-semibold">
              Bestseller
            </span>
          )}
        </div>

        {/* Moodboard / Favorite Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onToggleMoodboard(product);
          }}
          className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-all z-10 cursor-pointer ${
            isInMoodboard
              ? 'bg-[#C2A676] text-[#231B15] shadow-xs'
              : 'bg-white/85 text-[#4A3E33] hover:bg-white hover:text-[#1C1611]'
          }`}
          title={isInMoodboard ? 'Remove from moodboard' : 'Add to moodboard'}
        >
          <Heart className={`w-3.5 h-3.5 ${isInMoodboard ? 'fill-current' : ''}`} />
        </button>

        {/* Hover Quick View Trigger */}
        <button
          type="button"
          onClick={() => onOpenDetails(product)}
          className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer"
        >
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/95 text-xs font-medium text-[#231B15] shadow-sm transform translate-y-2 group-hover:translate-y-0 transition-transform">
            <Maximize2 className="w-3.5 h-3.5" />
            Quick Inspect
          </span>
        </button>
      </div>

      {/* Product Content Details */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Swatch Previews */}
          <div className="flex items-center gap-1.5 mb-2">
            {product.swatches.map((swatch, idx) => (
              <span
                key={idx}
                className="w-3.5 h-3.5 rounded-full border border-black/15 shadow-2xs"
                style={{ backgroundColor: swatch.colorHex }}
                title={`${swatch.name} (${swatch.material})`}
              />
            ))}
            <span className="text-[11px] text-[#8C7D70] ml-1">
              {product.finishOptions.length} finishes
            </span>
          </div>

          {/* Title & Tagline */}
          <h3
            onClick={() => onOpenDetails(product)}
            className="font-serif text-lg font-semibold text-[#1F1914] group-hover:text-[#8C6D37] transition-colors cursor-pointer"
          >
            {product.name}
          </h3>
          <p className="text-xs text-[#6F6255] line-clamp-2 mt-1 leading-relaxed">
            {product.tagline}
          </p>

          {/* Dimensions Badge */}
          <div className="mt-3 py-1.5 px-2.5 rounded bg-[#FAF6F0] border border-[#ECE4D8] flex items-center justify-between text-[11px] text-[#695B4E]">
            <span className="font-mono">
              {product.dimensions.width}"W × {product.dimensions.depth}"D × {product.dimensions.height}"H
            </span>
            <span className="text-[10px] text-[#8F7F70]">{product.category}</span>
          </div>
        </div>

        {/* Footer: Price & AI Consultation Prompt */}
        <div className="mt-4 pt-3 border-t border-[#EFE8DD] flex items-center justify-between gap-2">
          <div>
            <div className="font-serif text-base font-bold text-[#1C1611]">
              ${product.price.toLocaleString()}
            </div>
            <div className="text-[10px] text-[#7A6C5E] flex items-center gap-1">
              <Clock className="w-2.5 h-2.5 text-[#A58E6F]" />
              {product.leadTime.split('(')[0].trim()}
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => onConsultAI(product)}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#FAF4EA] hover:bg-[#F2E7D3] border border-[#E1D1BA] text-xs font-semibold text-[#826433] transition-colors cursor-pointer shadow-2xs"
              title="Ask AI if this matches your room"
            >
              <Sparkles className="w-3 h-3 text-[#C2A676]" />
              <span>Ask AI</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
