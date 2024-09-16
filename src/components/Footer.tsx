import Link from 'next/link';
import Image from 'next/image';
import NavLink from './NavLink';
import Logo from './Logo';


import Twitter from '@/assets/Twitter.svg';
import Github from '@/assets/Github.svg';
import Slack from '@/assets/Slack.svg';
import Dark from '@/assets/Dark.svg';
import Brightness from '@/assets/Brightness.svg';
import Desktop from '@/assets/Desktop.svg';

export default function Footer() {
    return (
        <footer className="w-full mx-auto lg:w-[896px] flex flex-col gap-y-12 md:gap-y-16 p-5">
            <main className='grid grid-cols-2 md:grid-flow-col md:grid-rows-[100px_1fr] md:grid-cols-4 justify-center gap-y-10 lg:gap-y-0'>
                <div className='justify-between col-span-2'>
                    <Logo />
                </div>
                <div className='flex items-end gap-x-8 md:col-span-2 row-start-3 md:row-start-2'>
                    <Link href='/'>
                        <Image src={Twitter} alt='Twitter logo' width={24} height={24} />
                    </Link>
                    <Link href='/'>
                        <Image src={Github} alt='GitHub Logo' width={24} height={24} />
                    </Link>
                    <Link href='/'>
                        <Image src={Slack} alt='Slack Logo' width={24} height={24} />
                    </Link>
                </div>
                <div className="flex flex-col gap-5 md:rows-span-2">
                    <h3 className=''>Product</h3>
                    <div className="flex flex-col gap-y-3.5">
                        <NavLink classNames='text-[#6B7280]' href="/documentation" text="Documentation" />
                        <NavLink classNames='text-[#6B7280]' href="/pricing" text="Pricing" />
                        <NavLink classNames='text-[#6B7280]' href="/preview" text="Preview" />
                        <NavLink classNames='text-[#6B7280]' href="/demo" text="Demo" />
                    </div>
                </div>
                <div className="flex flex-col gap-5 md:row-span-2">
                    <h3 className=''>Company</h3>
                    <div className="flex flex-col gap-y-3.5">
                        <NavLink classNames='text-[#6B7280]' href="/customers" text="Customers" />
                        <NavLink classNames='text-[#6B7280]' href="/careers" text="Careers" />
                        <NavLink classNames='text-[#6B7280]' href="/blog" text="Blog" />
                        <NavLink classNames='text-[#6B7280]' href="/security" text="Security" />
                    </div>
                </div>
            </main>
            <div className='flex flex-col gap-y-5 md:flex-row justify-between md:h-20 md:items-end'>
                <p className='flex items-center gap-x-2 px-2.5 rounded-full border w-max'>
                    <span className='w-2.5 h-2.5 bg-[#F0FDF4] flex items-center justify-center rounded-full'>
                        <span className='w-1 h-1 bg-[#22C55E] rounded-full'></span>
                    </span>
                    All systems normal
                </p>

                <p className='text-[#6B7280]'>© 2024 Mintlify, Inc.</p>

                <div className='flex items-end gap-x-8 md:col-span-2 row-start-3'>
                    <Link href='/'>
                        <Image src={Desktop} alt='Twitter logo' width={24} height={24} />
                    </Link>
                    <Link href='/'>
                        <Image src={Brightness} alt='GitHub Logo' width={24} height={24} />
                    </Link>
                    <Link href='/'>
                        <Image src={Dark} alt='Slack Logo' width={24} height={24} />
                    </Link>
                </div>
            </div>
        </footer>
    )
}