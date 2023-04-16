import Arweave from "arweave";
import {
  getTransactionIds,
  getTransactionIdsByDigest,
} from "./getTransactionIds";

const arweave = Arweave.init({
  host: "arweave.net",
  port: 443,
  protocol: "https",
});

export const getTransactionData = async (id: string) => {
  const result = (await arweave.transactions.getData(id, {
    decode: true,
    string: true,
  })) as string;
  const json = JSON.parse(result);
  return json;
};

export const getMirrorPostsByContributor = async (
  address: string,
  limit: number
) => {
  const ids = await getTransactionIds(address, limit);

  let allPosts: any = [];
  let uniquePosts: any = [];

  for (const id of ids) {
    const json = await getTransactionData(id);

    allPosts.push(json);
  }

  allPosts.forEach((post: any) => {
    const isUniqueAndUpdated = uniquePosts.every((uniquePost: any) => {
      const isUnique = uniquePost.content.title !== post.content.title;

      const isUpdated = uniquePost.timestamp
        ? uniquePost.content.timestamp < post.content.timestamp
        : true;

      return isUnique && isUpdated;
    });

    if (uniquePosts.length === 0) {
      uniquePosts.push(post);
    } else if (isUniqueAndUpdated) {
      uniquePosts.push(post);
    }
  });

  const posts: any[] = Object.values(uniquePosts);

  return posts as MirrorPost[];
};

export const getMirrorPostByDigest = async (digest: string, limit: number) => {
  const ids = await getTransactionIdsByDigest(digest, limit);

  let uniquePosts: any = {};
  for (const id of ids) {
    const json = await getTransactionData(id);
    uniquePosts[json.originalDigest] = json;
  }

  const posts: any[] = Object.values(uniquePosts);
  return posts as MirrorPost[];
};

type MirrorPost = {
  content: {
    body: string;
    title: string;
    timestamp: number;
  };
  digest: string;
  version: string;
  originalDigest: string;
  nft: any;
  authorship: {
    signature: string;
    contributor: string;
  };
};
