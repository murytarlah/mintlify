import React from 'react';
import Logo from './Logo';
import NavLink from './NavLink';

const Header: React.FC = () => {
	return (
		<header className="sticky top-0 z-50">
			<nav className="flex justify-between items-center py-9 px-8 w-full mx-auto lg:w-[1024px] h-full lg:h-">
				{/* Logo */}
				<Logo />
				
				{/* Center - NavLinks */}
				<div className="flex items-center space-x-7">
					<NavLink href="/documentation" text="Documentation" />
					<NavLink href="/customers" text="Customers" />
					<NavLink href="/pricing" text="Pricing" />
					<NavLink href="/blog" text="Blog" />
					<NavLink href="/preview" text="Preview" />
					<NavLink href="/demo" text="Demo" />
				</div>

				{/* Right Side - Action Buttons */}
				<div className="flex items-center space-x-4">
					<NavLink href="/login" text="Sign In" />
				</div>
			</nav>
		</header>
	);
};

export default Header;
