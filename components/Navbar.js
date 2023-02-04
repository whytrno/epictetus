import { useState } from 'react'
import Container from './Container'

export default function Navbar() {
    const [dropdown, setDropdown] = useState(false)
    const dropdownList = [
        { text: 'Internet', href: '#' },
        { text: 'Books', href: '#' },
        { text: 'Open Source', href: '#' },
    ]

    return (
        <nav className="py-10">
            <Container>
                <div className="flex items-center">
                    <div className="w-2/12 flex items-center gap-5">
                        <div className="shadow-2xl w-10 h-10 bg-gray-500 rounded flex items-center justify-center">E</div>
                        Epictetus
                    </div>
                    <div className="w-7/12">
                        <ul className="flex gap-10">
                            <li>
                                <a href="#" className="hover:underline">UI DESIGN</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">FRONTEND</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">BACKEND</a>
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
                                                <a href={href} className='flex py-3 px-6 bg-gray-800 hover:bg-gray-600'>{text}</a>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        </ul>
                    </div>
                    <div className="w-3/12">
                        <input type="text" className="bg-search pl-10 bg-gray-700 py-3 px-6 w-full rounded-full" placeholder="Search ..." />
                    </div>
                </div>
            </Container>
        </nav>
    )
}