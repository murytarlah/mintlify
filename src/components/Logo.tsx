import React from 'react';
import Image from 'next/image'; // Next.js optimization for images
import Link from 'next/link';
import logo from '@/assets/logo.svg';

interface LogoProps {
	width?: number;
	height?: number;
}

const Logo: React.FC<LogoProps> = ({ width = 100, height = 40 }) => {
	return (
		<Link href="/">
			<Image
				src={logo}
				alt="Company Logo"
				width={width}
				height={height}
				priority
			/>
		</Link>
	);
};

export default Logo;
