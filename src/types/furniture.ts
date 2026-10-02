export type RoomCategory = 'all' | 'living' | 'dining' | 'bedroom' | 'office' | 'outdoor';

export type FurnitureStyle = 'Modern' | 'Scandinavian' | 'Minimalist' | 'Industrial' | 'Traditional' | 'Japandi';

export interface ProductSwatch {
  name: string;
  colorHex: string;
  material: string;
}

export interface FurnitureProduct {
  id: string;
  name: string;
  tagline: string;
  category: RoomCategory;
  style: FurnitureStyle;
  price: number;
  dimensions: {
    width: number;
    depth: number;
    height: number;
    seatHeight?: number;
    clearance?: number;
    unit: 'inches';
  };
  materials: string[];
  primaryMaterial: string;
  finishOptions: string[];
  swatches: ProductSwatch[];
  imageUrl: string;
  additionalImages?: string[];
  description: string;
  craftsmanshipHighlights: string[];
  careSummary: string;
  leadTime: string;
  roomFitRecommendation: string;
  inStock: boolean;
  featured?: boolean;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
  suggestedProducts?: string[]; // Product IDs or names
  clarificationChips?: string[];
}

export interface RoomPlanConfig {
  roomType: 'living' | 'dining' | 'bedroom' | 'office' | 'outdoor';
  widthFeet: number;
  lengthFeet: number;
  primaryStyle: FurnitureStyle;
  budgetCap: number;
  hasPetsOrChildren: boolean;
}
