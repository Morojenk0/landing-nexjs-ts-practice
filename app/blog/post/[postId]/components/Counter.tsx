'use client'

import { useState } from 'react'

export default function Counter() {
	const [counter, setCount] = useState(0)

	function increaseCount() {
		setCount(counter + 1)
	}
	function decreaseCount() {
		setCount(counter - 1)
	}
	return (
		<div className="mt-[.5rem] flex flex-row items-center gap-x-[.5rem]">
			<button
				className="p-[2px] rounded-full hover:bg-gray/50 active:bg-gray/25"
				id="increaseButton"
				onClick={increaseCount}
			>
				<svg
					width="18"
					height="18"
					viewBox="0 0 18 18"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g clipPath="url(#clip0_95_729)">
						<path
							d="M9.00005 8.121L5.28755 11.8335L4.22705 10.773L9.00005 6L13.7731 10.773L12.7126 11.8335L9.00005 8.121Z"
							fill="#6C6C72"
						/>
					</g>
					<defs>
						<clipPath id="clip0_95_729">
							<rect
								width="18"
								height="18"
								fill="white"
							/>
						</clipPath>
					</defs>
				</svg>
			</button>
			<output className="text-gray text-base">{counter}</output>
			<button
				className="p-[2px] rounded-full hover:bg-gray/50 active:bg-gray/25"
				id="decreaseButton"
				onClick={decreaseCount}
			>
				<svg
					width="18"
					height="18"
					viewBox="0 0 18 18"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g clipPath="url(#clip0_95_732)">
						<path
							d="M9.00005 9.879L12.7126 6.1665L13.7731 7.227L9.00005 12L4.22705 7.227L5.28755 6.1665L9.00005 9.879Z"
							fill="#6C6C72"
						/>
					</g>
					<defs>
						<clipPath id="clip0_95_732">
							<rect
								width="18"
								height="18"
								fill="white"
							/>
						</clipPath>
					</defs>
				</svg>
			</button>
		</div>
	)
}
