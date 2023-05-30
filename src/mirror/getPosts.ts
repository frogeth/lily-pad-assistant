import { getTransactionIds, getOriginalDigestById } from "./getTransactionIds";
import Arweave from "arweave";

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

export const getMirrorPostsByContributor = async (address: string, limit: number) => {
  const ids = await getTransactionIds(address, limit);

  let uniquePosts: any = [];
  let uniqueDigests: string[] = [];

  for (const id of ids) {
    const originalDigest = await getOriginalDigestById(id);
    const json = await getTransactionData(id);
    const post = { originalDigest, ...json };

    if (!uniqueDigests.includes(originalDigest)) {
      uniqueDigests.push(originalDigest);
      uniquePosts.push(post);
    } else if (uniqueDigests.length === 0) {
      uniqueDigests.push(originalDigest);
      uniquePosts.push(post);
    }
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
