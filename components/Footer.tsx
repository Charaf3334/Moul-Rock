import React from 'react'
import Container from "./Container"
import FooterTop from './FooterTop'
import { Logo } from './Logo'
import SocialMedia from './SocialMedia'
import { SubText, SubTitle } from './ui/text'
import { categoriesData, quickLinksData } from '@/constants/data'
import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const Footer = () => {
  return (
    <footer className='bg-white border-t'>
      <Container>
        <FooterTop />
        <div className='py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='space-y-4'>
            <Logo />
            <SubText>
              Moul-Rock delivers bold, high-quality band tees for true rock lovers — inspired by legendary sounds and timeless style.
            </SubText>
            <SocialMedia 
            className='text-darkColor/60'
            iconClassName='border-darkColor/60 hover:border-shop_dark_red hover:text-shop_dark_red' 
            tooltipClassName='bg-darkColor text-white'
            />
          </div>
          <div>
            <SubTitle className='font-semibold text-shop_dark_red'>Quick Links</SubTitle>
            <ul className='space-y-3 mt-4'>
              {quickLinksData?.map( (item) => (
                <li key={item?.title}>
                  <Link href={item?.href} className='text-lightColor hover:text-shop_light_red hoverEffect font-medium' >{item?.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SubTitle className='font-semibold text-shop_dark_red'>Categories</SubTitle>
            <ul className='space-y-3 mt-4'>
              {categoriesData?.map( (item) => (
                <li key={item?.title}>
                  <Link href={`/category${item?.href}`} className='text-lightColor hover:text-shop_light_red hoverEffect font-medium' >{item?.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='space-y-4'>
            <SubTitle className='font-semibold text-shop_dark_red'>Newsletter</SubTitle>
            <SubText>
              Subscribe to our newsletter to receive updates and exclusive offers!
            </SubText>
            <form className='space-y-3'>
              <Input className='border-shop_dark_red' placeholder='Enter your email' type='email' required />
              <Button className="w-full bg-shop_dark_red hover:bg-shop_dark_red transition font-bold cursor-default hover:cursor-pointer">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className='py-6 border-t text-center text-sm text-gray-600'>
          <div>
            © {new Date().getFullYear()} <Logo className='text-sm'/>
            . All rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer