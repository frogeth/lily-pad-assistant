import { getMirrorPostsByContributor } from "./getPosts";

const address = "0x51D0A5CBe5666ad3EEe303f0d16FcDe9C5Cd3009";
const limit = 10000;

export const getPosts = async () => await getMirrorPostsByContributor(address, limit);

export { searchContentForAttribute } from "./util";
