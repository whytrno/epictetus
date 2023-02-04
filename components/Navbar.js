import { useState } from 'react'
import Container from './Container'
import Link from 'next/link'

export default function Navbar() {
    const [dropdown, setDropdown] = useState(false)
    const dropdownList = [
        { text: 'Internet', href: '/posts' },
        { text: 'Books', href: '/posts' },
        { text: 'Open Source', href: '/posts' },
    ]
    const [offCanvas, setOffCanvas] = useState(false)
    const [search, setSearch] = useState(false)

    return (
        <nav className="py-10">
            <Container>
                <div className="flex items-center">
                    <div className='w-3/12 lg:hidden'>
                        <button onClick={() => { setOffCanvas(!offCanvas) }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.4">
                                    <path d="M3 12H21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M3 6H21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M3 18H21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                            </svg>
                        </button>
                    </div>
                    <Link href="/">
                        <div className="lg:w-2/12 w-6/12 flex justify-center lg:justify-start items-center gap-5">
                            <div className="shadow-2xl  bg-gray-500 py-2 px-4 rounded flex items-center justify-center">E</div>
                            Epictetus
                        </div>
                    </Link>
                    <div className='w-3/12 lg:hidden text-right'>
                        <button onClick={() => { setSearch(!search) }}>
                            <svg className='inline-block' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.4">
                                    <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M21 21L16.65 16.65" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                            </svg>
                        </button>
                    </div>
                    <div className={`${offCanvas ? 'left-0' : '-left-full'} transition-all lg:w-7/12 w-full bg-gradient-to-b p-10 from-gray-600 to-gray-900 lg:static lg:bg-none fixed top-0 h-full`}>
                        <button onClick={() => { setOffCanvas(!offCanvas) }} className='absolute top-5 right-5 lg:hidden'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <ul className="flex gap-10 lg:flex-row flex-col">
                            <li>
                                <Link href="/posts" className="hover:underline">UI DESIGN</Link>
                            </li>
                            <li>
                                <Link href="/posts" className="hover:underline">FRONTEND</Link>
                            </li>
                            <li>
                                <Link href="/posts" className="hover:underline">BACKEND</Link>
                            </li>
                            <li className='relative'>
                                <a href="#" onClick={() => { setDropdown(!dropdown) }} className="flex items-center gap-2 hover:underline cursor-pointer">
                                    LAINNYA
                                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1L5 5L9 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </a>

                                {dropdown && (
                                    <ul className='absolute w-[200px] rounded shadow-xl mt-4'>
                                        {dropdownList.map(({ text, href }) => (
                                            <li key={text} className="last:border-0 border-b border-white/5">
                                                <Link href={href} className='flex py-3 px-6 bg-gray-800 hover:bg-gray-600'>{text}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        </ul>
                    </div>
                    <div className={`lg:w-3/12 absolute lg:static w-full transition-all left-0 px-10 ${search ? 'top-10' : '-top-full'}`}>
                        <button onClick={() => { setSearch(!search) }} className='lg:hidden absolute top-3 right-12'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <input type="text" className="bg-search pl-10 bg-gray-700 py-3 px-6 w-full lg:rounded-full rounded-lg" placeholder="Search ..." />
                    </div>
                </div>
            </Container>
        </nav>
    )
}