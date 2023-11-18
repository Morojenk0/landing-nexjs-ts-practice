'use client'

const play = () => {
	const video = document.getElementById('video')
	const playButton = document.getElementById('playButton')

	if (video.paused) {
		video.play()
		playButton.classList.add('hidden')
	} else {
		video.pause()
		playButton.classList.remove('hidden')
	}
}

function PlayButton() {
	return (
		<div
			className="absolute bg-[#000] w-full max-w-[21.4375rem] max-h-[9.375rem] right-0 left-0 bottom-0 -mb-[4.6rem] mx-auto rounded-[.625rem] overflow-hidden shadow-[0px_10px_100px_0px_rgba(0,0,0,0.24)]
    tablet:-mb-[7.2rem] tablet:max-w-[35.625rem] tablet:max-h-[14.4375rem]
    xl:-mb-[9.9rem] xl:max-w-[48.125rem] xl:max-h-[19.9375rem]"
		>
			<video
				className="w-full xl:max-w-[48.125rem] xl:max-h-[19.9375rem]"
				src="/video/Rick Astley - Never Gonna Give You Up (Official Music Video).mp4"
				poster="/poster.png"
				id="video"
				onClick={() => {
					play()
				}}
			></video>
			<button className="w-[4.375rem] h-[4.375rem] absolute top-0 right-0 bottom-0 left-0 m-auto cursor-pointer z-10">
				<svg
					className=""
					width="70"
					height="70"
					viewBox="0 0 70 70"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					id="playButton"
					onClick={() => {
						play()
					}}
				>
					<circle
						cx="35"
						cy="35"
						r="35"
						fill="white"
						fillOpacity="0.6"
					/>
					<circle
						cx="35"
						cy="35"
						r="30"
						fill="white"
						fillOpacity="0.7"
					/>
					<circle
						cx="35"
						cy="35"
						r="25"
						fill="white"
					/>
					<g clipPath="url(#clip0_85_115)">
						<path
							d="M26 26.993C26 26.445 26.445 26 26.993 26H43.007C43.555 26 44 26.445 44 26.993V43.007C43.9997 43.2703 43.895 43.5227 43.7089 43.7089C43.5227 43.895 43.2703 43.9997 43.007 44H26.993C26.7297 43.9997 26.4773 43.895 26.2911 43.7089C26.105 43.5227 26.0003 43.2703 26 43.007V26.993ZM33.622 31.415C33.5618 31.3748 33.4919 31.3518 33.4196 31.3482C33.3473 31.3447 33.2755 31.3608 33.2116 31.3949C33.1478 31.4289 33.0944 31.4797 33.0572 31.5417C33.0199 31.6037 33.0001 31.6747 33 31.747V38.253C33.0001 38.3253 33.0199 38.3963 33.0572 38.4583C33.0944 38.5203 33.1478 38.5711 33.2116 38.6051C33.2755 38.6392 33.3473 38.6553 33.4196 38.6518C33.4919 38.6482 33.5618 38.6252 33.622 38.585L38.501 35.333C38.5559 35.2965 38.6009 35.247 38.632 35.1889C38.6631 35.1308 38.6794 35.0659 38.6794 35C38.6794 34.9341 38.6631 34.8692 38.632 34.8111C38.6009 34.753 38.5559 34.7035 38.501 34.667L33.621 31.415H33.622Z"
							fill="#5956E9"
						/>
					</g>
					<defs>
						<clipPath id="clip0_85_115">
							<rect
								width="18"
								height="18"
								fill="white"
								transform="translate(26 26)"
							/>
						</clipPath>
					</defs>
				</svg>
			</button>
		</div>
	)
}

export default PlayButton
