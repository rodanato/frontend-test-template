import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-darkgray">
      <div className="mx-auto max-w-7xl h-[172px] flex items-center justify-center">
        <Link href="/">
          <Image
            width="170"
            height="44"
            src="/footer-logo.png"
            alt="Apply Digital logo"
          />
        </Link>
      </div>
    </footer>
  );
}
