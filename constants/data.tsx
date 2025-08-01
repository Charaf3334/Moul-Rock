import { GitCompareArrows, Headset, ShieldCheck, Truck } from 'lucide-react' // icons for the part thats below the bands!


export const headerData = [
    {title: 'Home', href: '/'},
    {title: 'Shop', href: '/shop'},
    {title: 'Blog', href: '/blog'},
    {title: 'Hot Deal', href: '/deal'},
]

export const quickLinksData = [
    {title: 'About us', href: '/about'},
    {title: 'Contact us', href: '/contact'},
    {title: 'Terms & Conditions', href: '/terms'},
    {title: 'Privacy Policy', href: '/privacy'},
    {title: 'FAQs', href: '/faqs'},
    {title: 'Help', href: '/help'},
]

export const categoriesData = [
    {title: 'T-Shirts', href: '/tshirts'},
    {title: 'Hoodies', href: '/hoodies'},
    {title: 'Hats', href: '/hats'},
    {title: 'Jewelry', href: '/jewelry'},
]

export const productType = [
    { title: 'Gadget', value: 'gadget' },
    { title: 'Appliances', value: 'appliances' },
    { title: 'Refrigerators', value: 'refrigerators' },
    { title: 'Others', value: 'others' },
]

export const extraData = [
    {
        title: 'Free Delivery',
        description: 'Free shipping over 300 MAD',
        icon: <Truck size={45} />,
    },
    {
        title: 'Free Return',
        description: 'Free shipping over 300 MAD',
        icon: <GitCompareArrows size={45} />,
    },
    {
        title: 'Customer Support',
        description: 'Friendly 27/7 customer support',
        icon: <Headset size={45} />,
    },
    {
        title: 'Money Back Guarantee',
        description: 'Quality checked by our team',
        icon: <ShieldCheck size={45} />,
    },
    
]