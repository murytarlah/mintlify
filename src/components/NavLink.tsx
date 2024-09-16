import React from 'react';
import Link from 'next/link';

interface NavLinkProps {
	href: string;
	text: string;
	classNames?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, text, classNames }) => {
	return (
		<Link href={href} className={classNames}>
			{text}
		</Link>
	);
};

export default NavLink;
