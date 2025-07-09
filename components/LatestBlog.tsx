import React from 'react'
import { getLatestBlogs } from '@/sanity/queries'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import Link from 'next/link'
import { Calendar } from 'lucide-react'
import dayjs from 'dayjs' //this is the library thats used to manipulate and format dates and times

const BottomBlogPart = (blog: typeof b) => {
    return (
        <Link href={`/blog/${blog.slug.current}`} className='text-base font-semibold tracking-wide mt-5 line-clamp-2 hover:text-shop_dark_red hoverEffect'>{blog?.title}</Link>
    )
}

const TopBlogPart = (b: typeof blog) => {
    return (
        <div className='bg-shop_light_bg p-5'>
                <div className='text-xs flex items-center gap-5'>
                    <div className='flex items-center relative group cursor-pointer'>
                    {b?.blogcategories?.map((item, index) => (
                        <p key={index} className='font-semibold text-shop_dark_red tracking-wide'>
                        {item?.title}
                        </p>
                    ))}
                    <span className='absolute left-0 -bottom-1.5 bg-lightColor/30 inline-block w-full h-[2px] group-hover:bg-shop_dark_red hover:cursor-pointer hoverEffect'/>
                    </div>
                    <div>
                        <p className='flex items-center gap-1 text-lightColor relative group hover:cursor-pointer'>
                            <Calendar size={15}/>{' '}
                            {dayjs(b.publishedAt).format('MMMM D, YYYY')}
                            <span className='absolute left-0 -bottom-1.5 bg-lightColor/30 inline-block w-full h-[2px] group-hover:bg-shop_dark_red hoverEffect'/>
                        </p>
                    </div>
                </div>
                {BottomBlogPart(b)}
        </div>
    )
}

const LatestBlog = async () => {
  const blogs = await getLatestBlogs();
  return (
    <div className='mb-10 lg:mb-20'>
      <h2 className='text-2xl font-semibold text-shop_dark_red'>Latest Blog</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5'>
        {blogs.map((blog) => (
          <div key={blog._id} className='rounded-lg overflow-hidden'>
            {blog.mainImage && (
              <Link href={`/blog/${blog?.slug?.current}`}>
                <Image
                  src={urlFor(blog.mainImage).url()}
                  alt='blogImage'
                  width={500}
                  height={500}
                  className='w-full max-h-80 object-cover scale-100 hover:scale-102 hoverEffect'
                />
              </Link>
            )}
            {TopBlogPart(blog)}
          </div>
        ))}
      </div>
    </div>
  );
};


export default LatestBlog