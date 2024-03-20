import React, { useState } from 'react'
import { Popover } from '@headlessui/react'
import { Bars3Icon } from '@heroicons/react/24/outline'

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

// TypeScript로 props 타입 정의
interface MenuItem {
    name: string
    href: string
    description?: string // 옵셔널한 속성
    icon?: React.ElementType // 옵셔널한 속성
}

interface HeaderProps {
    products: MenuItem[]
    callsToAction: MenuItem[]
}

const Header: React.FC<HeaderProps> = ({ products, callsToAction }) => {
    // 모바일 메뉴의 열림/닫힘 상태를 관리하는 상태
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className=" fixed w-full noto z-50">
            <nav
                className="backdrop-blur bg-slate-100/20 mx-auto flex items-center justify-between p-6 lg:px-8"
                aria-label="Global"
            >
                <div className="flex ">
                    <a href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img
                            className="h-8 w-auto"
                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                            alt=""
                        />
                    </a>
                </div>
                {/* 모바일용 메뉴 토글 버튼 */}
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                {/* 데스크탑용 메뉴 */}
                <Popover.Group className="hidden lg:flex lg:gap-x-12 font-semibold text-sm md:text-xl">
                    {/* 제품 메뉴 */}
                    <a href="/" className="leading-6 text-gray-900">
                        Home
                    </a>
                    {/* 특징 메뉴 */}
                    <a href="/about" className="leading-6 text-gray-900">
                        About
                    </a>
                    {/* 로그인 링크 */}
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <a href="/signin" className="leading-6 text-gray-900">
                            Sign in
                        </a>
                    </div>
                </Popover.Group>
            </nav>
            {/* 모바일 메뉴 다이얼로그 */}
        </header>
    )
}

export default Header
