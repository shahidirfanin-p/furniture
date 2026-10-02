import { FurnitureProduct } from '../types/furniture';

export const FURNITURE_CATALOG: FurnitureProduct[] = [
  {
    id: 'astrid-modular-sectional',
    name: 'Astrid Modular Sectional',
    tagline: 'Deep lounging proportions with tailored architectural silhouette',
    category: 'living',
    style: 'Scandinavian',
    price: 3250,
    dimensions: {
      width: 112,
      depth: 68,
      height: 31,
      seatHeight: 17,
      clearance: 3,
      unit: 'inches'
    },
    materials: ['Kiln-dried FSC Ash Hardwood', 'High-Resilience Bio-Foam', 'Hypoallergenic Down-Blend Layer', 'Oatmeal Wool-Bouclé'],
    primaryMaterial: 'Oatmeal Wool-Bouclé & Solid Ash',
    finishOptions: ['Alabaster Bouclé', 'Cognac Saddle Leather', 'Oatmeal Belgian Linen'],
    swatches: [
      { name: 'Alabaster Bouclé', colorHex: '#F0ECE1', material: 'Wool Bouclé' },
      { name: 'Cognac Saddle', colorHex: '#8C5230', material: 'Full-Grain Italian Leather' },
      { name: 'Muted Taupe', colorHex: '#A3998C', material: 'Belgian Linen' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1000&q=80',
    ],
    description: 'The Astrid is our signature modular system designed for open-plan living. Featuring an overhung low-slung FSC-certified ash wood frame, deep seat cavities, and dual-layer multi-density cushioning enveloped in plush natural wool bouclé.',
    craftsmanshipHighlights: [
      'Corner-blocked, double-doweled kiln-dried ash framework',
      'Sinuous 8-gauge steel arch springs with lifetime tension guarantee',
      'Reversible, chambered down-wrap cushions that maintain tailored loft',
      'Concealed German alligator connecting brackets for flexible configuration'
    ],
    careSummary: 'Vacuum gently with a soft upholstery brush weekly. For spills, blot immediately with an undyed cloth. Professional dry clean recommended.',
    leadTime: 'In Stock (Delivered in 5–10 days)',
    roomFitRecommendation: 'Ideal for living rooms at least 14 ft x 16 ft. Maintain 32" clearance walkway around the chaise.',
    inStock: true,
    featured: true,
  },
  {
    id: 'calder-walnut-coffee-table',
    name: 'Calder Walnut Coffee Table',
    tagline: 'Monolithic soft-edge geometry with continuous grain waterfall joints',
    category: 'living',
    style: 'Minimalist',
    price: 890,
    dimensions: {
      width: 48,
      depth: 26,
      height: 15,
      clearance: 12,
      unit: 'inches'
    },
    materials: ['Solid American Black Walnut', 'Natural Organic Hardwax-Oil'],
    primaryMaterial: 'Solid American Walnut',
    finishOptions: ['Natural Oiled Walnut', 'Smoked Espresso Oak'],
    swatches: [
      { name: 'Natural Walnut', colorHex: '#523C2C', material: 'Solid American Walnut' },
      { name: 'Smoked Espresso', colorHex: '#2A201A', material: 'Smoked White Oak' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1200&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1000&q=80',
    ],
    description: 'Carved from sustainable Appalachian American black walnut, the Calder coffee table offers an organic pill silhouette with chamfered perimeter profiling and concealed steel reinforcement bracing.',
    craftsmanshipHighlights: [
      'Precision CNC-profiled and hand-sanded with 400-grit velvet finish',
      'Zero-VOC natural plant-based hardwax oil seal protects against spills',
      'Reinforced sliding steel stabilization batons compensate for seasonal movement'
    ],
    careSummary: 'Wipe with a damp microfiber cloth. Reapply natural beeswax balm once every 12 months.',
    leadTime: 'In Stock (Delivered in 5–7 days)',
    roomFitRecommendation: 'Pair with sofas 84" to 110" in length. Position 16" to 18" from sofa edge for optimal ergonomic reach.',
    inStock: true,
    featured: true,
  },
  {
    id: 'vesterbro-wool-lounge-chair',
    name: 'Vesterbro Wool Lounge Chair',
    tagline: 'Sculptural Danish cocoon armchair with brushed warm brass swivel',
    category: 'living',
    style: 'Scandinavian',
    price: 1180,
    dimensions: {
      width: 34,
      depth: 36,
      height: 33,
      seatHeight: 16.5,
      unit: 'inches'
    },
    materials: ['Virgin Melange Wool', 'Molded Cold-Cured Foam', 'Solid Cast Brass Swivel Base'],
    primaryMaterial: 'Danish Virgin Wool & Solid Brass',
    finishOptions: ['Oatmeal Melange', 'Forest Moss', 'Charcoal Heather'],
    swatches: [
      { name: 'Oatmeal Melange', colorHex: '#D8D0C5', material: 'Virgin Wool' },
      { name: 'Forest Moss', colorHex: '#475344', material: 'Virgin Wool' },
      { name: 'Charcoal Heather', colorHex: '#383838', material: 'Virgin Wool' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1200&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1580481077195-c3f25c793ff0?auto=format&fit=crop&w=1000&q=80',
    ],
    description: 'A study in organic ergonomics. The Vesterbro embraces the seated posture with gentle curvilinear support, high-density molded foam that will never lose its silhouette, and a smooth 360-degree brushed brass return-swivel.',
    craftsmanshipHighlights: [
      'Internal steel skeleton encased in cold-cured polyurethane foam',
      'Hand-tailored Danish wool with double-needle saddle stitching',
      'Ball-bearing smooth return swivel tested for 200,000 continuous cycles'
    ],
    careSummary: 'Spot clean wool with wool-safe cleaner and tepid water. Dust brass base with dry cotton cloth.',
    leadTime: 'In Stock (Delivered in 5–8 days)',
    roomFitRecommendation: 'Perfect for cozy reading nooks or flanking a fireplace. Allow 40" of rotational clearance.',
    inStock: true,
    featured: true,
  },
  {
    id: 'merano-travertine-side-table',
    name: 'Merano Travertine Side Table',
    tagline: 'Hand-honed Roman stone cylinder with organic porous texture',
    category: 'living',
    style: 'Minimalist',
    price: 540,
    dimensions: {
      width: 18,
      depth: 18,
      height: 20,
      unit: 'inches'
    },
    materials: ['Natural Roman Travertine Stone', 'Concealed Felt Protective Base'],
    primaryMaterial: 'Honed Roman Travertine',
    finishOptions: ['Ivory Travertine', 'Pietra Grey Marble'],
    swatches: [
      { name: 'Ivory Travertine', colorHex: '#DFD8CC', material: 'Natural Travertine' },
      { name: 'Pietra Grey', colorHex: '#4E5051', material: 'Honed Marble' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    description: 'Each Merano side table is carved from a solid quarry block of Roman travertine. The stone features subtle natural pitting, earth tones, and a velvety honed matte finish.',
    craftsmanshipHighlights: [
      'Quarried from historic Tivoli deposits in central Italy',
      'Hand-honed surface highlights unique geological mineral veining',
      'Impregnating penetrating sealer applied to protect against beverage absorption'
    ],
    careSummary: 'Wipe immediately if acidic liquids (wine, citrus, coffee) spill. Clean with pH-neutral stone cleaner.',
    leadTime: 'In Stock (Delivered in 4–7 days)',
    roomFitRecommendation: 'Nests seamlessly against sofa arms or between twin accent chairs.',
    inStock: true,
  },
  {
    id: 'soren-extendable-dining-table',
    name: 'Soren Extendable Dining Table',
    tagline: 'Generous dining table with concealed synchronous butterfly extension',
    category: 'dining',
    style: 'Scandinavian',
    price: 2450,
    dimensions: {
      width: 76, // Extends to 104
      depth: 38,
      height: 30,
      clearance: 27,
      unit: 'inches'
    },
    materials: ['Solid White Oak', 'Engineered Aluminum Gear Synchronous Mechanism', 'Organic Oil Finish'],
    primaryMaterial: 'Solid White Oak',
    finishOptions: ['White Mist Oak', 'Smoked Walnut Finish'],
    swatches: [
      { name: 'White Mist Oak', colorHex: '#D2C3B0', material: 'Solid White Oak' },
      { name: 'Deep American Walnut', colorHex: '#4A3728', material: 'Solid Walnut' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?auto=format&fit=crop&w=1000&q=80',
    ],
    description: 'Effortlessly expands from a family 6-seater (76") to an entertainer 10-seater (104") via a one-person German synchronous glide rail. Crafted from FSC-certified quarter-sawn solid oak.',
    craftsmanshipHighlights: [
      'Mortise-and-tenon apron joinery built for generations of dinner parties',
      'Butterfly leaf folds smoothly into concealed internal felt cradle',
      'Continuous matching grain pattern across the main leaves and extension panels'
    ],
    careSummary: 'Clean with damp cloth and dry immediately. Treat with food-safe wood oil every 6 months.',
    leadTime: 'In Stock (Delivered in 5–10 days)',
    roomFitRecommendation: 'Dining rooms at least 11 ft x 14 ft to comfortably accommodate chairs and rear circulation when extended.',
    inStock: true,
    featured: true,
  },
  {
    id: 'koto-cane-oak-chair',
    name: 'Koto Cane & Oak Dining Chair',
    tagline: 'Steam-bent solid oak silhouette with hand-woven French rattan cane',
    category: 'dining',
    style: 'Modern',
    price: 420,
    dimensions: {
      width: 20,
      depth: 21,
      height: 32,
      seatHeight: 18,
      unit: 'inches'
    },
    materials: ['Solid American White Oak', 'Hand-woven French Rattan Cane', 'High-Density Foam Seat with Oatmeal Linen'],
    primaryMaterial: 'Solid White Oak & Natural Rattan Cane',
    finishOptions: ['Natural Oak & Cane', 'Ebonized Black Oak & Cane'],
    swatches: [
      { name: 'Natural Oak', colorHex: '#CDBCA6', material: 'Solid Oak' },
      { name: 'Ebonized Black', colorHex: '#212121', material: 'Ebonized Oak' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1200&q=80',
    description: 'Combining timeless mid-century elegance with organic warmth, the Koto chair features a breathable hand-caned backrest that adapts flex to your posture, paired with a resilient linen seat.',
    craftsmanshipHighlights: [
      'Steam-bent solid oak back rail eliminates glued weak points',
      'Artisanal hand-woven hexagonal cane pattern with spline perimeter lock',
      'Tested to ANSI/BIFMA commercial weight standards up to 350 lbs'
    ],
    careSummary: 'Maintain slight humidity for cane to prevent dryness. Wipe wood frame with dry soft cloth.',
    leadTime: 'In Stock (Delivered in 4–7 days)',
    roomFitRecommendation: 'Standard 24" center-to-center spacing per chair at dining tables.',
    inStock: true,
    featured: true,
  },
  {
    id: 'oakhaven-6-drawer-credenza',
    name: 'Oakhaven 6-Drawer Credenza',
    tagline: 'Architectural fluted wood facings with soft-closing Blum drawer runners',
    category: 'living',
    style: 'Modern',
    price: 2150,
    dimensions: {
      width: 66,
      depth: 19,
      height: 31,
      clearance: 7,
      unit: 'inches'
    },
    materials: ['Solid American Walnut & Walnut Veneer', 'Solid Brushed Brass Pulls', 'Blum Soft-Close Runners'],
    primaryMaterial: 'Solid Walnut & Brass',
    finishOptions: ['Natural American Walnut', 'Blonde White Oak'],
    swatches: [
      { name: 'American Walnut', colorHex: '#4F3929', material: 'Solid Walnut' },
      { name: 'Blonde Oak', colorHex: '#C5B5A1', material: 'White Oak' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=80',
    description: 'Designed as a centerpiece for media, dining buffets, or executive spaces. Features hand-carved rhythmic vertical fluting, six full-extension dovetail drawers, and integrated cord management ports.',
    craftsmanshipHighlights: [
      'English dovetail jointed solid cedar drawer boxes',
      'Undermount Blumotion soft-close glides rated for 100,000 cycles',
      'Acoustic felt-lined top jewelry drawer'
    ],
    careSummary: 'Dust regularly with soft feather duster or microfiber cloth.',
    leadTime: 'In Stock (Delivered in 5–8 days)',
    roomFitRecommendation: 'Ideal for dining room sideboards or living room media consoles up to 75" screens.',
    inStock: true,
  },
  {
    id: 'celine-floating-bedframe',
    name: 'Celine Floating Bedframe',
    tagline: 'Cantilevered solid walnut platform bed with plush Belgian linen headboard',
    category: 'bedroom',
    style: 'Minimalist',
    price: 2850,
    dimensions: {
      width: 68, // Queen (King 84)
      depth: 88,
      height: 42,
      clearance: 6,
      unit: 'inches'
    },
    materials: ['Solid American Walnut', 'Belgian Oatmeal Linen', 'Kiln-Dried European Birch Slats'],
    primaryMaterial: 'Solid Walnut & Belgian Linen',
    finishOptions: ['Oatmeal Linen & Walnut', 'Charcoal Bouclé & Smoked Oak'],
    swatches: [
      { name: 'Oatmeal & Walnut', colorHex: '#D5CCBF', material: 'Belgian Linen & Walnut' },
      { name: 'Charcoal & Smoked Oak', colorHex: '#3D3C3A', material: 'Bouclé & Oak' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1540518614846-7ede433c4ef4?auto=format&fit=crop&w=1000&q=80',
    ],
    description: 'The Celine creates an effortless floating illusion with its recessed structural steel plinth. An inclined padded headboard upholstered in stone-washed Belgian linen provides ergonomic reading support.',
    craftsmanshipHighlights: [
      'Concealed recessed pedestal base creates true floating aesthetic without sacrificing rigidity',
      'Multi-zone bowed birch slat system provides dynamic spine support (no box spring required)',
      'Removable, cleanable zippered headboard slipcover'
    ],
    careSummary: 'Vacuum linen headboard with soft brush attachment. Spot clean with mild solvent-based cleaner.',
    leadTime: 'In Stock (Delivered in 5–10 days)',
    roomFitRecommendation: 'Requires 12 ft x 14 ft bedroom space for Queen, 14 ft x 16 ft for King.',
    inStock: true,
    featured: true,
  },
  {
    id: 'nora-floating-nightstand',
    name: 'Nora Floating Nightstand',
    tagline: 'Minimalist wall-mounted bedside console with concealed cord aperture',
    category: 'bedroom',
    style: 'Minimalist',
    price: 480,
    dimensions: {
      width: 22,
      depth: 16,
      height: 14,
      unit: 'inches'
    },
    materials: ['Solid American Walnut', 'Dovetail Drawer Joinery', 'Heavy-Duty French Cleat Mounting System'],
    primaryMaterial: 'Solid Walnut',
    finishOptions: ['Natural Walnut', 'Pale Oak'],
    swatches: [
      { name: 'Natural Walnut', colorHex: '#4E3A2B', material: 'Solid Walnut' },
      { name: 'Pale Oak', colorHex: '#C5B7A4', material: 'Solid Oak' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=1200&q=80',
    description: 'Keep floor space uncluttered and clean. The Nora mounts flush to the wall with our heavy-gauge aluminum French cleat bracket (holds up to 80 lbs). Includes a hidden rear notch for phone charging cables.',
    craftsmanshipHighlights: [
      'Aircraft-grade aluminum French cleat mounting included',
      'Solid hardwood drawer box on smooth push-to-open concealed slides'
    ],
    careSummary: 'Wipe with soft lint-free cloth.',
    leadTime: 'In Stock (Delivered in 3–5 days)',
    roomFitRecommendation: 'Mount at 22" to 26" from floor depending on mattress height.',
    inStock: true,
  },
  {
    id: 'aris-executive-standing-desk',
    name: 'Aris Executive Standing Desk',
    tagline: 'Solid slab walnut desktop with whisper-quiet dual German linear actuators',
    category: 'office',
    style: 'Modern',
    price: 1650,
    dimensions: {
      width: 60,
      depth: 30,
      height: 26, // Lifts up to 50"
      unit: 'inches'
    },
    materials: ['Solid American Walnut Top (1.5" thickness)', 'Cold-Rolled Steel Frame', 'Dual German Electric Motors'],
    primaryMaterial: 'Solid Walnut & Powder-Coated Steel',
    finishOptions: ['Solid Walnut & Matte Black Steel', 'White Oak & Warm White Steel'],
    swatches: [
      { name: 'Solid Walnut / Black', colorHex: '#49372B', material: 'Walnut & Steel' },
      { name: 'White Oak / White', colorHex: '#C0B3A0', material: 'Oak & Steel' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1200&q=80',
    description: 'Elevate your daily focus. The Aris marries a 1.5-inch continuous slab of solid walnut with medical-grade dual motors that transition seamlessly at under 45 decibels. Features 4 digital memory presets and collision detection.',
    craftsmanshipHighlights: [
      'Hand-routed beveled comfort edge reduces wrist fatigue',
      'Dual motors with 320 lb dynamic lift capacity',
      'Integrated under-desk power strip raceway and steel wire management tray'
    ],
    careSummary: 'Wipe desktop with natural wood conditioner. Motors require zero maintenance.',
    leadTime: 'In Stock (Delivered in 5–8 days)',
    roomFitRecommendation: 'Needs minimum 6 ft wall span. Maintain 3 ft of chair clearance behind desk.',
    inStock: true,
    featured: true,
  },
  {
    id: 'form-ergonomic-swivel-chair',
    name: 'Form Ergonomic Swivel Chair',
    tagline: 'Italian glove leather office chair with calibrated dynamic synchronous tilt',
    category: 'office',
    style: 'Modern',
    price: 1120,
    dimensions: {
      width: 26,
      depth: 26,
      height: 40,
      seatHeight: 18,
      unit: 'inches'
    },
    materials: ['Full-Grain Italian Aniline Glove Leather', 'Cast Polished Aluminum Frame', 'Pneumatic Class-4 Gas Cylinder'],
    primaryMaterial: 'Full-Grain Italian Leather & Cast Aluminum',
    finishOptions: ['Espresso Black Leather', 'Cognac Tan Leather', 'Chalk Ivory Leather'],
    swatches: [
      { name: 'Espresso Black', colorHex: '#1E1D1C', material: 'Full-Grain Leather' },
      { name: 'Cognac Tan', colorHex: '#8C5230', material: 'Full-Grain Leather' },
      { name: 'Chalk Ivory', colorHex: '#ECE7DD', material: 'Full-Grain Leather' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1580481077195-c3f25c793ff0?auto=format&fit=crop&w=1200&q=80',
    description: 'Engineered for 12+ hour seated comfort without the plastic aesthetic of typical task chairs. Clad in buttery Italian glove leather that will age into a gorgeous patina.',
    craftsmanshipHighlights: [
      'Synchronous self-weighing tilt mechanism automatically adjusts resistance to body weight',
      'Integrated lumbar support with micro-cushioning for lumbar disc pressure relief',
      'Soft-wheel casters safe for both hardwood floors and plush carpets'
    ],
    careSummary: 'Apply leather cream twice annually to preserve softness and prevent creasing.',
    leadTime: 'In Stock (Delivered in 4–7 days)',
    roomFitRecommendation: 'Complements executive desks from 48" to 72" in width.',
    inStock: true,
    featured: true,
  },
  {
    id: 'kyoto-solid-oak-bookshelf',
    name: 'Kyoto Solid Oak Bookshelf',
    tagline: 'Architectural open shelving unit celebrating traditional Japanese joinery',
    category: 'office',
    style: 'Japandi',
    price: 1750,
    dimensions: {
      width: 42,
      depth: 14,
      height: 78,
      unit: 'inches'
    },
    materials: ['Solid American White Oak', 'Hand-Crafted Mortise and Tenon Joints'],
    primaryMaterial: 'Solid White Oak',
    finishOptions: ['Natural Blonde Oak', 'Ebonized Black Oak'],
    swatches: [
      { name: 'Natural Blonde Oak', colorHex: '#CCBCAB', material: 'Solid Oak' },
      { name: 'Ebonized Black', colorHex: '#1F1F1F', material: 'Solid Oak' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1200&q=80',
    description: 'Designed as a sculptural divider or wall unit. Five asymmetrical display tiers crafted entirely from solid oak without visible hardware or screws.',
    craftsmanshipHighlights: [
      'Authentic mortise-and-tenon wood peg joinery',
      'Includes concealed anti-tip wall anchoring safety kit',
      'Reinforced solid hardwood shelves support up to 75 lbs per level'
    ],
    careSummary: 'Dust with soft micro-fiber cloth.',
    leadTime: 'In Stock (Delivered in 5–8 days)',
    roomFitRecommendation: 'Requires 8 ft ceiling height minimum. Excellent as an airy room partition.',
    inStock: true,
  },
  {
    id: 'solstice-teak-outdoor-lounge',
    name: 'Solstice Teak Outdoor Lounge Set',
    tagline: 'Grade-A sustainably harvested teak with water-shedding Sunbrella upholstery',
    category: 'outdoor',
    style: 'Scandinavian',
    price: 2800,
    dimensions: {
      width: 82,
      depth: 34,
      height: 28,
      seatHeight: 15,
      unit: 'inches'
    },
    materials: ['Grade-A SVLK Certified Indonesian Teak', 'Sunbrella Marine-Grade Performance Fabric', 'Quick-Dry Reticulated Foam'],
    primaryMaterial: 'Grade-A Teak & Sunbrella',
    finishOptions: ['Natural Teak with Sand Cushion', 'Weathered Grey Teak with Charcoal Cushion'],
    swatches: [
      { name: 'Sand Sunbrella', colorHex: '#E2DBD0', material: 'Sunbrella Acrylic' },
      { name: 'Charcoal Sunbrella', colorHex: '#3E3E3E', material: 'Sunbrella Acrylic' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1519974719765-e6559eac2575?auto=format&fit=crop&w=1200&q=80',
    description: 'Built to withstand torrential rain, saltwater air, and scorching UV. High natural oil content protects the teak, which naturally patinas into a silvery-grey over time if left untreated.',
    craftsmanshipHighlights: [
      'SVLK-certified plantation-grown Grade-A teak heartwood',
      'Marine-grade 316 stainless steel internal fasteners',
      'Open-cell reticulated foam cushions allow water to drain instantly without mildew'
    ],
    careSummary: 'Hose down cushions with fresh water. Allow teak to weather to silver grey naturally, or oil annually with teak sealer to maintain golden hue.',
    leadTime: 'In Stock (Delivered in 5–10 days)',
    roomFitRecommendation: 'Outdoor terraces, patios, or poolside decks at least 10 ft x 12 ft.',
    inStock: true,
    featured: true,
  },
  {
    id: 'dune-fluted-concrete-fire-table',
    name: 'Dune Fluted Concrete Fire Table',
    tagline: 'Hand-cast architectural concrete fire table with lava stone bed',
    category: 'outdoor',
    style: 'Minimalist',
    price: 1450,
    dimensions: {
      width: 42,
      depth: 42,
      height: 16,
      unit: 'inches'
    },
    materials: ['Glass-Fiber Reinforced Concrete (GFRC)', 'Volcanic Black Lava Rock', 'Stainless Steel Burner (65,000 BTU)'],
    primaryMaterial: 'GFRC Concrete & Stainless Steel',
    finishOptions: ['Bone Concrete', 'Basalt Charcoal Concrete'],
    swatches: [
      { name: 'Bone Concrete', colorHex: '#D7D2CA', material: 'GFRC Concrete' },
      { name: 'Basalt Charcoal', colorHex: '#353535', material: 'GFRC Concrete' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    description: 'Transform your outdoor evenings. Hand-cast from lightweight glass-fiber reinforced concrete that will not crack or pit. Produces up to 65,000 BTU of clean warmth with push-button electronic spark ignition.',
    craftsmanshipHighlights: [
      'Commercial-grade 65,000 BTU 304-stainless steel burner ring',
      'CSA-certified electronic flame sensor and emergency auto shutoff',
      'Includes custom all-weather protective canvas cover'
    ],
    careSummary: 'Cover with included weather cover when completely cooled. Clean exterior with warm soapy water.',
    leadTime: 'In Stock (Delivered in 5–8 days)',
    roomFitRecommendation: 'Maintain 48" clearance from combustible materials overhead and perimeter.',
    inStock: true,
  },
  {
    id: 'ravello-leather-club-chair',
    name: 'Ravello Leather Club Chair',
    tagline: 'Hand-burnished cognac aniline leather with relaxed down-blend deep seat',
    category: 'living',
    style: 'Traditional',
    price: 1890,
    dimensions: {
      width: 36,
      depth: 38,
      height: 34,
      seatHeight: 17.5,
      unit: 'inches'
    },
    materials: ['Full-Grain Italian Aniline Leather', 'Kiln-Dried Hardwood Frame', 'Feather & Down Cushioning'],
    primaryMaterial: 'Cognac Aniline Leather',
    finishOptions: ['Burnished Cognac', 'Espresso Dark Chocolate', 'Olive Nubuck'],
    swatches: [
      { name: 'Burnished Cognac', colorHex: '#8C4E28', material: 'Aniline Leather' },
      { name: 'Espresso', colorHex: '#2E2219', material: 'Aniline Leather' },
      { name: 'Olive Nubuck', colorHex: '#4E5343', material: 'Nubuck Leather' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80',
    description: 'The quintessential library club chair re-imagined with sleeker lines. Every hide is hand-waxed by Italian tanners to highlight individual character markings and will deepen into a rich, storied patina.',
    craftsmanshipHighlights: [
      'Hand-tied 8-way spring base for supple cradle comfort',
      'Feather and down-proof ticking encasement',
      'Solid walnut tapered block feet'
    ],
    careSummary: 'Dust with soft dry cloth. Condition every 6 to 12 months with natural leather wax.',
    leadTime: 'In Stock (Delivered in 5–7 days)',
    roomFitRecommendation: 'Perfect for living room corners, study rooms, or next to the Calder Coffee Table.',
    inStock: true,
  }
];

export const STYLE_GUIDES = [
  {
    style: 'Scandinavian',
    tagline: 'Light hardwoods, soft tactile wools, and intentional simplicity',
    palette: ['#FAF8F5', '#EFE9DE', '#C5B5A1', '#6B7B6E', '#2B2623'],
    keyMaterials: 'Light White Oak, Danish Melange Wool, Natural Cane, Brushed Brass',
    rule: 'Prioritize natural daylight, functional warmth (hygge), and uncluttered sightlines.',
    recommendedPieces: ['Astrid Modular Sectional', 'Soren Extendable Dining Table', 'Vesterbro Wool Lounge Chair']
  },
  {
    style: 'Modern Minimalist',
    tagline: 'Architectural silhouettes, raw organic stone, and calm balance',
    palette: ['#FAF8F5', '#DFD8CC', '#9E8254', '#523C2C', '#1E1B18'],
    keyMaterials: 'Roman Travertine, American Walnut, Belgian Linen, Honed Marble',
    rule: 'Every object must have purpose and breathing room. Embrace negative space and tactile textures over ornamentation.',
    recommendedPieces: ['Calder Walnut Coffee Table', 'Merano Travertine Side Table', 'Celine Floating Bedframe']
  },
  {
    style: 'Japandi',
    tagline: 'The confluence of Scandinavian utility and Japanese wabi-sabi elegance',
    palette: ['#F5EFE6', '#D6C7B2', '#7D7063', '#3F3B36', '#1E1D1B'],
    keyMaterials: 'Solid White Oak, French Rattan Cane, Blackened Iron, Raw Stoneware',
    rule: 'Celebrate natural imperfections, low seating heights, and honest wooden joinery.',
    recommendedPieces: ['Kyoto Solid Oak Bookshelf', 'Koto Cane & Oak Dining Chair', 'Nora Floating Nightstand']
  },
  {
    style: 'Refined Traditional',
    tagline: 'Enduring heritage, burnished aniline leathers, and deep walnut finishes',
    palette: ['#F7F3EC', '#8C4E28', '#4A3728', '#2D3A30', '#1C1917'],
    keyMaterials: 'Full-Grain Hand-Burnished Leather, Fluted American Walnut, Solid Brass',
    rule: 'Invest in heirloom craftsmanship, balanced symmetry, and materials that develop patina over decades.',
    recommendedPieces: ['Ravello Leather Club Chair', 'Oakhaven 6-Drawer Credenza', 'Calder Walnut Coffee Table']
  }
];

export const STORE_POLICIES = {
  whiteGloveDelivery: {
    title: 'White-Glove Delivery & Installation',
    summary: 'Complimentary on all orders over $2,000 (flat $149 for orders below $2,000).',
    details: [
      'Appointment-based delivery with 2-hour arrival window notification.',
      'Two-person specialized furniture logistics crew.',
      'Placement in your exact room of choice (up to 3 flights of stairs included).',
      'Complete uncrating, hardware assembly, and inspection.',
      'Full removal and eco-friendly recycling of all packaging materials.'
    ]
  },
  trialAndReturns: {
    title: '100-Night In-Home Trial',
    summary: 'Live with your Standard Furnitures pieces in your home for 100 days.',
    details: [
      'Take 100 nights to test the comfort, scale, and lighting in your living space.',
      'If not completely satisfied, we arrange pickup directly from your home.',
      'Full refund issued to original payment method without restocking penalties.'
    ]
  },
  warranty: {
    title: '10-Year Craftsmanship Guarantee',
    summary: 'We build heirloom furniture engineered to endure everyday life.',
    details: [
      'Full structural coverage on solid hardwood frames, mortise-and-tenon joints, and steel spring systems.',
      '3-year warranty on electronic motors and mechanical components (standing desks, extension rails).',
      'Complimentary hardware replacement and joint servicing kits available upon request.'
    ]
  },
  customUpholstery: {
    title: 'Bespoke Made-to-Order Lead Times',
    summary: 'Handcrafted in North Carolina workshops in 4–6 weeks.',
    details: [
      'Choose from over 48 commercial-grade performance fabrics and Italian leathers.',
      'Complimentary box of 5 fabric swatches delivered in 24–48 hours.',
      'Custom sectional configurations and timber stain matching available via AI consultant.'
    ]
  }
};
