import { simpleBlogCard } from '../lib/interface';
import BlogCard from './BlogCard';

export default function BlogsSection({ blogs }: { blogs: simpleBlogCard[] }) {
  return (
    <div>
      
      <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3 mb-[3%]">
        {blogs.map((item, i) => (
          <BlogCard
            key={i}
            title={item.title}
            mainImage={item.mainImage}
            currentSlug={item.currentSlug}
            date={item.date}
            body={item.body}
            category={item.category}
          />
        ))}
      </div>
    </div>
  );
}
