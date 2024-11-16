import React from 'react';
import Link from 'next/link';
import { FaRegHeart, FaRegUser } from 'react-icons/fa';
import { BsCurrencyExchange } from "react-icons/bs";
import { IoCartOutline } from 'react-icons/io5';
import { MdOutlineMenuOpen } from "react-icons/md";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { TbUserPentagon } from "react-icons/tb";
import { LiaWalletSolid } from "react-icons/lia";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between border-b-[1px] border-[#f9f3e5] items-center py-4 px-6 sm:px-36 bg-[#2d2a27] text-white text-sm">
        {/* Left side logo */}
        <div className="font-black text-2xl flex items-center gap-5">
          <div className="LogoText">
            <Link href="/">EX<span className='text-[#e09800]'>Crypto</span></Link>
          </div>
        </div>

        {/* Center menu items - hidden on small screens */}
        <div className="hidden sm:block">
          <div className="flex justify-center items-center gap-5">
            <ul className="flex gap-8 text-xl font-medium">
            <Link href="/favorite"><li><BsCurrencyExchange /></li></Link>
          <Link href="/addToCart"><li><TbDeviceDesktopAnalytics /></li></Link>
          <Link href="/about"><li ><LiaWalletSolid /></li></Link>
          <Link href="/about"><li ><TbUserPentagon /></li></Link>
            </ul>
          </div>
        </div>

        {/* Right side icons */}
        <ul className="flex gap-5 text-xl pl-2 items-center sm:hidden">
          <Link href="/favorite"><li><BsCurrencyExchange /></li></Link>
          <Link href="/addToCart"><li><TbDeviceDesktopAnalytics /></li></Link>
          <Link href="/about"><li ><LiaWalletSolid /></li></Link>
          <Link href="/about"><li ><TbUserPentagon /></li></Link>

        </ul>

        {/* Mobile menu - Hamburger icon */}
        <div className="block sm:hidden">
          <Sheet>
            <SheetTrigger>
             <MdOutlineMenuOpen className='text-3xl mt-2'/>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>
                  {/* Mobile menu links */}
                  <div className="flex flex-col items-start gap-6 pt-8 text-sm font-semibold">
                    <SheetClose asChild><Link href="/">Home</Link></SheetClose>
                    <SheetClose asChild><Link href="/about">About</Link></SheetClose>
                    <SheetClose asChild><Link href="/contactus">Contact</Link></SheetClose>
                    <SheetClose asChild><Link href="/blog">Blog</Link></SheetClose>
                  </div>

                  {/* Icons in mobile menu */}
                  <div className="flex gap-6 text-xl  pt-3">
                    <SheetClose asChild><Link href="/favorite"><FaRegHeart /></Link></SheetClose>
                    <SheetClose asChild><Link href="/addToCart"><IoCartOutline /></Link></SheetClose>
                    <SheetClose asChild><Link href="/about"><FaRegUser /></Link></SheetClose>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>

        {/* Connect Wallet Link */}
        <div className="hidden sm:block">
          <Link href="/" className="text-[#e09800] font-semibold">Connect Wallet</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
