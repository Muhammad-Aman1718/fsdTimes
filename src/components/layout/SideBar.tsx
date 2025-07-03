import React from 'react'
import { categories } from '@/constant/data'
import Link from 'next/link'

const recentPosts = [
  { title: 'How to Start Blogging', slug: 'how-to-start-blogging' },
  { title: 'Top 10 React Tips', slug: 'top-10-react-tips' },
  { title: 'Next.js vs Gatsby', slug: 'nextjs-vs-gatsby' },
]

const SideBar = () => {
  return (
    <aside className="space-y-8">
      {/* Search Box */}
      <div className="bg-white rounded-xl shadow p-4">
        <input
          type="text"
          placeholder="Search posts..."
          className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      {/* Categories */}
      <div className="bg-white rounded-xl shadow p-4">
        <h2 className="font-semibold text-lg mb-3 text-gray-800">Categories</h2>
        <ul className="space-y-2">
          {categories.map((cat, idx) => (
            <li key={idx}>
              <span className="font-medium text-gray-700">{cat.title}</span>
              <ul className="ml-3 mt-1 space-y-1">
                {cat.links.map((link, i) => (
                  <li key={i}>
                    <Link href={`/${link.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-gray-500 hover:text-blue-600 text-sm transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      {/* Recent Posts */}
      <div className="bg-white rounded-xl shadow p-4">
        <h2 className="font-semibold text-lg mb-3 text-gray-800">Recent Posts</h2>
        <ul className="space-y-2">
          {recentPosts.map((post, idx) => (
            <li key={idx}>
              <Link href={`/article/${post.slug}`} className="text-gray-700 hover:text-blue-600 transition-colors">
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}

export default SideBar