import Image from 'next/image'
import Navigation from './components/Navigation'
import PlayButton from './components/PlayButton'
import { v4 as uuidv4 } from 'uuid'

import getData from '@/lib/getData.js'

import googlePlay from '@/public/icons/google-play.svg'
import appStore from '@/public/icons/app-store.svg'
import mobileApp from '@/public/free-Ui-view-mobile-app-mockup-1.png'
import mockup from '@/public/android-smartphone-free-mockup.png'
import app from '@/public/app.png'
import comment from '@/public/icons/comment.svg'
import browser from '@/public/icons/browser.svg'
import vector from '@/public/icons/vector.svg'
import cellPhone from '@/public/icons/cell-phone.svg'
import eyeScanner from '@/public/icons/eye-scanner-1.svg'
import maleTelemarketer from '@/public/icons/male-telemarketer.svg'
import carla from '@/public/carla.png'
import craig from '@/public/craig.png'
import jocelyn from '@/public/jocelyn.png'

import download from '@/public/icons/download-2-fill.svg'
import like from '@/public/icons/thumb-up-fill.svg'
import star from '@/public/icons/star-fill.svg'
import iPhone12Mockup from '@/public/Gravity-Scene-iPhone-12-Mockup 1.png'

export default async function Home() {
	const db = getData()

	const data = await db

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
				{/* about */}
				<section
					className="bg-white"
					id="about"
				>
					<div
						className="container pt-[3.75rem] pb-[5.75rem] 
							tablet:pt-[7.5rem] tablet:pb-[10.12rem]
							desktop:pt-[7.5rem] desktop:pb-[6.6rem]"
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
									Viverra nunc ante xlt vitae. Est tellus vitae, nullam lobortis
									enim. Faucibus amet etiam tincidunt rhoncus.
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
				{/* features */}
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
									tablet:flex-row tablet:gap-y-[0rem] tablet:items-stretch tablet:gap-x-[1.13rem]
									lg:gap-x-[3.75rem]"
								>
									<div
										className="flex flex-col gap-y-[2.5rem]
										tablet:gap-y-[0] tablet:justify-between tablet:pt-[1.06rem] tablet:pb-[1.5rem]
										lg:py-[3.8rem]"
									>
										<article
											className=" flex flex-col  justify-center text-center
												tablet:items-end tablet:text-right
												lg:max-w-[25rem]"
										>
											<Image
												className="mx-auto tablet:mx-0"
												src={browser}
												alt="browser"
											></Image>
											<h3
												className=" mt-[1.8rem] text-white text-xl uppercase
													 lg:text-2xl"
											>
												unlimiter features
											</h3>
											<p className="mt-[1.13rem] text-white text-base">
												Lorem ipsum dolor sit amet, consectetur adipiscing elit.
											</p>
										</article>
										<article
											className="flex flex-col justify-center text-center
												tablet:items-end tablet:text-right"
										>
											<Image
												className="mx-auto tablet:mx-0"
												src={vector}
												alt="vector"
											></Image>
											<h3
												className=" mt-[1.8rem] text-white text-xl uppercase
													lg:max-w-[18.5625rem] lg:mt-[1.38rem] lg:text-2xl"
											>
												awsome ui design
											</h3>
											<p
												className="mt-[1.13rem]  text-white text-base
													lg:max-w-[18.5625rem]"
											>
												Lorem ipsum dolor sit amet, consectetur adipiscing elit.
											</p>
										</article>
									</div>
									<div className="">
										<Image
											className="max-w-[13.375rem] max-h-[29.25rem] rounded-[2.5rem] shadow-[40px_40px_100px_0px_rgba(24,48,63,0.50)]
												tablet:max-w-[13.175rem] tablet:max-h-[29.25rem] tablet:shadow-[10px_10px_100px_0px_rgba(24,48,63,0.50)]
												lg:max-w-[23.4375rem] lg:max-h-[50.75rem] lg:shadow-[40px_40px_100px_0px_rgba(24,48,63,0.50)]"
											src={app}
											alt="app"
										></Image>
									</div>
									<div
										className="flex flex-col gap-y-[2.5rem] 
										tablet:gap-y-[0] tablet:justify-between tablet:pt-[1.06rem]
										lg:py-[3.8rem]"
									>
										<article
											className=" flex flex-col items-center justify-center text-center
											tablet:text-left tablet:items-start"
										>
											<Image
												className="mx-auto
													tablet:mx-0"
												src={cellPhone}
												alt="cellPhone"
											></Image>
											<h3
												className="max-w-[12rem] mt-[1.8rem] text-white text-xl uppercase	
													tablet:max-w-[14rem]
										 			lg:max-w-[22rem] lg:mt-[1.38rem] lg:text-2xl"
											>
												iso & androind version
											</h3>
											<p
												className="mt-[1.13rem] text-white text-base
													lg:max-w-[18.5625rem]"
											>
												Lorem ipsum dolor sit amet, consectetur adipiscing elit.
											</p>
										</article>
										<article
											className="flex flex-col items-center justify-center text-center
											tablet:text-left tablet:items-start tablet:-mb-[.6rem] lg:-mb-0"
										>
											<Image
												className="mx-auto
													tablet:mx-0"
												src={eyeScanner}
												alt="eyeScanner"
											></Image>
											<h3
												className="max-w-[9.9375rem] mt-[1.8rem] text-white text-xl uppercase
													tablet:max-w-[14rem]
												 lg:max-w-[22rem] lg:mt-[1.38rem] lg:text-2xl"
											>
												retina ready greaphics
											</h3>
											<p className="mt-[1.13rem] text-white text-base">
												Lorem ipsum dolor sit amet, consectetur adipiscing elit.
											</p>
										</article>
									</div>
								</div>

								<article className="flex flex-col items-center justify-center text-center">
									<Image
										className="mx-auto"
										src={maleTelemarketer}
										alt="maleTelemarketer"
									></Image>
									<h3 className="mt-[1.8rem] text-white text-xl uppercase lg:mt-[1.38rem] lg:text-2xl">
										24/7 support by real pepole
									</h3>
									<p className="max-w-[18.5625rem] mt-[1.13rem] text-white text-base">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									</p>
								</article>
							</div>
						</section>
					</div>
				</section>
				{/* screenshot */}
				<section id="screenshot"></section>
				{/* download */}
				<section
					className="bg-white"
					id="download"
				>
					<div
						className="container items-center py-[3.75rem] flex flex-col gap-y-[3.75rem]
					tablet:py-[7.5rem] tablet:flex-row tablet:justify-between tablet:gap-y-[0rem]
					xl:py-[7.5rem]"
					>
						<div
							className="max-w-[20.90513rem]
						tablet:max-w-[20.25rem]
						lg:max-w-[35.625rem]"
						>
							<article className="">
								<h2
									className="max-w-[18rem] text-black text-2xl uppercase
									tablet:text-3xl
									lg:max-w-full"
								>
									Download App Now
								</h2>
								<p className="mt-[1.12rem] text-gray text-base">
									<span className="lg:hidden">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Viverra nunc ante velit vitae. Est tellus vitae, nullam
										lobortis enim.
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
							<div
								className="mt-[2.5rem] flex flex-row justify-between
							lg:justify-normal lg:gap-x-[1.56rem]"
							>
								<a
									href="https://store.google.com/regionpicker"
									target="_blank"
								>
									<Image
										className="w-[9.3125rem] h-[2.9375rem]"
										src={googlePlay}
										alt="googlePlay"
									></Image>
								</a>
								<a
									href="https://www.apple.com/"
									target="_blank"
								>
									<Image
										className="w-[9.3125rem] h-[2.9375rem]"
										src={appStore}
										alt="appStore"
									></Image>
								</a>
							</div>
							<div
								className="mt-[3.75rem] flex flex-row justify-between
							tablet:mt-[2.5rem]
							lg:mt-[3.75rem]"
							>
								{[
									[download, data.raitings[0], 'Download'],
									[like, data.raitings[1], 'Like'],
									[star, data.raitings[2], '5 star raiting'],
								].map(([image, data, category]) => (
									<article
										className="w-[6rem] py-[.75rem] flex flex-col items-center bg-blue rounded-[.3125rem]
										lg:w-[10.625rem] lg:pt-[1.9rem] lg:pb-[1.25rem] lg:rounded-[.625rem]"
										key={uuidv4()}
									>
										<Image
											className="w-[1.25rem] h-[1.25rem]
											lg:w-[2.1875rem] lg:h-[2.1875rem]"
											src={image}
											alt={image}
										></Image>
										<h4
											className="mt-[.5rem] text-white text-xl
										lg:mt-[1.3rem] lg:text-2xl"
										>
											{data}
										</h4>
										<p
											className="text-white text-base 
										lg:mt-[1.13rem] lg:text-xl lg:uppercase"
										>
											{category}
										</p>
									</article>
								))}
							</div>
						</div>
						<div
							className="flex
						tablet:items-end"
						>
							<Image
								className="max-w-[20.905rem] max-h-[19.446rem]
								tablet:-mb-[.4rem]
								lg:max-w-[26.25rem] lg:max-h-[25rem]
								xl:max-w-[32.25rem] xl:max-h-[30rem] lg:-mb-[.8rem]"
								src={iPhone12Mockup}
								alt="iPhone12Mockup"
							></Image>
						</div>
					</div>
				</section>
				{/* guide */}
				<section className="bg-blue bg-guide-image bg-cover bg-center bg-no-repeat">
					<div
						className="container relative pt-[3.75rem] pb-[7.25rem]
					tablet:pt-[3.06rem] tablet:pb-[10.62rem]
					xl:pt-[7.5rem] xl:pb-[13.5rem]"
					>
						<article className="flex flex-col items-center justify-center text-center">
							<h2
								className="text-white text-2xl uppercase  
								tablet:text-3xl"
							>
								how to use the app perfectly
							</h2>
							<p
								className="max-w-[18.75rem] mt-[1.12rem] text-white text-base
								tablet:max-w-[28.125rem]
								xl:max-w-[37.5625rem]"
							>
								<span className="tablet:hidden">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Viverra nunc ante velit vitae.
								</span>
								<span className="hidden tablet:block xl:hidden">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Viverra nunc ante velit vitae. Est tellus vitae, nullam
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
						<PlayButton />
					</div>
				</section>
				{/* team */}
				<section
					className="bg-white"
					id="team"
				>
					<div
						className="container pt-[8.4rem] pb-[3.75rem]
						tablet:pt-[15rem] tablet:pb-[7.5rem]
						desktop:pt-[17.7rem]"
					>
						<article className="flex flex-col items-center justify-center text-center">
							<h2
								className="text-black text-2xl uppercase  
								tablet:text-3xl"
							>
								Our reative team
							</h2>
							<p
								className="max-w-[18.75rem] mt-[1.12rem] text-gray text-base
								tablet:max-w-[28.125rem]
								xl:max-w-[37.5625rem]"
							>
								<span className="tablet:hidden">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Viverra nunc ante velit vitae.
								</span>
								<span className="hidden tablet:block xl:hidden">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Viverra nunc ante velit vitae. Est tellus vitae, nullam
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
						<section
							className="mt-[2.5rem] 
							tablet:mt-[2rem]
							desktop:mt-[3.75rem]"
						>
							<div
								className="flex flex-col items-center justify-center gap-y-[1.9rem]
									tablet:flex-row tablet:gap-y-[0] tablet:gap-x-[1.5rem]
									desktop:gap-x-[1.8rem]
								"
							>
								{[
									[
										'Carla Press',
										'App Developer',
										'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
										'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae.',
										carla,
										'Carla',
									],
									[
										'Craig Gouse',
										'UI/UX Designer',
										'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
										'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae.',
										craig,
										'craig',
									],
									[
										'Jocelyn Septimus',
										'Website developer',
										'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
										'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae.',
										jocelyn,
										'jocelyn',
									],
								].map(([name, place, text, largeText, photo, link]) => (
									<article
										className="max-w-[21.4375rem] pt-[2.5rem] pb-[3.3rem] px-[1.1rem] flex flex-col items-center justify-center text-center bg-white rounded-[.625rem] shadow-[0px_1px_10px_0px_rgba(0,0,0,0.10)]
										tablet:max-w-[13.3125rem] tablet:px-[.38rem] tablet:pb-[1.9rem]
										lg:max-w-[23.125rem] lg:px-[1.1rem] lg:pb-[3.3rem] "
										key={uuidv4()}
									>
										<div className="w-full">
											<div
												className="relative rounded-full before:content-[url('../public/shapes/avatar-border.svg')] before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0 before:m-auto before:w-[13.75rem] before:h-[13.75rem]
											tablet:before:content-[url('../public/shapes/avatar-border-tablet.svg')] tablet:before:w-[11.125rem] tablet:before:h-[11.125rem]
											lg:before:content-[url('../public/shapes/avatar-border.svg')] lg:before:w-[13.75rem] lg:before:h-[13.75rem]"
											>
												<Image
													className="mx-auto w-[12.375rem] h-[12.375rem] 
													tablet:w-[10rem] tablet:h-[10rem]
													lg:w-[12.375rem] lg:h-[12.375rem]"
													src={photo}
													alt={photo}
												></Image>
											</div>
										</div>
										<h3
											className="mt-[4.4rem] text-black text-3xl uppercase
											tablet:mt-[1.25rem] tablet:text-xl
											desktop:mt-[4.4rem] desktop:text-3xl"
										>
											{name}
										</h3>
										<h4
											className="text-gray text-xl uppercase
											tablet:mt-[.56rem] tablet:text-base
											desktop:mt-[0] desktop:text-xl"
										>
											{place}
										</h4>
										<p
											className="mt-[.9rem] text-gray text-base
											tablet:mt-[1.3rem]
											desktop:mt-[.9rem]"
										>
											<span className="hidden tablet:block desktop:hidden">
												{text}
											</span>
											<span className="tablet:hidden desktop:block">
												{largeText}
											</span>
										</p>
										<ul
											className="mt-[2.5rem] flex flex-row gap-x-[1.9rem] items-center
											tablet:mt-[1.9rem] tablet:gap-x-[.9rem]
											desktop:mt-[2.5rem] desktop:gap-x-[1.9rem]
											"
										>
											<li>
												<a
													className="group block box-content -m-2 p-2"
													href={`https://facebook.com/${link}`}
													target="_blank"
												>
													<svg
														className="group w-[1.5rem] h-[1.5rem] box-content -m-2 p-2 transition hover:scale-125"
														xmlns="http://www.w3.org/2000/svg"
													>
														<g clipPath="url(#clip0_152_752)">
															<path
																className="transition group-hover:fill-blue"
																d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z"
																fill="black"
															/>
														</g>
														<defs>
															<clipPath id="clip0_152_752">
																<rect
																	width="24"
																	height="24"
																	fill="black"
																/>
															</clipPath>
														</defs>
													</svg>
												</a>
											</li>
											<li>
												<hr className="bg-black w-[.0625rem] h-[1.25rem]" />
											</li>
											<li>
												<a
													className="group block box-content -m-2 p-2"
													href={`https://instagram.com/${link}`}
													target="_blank"
												>
													<svg
														className="group w-[1.5rem] h-[1.5rem] box-content -m-2 p-2 transition hover:scale-125"
														xmlns="http://www.w3.org/2000/svg"
													>
														<g clipPath="url(#clip0_152_754)">
															<path
																className="transition group-hover:fill-blue"
																d="M12 0C15.2604 0 15.6672 0.0119999 16.9464 0.0719999C18.2244 0.132 19.0944 0.3324 19.86 0.63C20.652 0.9348 21.3192 1.3476 21.9864 2.0136C22.5966 2.61348 23.0687 3.33911 23.37 4.14C23.6664 4.9044 23.868 5.7756 23.928 7.0536C23.9844 8.3328 24 8.7396 24 12C24 15.2604 23.988 15.6672 23.928 16.9464C23.868 18.2244 23.6664 19.0944 23.37 19.86C23.0696 20.6613 22.5973 21.3871 21.9864 21.9864C21.3864 22.5964 20.6608 23.0685 19.86 23.37C19.0956 23.6664 18.2244 23.868 16.9464 23.928C15.6672 23.9844 15.2604 24 12 24C8.7396 24 8.3328 23.988 7.0536 23.928C5.7756 23.868 4.9056 23.6664 4.14 23.37C3.33879 23.0694 2.61303 22.5971 2.0136 21.9864C1.40329 21.3866 0.931118 20.661 0.63 19.86C0.3324 19.0956 0.132 18.2244 0.0719999 16.9464C0.0155999 15.6672 0 15.2604 0 12C0 8.7396 0.0119999 8.3328 0.0719999 7.0536C0.132 5.7744 0.3324 4.9056 0.63 4.14C0.930283 3.33862 1.40256 2.61279 2.0136 2.0136C2.61321 1.40308 3.33891 0.930875 4.14 0.63C4.9056 0.3324 5.7744 0.132 7.0536 0.0719999C8.3328 0.0155999 8.7396 0 12 0ZM12 6C10.4087 6 8.88258 6.63214 7.75736 7.75736C6.63214 8.88258 6 10.4087 6 12C6 13.5913 6.63214 15.1174 7.75736 16.2426C8.88258 17.3679 10.4087 18 12 18C13.5913 18 15.1174 17.3679 16.2426 16.2426C17.3679 15.1174 18 13.5913 18 12C18 10.4087 17.3679 8.88258 16.2426 7.75736C15.1174 6.63214 13.5913 6 12 6ZM19.8 5.7C19.8 5.30218 19.642 4.92064 19.3607 4.63934C19.0794 4.35804 18.6978 4.2 18.3 4.2C17.9022 4.2 17.5206 4.35804 17.2393 4.63934C16.958 4.92064 16.8 5.30218 16.8 5.7C16.8 6.09783 16.958 6.47936 17.2393 6.76066C17.5206 7.04197 17.9022 7.2 18.3 7.2C18.6978 7.2 19.0794 7.04197 19.3607 6.76066C19.642 6.47936 19.8 6.09783 19.8 5.7ZM12 8.4C12.9548 8.4 13.8705 8.77928 14.5456 9.45442C15.2207 10.1295 15.6 11.0452 15.6 12C15.6 12.9548 15.2207 13.8705 14.5456 14.5456C13.8705 15.2207 12.9548 15.6 12 15.6C11.0452 15.6 10.1295 15.2207 9.45442 14.5456C8.77928 13.8705 8.4 12.9548 8.4 12C8.4 11.0452 8.77928 10.1295 9.45442 9.45442C10.1295 8.77928 11.0452 8.4 12 8.4Z"
																fill="black"
															/>
														</g>
														<defs>
															<clipPath id="clip0_152_754">
																<rect
																	width="24"
																	height="24"
																	fill="black"
																/>
															</clipPath>
														</defs>
													</svg>
												</a>
											</li>
											<li>
												<hr className="bg-black w-[.0625rem] h-[1.25rem]" />
											</li>
											<li>
												<a
													className="group block box-content -m-2 p-2"
													href={`https://twitter.com/${link}`}
													target="_blank"
												>
													<svg
														className="group w-[1.5rem] h-[1.5rem] box-content -m-2 p-2 transition hover:scale-125"
														xmlns="http://www.w3.org/2000/svg"
													>
														<g clipPath="url(#clip0_152_756)">
															<path
																className="transition group-hover:fill-blue"
																d="M24.1945 3.54124C23.2783 3.99149 22.3068 4.2872 21.3121 4.41857C22.3606 3.72181 23.1453 2.62525 23.5201 1.33324C22.5361 1.9839 21.4573 2.4399 20.3329 2.68657C19.5776 1.78867 18.5765 1.19319 17.4852 0.992682C16.3939 0.792177 15.2736 0.99789 14.2984 1.57784C13.3232 2.15779 12.5477 3.07948 12.0926 4.19963C11.6375 5.31977 11.5282 6.57561 11.7817 7.7719C9.78619 7.66078 7.83406 7.0846 6.05201 6.08079C4.26995 5.07698 2.69782 3.66797 1.43766 1.94524C0.991611 2.7965 0.757209 3.7642 0.758463 4.74924C0.758463 6.68257 1.64406 8.39057 2.99046 9.39057C2.19367 9.3627 1.41442 9.12361 0.717663 8.69324V8.76257C0.717904 10.0502 1.11891 11.2981 1.85268 12.2947C2.58645 13.2912 3.60784 13.9752 4.74366 14.2306C4.004 14.4533 3.22843 14.4861 2.47566 14.3266C2.7959 15.4349 3.42007 16.4042 4.26077 17.0987C5.10148 17.7933 6.11662 18.1783 7.16406 18.1999C6.12304 19.1083 4.93108 19.7799 3.65632 20.1761C2.38156 20.5724 1.04902 20.6856 -0.265137 20.5092C2.0289 22.1485 4.69938 23.0187 7.42686 23.0159C16.6585 23.0159 21.7069 14.5186 21.7069 7.14924C21.7069 6.90924 21.7009 6.66657 21.6913 6.42924C22.6739 5.64013 23.522 4.6626 24.1957 3.54257L24.1945 3.54124Z"
																fill="black"
															/>
														</g>
														<defs>
															<clipPath id="clip0_152_756">
																<rect
																	width="24"
																	height="24"
																	fill="black"
																/>
															</clipPath>
														</defs>
													</svg>
												</a>
											</li>
											<li>
												<hr className="bg-black w-[.0625rem] h-[1.25rem]" />
											</li>
											<li>
												<a
													className="group block box-content -m-2 p-2"
													href={`https://youtube.com/${name}`}
													target="_blank"
												>
													<svg
														className="group w-[1.5rem] h-[1.5rem] box-content -m-2 p-2 transition hover:scale-125"
														xmlns="http://www.w3.org/2000/svg"
													>
														<g clipPath="url(#clip0_152_758)">
															<path
																className="transition group-hover:fill-blue"
																d="M23.4516 3.747C24 6.42 24 12 24 12C24 12 24 17.58 23.4516 20.253C23.1468 21.7305 22.2552 22.893 21.126 23.286C19.0752 24 12 24 12 24C12 24 4.9284 24 2.874 23.286C1.74 22.887 0.8496 21.726 0.5484 20.253C3.57628e-08 17.58 0 12 0 12C0 12 3.57628e-08 6.42 0.5484 3.747C0.8532 2.2695 1.7448 1.107 2.874 0.714C4.9284 -2.68221e-07 12 0 12 0C12 0 19.0752 -2.68221e-07 21.126 0.714C22.26 1.113 23.1504 2.274 23.4516 3.747ZM9.6 17.25L16.8 12L9.6 6.75V17.25Z"
																fill="black"
															/>
														</g>
														<defs>
															<clipPath id="clip0_152_758">
																<rect
																	width="24"
																	height="24"
																	fill="black"
																/>
															</clipPath>
														</defs>
													</svg>
												</a>
											</li>
										</ul>
									</article>
								))}
							</div>
						</section>
					</div>
				</section>
			</main>
		</div>
	)
}
