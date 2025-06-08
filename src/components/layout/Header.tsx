import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="border-b border-gray-200 py-5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Top navigation */}
          <div className="hidden md:flex space-x-4 text-sm">
            <Link href="/" className="hover:underline">Today's Paper</Link>
            <Link href="/" className="hover:underline">Podcasts</Link>
            <Link href="/" className="hover:underline">Video</Link>
            <Link href="/" className="hover:underline">Newsletters</Link>
          </div>
          
          {/* Logo */}
          <div className="text-center py-4">
            <h1 className="text-4xl font-serif font-bold">The New York Times</h1>
            <div className="text-xs mt-2">Monday, June 10, 2024</div>
          </div>
          
          {/* Auth buttons */}
          <div className="flex space-x-4 text-sm">
            <button className="hover:underline">Log In</button>
            <button className="bg-black text-white px-3 py-1 rounded">Subscribe</button>
          </div>
        </div>
        
        {/* Main navigation */}
        <nav className="mt-4 pb-2">
          <ul className="flex flex-wrap justify-center space-x-6 text-sm font-medium">
            <li><Link href="/" className="hover:underline">World</Link></li>
            <li><Link href="/" className="hover:underline">U.S.</Link></li>
            <li><Link href="/" className="hover:underline">Politics</Link></li>
            <li><Link href="/" className="hover:underline">N.Y.</Link></li>
            <li><Link href="/" className="hover:underline">Business</Link></li>
            <li><Link href="/" className="hover:underline">Opinion</Link></li>
            <li><Link href="/" className="hover:underline">Science</Link></li>
            <li><Link href="/" className="hover:underline">Health</Link></li>
            <li><Link href="/" className="hover:underline">Sports</Link></li>
            <li><Link href="/" className="hover:underline">Arts</Link></li>
            <li><Link href="/" className="hover:underline">Books</Link></li>
            <li><Link href="/" className="hover:underline">Style</Link></li>
            <li><Link href="/" className="hover:underline">Food</Link></li>
            <li><Link href="/" className="hover:underline">Travel</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}