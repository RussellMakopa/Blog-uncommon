import Banner from "./components/banner";
import BlogsSection from "./components/blogssection";
import { fetchData } from "./components/getAllPosts";

export const revalidate = 30;
export default async function Home() {
  const { allPosts } = await fetchData();

  return (
    <main className="p-[5%]">
      <Banner />
      <BlogsSection blogs={allPosts} />
    </main>
  );
}
