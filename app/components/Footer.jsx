import Link from 'next/link'
import { v4 as uuidv4 } from 'uuid'

export default function Footer() {
	return (
		<footer>
			<section className="">
				<div
					className="container flex flex-col gap-y-[3.75rem]
					tablet:flex-row"
				>
					<div className="">
						<article
							className="max-w-[20.875rem] mt-[.06rem]
						tablet:max-w-[13.3125rem] tablet:mt-[.44rem]
						desktop:max-w-[20.875rem] desktop:mt-[.06rem]"
						>
							<h2 className="text-white text-[1.95313rem]/[2.95313rem] font-bold uppercase">
								logo
							</h2>
							<p className="text-white text-base">
								<span className="">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Viverra nunc ante velit vitae. Est tellus vitae, nullam
									lobortis enim.
								</span>
								<span className="hidden">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Viverra nunc ante velit vitae.
								</span>
							</p>
						</article>
						<div>
							<ul
								className="mt-[2.4rem] flex flex-row gap-x-[1.9rem] items-center
							tablet:mt-[0]"
							>
								<li>
									<a
										className="group block box-content -m-2 p-2"
										href="https://facebook.com"
										target="_blank"
									>
										<svg
											className="group box-content -m-2 p-2 transition hover:scale-125"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<g clipPath="url(#clip0_152_752)">
												<path
													className="transition group-hover:fill-blue"
													d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z"
													fill="white"
												/>
											</g>
											<defs>
												<clipPath id="clip0_152_752">
													<rect
														width="24"
														height="24"
														fill="white"
													/>
												</clipPath>
											</defs>
										</svg>
									</a>
								</li>
								<li>
									<hr className="bg-white w-[.0625rem] h-[1.25rem]" />
								</li>
								<li>
									<a
										href="https://instagram.com"
										target="_blank"
									>
										<svg
											className="group box-content -m-2 p-2 transition hover:scale-125"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<g clipPath="url(#clip0_152_754)">
												<path
													className="transition group-hover:fill-blue"
													d="M12 0C15.2604 0 15.6672 0.0119999 16.9464 0.0719999C18.2244 0.132 19.0944 0.3324 19.86 0.63C20.652 0.9348 21.3192 1.3476 21.9864 2.0136C22.5966 2.61348 23.0687 3.33911 23.37 4.14C23.6664 4.9044 23.868 5.7756 23.928 7.0536C23.9844 8.3328 24 8.7396 24 12C24 15.2604 23.988 15.6672 23.928 16.9464C23.868 18.2244 23.6664 19.0944 23.37 19.86C23.0696 20.6613 22.5973 21.3871 21.9864 21.9864C21.3864 22.5964 20.6608 23.0685 19.86 23.37C19.0956 23.6664 18.2244 23.868 16.9464 23.928C15.6672 23.9844 15.2604 24 12 24C8.7396 24 8.3328 23.988 7.0536 23.928C5.7756 23.868 4.9056 23.6664 4.14 23.37C3.33879 23.0694 2.61303 22.5971 2.0136 21.9864C1.40329 21.3866 0.931118 20.661 0.63 19.86C0.3324 19.0956 0.132 18.2244 0.0719999 16.9464C0.0155999 15.6672 0 15.2604 0 12C0 8.7396 0.0119999 8.3328 0.0719999 7.0536C0.132 5.7744 0.3324 4.9056 0.63 4.14C0.930283 3.33862 1.40256 2.61279 2.0136 2.0136C2.61321 1.40308 3.33891 0.930875 4.14 0.63C4.9056 0.3324 5.7744 0.132 7.0536 0.0719999C8.3328 0.0155999 8.7396 0 12 0ZM12 6C10.4087 6 8.88258 6.63214 7.75736 7.75736C6.63214 8.88258 6 10.4087 6 12C6 13.5913 6.63214 15.1174 7.75736 16.2426C8.88258 17.3679 10.4087 18 12 18C13.5913 18 15.1174 17.3679 16.2426 16.2426C17.3679 15.1174 18 13.5913 18 12C18 10.4087 17.3679 8.88258 16.2426 7.75736C15.1174 6.63214 13.5913 6 12 6ZM19.8 5.7C19.8 5.30218 19.642 4.92064 19.3607 4.63934C19.0794 4.35804 18.6978 4.2 18.3 4.2C17.9022 4.2 17.5206 4.35804 17.2393 4.63934C16.958 4.92064 16.8 5.30218 16.8 5.7C16.8 6.09783 16.958 6.47936 17.2393 6.76066C17.5206 7.04197 17.9022 7.2 18.3 7.2C18.6978 7.2 19.0794 7.04197 19.3607 6.76066C19.642 6.47936 19.8 6.09783 19.8 5.7ZM12 8.4C12.9548 8.4 13.8705 8.77928 14.5456 9.45442C15.2207 10.1295 15.6 11.0452 15.6 12C15.6 12.9548 15.2207 13.8705 14.5456 14.5456C13.8705 15.2207 12.9548 15.6 12 15.6C11.0452 15.6 10.1295 15.2207 9.45442 14.5456C8.77928 13.8705 8.4 12.9548 8.4 12C8.4 11.0452 8.77928 10.1295 9.45442 9.45442C10.1295 8.77928 11.0452 8.4 12 8.4Z"
													fill="white"
												/>
											</g>
											<defs>
												<clipPath id="clip0_152_754">
													<rect
														width="24"
														height="24"
														fill="white"
													/>
												</clipPath>
											</defs>
										</svg>
									</a>
								</li>
								<li>
									<hr className="bg-white w-[.0625rem] h-[1.25rem]" />
								</li>
								<li>
									<a
										className="group block box-content -m-2 p-2"
										href="https://twitter.com"
										target="_blank"
									>
										<svg
											className="group box-content -m-2 p-2 transition hover:scale-125"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<g clipPath="url(#clip0_152_756)">
												<path
													className="transition group-hover:fill-blue"
													d="M24.1945 3.54124C23.2783 3.99149 22.3068 4.2872 21.3121 4.41857C22.3606 3.72181 23.1453 2.62525 23.5201 1.33324C22.5361 1.9839 21.4573 2.4399 20.3329 2.68657C19.5776 1.78867 18.5765 1.19319 17.4852 0.992682C16.3939 0.792177 15.2736 0.99789 14.2984 1.57784C13.3232 2.15779 12.5477 3.07948 12.0926 4.19963C11.6375 5.31977 11.5282 6.57561 11.7817 7.7719C9.78619 7.66078 7.83406 7.0846 6.05201 6.08079C4.26995 5.07698 2.69782 3.66797 1.43766 1.94524C0.991611 2.7965 0.757209 3.7642 0.758463 4.74924C0.758463 6.68257 1.64406 8.39057 2.99046 9.39057C2.19367 9.3627 1.41442 9.12361 0.717663 8.69324V8.76257C0.717904 10.0502 1.11891 11.2981 1.85268 12.2947C2.58645 13.2912 3.60784 13.9752 4.74366 14.2306C4.004 14.4533 3.22843 14.4861 2.47566 14.3266C2.7959 15.4349 3.42007 16.4042 4.26077 17.0987C5.10148 17.7933 6.11662 18.1783 7.16406 18.1999C6.12304 19.1083 4.93108 19.7799 3.65632 20.1761C2.38156 20.5724 1.04902 20.6856 -0.265137 20.5092C2.0289 22.1485 4.69938 23.0187 7.42686 23.0159C16.6585 23.0159 21.7069 14.5186 21.7069 7.14924C21.7069 6.90924 21.7009 6.66657 21.6913 6.42924C22.6739 5.64013 23.522 4.6626 24.1957 3.54257L24.1945 3.54124Z"
													fill="white"
												/>
											</g>
											<defs>
												<clipPath id="clip0_152_756">
													<rect
														width="24"
														height="24"
														fill="white"
													/>
												</clipPath>
											</defs>
										</svg>
									</a>
								</li>
								<li>
									<hr className="bg-white w-[.0625rem] h-[1.25rem]" />
								</li>
								<li>
									<a
										className="group block box-content -m-2 p-2"
										href="https://youtube.com"
										target="_blank"
									>
										<svg
											className="group box-content -m-2 p-2 transition hover:scale-125"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<g clipPath="url(#clip0_152_758)">
												<path
													className="transition group-hover:fill-blue"
													d="M23.4516 3.747C24 6.42 24 12 24 12C24 12 24 17.58 23.4516 20.253C23.1468 21.7305 22.2552 22.893 21.126 23.286C19.0752 24 12 24 12 24C12 24 4.9284 24 2.874 23.286C1.74 22.887 0.8496 21.726 0.5484 20.253C3.57628e-08 17.58 0 12 0 12C0 12 3.57628e-08 6.42 0.5484 3.747C0.8532 2.2695 1.7448 1.107 2.874 0.714C4.9284 -2.68221e-07 12 0 12 0C12 0 19.0752 -2.68221e-07 21.126 0.714C22.26 1.113 23.1504 2.274 23.4516 3.747ZM9.6 17.25L16.8 12L9.6 6.75V17.25Z"
													fill="white"
												/>
											</g>
											<defs>
												<clipPath id="clip0_152_758">
													<rect
														width="24"
														height="24"
														fill="white"
													/>
												</clipPath>
											</defs>
										</svg>
									</a>
								</li>
							</ul>
						</div>
					</div>
					<ul className="flex flex-col gap-y-[.69rem]">
						<li>
							<h2 className="text-white text-2xl uppercase">quick link</h2>
						</li>
						{[
							['home', '/'],
							['about', '#about'],
							['features', '#features'],
							['screenshot', '#screenshot'],
							['blog', '/blog'],
						].map(([title, link]) => (
							<li key={uuidv4()}>
								<Link
									className="text-white text-base capitalize hover:underline"
									href={link}
								>
									{title}
								</Link>
							</li>
						))}
					</ul>
					<div>
						<article
							className="max-w-[18.625rem] 
						tablet:max-[13.3125rem] 
						desktop:max-w-[18.625rem]"
						>
							<h2 className="text-white text-2xl uppercase">news letter</h2>
							<p
								className="mt-[.69rem] text-white text-base 
							tablet:mt-[.81rem]
							desktop:mt-[.69rem]"
							>
								Subscribe our newsletter to get our latest update & news
							</p>
						</article>
						<form>
							pad
							<input
								className=""
								type="mail"
								placeholder="Your email address"
							/>
							<button>GO</button>
						</form>
					</div>
				</div>
			</section>
		</footer>
	)
}
