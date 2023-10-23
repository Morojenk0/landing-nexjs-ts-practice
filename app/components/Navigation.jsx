import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import facebook from '../../public/icons/facebook-fill.svg'
import instagram from '../../public/icons/instagram-fill.svg'
import twitter from '../../public/icons/twitter-fill.svg'
import youtube from '../../public/icons/youtube-fill.svg'
import logo from '../../public/icons/logo.svg'
import menu from '../../public/icons/menu-line.svg'

export default function Navigation() {
	return (
		// ? clean up
		// ? fix leading?
		// ? fix breakpoints?
		// ! leading fix https://tailwindcss.com/docs/font-size

		<nav>
			<div className="container">
				<div className="hidden lg:flex justify-between">
					<address>
						<div className="flex gap-x-[3rem]">
							<p>
								<a
									className="relative pl-[2.3rem] text-white text-base not-italic hover:underline before:content-[url('../public/icons/mail-fill.svg')] before:absolute before:inset-y-0 before:left-0"
									href="mailto:Info@youremail.com"
								>
									Info@youremail.com
								</a>
							</p>
							<p>
								<a
									className="relative pl-[2.3rem] text-white text-base not-italic hover:underline before:content-[url('../public/icons/phone-fill.svg')] before:absolute before:inset-y-0 before:left-0"
									href="tel:+4805550103"
								>
									(480) 555-0103
								</a>
							</p>
						</div>
					</address>
					<ul>
						<div className="flex gap-x-[1.9rem]">
							<li>
								<a
									href="https://facebook.com"
									target="_blank"
								>
									<Image
										src={facebook}
										alt="facebook"
									/>
								</a>
							</li>
							<li>
								<a
									href="https://instagram.com"
									target="_blank"
								>
									<Image
										src={instagram}
										alt="instagram"
									/>
								</a>
							</li>
							<li>
								<a
									href="https://twitter.com"
									target="_blank"
								>
									<Image
										src={twitter}
										alt="twitter"
									/>
								</a>
							</li>
							<li>
								<a
									href="https://youtube.com"
									target="_blank"
								>
									<Image
										src={youtube}
										alt="youtube"
									/>
								</a>
							</li>
						</div>
					</ul>
				</div>
				<div className="mt-10 relative flex justify-between items-center p-[.30rem] rounded-[0.3125rem] bg-white">
					<ul className="hidden ml-[2.95rem] lg:flex items-center gap-x-[2.5rem]">
						<li>
							<Link
								className="text-black text-xl uppercase hover:text-blue underline-offset-[3px] hover:underline "
								href="/"
							>
								home
							</Link>
						</li>
						<li>
							<Link
								className="text-black text-xl uppercase hover:text-blue underline-offset-[3px] hover:underline "
								href="#"
							>
								About
							</Link>
						</li>
						<li>
							<Link
								className="text-black text-xl uppercase hover:text-blue underline-offset-[3px] hover:underline "
								href="#"
							>
								Features
							</Link>
						</li>
					</ul>
					<div className="absolute left-0 right-0 mx-auto lg:w-[12.5rem] py-[1.5rem] px-[.7rem] w-[6.25rem] lg:py-[2rem] lg:px-[1rem] bg-white rounded-[0.3125rem] shadow-box-shadow">
						<Link href="/">
							<Image
								className="lg:w-[10.4375rem] lg:h-[1.75rem]"
								src={logo}
								alt="logo"
							/>
						</Link>
					</div>
					<ul className="hidden lg:flex items-center gap-x-[2.5rem]">
						<li className="">
							<Link
								className=" text-black text-xl uppercase hover:text-blue underline-offset-[3px] hover:underline "
								href="#"
							>
								Screenshot
							</Link>
						</li>
						<li>
							<Link
								className="text-black text-xl uppercase hover:text-blue underline-offset-[3px]  hover:underline"
								href="/blog"
							>
								Blog
							</Link>
						</li>
						<li className="">
							<a
								className="block bg-blue py-[.75rem] px-[1rem] rounded-[0.3125rem] text-white text-xl uppercase transition hover:bg-[#4542F2]"
								href="https://play.google.com/store"
								target="_blank"
							>
								Download
							</a>
						</li>
					</ul>
					<div className="lg:hidden">
						<Image
							className="ml-[.55rem]"
							src={menu}
							alt="menu"
						/>
					</div>
					<a
						className="lg:hidden bg-blue py-[.75rem] px-[.4rem] rounded-[0.3125rem] text-white text-[.625rem] font-semibold leading-normal uppercase transition hover:bg-[#4542F2]"
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
