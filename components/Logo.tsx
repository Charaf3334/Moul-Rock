import { cn } from '@/lib/utils'
import React from 'react'
import Link from "next/link"

export const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href={"/"} className='inline-flex'>
      <h2 className={cn(
        "text-2xl text-shop_dark_red font-black tracking-wider uppercase hover:text-shop_light_red hoverEffect group font-sans",
        className
      )}>
        Moul-Roc<span className='text-shop_light_red group-hover:text-shop_dark_red hoverEffect'>k</span>
      </h2>
    </Link>
  );
}

export const Logo2 = ({ className }: { className?: string }) => {
  return (
    <Link href={"/"}>
      <h2 className={cn(
        "text-2xl text-white font-black tracking-wider uppercase hover:text-shop_light_red hoverEffect group font-sans",
        className
      )}>
        Moul-Roc<span className='text-shop_light_red group-hover:text-white'>k</span>
      </h2>
    </Link>
  );
}
