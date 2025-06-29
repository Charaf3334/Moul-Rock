import React, { FC } from 'react'
import { Logo, Logo2 } from "@/components/Logo";
import { X } from "lucide-react"
import Link from 'next/link'
import { headerData } from '@/constants/data';
import { usePathname } from 'next/navigation';

interface SidebarProps {
    isOpen: boolean
    onClose: () => void
}

const SideMenu:FC<SidebarProps> = ({ isOpen, onClose }) => {
    const pathname = usePathname()
  return (
    <div className={`fixed inset-y-0 h-screen left-0 z-50 w-full 
        bg-black/50 shadow-xl ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        hoverEffect`}>
            <div className='min-w-72 max-w-96 bg-black text-white/80 h-screen 
            p-10 border-r border-r-shop_dark_red flex flex-col gap-6'>
                <div className='flex items-center justify-between gap-5'>
                    <Logo2 />  {/* className='text-white' */}
                    <button 
                        onClick={onClose} 
                        className='hover:text-shop_light_red hoverEffect cursor-pointer'>
                        <X />
                    </button>
                </div>

                <div className='flex flex-col space-y-3.5 font-semibold tracking-wide'>
                {headerData.map((item) => (
                    <Link href={item?.href} key={item?.title} 
                    className={`hover:text-shop_light_red hoverEffect 
                    ${pathname === item?.href && "text-shop_light_red"}`}>
                        {item?.title}
                    </Link>
                ))}
                </div>
            </div>
    </div>
  )
}

export default SideMenu