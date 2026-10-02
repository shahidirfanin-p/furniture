import React, { useState, useMemo } from 'react';
import { Search, Filter, Sparkles, SlidersHorizontal, ArrowUpDown, Layers, Check } from 'lucide-react';
import { FurnitureProduct, RoomCategory, FurnitureStyle } from '../types/furniture';
import { FURNITURE_CATALOG, STYLE_GUIDES } from '../data/furnitureData';
import { ProductCard } from './ProductCard';

interface ShowroomProps {
  onOpenDetails: (product: FurnitureProduct) => void;
  onConsultAI: (product: FurnitureProduct) => void;
  onStartFullConsultation: (customPrompt?: string) => void;
  moodboardIds: string[];
  onToggleMoodboard: (product: FurnitureProduct) => void;
}

export function Showroom({
  onOpenDetails,
  onConsultAI,
  onStartFullConsultation,
  moodboardIds,
  onToggleMoodboard,
}: ShowroomProps) {
  const [selectedCategory, setSelectedCategory] = useState<RoomCategory>('all');
  const [selectedStyle, setSelectedStyle] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc'>('featured');
  const [maxPrice, setMaxPrice] = useState<number>(3500);

  const categories: { label: string; value: RoomCategory }[] = [
    { label: 'All Collections', value: 'all' },
    { label: 'Living Room', value: 'living' },
    { label: 'Dining Room', value: 'dining' },
    { label: 'Bedroom', value: 'bedroom' },
    { label: 'Home Office', value: 'office' },
    { label: 'Patio & Outdoor', value: 'outdoor' },
  ];

  const styles = ['all', 'Scandinavian', 'Modern', 'Minimalist', 'Japandi', 'Traditional'];

  // Filter products
  const filteredProducts = useMemo(() => {
    return FURNITURE_CATALOG.filter((product) => {
      if (selectedCategory !== 'all' && product.category !== selectedCategory) return false;
      if (selectedStyle !== 'all' && product.style !== selectedStyle) return false;
      if (product.price > maxPrice) return false;
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesMaterial = product.materials.some((m) => m.toLowerCase().includes(query));
        const matchesDescription = product.description.toLowerCase().includes(query);
        const matchesStyle = product.style.toLowerCase().includes(query);
        if (!matchesName && !matchesMaterial && !matchesDescription && !matchesStyle) return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      // Default: featured first
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [selectedCategory, selectedStyle, searchQuery, sortBy, maxPrice]);

  return (
    <div className="space-y-10 pb-16">
      {/* Editorial Hero Banner */}
      <div className="relative bg-[#231B15] text-[#FAF8F5] overflow-hidden border-b border-[#3B3026]">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=80"
            alt="Interior showroom"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#3D3025]/80 border border-[#64503E] text-[#D8C4A7] text-xs font-semibold uppercase tracking-widest mb-4 backdrop-blur-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C2A676]" />
            Modern Living • Sustainable Hardwoods • Made to Endure
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl text-[#FAF8F5] leading-tight">
            Furniture sculpted for life’s quiet, memorable moments.
          </h1>

          <p className="mt-4 max-w-2xl text-xs sm:text-base text-[#D4C8B8] font-sans leading-relaxed">
            Kiln-dried FSC Appalachian hardwoods, hand-finished Roman travertine, and full-grain Italian leather. Every silhouette is calibrated for comfort, architectural harmony, and longevity.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => onStartFullConsultation('I would like recommendations for furnishing my home with Standard Furnitures.')}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#C2A676] hover:bg-[#B39562] text-[#231B15] text-xs font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-[#231B15]" />
              <span>Consult Standard Furnitures AI</span>
            </button>
            <a
              href="#collections"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-[#FAF8F5] border border-white/20 text-xs font-semibold uppercase tracking-wider transition-all backdrop-blur-xs cursor-pointer"
            >
              <span>Explore Showroom</span>
            </a>
          </div>

          {/* Quick Metrics */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/10 text-center w-full max-w-3xl">
            <div>
              <div className="font-serif text-2xl font-bold text-[#E5D2B4]">10-Year</div>
              <div className="text-[11px] text-[#A69788] uppercase tracking-wider mt-0.5">Frame Guarantee</div>
            </div>
            <div>
              <div className="font-serif text-2xl font-bold text-[#E5D2B4]">100 Nights</div>
              <div className="text-[11px] text-[#A69788] uppercase tracking-wider mt-0.5">In-Home Trial</div>
            </div>
            <div>
              <div className="font-serif text-2xl font-bold text-[#E5D2B4]">FSC Certified</div>
              <div className="text-[11px] text-[#A69788] uppercase tracking-wider mt-0.5">Ethical Timber</div>
            </div>
            <div>
              <div className="font-serif text-2xl font-bold text-[#E5D2B4]">White-Glove</div>
              <div className="text-[11px] text-[#A69788] uppercase tracking-wider mt-0.5">Room of Choice</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Showroom Area */}
      <div id="collections" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Category Navigation Pills */}
        <div className="flex items-center justify-between border-b border-[#E8E0D4] pb-4 overflow-x-auto gap-2">
          <div className="flex items-center gap-1.5 sm:gap-2">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat.value
                    ? 'bg-[#231B15] text-[#FAF8F5] shadow-xs'
                    : 'bg-[#F2ECE2] text-[#55473A] hover:bg-[#E8DFD3] hover:text-[#1C1611]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <span className="text-xs font-mono text-[#8C7A68] hidden md:inline shrink-0">
            {filteredProducts.length} pieces shown
          </span>
        </div>

        {/* Filter & Search Bar */}
        <div className="p-4 rounded-xl bg-white border border-[#E5DCD0] shadow-2xs space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-[#8C7A68] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search walnut, bouclé, dining tables, sectional, travertine, or chairs..."
                className="w-full text-xs sm:text-sm pl-10 pr-4 py-2.5 rounded-lg border border-[#DED3C6] bg-[#FAF8F5] focus:outline-hidden focus:border-[#231B15] focus:bg-white text-[#231B15] placeholder-[#948576]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#8C7A68] hover:text-[#231B15]"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Filter by Style */}
            <div className="flex items-center gap-2 overflow-x-auto">
              <span className="text-xs font-semibold text-[#6C5D50] shrink-0">Style:</span>
              {styles.map((style) => (
                <button
                  key={style}
                  onClick={() => setSelectedStyle(style)}
                  className={`text-xs px-3 py-1.5 rounded-lg border transition-all cursor-pointer whitespace-nowrap ${
                    selectedStyle === style
                      ? 'border-[#231B15] bg-[#231B15] text-[#FAF8F5]'
                      : 'border-[#DFD5C8] bg-[#FAF8F5] text-[#4F4135] hover:bg-[#F2ECE2]'
                  }`}
                >
                  {style === 'all' ? 'All Styles' : style}
                </button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 shrink-0">
              <ArrowUpDown className="w-3.5 h-3.5 text-[#8C7A68]" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="text-xs p-2 rounded-lg border border-[#DED3C6] bg-[#FAF8F5] text-[#332820] focus:outline-hidden"
              >
                <option value="featured">Curated & Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onOpenDetails={onOpenDetails}
                onConsultAI={onConsultAI}
                isInMoodboard={moodboardIds.includes(product.id)}
                onToggleMoodboard={onToggleMoodboard}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-[#E5DDD2] p-8 space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#FAF5EB] text-[#C2A676] flex items-center justify-center mx-auto">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#1C1611]">
              No pieces match your current criteria
            </h3>
            <p className="text-xs text-[#706153] max-w-md mx-auto">
              Try resetting your style filter or search terms, or ask Standard Furnitures AI to locate custom upholstery options.
            </p>
            <div className="flex justify-center gap-3">
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedStyle('all');
                  setSearchQuery('');
                  setMaxPrice(3500);
                }}
                className="px-4 py-2 rounded-lg bg-[#231B15] text-[#FAF8F5] text-xs font-semibold cursor-pointer"
              >
                Reset All Filters
              </button>
              <button
                onClick={() => onStartFullConsultation(`I am searching for pieces matching: "${searchQuery}". Could you recommend matching alternatives from the catalog?`)}
                className="px-4 py-2 rounded-lg bg-[#FAF5EB] text-[#7A6033] border border-[#DECDB7] text-xs font-semibold cursor-pointer"
              >
                Ask Standard Furnitures AI
              </button>
            </div>
          </div>
        )}

        {/* Curated Style Guide Showcases */}
        <div className="mt-16 pt-12 border-t border-[#E8DFD3] space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-widest text-[#9E8254]">
                Interior Style Philosophy
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1611] mt-1">
                Explore Aesthetic Directions
              </h2>
            </div>
            <button
              onClick={() => onStartFullConsultation('Can you help me identify which interior design style suits my lifestyle and floorplan?')}
              className="text-xs font-semibold text-[#8C6D37] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#C2A676]" />
              <span>Take Style Advisor Quiz with AI →</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {STYLE_GUIDES.map((guide, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-white border border-[#E4DBD0] shadow-2xs space-y-3 flex flex-col justify-between hover:border-[#C2A676] transition-colors"
              >
                <div className="space-y-2">
                  {/* Palette Swatches */}
                  <div className="flex items-center gap-1">
                    {guide.palette.map((color, cIdx) => (
                      <span
                        key={cIdx}
                        className="w-4 h-4 rounded-full border border-black/15 shadow-2xs"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>

                  <h3 className="font-serif text-lg font-bold text-[#1F1813]">
                    {guide.style}
                  </h3>
                  <p className="text-xs text-[#6F6052] leading-relaxed">
                    {guide.tagline}
                  </p>

                  <div className="pt-2 text-[11px] text-[#857567] border-t border-[#F2ECE2]">
                    <strong className="text-[#3A3026]">Key Elements:</strong> {guide.keyMaterials}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onStartFullConsultation(`I would like to style my space in the ${guide.style} aesthetic. What palette, layout rules, and Standard Furnitures pieces do you recommend?`)}
                  className="w-full py-2 px-3 rounded-lg bg-[#FAF5EB] hover:bg-[#F2E7D3] border border-[#DECDB7] text-xs font-semibold text-[#7A6033] transition-colors cursor-pointer text-center"
                >
                  Explore {guide.style} with AI →
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
