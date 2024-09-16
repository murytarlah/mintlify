import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  rounded?: 'sm' | 'md' | 'lg' | 'full';
  href: string;
  children: React.ReactNode;
  classes?: string;
}

const Button: React.FC<ButtonProps> = ({rounded, href, classes, children }) => {
  const baseClasses = "px-3 py-2 flex gap-2 items-center w-max font-semibold transition duration-300";

  const roundedVariant = rounded === 'sm' ? 'rounded-sm' : rounded === 'md' ? 'rounded-md' : rounded === 'lg' ? 'rounded-lg' : rounded === 'full' ? 'rounded-full' : '';

  const buttonClasses = `${roundedVariant} ${baseClasses} ${classes || ''}`;

  return (
    <Link href={href} className={buttonClasses}>
      {children}
      
    </Link>
  );
};

export default Button;
