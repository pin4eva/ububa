import Link from "next/link";

export default function NotFound() {
	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100">
			<div className="text-center p-8">
				<h1 className="text-6xl font-bold text-secondary mb-4">404</h1>
				<h2 className="text-2xl font-semibold text-primary mb-4">
					Page Not Found
				</h2>
				<p className="text-gray-600 mb-8">
					The page you are looking for does not exist or has been moved.
				</p>
				<Link href="/" className="btn-primary">
					Return Home
				</Link>
			</div>
		</div>
	);
}
