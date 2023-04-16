export * from "./getPosts";
import { getMirrorPostsByContributor } from "./getPosts";

const address = "0x51D0A5CBe5666ad3EEe303f0d16FcDe9C5Cd3009";
const limit = 10000;

export default async function mirror() {
  const posts = await getMirrorPostsByContributor(address, limit);
  posts.forEach((post) => {
    console.log(post.content.title);
  });
}
