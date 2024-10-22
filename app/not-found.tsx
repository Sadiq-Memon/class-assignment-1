import Link from 'next/link'
export default function Custom404() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                Oops! Page Not Found
            </h2>
            <p className="text-gray-600 mb-8">
                The page you're looking for doesn't exist.
            </p>
            <Link href="/" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition">
                    Go Back Home</Link>
        </div>
    )
}



