import { Quote } from 'lucide-react';

interface QuoteDisplayProps {
  quote: string;
}

export const QuoteDisplay = ({ quote }: QuoteDisplayProps) => {
  if (!quote) return null;

  return (
    <div className="glass-card rounded-2xl p-6 animate-float">
      <div className="flex items-start space-x-4">
        <Quote className="text-white/60 mt-1 flex-shrink-0" size={24} />
        <blockquote className="text-lg text-white/90 italic font-medium leading-relaxed">
          {quote}
        </blockquote>
      </div>
    </div>
  );
};