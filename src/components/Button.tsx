import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  variant: 'primary' | 'secondary';
  href: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant, href, children }) => {
  const baseClasses = "px-4 py-2 font-semibold rounded-lg transition duration-300";

  const variantClasses =
    variant === 'primary'
      ? 'bg-blue-600 text-white hover:bg-blue-700'
      : 'bg-gray-200 text-gray-900 hover:bg-gray-300';

  return (
    <Link href={href} className={`${baseClasses} ${variantClasses}`}>
        {children}
    </Link>
  );
};

export default Button;
