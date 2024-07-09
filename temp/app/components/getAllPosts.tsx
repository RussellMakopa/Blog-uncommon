import { client } from "../lib/sanity";

// Function to fetch all posts
async function fetchAllPosts() {
  const query = `
    *[_type == 'post'] | order(_createdAt desc){
      title,
      mainImage,
      "currentSlug": slug.current,
      "date": _createdAt,
      body,
      "category": categories[0]->title
    }`;

  try {
    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.log("Error fetching all posts:", error);
    return [];
  }
}

// Function to fetch other posts excluding the current one
async function fetchOtherPosts(slug: string) {
  const query = `
    *[_type == "post" && slug.current != $slug] | order(_createdAt desc){
      title,
      mainImage,
      "currentSlug": slug.current,
      "date": _createdAt,
      body,
      "category": categories[0]->title
    }`;

  const params = { slug };

  try {
    const data = await client.fetch(query, params);
    return data;
  } catch (error) {
    console.log("Error fetching other posts:", error);
    return [];
  }
}

// Function to fetch the current post
async function fetchCurrentPost(slug: string) {
  const query = `
  *[_type == "post" && slug.current == $slug][0]{
    "currentSlug": slug.current,
    title,
    mainImage,
    author,
    "category": categories[0]->title,
    "date": _createdAt,
    body[]{
      ...,
      _type == "block" => {
        ...,
        children[]{
          ...,
          markDefs[]{
            ...,
            _type == "link" => {
              "href": @.href
            }
          }
        }
      },
      _type == "image" => {
        ...,
        asset->
      },
      _type == "ul" => {
        ...,
        children[]{
          ...,
          _type == "listItem" => {
            ...,
            children[]{
              ...
            }
          }
        }
      },
      _type == "ol" => {
        ...,
        children[]{
          ...,
          _type == "listItem" => {
            ...,
            children[]{
              ...
            }
          }
        }
      }
    },
    conclusion
  }`;

  const params = { slug };

  try {
    const data = await client.fetch(query, params);
    return data;
  } catch (error) {
    console.log("Error fetching current post:", error);
    return null;
  }
}

// Combined data fetching function
export async function fetchData(slug?: string) {
  if (slug) {
    const [currentPost, otherPosts] = await Promise.all([
      fetchCurrentPost(slug),
      fetchOtherPosts(slug)
    ]);

    return { currentPost, otherPosts };
  } else {
    const allPosts = await fetchAllPosts();
    return { allPosts };
  }
}
