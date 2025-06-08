import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-10 mt-10 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">News</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:underline">Home Page</Link></li>
              <li><Link href="/" className="hover:underline">World</Link></li>
              <li><Link href="/" className="hover:underline">U.S.</Link></li>
              <li><Link href="/" className="hover:underline">Politics</Link></li>
              <li><Link href="/" className="hover:underline">New York</Link></li>
              <li><Link href="/" className="hover:underline">Business</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Opinion</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:underline">Today's Opinion</Link></li>
              <li><Link href="/" className="hover:underline">Op-Ed Columnists</Link></li>
              <li><Link href="/" className="hover:underline">Editorials</Link></li>
              <li><Link href="/" className="hover:underline">Op-Ed Contributors</Link></li>
              <li><Link href="/" className="hover:underline">Letters</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Arts</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:underline">Today's Arts</Link></li>
              <li><Link href="/" className="hover:underline">Art & Design</Link></li>
              <li><Link href="/" className="hover:underline">Books</Link></li>
              <li><Link href="/" className="hover:underline">Dance</Link></li>
              <li><Link href="/" className="hover:underline">Movies</Link></li>
              <li><Link href="/" className="hover:underline">Music</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Living</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:underline">Automobiles</Link></li>
              <li><Link href="/" className="hover:underline">Crossword</Link></li>
              <li><Link href="/" className="hover:underline">Food</Link></li>
              <li><Link href="/" className="hover:underline">Education</Link></li>
              <li><Link href="/" className="hover:underline">Style</Link></li>
              <li><Link href="/" className="hover:underline">Travel</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-gray-300 text-center text-sm text-gray-600">
          <p>© 2024 The New York Times Company</p>
          <div className="flex justify-center space-x-4 mt-2">
            <Link href="/" className="hover:underline">Contact Us</Link>
            <Link href="/" className="hover:underline">Work with us</Link>
            <Link href="/" className="hover:underline">Advertise</Link>
            <Link href="/" className="hover:underline">Your Ad Choices</Link>
            <Link href="/" className="hover:underline">Privacy Policy</Link>
            <Link href="/" className="hover:underline">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}