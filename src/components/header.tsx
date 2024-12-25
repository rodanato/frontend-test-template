import Link from 'next/link';
import React from 'react';

export default function Header() {
  return(
    <header className='bg-gray px-4 xl:p-0'>
      <div className='mx-auto max-w-7xl h-16 flex items-center text-darkgray'>
        <Link href="/">
          <h4 className='text-2xl'>GamerShop</h4>
        </Link>

        {/* CART COMPONENT */}
        <Link href="/cart">
          {/* <Image
            width="170"
            height="44"
            src="/footer-logo.png"
            alt="Apply Digital logo"
          /> */}
        </Link>
      </div>
    </header>
  );
}