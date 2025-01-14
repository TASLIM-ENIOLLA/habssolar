export default function Page() {
	return (
		<footer className="py-20 bg-green-400">
			<div className="container">
				<div className="text-lg text-center">
					&copy; {new Date().getFullYear()} Habs E-commerce. All rights reserved
				</div>
			</div>
		</footer>
	);
}