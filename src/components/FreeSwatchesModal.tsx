import React, { useState } from 'react';
import { X, Layers, Check, Sparkles } from 'lucide-react';
import { FurnitureProduct } from '../types/furniture';
import { FURNITURE_CATALOG } from '../data/furnitureData';

interface FreeSwatchesModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedProduct?: FurnitureProduct | null;
}

const AVAILABLE_SWATCHES = [
  { id: 'walnut-solid', name: 'Appalachian American Walnut', type: 'Solid Hardwood', hex: '#523C2C' },
  { id: 'white-oak-solid', name: 'Natural White Oak', type: 'Solid Hardwood', hex: '#D2C3B0' },
  { id: 'ebonized-oak', name: 'Ebonized Black Oak', type: 'Solid Hardwood', hex: '#212121' },
  { id: 'boucle-alabaster', name: 'Alabaster Wool Bouclé', type: 'Performance Fabric', hex: '#F0ECE1' },
  { id: 'leather-cognac', name: 'Cognac Saddle Italian Leather', type: 'Full-Grain Leather', hex: '#8C5230' },
  { id: 'leather-espresso', name: 'Espresso Black Glove Leather', type: 'Full-Grain Leather', hex: '#1E1D1C' },
  { id: 'linen-oatmeal', name: 'Belgian Washed Linen', type: 'Natural Textile', hex: '#D5CCBF' },
  { id: 'travertine-roman', name: 'Roman Ivory Travertine Stone', type: 'Natural Stone', hex: '#DFD8CC' },
  { id: 'sunbrella-sand', name: 'Sunbrella Sand Performance Weave', type: 'All-Weather Outdoor', hex: '#E2DBD0' },
];

export function FreeSwatchesModal({ isOpen, onClose, preselectedProduct }: FreeSwatchesModalProps) {
  if (!isOpen) return null;

  const [selectedSwatches, setSelectedSwatches] = useState<string[]>([
    'walnut-solid',
    'boucle-alabaster',
    'leather-cognac',
  ]);
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [cityZip, setCityZip] = useState('');

  const toggleSwatch = (id: string) => {
    if (selectedSwatches.includes(id)) {
      setSelectedSwatches(selectedSwatches.filter((s) => s !== id));
    } else {
      if (selectedSwatches.length < 5) {
        setSelectedSwatches([...selectedSwatches, id]);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-[#FAF8F5] rounded-2xl shadow-2xl border border-[#DECBB4] overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E8DFD3] bg-white">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#C2A676]" />
            <h2 className="font-serif text-xl font-bold text-[#1C1611]">
              Order Curated Material Swatches
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

        {/* Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {submitted ? (
            <div className="text-center py-8 space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#EBF5ED] text-[#2D733E] flex items-center justify-center mx-auto">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#1C1611]">
                Your Swatch Box Is On Its Way
              </h3>
              <p className="text-xs text-[#6F6052] max-w-sm mx-auto leading-relaxed">
                We have prepared your {selectedSwatches.length} selected swatches in our presentation linen box. Dispatched complimentary via express courier.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="mt-4 px-6 py-2.5 rounded-xl bg-[#231B15] text-[#FAF8F5] text-xs font-semibold cursor-pointer"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="p-3 rounded-xl bg-[#FAF5EB] border border-[#ECDDC9] text-xs text-[#735A2B] flex items-center justify-between">
                <span>Select up to <strong>5 complimentary swatches</strong>:</span>
                <span className="font-bold">{selectedSwatches.length} / 5 selected</span>
              </div>

              {/* Swatches Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {AVAILABLE_SWATCHES.map((swatch) => {
                  const isChecked = selectedSwatches.includes(swatch.id);
                  return (
                    <button
                      key={swatch.id}
                      type="button"
                      onClick={() => toggleSwatch(swatch.id)}
                      className={`p-3 rounded-xl border text-left flex items-center gap-3 transition-all cursor-pointer ${
                        isChecked
                          ? 'border-[#231B15] bg-white shadow-xs'
                          : 'border-[#E0D5C7] bg-[#FAF8F5] opacity-75 hover:opacity-100 hover:bg-white'
                      }`}
                    >
                      <span
                        className="w-6 h-6 rounded-full border border-black/15 shrink-0 shadow-2xs"
                        style={{ backgroundColor: swatch.hex }}
                      />
                      <div className="min-w-0 flex-1">
                        <div className="text-xs font-semibold text-[#1F1813] truncate">
                          {swatch.name}
                        </div>
                        <div className="text-[10px] text-[#827467]">
                          {swatch.type}
                        </div>
                      </div>
                      <div
                        className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                          isChecked ? 'bg-[#231B15] border-[#231B15] text-white' : 'border-[#C8BCAC]'
                        }`}
                      >
                        {isChecked && <Check className="w-2.5 h-2.5" />}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Shipping Address Inputs */}
              <div className="space-y-3 pt-3 border-t border-[#E8DFD3]">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#3F3328]">
                  Delivery Address:
                </div>
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-lg border border-[#D8CABE] bg-white text-[#201913] focus:outline-hidden"
                />
                <input
                  type="text"
                  required
                  placeholder="Street Address, Apt / Suite"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-lg border border-[#D8CABE] bg-white text-[#201913] focus:outline-hidden"
                />
                <input
                  type="text"
                  required
                  placeholder="City, State, Postal Code"
                  value={cityZip}
                  onChange={(e) => setCityZip(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-lg border border-[#D8CABE] bg-white text-[#201913] focus:outline-hidden"
                />
              </div>

              <button
                type="submit"
                disabled={selectedSwatches.length === 0}
                className="w-full py-3 rounded-xl bg-[#231B15] text-[#FAF8F5] text-xs font-semibold uppercase tracking-wider hover:bg-[#3D3025] transition-colors cursor-pointer shadow-xs disabled:opacity-40"
              >
                Dispatch Free Swatch Kit (24-Hour Shipping)
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
