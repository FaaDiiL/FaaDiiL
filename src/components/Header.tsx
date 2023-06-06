'use client'
import Link from 'next/link'
import React from 'react'

type HeaderProps = {}
type LinkProps = {
  href: string
  title?: string
}

const Header = (props: HeaderProps) => {
  return (
    <header>
      <nav className='space-x-5'>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/projects'>Projects</Link>
        <Link href='/contact'>Contact</Link>
      </nav>
    </header>
  )
}

export default Header
