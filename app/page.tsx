import Image from 'next/image'
import Navigation from './components/Navigation'
import googlePlay from '../public/icons/google-play.svg'
import appStore from '../public/icons/app-store.svg'
import mobileApp from '../public/free-Ui-view-mobile-app-mockup-1.png'

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
								className=" after:content-[url('../public/shapes/border-mobile.svg')] after:absolute after:left-[1.25rem] after:top-0 after:bottom-0 after:-z-10 after:my-auto after:w-[20.1875rem] after:h-[22.375rem]
								 max-w-[20.2rem] pt-[1.9rem] pr-[.75rem] pb-[1.4rem] pl-[1.13rem] flex flex-col bg-white
							tablet:max-w-[22.25rem] tablet:pt-[.9rem] tablet:pr-[.44rem] tablet:pb-[.9rem] tablet:pl-[1.12rem]
							lg:max-w-[35.625rem] lg:pt-[2.5rem] lg:pr-[1.44rem] lg:pb-[2.6rem] lg:pl-[1.9rem]"
							>
								<h1
									className="text-blue text-2xl uppercase
								tablet:text-3xl
								lg:text-5xl"
								>
									A Great App Makes Your Life Better
								</h1>
								<p
									className=" mt-[1.1rem] text-gray text-base
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
							<div>
								<Image
									className="w-[15.3125rem] h-[31.25rem] mt-[4.20rem]
									tablet:w-[12.5rem] tablet:h-[25.375rem] tablet:mt-[0] tablet:ml-[6rem]
									lg:w-[17.125rem] lg:h-[33rem]
									xl:w-[19.125rem] xl:h-[38rem] xl:ml-[15rem]
									desktop:w-[21.125rem] desktop:h-[42.625rem] desktop:ml-[11.75rem]"
									src={mobileApp}
									alt="mobile-app"
								></Image>
							</div>
						</section>
					</div>
				</section>
			</header>
			<main>
				<h1 className="text-6xl text-white">its Main Title!</h1>
			</main>
		</div>
	)
}
