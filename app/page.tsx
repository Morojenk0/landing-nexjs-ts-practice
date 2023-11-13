import Image from 'next/image'
import Navigation from './components/Navigation'
import googlePlay from '../public/icons/google-play.svg'
import appStore from '../public/icons/app-store.svg'
import mobileApp from '../public/free-Ui-view-mobile-app-mockup-1.png'
import mockup from '../public/android-smartphone-free-mockup.png'
import app from '../public/app.png'
import comment from '../public/icons/comment.svg'
import browser from '../public/icons/browser.svg'
import vector from '../public/icons/vector.svg'
import cellPhone from '../public/icons/cell-phone.svg'
import eyeScanner from '../public/icons/eye-scanner-1.svg'
import maleTelemarketer from '../public/icons/male-telemarketer.svg'

import { v4 as uuidv4 } from 'uuid'

export default function Home() {
	return (
		<div>
			<header className="bg-hero-image bg-cover bg-center bg-no-repeat">
				<Navigation />
				<section className="">
					<div
						className="container pt-[8rem] pb-[8.4rem] flex flex-col items-center 
						tablet:pt-[15.44rem] tablet:pb-[14.5rem] tablet:flex-row
						desktop:pt-[6.5rem] desktop:pb-[6.5rem]"
					>
						<article className="relative z-20">
							<div
								className="after:content-[url('../public/shapes/border-mobile.svg')] after:absolute after:left-[1.25rem] after:top-0 after:bottom-0 after:-z-10 after:my-auto after:w-[20.1875rem] after:h-[22.375rem]
								max-w-[20.2rem] pt-[1.7rem] pr-[.75rem] pb-[1.2rem] pl-[1.13rem] flex flex-col bg-white
								tablet:max-w-[22.25rem] tablet:pt-[.9rem] tablet:pr-[.44rem] tablet:pb-[.9rem] tablet:pl-[1.12rem] tablet:after:content-[url('../public/shapes/border-tablet.svg')] tablet:after:left-[1rem] tablet:after:w-[23.4375rem] tablet:after:h-[23.8125rem]
								lg:max-w-[35.625rem] lg:pt-[2.5rem] lg:pr-[1.44rem] lg:pb-[2.6rem] lg:pl-[1.9rem]
								desktop:after:content-[url('../public/shapes/border-desktop.svg')] desktop:after:left-[3.12rem] desktop:after:w-[35.625rem] desktop:after:h-[33.4375rem]"
							>
								<h1
									className="text-blue text-2xl uppercase
								tablet:text-3xl
								lg:text-5xl"
								>
									A Great App Makes Your Life Better
								</h1>
								<p
									className="mt-[1.1rem] text-gray text-base
								tablet:mt-[.40rem]
								lg:max-w-[30.4375rem] lg:mt-[1.12rem]"
								>
									<span className="lg:hidden">
										Amet minim mollit non deserunt ullamco est sit aliqua dolor
										do amet sint. Velit officia consequat duis enim velit
										mollit.
									</span>
									<span className="hidden lg:block">
										Amet minim mollit non deserunt ullamco est sit aliqua dolor
										do amet sint. Velit officia consequat duis enim velit
										mollit. Exercitation veniam consequat sunt nostrud amet.
									</span>
								</p>
								<div
									className="mt-[1.9rem] 
									tablet:mt-[1.45rem]
									lg:mt-[3.25rem]"
								>
									<h3
										className="text-black text-xl uppercase
										lg:text-2xl"
									>
										Download App Now
									</h3>
									<div
										className="mt-[1.12rem] flex items-center gap-x-[1rem]
							 			tablet:mt-[1.4rem]
							 			lg:mt-[.3rem]"
									>
										<a
											href="https://store.google.com/"
											target="_blank"
										>
											<Image
												className="w-[6.75rem] h-[2.0625rem] 
												tablet:w-[9.3125rem] tablet:h-[2.9375rem]"
												src={googlePlay}
												alt="google-play"
											/>
										</a>
										<a
											href="https://www.apple.com/"
											target="_blank"
										>
											<Image
												className="w-[6.75rem] h-[2.0625rem] 
												tablet:w-[9.3125rem] tablet:h-[2.9375rem]"
												src={appStore}
												alt="app-store"
											/>
										</a>
									</div>
								</div>
							</div>
						</article>
						<section>
							<div
								className="mt-[4.20rem]
								tablet:mt-[0] tablet:ml-[6rem]
								xl:ml-[15rem]
								desktop:ml-[11.75rem]"
							>
								<Image
									className="w-[15.3125rem] h-[31.25rem]
									tablet:w-[12.5rem] tablet:h-[25.375rem] 
									lg:w-[17.125rem] lg:h-[33rem]
									xl:w-[19.125rem] xl:h-[38rem]
									desktop:w-[21.125rem] desktop:h-[42.625rem]"
									src={mobileApp}
									alt="mobile-app"
								></Image>
							</div>
						</section>
					</div>
				</section>
			</header>
			<main>
				<div>
					<section
						className="bg-white"
						id="about"
					>
						<div
							className="container pt-[3.75rem] pb-[5.75rem] 
							tablet:pt-[7.5rem] tablet:pb-[10.12rem]
							desktop:pt-[7.5rem] desktop:pb-[6.6rem]
						"
						>
							<article
								className="max-w-[18.75rem] mx-auto text-center
								sm:max-w-[28.125rem]
								xl:max-w-[37.5625rem]"
							>
								<h2
									className="text-black text-2xl uppercase
									tablet:text-3xl"
								>
									About Our App
								</h2>
								<p className="mt-[1.12rem] text-gray text-base">
									<span className="tablet:hidden">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Viverra nunc ante velit vitae.
									</span>
									<span className="hidden tablet:block xl:hidden">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Viverra nunc ante xlt vitae. Est tellus vitae, nullam
										lobortis enim. Faucibus amet etiam tincidunt rhoncus.
									</span>
									<span className="hidden xl:block">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Viverra nunc ante velit vitae. Est tellus vitae, nullam
										lobortis enim. Faucibus amet etiam tincidunt rhoncus,
										ullamcorper velit. Ullamcorper risus tempor, ac nunc libero
										urna, feugiat.
									</span>
								</p>
							</article>
							<div
								className="mt-[2.5rem] flex flex-col gap-y-[2.5rem] items-center
							tablet:mt-[3.75rem] tablet:flex-row tablet:gap-y-[0] tablet:justify-between"
							>
								<div>
									<Image
										className="max-w-[14.875rem] max-h-[22.4375rem]
										lg:max-w-[24.125rem] lg:max-h-[34.25rem]"
										src={mockup}
										alt="mockup"
									/>
								</div>
								<div
									className="flex flex-col gap-y-[1.25rem]
								lg:gap-y-[2.5rem]"
								>
									{[
										[
											'Creative design',
											'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
											'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.',
										],
										[
											'easy to use',
											'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
											'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.',
										],
										[
											'Best user experince',
											'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
											'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.',
										],
									].map(([title, text, textLarge]) => (
										<article
											className="max-w-[21.4375rem] pt-[1.13rem] pr-[2.06rem] pb-[.63rem] pl-[3.8rem] rounded-[.625rem] shadow-box-shadow
											tablet:max-w-[24.4375rem]
											lg:max-w-[35.625rem] lg:pt-[1.88rem] lg:pr-[1.25rem] lg:pb-[1.3rem] lg:pl-[3.7rem]"
											key={uuidv4()}
										>
											<h4 className="text-black text-xl uppercase relative before:absolute before:-ml-[2.5rem] before:content-[url('../public/icons/checkbox-circle-fill-black.svg')]">
												{title}
											</h4>
											<p
												className="mt-[.19rem] text-gray text-base
												lg:mt-[.75rem]"
											>
												<span className="lg:hidden">{text}</span>
												<span className="hidden lg:block">{textLarge}</span>
											</p>
										</article>
									))}
								</div>
							</div>
						</div>
					</section>
					<section
						className="bg-features-image bg-cover bg-center bg-no-repeat"
						id="features"
					>
						<div
							className="container py-[3.75rem]
						tablet:py-[7.5rem]"
						>
							<article
								className="mx-auto max-w-[18.75rem] text-center
							tablet:max-w-[28.125rem]
							lg:max-w-[37.5625rem]"
							>
								<h2 className="text-white text-2xl uppercase">app features</h2>
								<p className="mt-[1.12rem] text-white text-base">
									<span className="tablet:hidden">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Viverra nunc ante velit vitae.
									</span>
									<span className="hidden tablet:block lg:hidden">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Viverra nunc ante velit vitae. Est tellus vitae, nullam
										lobortis enim. Faucibus amet etiam tincidunt rhoncus.
									</span>
									<span className="hidden lg:block">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Viverra nunc ante velit vitae. Est tellus vitae, nullam
										lobortis enim. Faucibus amet etiam tincidunt rhoncus,
										ullamcorper velit. Ullamcorper risus tempor, ac nunc libero
										urna, feugiat.
									</span>
								</p>
							</article>

							<section>
								<div
									className="mt-[2rem] flex flex-col justify-center items-center gap-y-[2.5rem]
								tablet:mt-[3.75rem]"
								>
									<article className="max-w-max flex flex-col items-center justify-center text-center">
										<Image
											className="mx-auto"
											src={comment}
											alt="comment"
										></Image>
										<h3
											className="max-w-[15.25rem] mt-[1.8rem] text-white text-xl uppercase
													tablet:max-w-[13.9375rem]
										lg:max-w-[21.625rem] lg:mt-[1.38rem] lg:text-2xl"
										>
											Full free chat
										</h3>
										<p
											className="mt-[1.13rem] max-w-[13.9375rem] text-white text-base
												tablet:max-w-[13.9375rem]
												lg:max-w-[18.5625rem]"
										>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										</p>
									</article>
									<div
										className="flex flex-col justify-center items-center gap-y-[3.75rem]
									tablet:flex-row tablet:items-stretch tablet:gap-x-[1.13rem]
									lg:gap-x-[3.75rem]"
									>
										<div
											className="flex flex-col gap-y-[2.5rem] 
										tablet:gap-y-[0] tablet:justify-between tablet:pt-[1.06rem] tablet:pb-[1.5rem]
										lg:py-[3.8rem]"
										>
											<article
												className="max-w-max flex flex-col items-end justify-center text-center
											tablet:text-right"
											>
												<Image
													className="mx-auto tablet:mx-0"
													src={browser}
													alt="browser"
												></Image>
												<h3
													className="max-w-[15.25rem] mt-[1.8rem] text-white text-xl uppercase
													tablet:max-w-[13.9375rem]
										lg:max-w-[21.625rem] lg:mt-[1.38rem] lg:text-2xl"
												>
													unlimiter features
												</h3>
												<p
													className="mt-[1.13rem] max-w-[13.9375rem] text-white text-base
												tablet:max-w-[13.9375rem]
												lg:max-w-[18.5625rem]"
												>
													Lorem ipsum dolor sit amet, consectetur adipiscing
													elit.
												</p>
											</article>
											<article
												className="max-w-max flex flex-col items-end justify-center text-center
											tablet:text-right"
											>
												<Image
													className="mx-auto tablet:mx-0"
													src={vector}
													alt="vector"
												></Image>
												<h3
													className="max-w-[15.25rem] mt-[1.8rem] text-white text-xl uppercase
													tablet:max-w-[13.9375rem]
										lg:max-w-[21.625rem] lg:mt-[1.38rem] lg:text-2xl"
												>
													awsome ui design
												</h3>
												<p
													className="mt-[1.13rem] max-w-[13.9375rem] text-white text-base
												tablet:max-w-[13.9375rem]
												lg:max-w-[18.5625rem]"
												>
													Lorem ipsum dolor sit amet, consectetur adipiscing
													elit.
												</p>
											</article>
										</div>
										<div className="">
											<Image
												className="w-[13.375rem] h-[29.25rem] rounded-[2.5rem] shadow-[40px_40px_100px_0px_rgba(24,48,63,0.50)]
												tablet:shadow-[10px_10px_100px_0px_rgba(24,48,63,0.50)]
												lg:w-[23.4375rem] lg:h-[50.75rem] lg:shadow-[40px_40px_100px_0px_rgba(24,48,63,0.50)]
												"
												src={app}
												alt="app"
											></Image>
										</div>
										<div
											className="flex flex-col gap-y-[2.5rem] 
										tablet:gap-y-[0] tablet:justify-between tablet:pt-[1.06rem]
										lg:py-[3.8rem]
										"
										>
											<article
												className="max-w-max flex flex-col items-center justify-center text-center
											tablet:text-left  tablet:items-start"
											>
												<Image
													className="mx-auto
													tablet:mx-0"
													src={cellPhone}
													alt="cellPhone"
												></Image>
												<h3
													className="max-w-[15.25rem] mt-[1.8rem] text-white text-xl uppercase
													tablet:max-w-[13.9375rem]
										lg:max-w-[21.625rem] lg:mt-[1.38rem] lg:text-2xl"
												>
													iso & androind version
												</h3>
												<p
													className="mt-[1.13rem] max-w-[13.9375rem] text-white text-base
												tablet:max-w-[13.9375rem]
												lg:max-w-[18.5625rem]"
												>
													Lorem ipsum dolor sit amet, consectetur adipiscing
													elit.
												</p>
											</article>
											<article
												className="max-w-max flex flex-col items-center justify-center text-center
											tablet:text-left tablet:items-start tablet:-mb-[.6rem] lg:-mb-0"
											>
												<Image
													className="mx-auto
													tablet:mx-0"
													src={eyeScanner}
													alt="eyeScanner"
												></Image>
												<h3
													className="max-w-[15.25rem] mt-[1.8rem] text-white text-xl uppercase
													tablet:max-w-[13.9375rem]
												lg:max-w-[21.625rem] lg:mt-[1.38rem] lg:text-2xl"
												>
													retina ready greaphics
												</h3>
												<p
													className="mt-[1.13rem] max-w-[13.9375rem] text-white text-base
												tablet:max-w-[13.9375rem]
												lg:max-w-[18.5625rem]"
												>
													Lorem ipsum dolor sit amet, consectetur adipiscing
													elit.
												</p>
											</article>
										</div>
									</div>
									<article className="max-w-max flex flex-col items-center justify-center text-center">
										<Image
											className="mx-auto"
											src={maleTelemarketer}
											alt="maleTelemarketer"
										></Image>
										<h3
											className="max-w-[15.25rem] mt-[1.8rem] text-white text-xl uppercase
													tablet:max-w-[19.9375rem]
													lg:mt-[1.38rem] lg:text-2xl"
										>
											24/7 support by real pepole
										</h3>
										<p
											className="mt-[1.13rem] max-w-[18.5625rem] text-white text-base
												lg:max-w-[18.5625rem]"
										>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										</p>
									</article>
								</div>
							</section>
						</div>
					</section>
					<section id="screenshot"></section>
				</div>
			</main>
		</div>
	)
}
