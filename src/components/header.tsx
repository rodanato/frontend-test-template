import React from 'react';
import Link from 'next/link';
import Image from "next/image";

export default function Header() {
  return(
    <header className='bg-gray px-4 xl:p-0'>
      <div className='mx-auto max-w-7xl h-16 flex items-center text-darkgray justify-between'>
        <Link href="/">
          <h4 className='text-2xl'>GamerShop</h4>
        </Link>

        <Link href="/cart">
          <Image
            width="24"
            height="24"
            src="/cart.png"
            alt="Cart icon"
          />
        </Link>
      </div>
    </header>
  );
}