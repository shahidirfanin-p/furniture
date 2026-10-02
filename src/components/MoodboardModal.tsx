import React from 'react';
import { X, Heart, Trash2, Sparkles, Download, ArrowRight } from 'lucide-react';
import { FurnitureProduct } from '../types/furniture';

interface MoodboardModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: FurnitureProduct[];
  onRemoveProduct: (id: string) => void;
  onOpenDetails: (product: FurnitureProduct) => void;
  onConsultAIAboutMoodboard: (products: FurnitureProduct[]) => void;
}

export function MoodboardModal({
  isOpen,
  onClose,
  products,
  onRemoveProduct,
  onOpenDetails,
  onConsultAIAboutMoodboard,
}: MoodboardModalProps) {
  if (!isOpen) return null;

  const totalEstimate = products.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-[#FAF8F5] rounded-2xl shadow-2xl border border-[#DECBB4] overflow-hidden my-auto max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E8DFD3] bg-white">
          <div className="flex items-center gap-2">
            <Heart className="w-4 h-4 text-[#C2A676] fill-current" />
            <h2 className="font-serif text-xl font-bold text-[#1C1611]">
              Consultation Moodboard ({products.length})
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full border border-[#D9CFC2] text-[#4F4236] hover:bg-[#F2ECE2] transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {products.length === 0 ? (
            <div className="text-center py-12 space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#FAF5EB] text-[#C2A676] flex items-center justify-center mx-auto">
                <Heart className="w-6 h-6" />
              </div>
              <p className="font-serif text-lg text-[#231B15]">
                Your consultation moodboard is currently empty
              </p>
              <p className="text-xs text-[#7A6B5D] max-w-sm mx-auto">
                Browse our collections or consult Standard Furnitures AI to curate your personalized space concept.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="p-3.5 rounded-xl bg-white border border-[#E3D9CC] flex items-center gap-3 relative group"
                  >
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-16 h-16 rounded-lg object-cover bg-[#F2EDE4] shrink-0"
                    />
                    <div className="min-w-0 flex-1">
                      <div className="font-serif text-sm font-bold text-[#1F1813] truncate">
                        {product.name}
                      </div>
                      <div className="text-[11px] text-[#7A6E63]">
                        {product.style} • {product.primaryMaterial.split('&')[0].trim()}
                      </div>
                      <div className="font-serif text-xs font-bold text-[#201913] mt-1">
                        ${product.price.toLocaleString()}
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5 shrink-0">
                      <button
                        type="button"
                        onClick={() => onOpenDetails(product)}
                        className="text-[11px] text-[#9E8254] font-medium hover:underline cursor-pointer"
                      >
                        Inspect
                      </button>
                      <button
                        type="button"
                        onClick={() => onRemoveProduct(product.id)}
                        className="p-1 rounded text-[#998777] hover:text-[#912B2B] transition-colors cursor-pointer"
                        title="Remove"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Summary Metrics */}
              <div className="p-4 rounded-xl bg-[#FAF5EB] border border-[#E8DAC6] flex items-center justify-between">
                <div>
                  <div className="text-[11px] text-[#755D33] uppercase font-semibold">
                    Curated Collection Total
                  </div>
                  <div className="font-serif text-2xl font-bold text-[#231B15]">
                    ${totalEstimate.toLocaleString()}
                  </div>
                </div>
                <div className="text-right text-[11px] text-[#755D33]">
                  <div>White-Glove Delivery: <strong>Complimentary</strong></div>
                  <div>100-Night In-Home Trial: <strong>Included</strong></div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        {products.length > 0 && (
          <div className="p-4 sm:p-6 border-t border-[#E8DFD3] bg-white flex flex-col sm:flex-row items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => {
                onClose();
                onConsultAIAboutMoodboard(products);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#231B15] text-[#FAF8F5] text-xs font-semibold hover:bg-[#3D3025] transition-colors cursor-pointer shadow-xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#C2A676]" />
              <span>Review Harmonization with AI</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2 rounded-xl border border-[#D5C7B4] text-xs font-medium text-[#4D3F33] hover:bg-[#F8F4EC] transition-colors cursor-pointer"
            >
              Continue Browsing
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
