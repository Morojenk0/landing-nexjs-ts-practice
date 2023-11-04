'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { v4 as uuidv4 } from 'uuid'

import menuClose from '../../public/icons/menu-close.svg'
import facebook from '../../public/icons/facebook-fill.svg'
import instagram from '../../public/icons/instagram-fill.svg'
import twitter from '../../public/icons/twitter-fill.svg'
import youtube from '../../public/icons/youtube-fill.svg'
import logo from '../../public/icons/logo.svg'
import menu from '../../public/icons/menu-line.svg'

const toggleMenu = () => {
	const menu = document.getElementById('hamburgerMenu')

	menu.classList.toggle('w-full')
}

export default function Navigation() {
	return (
		<nav>
			<div
				className="fixed w-0 h-full z-[9999] overflow-hidden duration-700 bg-[#000]/80"
				id="hamburgerMenu"
			>
				<div>
					<Image
						className="absolute top-[3rem] right-[3rem] z-[9999] cursor-pointer transition hover:scale-125"
						src={menuClose}
						alt="closeMenu"
						onClick={() => {
							toggleMenu()
						}}
					/>
				</div>
				<ul className="absolute w-[100%] top-[25%]">
					{[
						['home', '/'],
						['about', '/#about'],
						['features', '/#features'],
						['screenshot', '/#screenshot'],
						['blog', '/blog'],
					].map(([title, link]) => (
						<li key={uuidv4()}>
							<Link
								className="py-[.65rem] box-content block text-center text-gray text-xl uppercase hover:text-white duration-500 transition"
								href={link}
								onClick={() => {
									toggleMenu()
								}}
							>
								{title}
							</Link>
						</li>
					))}
				</ul>
			</div>
			<div
				className="container pt-[2.5rem] 
				tablet:pt-[1.55rem] 
				desktop:pt-[2.2rem]"
			>
				<div
					className="hidden justify-between 
					tablet:flex 
					desktop:mr-[0.5rem]"
				>
					<address>
						<div className="flex gap-x-[3rem]">
							<p>
								<a
									className="relative pl-[2.3rem] text-white text-base not-italic 
									before:content-[url('../public/icons/mail-fill.svg')] before:absolute before:inset-y-0 before:left-0 before:w-[1.125rem] before:h-[1.125rem] before:hover:scale-125 before:transition 
									hover:underline"
									href="mailto:Info@youremail.com"
								>
									Info@youremail.com
								</a>
							</p>

							<p>
								<a
									className="relative pl-[2.3rem] text-white text-base not-italic 
									before:content-[url('../public/icons/phone-fill.svg')] before:absolute before:inset-y-0 before:left-0 before:w-[1.125rem] before:h-[1.125rem] before:hover:scale-125 before:transition
									hover:underline"
									href="tel:+4805550103"
								>
									(480) 555-0103
								</a>
							</p>
						</div>
					</address>
					<ul className="flex gap-x-[1.9rem]">
						{[
							['https://facebook.com', facebook],
							['https://instagram.com', instagram],
							['https://twitter.com', twitter],
							['https://youtube.com', youtube],
						].map(([link, imageSrc]) => (
							<li key={uuidv4()}>
								<a
									href={link}
									target="_blank"
								>
									<Image
										className="box-content -m-2 p-2 transition hover:scale-125"
										src={imageSrc}
										alt={imageSrc}
									/>
								</a>
							</li>
						))}
					</ul>
				</div>
				<div
					className="relative p-[.30rem] flex justify-between items-center rounded-[0.3125rem] bg-white 
					tablet:mt-[2.4rem] 
					desktop:mt-[1.2rem]"
				>
					<ul className="hidden ml-[1.5rem] lg:ml-[2.95rem] tablet:flex items-center tablet:gap-x-[1.5rem] lg:gap-x-[2.5rem]">
						{[
							['home', '/'],
							['about', '/#about'],
							['features', '/#features'],
						].map(([title, link]) => (
							<li key={uuidv4()}>
								<Link
									className="text-black uppercase underline-offset-[3px] hover:text-blue hover:underline 
									tablet:text-sm 
									lg:text-xl"
									href={link}
								>
									{title}
								</Link>
							</li>
						))}
					</ul>
					<div
						className="absolute left-0 right-0 w-[6.25rem] mx-auto py-[1.5rem] px-[.7rem] bg-white rounded-[0.3125rem] shadow-box-shadow 
						tablet:w-[10rem] 
						lg:w-[12.5rem] lg:py-[2rem] lg:px-[1rem]"
					>
						<Link href="/">
							<Image
								className="box-content -m-2 p-2
								tablet:w-[10.4375rem] tablet:lg:h-[1.5rem] 
								lg:w-[10.4375rem] lg:h-[1.75rem]"
								src={logo}
								alt="logo"
							/>
						</Link>
					</div>
					<ul
						className="hidden items-center 
						tablet:flex tablet:gap-x-[.7rem] 
						xl:gap-x-[2.5rem]"
					>
						{[
							['screenshot', '/#screenshot'],
							['blog', '/blog'],
						].map(([title, link]) => (
							<li key={uuidv4()}>
								<Link
									className="text-black uppercase underline-offset-[3px] hover:text-blue hover:underline 
									tablet:text-sm 
									lg:text-xl"
									href={link}
								>
									{title}
								</Link>
							</li>
						))}
						<li>
							<a
								className="block py-[.50rem] px-[1rem] bg-blue rounded-[0.3125rem] uppercase transition text-white text-base hover:bg-[#4542F2]
								tablet:py-[.75rem]  
								lg:text-xl"
								href="https://play.google.com/store"
								target="_blank"
							>
								Download
							</a>
						</li>
					</ul>
					<div
						className="ml-[.55rem]
						tablet:hidden"
					>
						<Image
							className="box-content -m-2 p-2 cursor-pointer"
							src={menu}
							alt="menu"
							onClick={() => {
								toggleMenu()
							}}
						/>
					</div>
					<a
						className="py-[.75rem] px-[.4rem] bg-blue rounded-[0.3125rem] transition text-white text-[.625rem] font-semibold leading-normal uppercase  hover:bg-[#4542F2]
						tablet:hidden"
						href="https://play.google.com/store"
						target="_blank"
					>
						Download
					</a>
				</div>
			</div>
		</nav>
	)
}
