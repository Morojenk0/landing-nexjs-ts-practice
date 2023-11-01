import Navigation from '../components/Navigation'

export default function page() {
	return (
		<div>
			<header className="bg-hero-image bg-cover bg-center bg-no-repeat">
				<Navigation />
				<h1 className="text-6xl text-white">its Blog Header Title!</h1>
			</header>
			<main>
				<h1 className="text-6xl text-white">its Main Title!</h1>
			</main>
		</div>
	)
}
