import Link from "next/link";
import Image from "next/image";
import { latestItemss } from "@/constants";

export default function Blog() {
  return (
    <section className="w-full py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4">Our Blog</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the latest articles, insights, and updates from our team of experts.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {latestItemss.map((post) => (
            <article key={post.id} className="group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 bg-white h-full flex flex-col">
              <Link href={post.href} className="block flex-1 flex flex-col">
                <div className="relative h-56 md:h-64 overflow-hidden">
                  <Image
                    src={post.src}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 md:p-6">
                    <div className="flex flex-wrap gap-2">
                      {post.links?.map((tag) => (
                        <span 
                          key={tag.id}
                          className="bg-white/90 text-xs md:text-sm font-medium px-2 md:px-3 py-1 rounded-full text-gray-800"
                        >
                          {tag.title}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="p-4 md:p-6 flex-1 flex flex-col">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 line-clamp-2">
                    {post.title?.replace(/<br\s*\/?>/g, ' ')}
                  </h2>
                  <p className="text-gray-600 mb-4 text-sm md:text-base">{post.subTitle}</p>
                  <div className="flex items-center text-xs md:text-sm text-gray-500 mt-auto pt-2">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>5 min read</span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <Link 
            href="/blog" 
            className="inline-flex items-center px-5 py-2.5 md:px-6 md:py-3 border border-transparent text-sm md:text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            View All Articles
            <svg className="ml-2 -mr-1 w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
