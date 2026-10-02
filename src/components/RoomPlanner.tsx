import React, { useState } from 'react';
import { Compass, Ruler, Sparkles, Check, Info, ArrowRight, ShieldAlert, Maximize2 } from 'lucide-react';
import { RoomCategory } from '../types/furniture';

interface RoomPlannerProps {
  onConsultAIWithPlan: (prompt: string) => void;
}

export function RoomPlanner({ onConsultAIWithPlan }: RoomPlannerProps) {
  const [roomType, setRoomType] = useState<RoomCategory>('living');
  const [widthFeet, setWidthFeet] = useState<number>(14);
  const [lengthFeet, setLengthFeet] = useState<number>(18);
  const [ceilingHeightFeet, setCeilingHeightFeet] = useState<number>(9);
  const [hasDoorwayWalkway, setHasDoorwayWalkway] = useState<boolean>(true);

  const totalSqFt = widthFeet * lengthFeet;

  // Compute spatial advice based on room type and dimensions
  const getSpatialGuidance = () => {
    if (roomType === 'living') {
      const maxSofaWidth = Math.round(widthFeet * 12 * 0.65);
      const idealRug = totalSqFt >= 240 ? '9 ft × 12 ft' : totalSqFt >= 150 ? '8 ft × 10 ft' : '6 ft × 9 ft';
      return {
        maxSeatingWidth: `${maxSofaWidth}" maximum sofa span`,
        rugRecommendation: idealRug,
        coffeeTableDistance: '14" to 18" from sofa cushion front edge',
        walkwayClearance: '30" to 36" primary walkway clearance',
        pieceRecommendation: totalSqFt >= 200 ? 'Astrid Modular Sectional + Vesterbro Lounge Chair' : 'Astrid 3-Piece Sectional + Calder Coffee Table'
      };
    } else if (roomType === 'dining') {
      const maxTableLength = Math.max(60, (lengthFeet * 12) - 72); // 36" clearance on both ends
      return {
        maxSeatingWidth: `Up to ${maxTableLength}" table length (seats 8-10)`,
        rugRecommendation: 'Table length + 24" chair pull-out on all sides',
        coffeeTableDistance: '36" minimum perimeter wall clearance for chair push-back',
        walkwayClearance: '42" to 48" main traffic path',
        pieceRecommendation: 'Soren Extendable Dining Table (76"-104") with 6 to 8 Koto Cane Chairs'
      };
    } else if (roomType === 'bedroom') {
      const canFitKing = widthFeet >= 14 && lengthFeet >= 14;
      return {
        maxSeatingWidth: canFitKing ? 'King Bed (84"W) comfortably fits' : 'Queen Bed (68"W) recommended',
        rugRecommendation: '8 ft × 10 ft placed perpendicular under bottom two-thirds of bed',
        coffeeTableDistance: '30" minimum bedside clearance to nightstands and closet doors',
        walkwayClearance: '36" around bed perimeter',
        pieceRecommendation: 'Celine Floating Bedframe + Twin Nora Floating Nightstands'
      };
    } else if (roomType === 'office') {
      return {
        maxSeatingWidth: '60"W Aris Executive Desk',
        rugRecommendation: '5 ft × 7 ft or 6 ft × 9 ft under desk and chair movement perimeter',
        coffeeTableDistance: '36" to 42" push-back depth behind chair for recline & rotation',
        walkwayClearance: '32" clear path to doorway and bookshelves',
        pieceRecommendation: 'Aris Executive Standing Desk + Form Glove Leather Swivel Chair'
      };
    } else {
      return {
        maxSeatingWidth: '82" Solstice Teak Outdoor Sofa',
        rugRecommendation: 'All-weather polypropylene flatweave',
        coffeeTableDistance: '48" clearance around open flames (Dune Fire Table)',
        walkwayClearance: '36" perimeter terrace circulation',
        pieceRecommendation: 'Solstice Teak Lounge Set + Dune Fluted Concrete Fire Table'
      };
    }
  };

  const guidance = getSpatialGuidance();

  const handleSendToAI = () => {
    const prompt = `I am designing a ${roomType} space measuring ${widthFeet} ft × ${lengthFeet} ft (${totalSqFt} sq ft) with ${ceilingHeightFeet} ft ceilings. Could you recommend an exact furniture layout using Standard Furnitures pieces, including walkway clearances, recommended rug dimensions, and styling palette?`;
    onConsultAIWithPlan(prompt);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Title */}
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#9E8254]">
          <Compass className="w-4 h-4 text-[#C2A676]" />
          Spatial Engineering & Proportions
        </div>
        <h1 className="font-serif text-2xl sm:text-4xl font-bold text-[#1C1611] mt-1">
          Room Dimension & Clearance Advisor
        </h1>
        <p className="text-xs sm:text-sm text-[#6C5F53] font-sans mt-1 max-w-3xl leading-relaxed">
          Avoid the common mistake of overcrowding. Input your room measurements below to receive architectural clearance guidelines and tailor-fitted Standard Furnitures recommendations.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Form: Dimension Inputs */}
        <div className="lg:col-span-1 p-6 rounded-2xl bg-white border border-[#E3D8CC] shadow-2xs space-y-6">
          <h2 className="font-serif text-lg font-bold text-[#1C1611] border-b border-[#F0EAE1] pb-2">
            1. Enter Space Measurements
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#5A4C3F] mb-1.5">
                Room Purpose
              </label>
              <select
                value={roomType}
                onChange={(e) => setRoomType(e.target.value as RoomCategory)}
                className="w-full text-xs sm:text-sm p-3 rounded-xl border border-[#D9CFC2] bg-[#FAF8F5] text-[#201913] focus:outline-hidden focus:border-[#C2A676]"
              >
                <option value="living">Living Room</option>
                <option value="dining">Dining Room</option>
                <option value="bedroom">Bedroom</option>
                <option value="office">Home Office</option>
                <option value="outdoor">Patio / Terrace</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#5A4C3F] mb-1.5">
                  Width (Feet)
                </label>
                <input
                  type="number"
                  min="8"
                  max="40"
                  value={widthFeet}
                  onChange={(e) => setWidthFeet(Number(e.target.value))}
                  className="w-full text-sm p-3 rounded-xl border border-[#D9CFC2] bg-[#FAF8F5] text-[#201913] focus:outline-hidden focus:border-[#C2A676]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#5A4C3F] mb-1.5">
                  Length (Feet)
                </label>
                <input
                  type="number"
                  min="8"
                  max="50"
                  value={lengthFeet}
                  onChange={(e) => setLengthFeet(Number(e.target.value))}
                  className="w-full text-sm p-3 rounded-xl border border-[#D9CFC2] bg-[#FAF8F5] text-[#201913] focus:outline-hidden focus:border-[#C2A676]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#5A4C3F] mb-1.5">
                Ceiling Height (Feet)
              </label>
              <input
                type="number"
                min="7"
                max="20"
                value={ceilingHeightFeet}
                onChange={(e) => setCeilingHeightFeet(Number(e.target.value))}
                className="w-full text-sm p-3 rounded-xl border border-[#D9CFC2] bg-[#FAF8F5] text-[#201913] focus:outline-hidden focus:border-[#C2A676]"
              />
            </div>

            <div className="pt-2">
              <label className="flex items-center gap-2 text-xs text-[#524438] cursor-pointer">
                <input
                  type="checkbox"
                  checked={hasDoorwayWalkway}
                  onChange={(e) => setHasDoorwayWalkway(e.target.checked)}
                  className="rounded border-[#C5B7A5] text-[#231B15] focus:ring-0"
                />
                <span>Account for primary entryway / door swing clearance</span>
              </label>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#FAF5EB] border border-[#ECDDC9] text-xs text-[#705425] space-y-1">
            <div className="font-semibold flex items-center gap-1">
              <Info className="w-3.5 h-3.5 text-[#C2A676]" />
              Calculated Footprint:
            </div>
            <div className="font-serif text-lg font-bold text-[#231B15]">
              {totalSqFt} sq. ft. ({widthFeet}' × {lengthFeet}')
            </div>
            <p className="text-[11px] text-[#856D48]">
              {totalSqFt < 150
                ? 'Cozy footprint: Focus on floating wall units, leggy silhouettes, and glass/travertine elements.'
                : totalSqFt < 300
                ? 'Proportional footprint: Ample space for modular sectionals and conversational seating arrangements.'
                : 'Expansive footprint: Great for dual conversation zones, architectural credenzas, and 10-seater tables.'}
            </p>
          </div>

          <button
            type="button"
            onClick={handleSendToAI}
            className="w-full py-3.5 px-4 rounded-xl bg-[#231B15] hover:bg-[#3D3025] text-[#FAF8F5] text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-xs"
          >
            <Sparkles className="w-4 h-4 text-[#C2A676]" />
            <span>Generate Full AI Layout Plan</span>
          </button>
        </div>

        {/* Right 2 Columns: Spatial Visualization & Architectural Rules */}
        <div className="lg:col-span-2 space-y-6">
          {/* Spatial Blueprint Mockup */}
          <div className="p-6 rounded-2xl bg-white border border-[#E3D8CC] shadow-2xs space-y-4">
            <div className="flex items-center justify-between border-b border-[#EFE8DF] pb-3">
              <h2 className="font-serif text-lg font-bold text-[#1C1611]">
                2. Architectural Clearance Calculations
              </h2>
              <span className="text-[11px] font-mono text-[#8C7A68]">
                Standard Furnitures Spatial Model v2.4
              </span>
            </div>

            {/* Visual Floor Boundary Simulation */}
            <div className="relative aspect-16/9 rounded-xl bg-[#F7F3EC] border-2 border-dashed border-[#D2C5B3] p-6 flex flex-col justify-between overflow-hidden">
              {/* Dimensions Labels */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 text-[10px] font-mono font-semibold uppercase text-[#7D6E60] bg-white/80 px-2 py-0.5 rounded shadow-2xs">
                ← {widthFeet} Feet Width →
              </div>
              <div className="absolute left-2 top-1/2 -translate-y-1/2 -rotate-90 text-[10px] font-mono font-semibold uppercase text-[#7D6E60] bg-white/80 px-2 py-0.5 rounded shadow-2xs">
                ← {lengthFeet} Feet Length →
              </div>

              {/* Schematic Mock Shapes */}
              <div className="m-auto w-[65%] h-[55%] rounded-lg border border-[#C2A676] bg-[#C2A676]/15 flex flex-col items-center justify-center p-3 text-center">
                <div className="text-xs font-bold text-[#231B15]">
                  Optimal Furniture Zone
                </div>
                <div className="text-[11px] text-[#7A6448] mt-0.5">
                  Recommended Rug: {guidance.rugRecommendation}
                </div>
                <div className="text-[10px] text-[#9A8466] mt-1 font-mono">
                  {guidance.maxSeatingWidth}
                </div>
              </div>

              {/* Perimeter Clearance Indicators */}
              <div className="flex justify-between text-[10px] font-mono text-[#8C7A68] border-t border-[#DFD3C2] pt-1">
                <span>Perimeter Clearance: {guidance.walkwayClearance}</span>
                <span>Reach Spacing: {guidance.coffeeTableDistance}</span>
              </div>
            </div>

            {/* Standard Rules Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3">
              <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#EBE3D7] space-y-1">
                <div className="text-xs font-semibold text-[#281F17] flex items-center gap-1.5">
                  <Ruler className="w-3.5 h-3.5 text-[#C2A676]" />
                  <span>Primary Walkway Clearance</span>
                </div>
                <p className="text-xs text-[#615244] leading-relaxed">
                  Always preserve at least <strong>30" to 36"</strong> of unobstructed floor space between major furniture pieces and entryways to allow fluid circulation.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#EBE3D7] space-y-1">
                <div className="text-xs font-semibold text-[#281F17] flex items-center gap-1.5">
                  <Ruler className="w-3.5 h-3.5 text-[#C2A676]" />
                  <span>Coffee Table Reach Distance</span>
                </div>
                <p className="text-xs text-[#615244] leading-relaxed">
                  Position coffee tables <strong>14" to 18"</strong> away from sofa seat edges — close enough to rest a cup without straining, yet far enough for knee clearance.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#EBE3D7] space-y-1">
                <div className="text-xs font-semibold text-[#281F17] flex items-center gap-1.5">
                  <Ruler className="w-3.5 h-3.5 text-[#C2A676]" />
                  <span>Dining Chair Push-Back Space</span>
                </div>
                <p className="text-xs text-[#615244] leading-relaxed">
                  Allow <strong>36"</strong> from table edge to perimeter walls so guests can comfortably stand and push their chairs back without striking walls or buffets.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#EBE3D7] space-y-1">
                <div className="text-xs font-semibold text-[#281F17] flex items-center gap-1.5">
                  <Ruler className="w-3.5 h-3.5 text-[#C2A676]" />
                  <span>Rug Sizing Rule of Front Legs</span>
                </div>
                <p className="text-xs text-[#615244] leading-relaxed">
                  Your area rug should be large enough that at least the <strong>front two legs</strong> of all seating pieces rest firmly on the rug to visually anchor the room.
                </p>
              </div>
            </div>
          </div>

          {/* Curated Piece Recommendation */}
          <div className="p-5 rounded-2xl bg-[#231B15] text-[#FAF8F5] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="text-[10px] uppercase tracking-widest text-[#C2A676] font-semibold">
                AI Proportional Pairing
              </div>
              <div className="font-serif text-lg font-bold">
                {guidance.pieceRecommendation}
              </div>
              <p className="text-xs text-[#C5B9AA]">
                Matches your {widthFeet}×{lengthFeet} ft footprint with balanced spatial clearances.
              </p>
            </div>
            <button
              type="button"
              onClick={handleSendToAI}
              className="shrink-0 px-5 py-2.5 rounded-xl bg-[#C2A676] hover:bg-[#B39562] text-[#231B15] text-xs font-bold transition-colors cursor-pointer"
            >
              Analyze in Studio AI →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
