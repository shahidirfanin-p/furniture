import React, { useState } from 'react';
import { ShieldCheck, Truck, RotateCcw, Sparkles, Feather, Droplets, Sun, Layers, Check, HelpCircle } from 'lucide-react';
import { STORE_POLICIES } from '../data/furnitureData';

interface CareAndPoliciesProps {
  onConsultAIAboutPolicy: (query: string) => void;
  onOpenSwatches: () => void;
}

export function CareAndPolicies({ onConsultAIAboutPolicy, onOpenSwatches }: CareAndPoliciesProps) {
  const [activeTab, setActiveTab] = useState<'materials' | 'delivery' | 'trial' | 'warranty'>('materials');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#9E8254]">
          <ShieldCheck className="w-4 h-4 text-[#C2A676]" />
          Integrity & Lifespan
        </div>
        <h1 className="font-serif text-2xl sm:text-4xl font-bold text-[#1C1611] mt-1">
          Material Care & Store Guarantees
        </h1>
        <p className="text-xs sm:text-sm text-[#6C5F53] font-sans mt-1 max-w-3xl leading-relaxed">
          Heirloom furniture is an investment intended to deepen in character with age. Discover how our white-glove logistics operate, review our 10-Year Warranty, and learn proper conditioning for hardwoods and fine leathers.
        </p>
      </div>

      {/* Navigation Tabs */}
      <div className="flex items-center gap-2 border-b border-[#E8DFD3] pb-2 overflow-x-auto">
        <button
          onClick={() => setActiveTab('materials')}
          className={`px-4 py-2.5 rounded-xl text-xs font-semibold tracking-wide transition-all cursor-pointer whitespace-nowrap ${
            activeTab === 'materials'
              ? 'bg-[#231B15] text-[#FAF8F5] shadow-xs'
              : 'text-[#584B3F] hover:bg-[#F2EDE4]'
          }`}
        >
          Material Maintenance Manual
        </button>
        <button
          onClick={() => setActiveTab('delivery')}
          className={`px-4 py-2.5 rounded-xl text-xs font-semibold tracking-wide transition-all cursor-pointer whitespace-nowrap ${
            activeTab === 'delivery'
              ? 'bg-[#231B15] text-[#FAF8F5] shadow-xs'
              : 'text-[#584B3F] hover:bg-[#F2EDE4]'
          }`}
        >
          White-Glove Delivery
        </button>
        <button
          onClick={() => setActiveTab('trial')}
          className={`px-4 py-2.5 rounded-xl text-xs font-semibold tracking-wide transition-all cursor-pointer whitespace-nowrap ${
            activeTab === 'trial'
              ? 'bg-[#231B15] text-[#FAF8F5] shadow-xs'
              : 'text-[#584B3F] hover:bg-[#F2EDE4]'
          }`}
        >
          100-Night In-Home Trial
        </button>
        <button
          onClick={() => setActiveTab('warranty')}
          className={`px-4 py-2.5 rounded-xl text-xs font-semibold tracking-wide transition-all cursor-pointer whitespace-nowrap ${
            activeTab === 'warranty'
              ? 'bg-[#231B15] text-[#FAF8F5] shadow-xs'
              : 'text-[#584B3F] hover:bg-[#F2EDE4]'
          }`}
        >
          10-Year Craftsmanship Warranty
        </button>
      </div>

      {/* Tab 1: Material Maintenance Manual */}
      {activeTab === 'materials' && (
        <div className="space-y-8 animate-in fade-in duration-200">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Solid Hardwood */}
            <div className="p-6 rounded-2xl bg-white border border-[#E4D9CC] shadow-2xs space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#FAF5EB] text-[#C2A676] flex items-center justify-center">
                <Feather className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#1C1611]">
                Solid Appalachian Hardwood
              </h3>
              <p className="text-xs text-[#6F6052] leading-relaxed">
                Appalachian walnut, quarter-sawn white oak, and American ash are living materials that breathe.
              </p>
              <ul className="space-y-2 text-xs text-[#4F4135] pt-2 border-t border-[#F2ECE2]">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-[#C2A676] shrink-0 mt-0.5" />
                  <span>Maintain indoor relative humidity between 35% and 55% to prevent contraction cracks.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-[#C2A676] shrink-0 mt-0.5" />
                  <span>Dust weekly with dry microfiber. Avoid commercial silicone-based spray polishes.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-[#C2A676] shrink-0 mt-0.5" />
                  <span>Reapply natural organic hardwax oil or beeswax balm once every 6 to 12 months.</span>
                </li>
              </ul>
              <button
                type="button"
                onClick={() => onConsultAIAboutPolicy('How do I remove water rings or surface scuffs from solid walnut dining tables?')}
                className="text-xs text-[#9E8254] font-semibold hover:underline flex items-center gap-1 cursor-pointer pt-1"
              >
                <Sparkles className="w-3 h-3 text-[#C2A676]" />
                <span>Ask AI about wood care techniques →</span>
              </button>
            </div>

            {/* Italian Aniline Leather */}
            <div className="p-6 rounded-2xl bg-white border border-[#E4D9CC] shadow-2xs space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#FAF5EB] text-[#C2A676] flex items-center justify-center">
                <Droplets className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#1C1611]">
                Full-Grain Italian Aniline Leather
              </h3>
              <p className="text-xs text-[#6F6052] leading-relaxed">
                Hand-dyed hides that absorb natural oils, developing a rich caramel patina unique to your family's daily life.
              </p>
              <ul className="space-y-2 text-xs text-[#4F4135] pt-2 border-t border-[#F2ECE2]">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-[#C2A676] shrink-0 mt-0.5" />
                  <span>Keep away from intense direct ultraviolet sunlight and direct radiator heat sources.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-[#C2A676] shrink-0 mt-0.5" />
                  <span>For spills, immediately blot (never rub) with a dry undyed cotton cloth.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-[#C2A676] shrink-0 mt-0.5" />
                  <span>Massage with lanolin or beeswax leather conditioner twice yearly to keep pores supple.</span>
                </li>
              </ul>
              <button
                type="button"
                onClick={() => onConsultAIAboutPolicy('What is the best way to clean and condition aniline leather sofas without darkening them?')}
                className="text-xs text-[#9E8254] font-semibold hover:underline flex items-center gap-1 cursor-pointer pt-1"
              >
                <Sparkles className="w-3 h-3 text-[#C2A676]" />
                <span>Ask AI about leather conditioning →</span>
              </button>
            </div>

            {/* Wool Bouclé & Linen */}
            <div className="p-6 rounded-2xl bg-white border border-[#E4D9CC] shadow-2xs space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#FAF5EB] text-[#C2A676] flex items-center justify-center">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#1C1611]">
                Textured Bouclé & Belgian Linen
              </h3>
              <p className="text-xs text-[#6F6052] leading-relaxed">
                Woven from OEKO-TEX certified yarns with natural stain-shedding density and breathability.
              </p>
              <ul className="space-y-2 text-xs text-[#4F4135] pt-2 border-t border-[#F2ECE2]">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-[#C2A676] shrink-0 mt-0.5" />
                  <span>Vacuum weekly using low suction with a soft upholstery brush to prevent dust entrapment.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-[#C2A676] shrink-0 mt-0.5" />
                  <span>Fluff and rotate modular seat and back cushions every 3 months for uniform wear.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-[#C2A676] shrink-0 mt-0.5" />
                  <span>Treat with gentle water-free dry-cleaning solvents for stubborn liquid marks.</span>
                </li>
              </ul>
              <button
                type="button"
                onClick={() => onConsultAIAboutPolicy('Is your bouclé fabric pet-friendly and how do I clean spills on white bouclé?')}
                className="text-xs text-[#9E8254] font-semibold hover:underline flex items-center gap-1 cursor-pointer pt-1"
              >
                <Sparkles className="w-3 h-3 text-[#C2A676]" />
                <span>Ask AI about bouclé stain removal →</span>
              </button>
            </div>

            {/* Roman Travertine & Stone */}
            <div className="p-6 rounded-2xl bg-white border border-[#E4D9CC] shadow-2xs space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#FAF5EB] text-[#C2A676] flex items-center justify-center">
                <Droplets className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#1C1611]">
                Roman Travertine & Honed Marble
              </h3>
              <p className="text-xs text-[#6F6052] leading-relaxed">
                Quarried natural stone with distinct porous cavities sealed with penetrating breathers.
              </p>
              <ul className="space-y-2 text-xs text-[#4F4135] pt-2 border-t border-[#F2ECE2]">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-[#C2A676] shrink-0 mt-0.5" />
                  <span>Always use coasters for acidic liquids (wine, vinegar, citrus juices, coffee).</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-[#C2A676] shrink-0 mt-0.5" />
                  <span>Clean exclusively with pH-neutral stone wash; never apply bleach or vinegar.</span>
                </li>
              </ul>
              <button
                type="button"
                onClick={() => onConsultAIAboutPolicy('How do I seal and protect travertine side tables?')}
                className="text-xs text-[#9E8254] font-semibold hover:underline flex items-center gap-1 cursor-pointer pt-1"
              >
                <Sparkles className="w-3 h-3 text-[#C2A676]" />
                <span>Ask AI about stone sealing →</span>
              </button>
            </div>

            {/* Outdoor Teak */}
            <div className="p-6 rounded-2xl bg-white border border-[#E4D9CC] shadow-2xs space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#FAF5EB] text-[#C2A676] flex items-center justify-center">
                <Sun className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#1C1611]">
                Grade-A Indonesian Teak
              </h3>
              <p className="text-xs text-[#6F6052] leading-relaxed">
                Dense heartwood rich in natural silica oils, completely immune to rotting, warping, or moisture decay.
              </p>
              <ul className="space-y-2 text-xs text-[#4F4135] pt-2 border-t border-[#F2ECE2]">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-[#C2A676] shrink-0 mt-0.5" />
                  <span>Allow to weather into an elegant architectural silvery-grey patina over 9-12 months.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-[#C2A676] shrink-0 mt-0.5" />
                  <span>If golden honey luster is preferred, oil annually with Golden Teak Sealer.</span>
                </li>
              </ul>
              <button
                type="button"
                onClick={() => onConsultAIAboutPolicy('How do I preserve the golden honey look on outdoor teak vs letting it turn silver?')}
                className="text-xs text-[#9E8254] font-semibold hover:underline flex items-center gap-1 cursor-pointer pt-1"
              >
                <Sparkles className="w-3 h-3 text-[#C2A676]" />
                <span>Ask AI about outdoor teak maintenance →</span>
              </button>
            </div>

            {/* Request Swatch Kit */}
            <div className="p-6 rounded-2xl bg-[#231B15] text-[#FAF8F5] shadow-2xs space-y-4 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-[#C2A676]">
                  Complimentary Service
                </span>
                <h3 className="font-serif text-xl font-bold mt-1 text-[#FAF8F5]">
                  Order Curated Swatch Kit
                </h3>
                <p className="text-xs text-[#C5B9AA] mt-2 leading-relaxed">
                  Touch and compare up to 5 hardwood, Italian leather, and bouclé fabric swatches in your home's natural light. Dispatched in 24 hours.
                </p>
              </div>
              <button
                type="button"
                onClick={onOpenSwatches}
                className="w-full py-2.5 px-4 rounded-xl bg-[#C2A676] hover:bg-[#B39562] text-[#231B15] text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer text-center"
              >
                Request Free Swatches
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: White-Glove Delivery */}
      {activeTab === 'delivery' && (
        <div className="p-8 rounded-2xl bg-white border border-[#E3D8CC] shadow-2xs space-y-6 animate-in fade-in duration-200">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-[#FAF5EB] text-[#C2A676] flex items-center justify-center">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h2 className="font-serif text-2xl font-bold text-[#1C1611]">
                White-Glove Delivery Experience
              </h2>
              <p className="text-xs text-[#7A6B5D]">
                {STORE_POLICIES.whiteGloveDelivery.summary}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-[#F0EAE0]">
            {STORE_POLICIES.whiteGloveDelivery.details.map((point, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FAF8F5] border border-[#EBE4D8]">
                <Check className="w-4 h-4 text-[#C2A676] shrink-0 mt-0.5" />
                <span className="text-xs text-[#3E3328] leading-relaxed">{point}</span>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-[#FAF5EB] border border-[#E7D9C4] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-[#735A2B]">
              <strong>Doorway Clearance Questions?</strong> Verify stairwell and elevator dimensions with Standard Furnitures AI before ordering.
            </div>
            <button
              onClick={() => onConsultAIAboutPolicy('What are your minimum doorway and stairwell clearance recommendations for large modular sectionals and dining tables?')}
              className="px-4 py-2 rounded-lg bg-[#231B15] text-[#FAF8F5] text-xs font-semibold shrink-0 cursor-pointer"
            >
              Verify Doorway Fit with AI →
            </button>
          </div>
        </div>
      )}

      {/* Tab 3: 100-Night Trial */}
      {activeTab === 'trial' && (
        <div className="p-8 rounded-2xl bg-white border border-[#E3D8CC] shadow-2xs space-y-6 animate-in fade-in duration-200">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-[#FAF5EB] text-[#C2A676] flex items-center justify-center">
              <RotateCcw className="w-6 h-6" />
            </div>
            <div>
              <h2 className="font-serif text-2xl font-bold text-[#1C1611]">
                100-Night In-Home Trial
              </h2>
              <p className="text-xs text-[#7A6B5D]">
                {STORE_POLICIES.trialAndReturns.summary}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-[#F0EAE0]">
            {STORE_POLICIES.trialAndReturns.details.map((point, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#FAF8F5] border border-[#EBE4D8] space-y-2">
                <div className="font-serif text-base font-bold text-[#231B15]">Step {idx + 1}</div>
                <p className="text-xs text-[#524436] leading-relaxed">{point}</p>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <button
              onClick={() => onConsultAIAboutPolicy('How does the 100-night trial return pickup work and what condition does the furniture need to be in?')}
              className="text-xs font-semibold text-[#8C6D37] hover:underline"
            >
              Ask Standard Furnitures AI about return logistics →
            </button>
          </div>
        </div>
      )}

      {/* Tab 4: 10-Year Warranty */}
      {activeTab === 'warranty' && (
        <div className="p-8 rounded-2xl bg-white border border-[#E3D8CC] shadow-2xs space-y-6 animate-in fade-in duration-200">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-[#FAF5EB] text-[#C2A676] flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h2 className="font-serif text-2xl font-bold text-[#1C1611]">
                10-Year Craftsmanship Guarantee
              </h2>
              <p className="text-xs text-[#7A6B5D]">
                {STORE_POLICIES.warranty.summary}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-[#F0EAE0]">
            {STORE_POLICIES.warranty.details.map((point, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#FAF8F5] border border-[#EBE4D8] space-y-2">
                <Check className="w-4 h-4 text-[#C2A676]" />
                <p className="text-xs text-[#524436] leading-relaxed">{point}</p>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <button
              onClick={() => onConsultAIAboutPolicy('What is covered under the Standard Furnitures 10-year craftsmanship guarantee vs normal wear and tear?')}
              className="text-xs font-semibold text-[#8C6D37] hover:underline"
            >
              Consult AI regarding warranty claims & coverage →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
