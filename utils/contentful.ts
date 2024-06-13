import posts from ".data/contentful/posts/all.json";
import products from ".data/contentful/products/all.json";
import positions from ".data/contentful/positions/all.json";
import referenceCases from ".data/contentful/referenceCases/all.json";
import campaignsCases from ".data/contentful/campaigns/all.json";

export interface ContentfulSys {
  locale: string;
  id: string;
}

interface Location {
  lon: number;
  lat: number;
}

export interface ContentfulPosition {
  sys: ContentfulSys;
  fields: {
    position: string;
    applicationDeadline: string;
    description: string;
    officeLocation: Location;
  };
}

export interface ContentfulAuthor {
  fields: {
    firstName: string;
    lastName: string;
    profile: {
      fields: {
        file: {
          details: {
            image: {
              height: number;
              width: number;
            };
          };
        };
      };
      sys: ContentfulSys;
    };
  };
}

export interface ContentfulPost {
  sys: ContentfulSys;
  fields: {
    slug: string;
    title: string;
    author: string;
    authors: ContentfulAuthor[];
    isPublished: boolean;
    description: string;
    createDate: string;
    body: any;
    tags: string[];
    image: {
      fields: {
        file: {
          details: {
            image: {
              height: number;
              width: number;
            };
          };
        };
      };

      sys: ContentfulSys;
    };
  };
}

export const getContentfulPosts = (): ContentfulPost[] => {
  return posts
    .filter(
      (post) =>
        post.fields.isPublished ||
        process.env.NEXT_PUBLIC_CONTENTFUL_DEV === "TRUE"
    )
    .sort((a, b) => {
      if (a.sys.locale === "sv") return -1;
      if (a.sys.locale === "en-US") return 1;
      return 0;
    })
    .filter((post, index, arr) => {
      // make unique by the slug
      return (
        arr.map((post) => post.fields.slug).indexOf(post.fields.slug) == index
      );
    }) as any;
};

export const getContentfulProducts = (): any[] => {
  return (products as any).filter(
    (post: ContentfulPost) =>
      post.sys.locale === "sv" &&
      (post.fields.isPublished ||
        process.env.NEXT_PUBLIC_CONTENTFUL_DEV === "TRUE")
  );
};

export const getContentfulPositions = (): ContentfulPosition[] => {
  return positions as any;
};

export const getReferenceCases = (): ContentfulPost[] => {
  return (referenceCases as any).filter(
    (post: ContentfulPost) =>
      post.sys.locale === "sv" &&
      (post.fields.isPublished ||
        process.env.NEXT_PUBLIC_CONTENTFUL_DEV === "TRUE")
  );
};

export const getCampanigns = (): ContentfulPost[] => {
  return (campaignsCases as any).filter(
    (post: ContentfulPost) =>
      post.sys.locale === "sv" &&
      (post.fields.isPublished ||
        process.env.NEXT_PUBLIC_CONTENTFUL_DEV === "TRUE")
  );
};

export const getPostFromSlug = (
  slug: string,
  locale: string
): ContentfulPost => {
  const swePost = getContentfulPosts().find(
    (item) => item.fields.slug === slug && item.sys.locale === "sv"
  )!;

  const enPost = getContentfulPosts().find(
    (item) => item.fields.slug === slug && item.sys.locale === "en_US"
  )!;

  return swePost ?? enPost;
};
export const getCampanignFromSlug = (
  slug: string,
  locale: string
): ContentfulPost => {
  console.log(getCampanigns());
  return getCampanigns().find((v) => v.fields.slug === slug)!;
};

export const getProductFromSlug = (
  slug: string,
  locale?: string
): ContentfulPost => {
  return getContentfulProducts().find(
    (item) =>
      item.fields.slug === slug && (!locale || item.sys.locale === locale)
  )!;
};

export const getReferenceCasesFromProducts = (
  productSlug: string,
  locale?: string
): ContentfulPost[] => {
  return getReferenceCases()
    .filter((item) => item.sys.locale === "sv")
    .filter((item: any) => {
      const hasProduct = item.fields.products?.find((product: any) => {
        return product.fields.slug === productSlug;
      });
      return !!hasProduct;
    }) as any;
};
