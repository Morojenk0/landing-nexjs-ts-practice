import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import facebook from '../../public/icons/facebook-fill.svg'
import instagram from '../../public/icons/instagram-fill.svg'
import twitter from '../../public/icons/twitter-fill.svg'
import youtube from '../../public/icons/youtube-fill.svg'
import logo from '../../public/icons/logo.svg'

export default function Navigation() {
	return (
		<nav>
			<div className="container">
				<div className=" hidden tablet:flex tablet:justify-between">
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
				<div className=" py-[1rem] pr-[.30rem] pl-[3.25rem]  rounded-[0.3125rem] bg-white">
					<ul>
						<div className="relative flex items-center justify-between gap-x-[2.5rem]">
							<li>
								<Link
									className="text-black text-xl uppercase hover:text-blue hover:underline "
									href="/"
								>
									home
								</Link>
							</li>
							<li>
								<Link
									className="text-black text-xl uppercase hover:text-blue hover:underline "
									href="#"
								>
									About
								</Link>
							</li>
							<li>
								<Link
									className="text-black text-xl uppercase hover:text-blue hover:underline "
									href="#"
								>
									Features
								</Link>
							</li>
							<div className="absolute  mx-auto py-[2rem] px-[1rem] bg-white rounded-[0.3125rem] shadow-box-shadow">
								<Link href="/">
									<Image
										src={logo}
										alt="logo"
									/>
								</Link>
							</div>
							<li>
								<Link
									className=" text-black text-xl uppercase hover:text-blue hover:underline "
									href="#"
								>
									Screenshot
								</Link>
							</li>
							<li>
								<Link
									className="text-black text-xl uppercase hover:text-blue hover:underline "
									href="/blog"
								>
									Blog
								</Link>
							</li>
							<li>
								<a
									className="bg-blue py-[.75rem] px-[1rem] rounded-[0.3125rem] text-white text-xl uppercase"
									href="https://play.google.com/store"
									target="_blank"
								>
									Download
								</a>
							</li>
						</div>
					</ul>
				</div>
			</div>
		</nav>
	)
}
