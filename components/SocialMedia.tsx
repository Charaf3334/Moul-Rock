import React from 'react'
import { Facebook, Instagram, Mail } from 'lucide-react'
import { TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip'
import { Tooltip } from '@radix-ui/react-tooltip'
import { cn } from '@/lib/utils'

interface Props {
    className?: string
    iconClassName?: string
    tooltipClassName?: string
}

const sociallink = [
    {
        title: 'Instagram',
        href: 'https://www.instagram.com/',
        icon: <Instagram className='w-5 h-5' />
    },
    {
        title: 'Facebook',
        href: 'https://www.facebook.com/',
        icon: <Facebook className='w-5 h-5' />
    },
    {
        title: 'Gmail',
        href: 'mailto:toujana2015@gmail.com',
        icon: <Mail className='w-5 h-5' />
    }
]


const SocialMedia = ({className, iconClassName, tooltipClassName}:Props) => {
  return (
    <TooltipProvider>
        <div className={cn('flex items-center gap-3.5', className)}>
            {sociallink?.map( (item) => (
                <Tooltip key={item?.title}>
                    <TooltipTrigger asChild>
                        <a
                        key={item?.title}
                        target='_blank'
                        rel='noopener noreferrer'
                        href={item?.href} 
                        className={cn('p-2 border rounded-full hover:text-white hover:border-shop_light_red hoverEffect', iconClassName)}>
                            {item?.icon}
                        </a>
                    </TooltipTrigger>
                    <TooltipContent
                    className={cn(
                        'bg-white text-gray-800 font-medium text-sm rounded-md shadow-md px-3 py-1.5',
                        tooltipClassName
                    )}
                    >
                        {item?.title}
                    </TooltipContent>
                </Tooltip>
            ))}
        </div>
    </TooltipProvider>
  )
}

export default SocialMedia