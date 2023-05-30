import { request, gql } from "graphql-request";

type TxnData = {
  transactions: {
    edges: {
      node: {
        id: string;
      };
    }[];
  };
};

export const getTransactionIds = async (address: string, limit: number) => {
  const endpoint = "https://arweave.net/graphql";

  const query = gql`
    query MirrorPosts($address: String!, $limit: Int) {
      transactions(
        tags: [{ name: "App-Name", values: ["MirrorXYZ"] }, { name: "Contributor", values: [$address] }]
        sort: HEIGHT_DESC
        first: $limit
      ) {
        edges {
          node {
            id
          }
        }
      }
    }
  `;
  const vars = {
    address: address,
    limit: limit,
  };

  const txnData: TxnData = await request(endpoint, query, vars);

  const ids = txnData.transactions.edges.map((edge: any) => {
    return edge.node.id;
  });

  return ids;
};

export const getOriginalDigestById = async (id: string) => {
  const endpoint = "https://arweave.net/graphql";

  const query = gql`
    query MirrorPostByID($ID: ID!) {
      transaction(id: $ID) {
        tags {
          name
          value
        }
      }
    }
  `;

  const vars = {
    ID: id,
  };

  const txnData: any = await request(endpoint, query, vars);

  let originalDigest: string = "";

  txnData.transaction.tags.forEach((tag: any) => {
    if (tag.name === "Original-Content-Digest") {
      originalDigest = tag.value;
    }
  });

  return originalDigest;
};
