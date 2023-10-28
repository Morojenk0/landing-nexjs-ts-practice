import Image from 'next/image'
import Navigation from './components/Navigation'

export default function Home() {
	return (
		<div>
			<header className="bg-hero-image bg-cover bg-center bg-no-repeat">
				<Navigation />
				<h1 className="text-6xl text-white">its Header Content!</h1>
			</header>
			<main>
				<h1 className="text-6xl text-white">its Main Title!</h1>
			</main>
		</div>
	)
}
