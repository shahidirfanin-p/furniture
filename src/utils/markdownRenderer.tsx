import React from 'react';
import { FURNITURE_CATALOG } from '../data/furnitureData';
import { FurnitureProduct } from '../types/furniture';

interface MarkdownRendererProps {
  content: string;
  onSelectProduct?: (product: FurnitureProduct) => void;
  onSendReply?: (text: string) => void;
}

export function MarkdownRenderer({ content, onSelectProduct, onSendReply }: MarkdownRendererProps) {
  // Split lines into blocks (tables, headings, lists, paragraphs)
  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];

  let i = 0;
  while (i < lines.length) {
    const line = lines[i];

    // Check if this line starts a Markdown table (starts and contains |)
    if (line.trim().startsWith('|') && line.includes('|') && i + 1 < lines.length && lines[i + 1].includes('|-')) {
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith('|')) {
        tableLines.push(lines[i].trim());
        i++;
      }

      if (tableLines.length >= 2) {
        const headerCells = tableLines[0]
          .split('|')
          .slice(1, -1)
          .map((c) => c.trim());
        const bodyRows = tableLines.slice(2).map((rowLine) =>
          rowLine
            .split('|')
            .slice(1, -1)
            .map((c) => c.trim())
        );

        elements.push(
          <div key={`table-${i}`} className="my-4 overflow-x-auto rounded-lg border border-[#E4DDD3] bg-white shadow-xs">
            <table className="w-full text-left text-xs md:text-sm">
              <thead className="bg-[#F6F2EC] text-[#2C2621] uppercase tracking-wider text-[11px] font-semibold border-b border-[#E4DDD3]">
                <tr>
                  {headerCells.map((header, idx) => (
                    <th key={idx} className="px-4 py-3 font-medium">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EBE5DB]">
                {bodyRows.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-[#FAF8F5] transition-colors">
                    {row.map((cell, cIdx) => (
                      <td key={cIdx} className="px-4 py-2.5 text-[#3D3731]">
                        {renderInlineFormattedText(cell, onSelectProduct)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
        continue;
      }
    }

    // Headings
    if (line.startsWith('### ')) {
      elements.push(
        <h3 key={`h3-${i}`} className="text-base font-semibold text-[#231B15] mt-4 mb-2 tracking-tight">
          {renderInlineFormattedText(line.replace('### ', ''), onSelectProduct)}
        </h3>
      );
      i++;
      continue;
    }

    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={`h2-${i}`} className="text-lg font-serif font-bold text-[#1E1813] mt-5 mb-2 border-b border-[#EAE3D8] pb-1">
          {renderInlineFormattedText(line.replace('## ', ''), onSelectProduct)}
        </h2>
      );
      i++;
      continue;
    }

    if (line.startsWith('# ')) {
      elements.push(
        <h1 key={`h1-${i}`} className="text-xl font-serif font-bold text-[#1A1512] mt-6 mb-3">
          {renderInlineFormattedText(line.replace('# ', ''), onSelectProduct)}
        </h1>
      );
      i++;
      continue;
    }

    // Bullet points
    if (line.trim().startsWith('- ') || line.trim().startsWith('* ')) {
      const listItems: string[] = [];
      while (i < lines.length && (lines[i].trim().startsWith('- ') || lines[i].trim().startsWith('* '))) {
        listItems.push(lines[i].trim().replace(/^[-*]\s+/, ''));
        i++;
      }

      elements.push(
        <ul key={`ul-${i}`} className="my-2.5 space-y-1.5 pl-2">
          {listItems.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-sm leading-relaxed text-[#352F29]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C2A676] mt-2 shrink-0" />
              <div>{renderInlineFormattedText(item, onSelectProduct)}</div>
            </li>
          ))}
        </ul>
      );
      continue;
    }

    // Numbered list
    if (/^\d+\.\s/.test(line.trim())) {
      const listItems: string[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i].trim())) {
        listItems.push(lines[i].trim().replace(/^\d+\.\s+/, ''));
        i++;
      }

      elements.push(
        <ol key={`ol-${i}`} className="my-2.5 space-y-1.5 pl-2 list-decimal list-inside text-sm leading-relaxed text-[#352F29]">
          {listItems.map((item, idx) => (
            <li key={idx} className="text-[#352F29]">
              <span className="pl-1">{renderInlineFormattedText(item, onSelectProduct)}</span>
            </li>
          ))}
        </ol>
      );
      continue;
    }

    // Empty line
    if (!line.trim()) {
      elements.push(<div key={`empty-${i}`} className="h-2" />);
      i++;
      continue;
    }

    // Normal paragraph
    elements.push(
      <p key={`p-${i}`} className="text-sm leading-relaxed text-[#3A332C] my-1.5">
        {renderInlineFormattedText(line, onSelectProduct)}
      </p>
    );
    i++;
  }

  // Detect catalog products mentioned in the content for quick preview cards
  const detectedProducts = FURNITURE_CATALOG.filter((p) =>
    content.toLowerCase().includes(p.name.toLowerCase())
  );

  return (
    <div className="space-y-1 text-sm">
      {elements}

      {/* Render detected product preview chips if any */}
      {detectedProducts.length > 0 && onSelectProduct && (
        <div className="mt-4 pt-3 border-t border-[#E8DFD3]/60">
          <div className="text-[11px] font-semibold tracking-wider uppercase text-[#8A7969] mb-2 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#C2A676]" />
            Referenced Standard Furnitures Pieces:
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {detectedProducts.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => onSelectProduct(p)}
                className="flex items-center gap-3 p-2 rounded-lg border border-[#E3DBD0] bg-white hover:border-[#C2A676] hover:shadow-xs transition-all text-left group cursor-pointer"
              >
                <img
                  src={p.imageUrl}
                  alt={p.name}
                  className="w-12 h-12 object-cover rounded shrink-0 group-hover:scale-105 transition-transform"
                />
                <div className="min-w-0 flex-1">
                  <div className="font-medium text-xs text-[#221C16] truncate group-hover:text-[#9E8254] transition-colors">
                    {p.name}
                  </div>
                  <div className="text-[11px] text-[#7A6E63] truncate">
                    ${p.price.toLocaleString()} • {p.dimensions.width}"W × {p.dimensions.depth}"D
                  </div>
                </div>
                <span className="text-[11px] text-[#9E8254] font-medium pr-1 group-hover:translate-x-0.5 transition-transform">
                  View →
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// Helper to render bold text, italics, and product highlights inline
function renderInlineFormattedText(text: string, onSelectProduct?: (product: FurnitureProduct) => void): React.ReactNode {
  // Regex to split by bold **text**
  const parts = text.split(/(\*\*.*?\*\*)/g);

  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      const boldText = part.slice(2, -2);

      // Check if bold text exactly matches a catalog product
      const matchedProduct = FURNITURE_CATALOG.find(
        (p) => p.name.toLowerCase() === boldText.trim().toLowerCase()
      );

      if (matchedProduct && onSelectProduct) {
        return (
          <button
            key={index}
            type="button"
            onClick={() => onSelectProduct(matchedProduct)}
            className="inline-flex items-center gap-1 font-semibold text-[#8F6F39] hover:underline underline-offset-2 decoration-[#C2A676] cursor-pointer"
            title={`View ${matchedProduct.name} specs`}
          >
            <span>{boldText}</span>
            <span className="text-[10px] bg-[#F2EDE4] text-[#7A6448] px-1 py-0.5 rounded border border-[#DECDBB]">
              ${matchedProduct.price}
            </span>
          </button>
        );
      }

      return (
        <strong key={index} className="font-semibold text-[#1C1611]">
          {boldText}
        </strong>
      );
    }
    return part;
  });
}
