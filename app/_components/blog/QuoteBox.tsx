import React from "react";

interface QuoteBoxProps {
  quote?: string;
}

const QuoteBox: React.FC<QuoteBoxProps> = ({ quote }) => {
  if (!quote) return null;

  return (
    <div className="w-full flex justify-center mt-20">
      <div className="bg-[#EEF2FF] text-[#EFBF04] text-[18px] italic px-6 py-4 max-w-4xl rounded-md font-medium text-center leading-relaxed">
        <span className="text-[22px] font-serif">“</span>
        {quote}
        <span className="text-[22px] font-serif">”</span>
      </div>
    </div>
  );
};

export default QuoteBox;
