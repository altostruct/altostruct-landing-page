import * as fs from "fs";
import posts from ".data/contentful/posts/all.json";
import products from ".data/contentful/products/all.json";
import positions from ".data/contentful/positions/all.json";
import projects from ".data/contentful/projects/all.json";
import referenceCases from ".data/contentful/referenceCases/all.json";
import Image from "next-image-export-optimizer";

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
  return posts as any;
};

export const getContentfulProducts = (): any[] => {
  return products as any;
};

export const getContentfulPositions = (): ContentfulPosition[] => {
  return positions as any;
};

export const getReferenceCases = (): ContentfulPost[] => {
  return referenceCases as any;
};

export const getPostFromSlug = (
  slug: string,
  locale: string
): ContentfulPost => {
  return getContentfulPosts().find(
    (item) => item.fields.slug === slug && item.sys.locale === locale
  )!;
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
