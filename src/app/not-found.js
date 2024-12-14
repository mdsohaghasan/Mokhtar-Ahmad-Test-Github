import React from 'react'
import NotFound from "../../public/not-found.png"
import Image from 'next/image'
import Link from 'next/link'

const notFound = () => {

  return (
    <section className='container'>
        <Image src={NotFound} alt='not-found' width={1000} height={1000}></Image>
        <div className="container lg:px-32">
        <div className="py-3 px-6 my-5 bg-slate-800 flex items-center justify-between rounded-xl">
          <p>
          Oops! The page you are looking for could not be found. Please check the URL or return to the homepage to explore more.
          </p>
          <div className="st-hero-btn">
            <Link
              href="/"
              className="st-btn st-style1 st-color1 st-smooth-move"
            >
              Go To Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default notFound
