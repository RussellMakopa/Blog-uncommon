import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '3b981aq7',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    apiVersion: "2021-03-25",
    useCdn: false,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any){
    return builder.image(source);
}