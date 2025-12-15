import React from 'react';

const Span = ({ children, variant = 'option_txt', className = '' }) => {

  // Define specific styles for each variant
  const variants = {
    option_txt: "flex h-8 w-8 items-center justify-center rounded-lg border-2 border-black bg-neutral-200 font-bold text-black"
  };

  return (
    <span className={`${variants[variant]} ${className}`}>{children}</span>
  );
};

export default Span;