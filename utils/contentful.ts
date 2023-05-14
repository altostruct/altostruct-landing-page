import * as fs from "fs";
import posts from ".data/contentful/posts/all.json";
import projects from ".data/contentful/projects/all.json";
import Image from "next-image-export-optimizer";

export interface ContentfulSys {
  locale: string;
  id: string;
}

export interface ContentfulPost {
  sys: ContentfulSys;
  fields: {
    slug: string;
    title: string;
    author: string;
    isPublished: boolean;
    description: string;
    createDate: string;
    body: any;
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

export const getPostFromSlug = (
  slug: string,
  locale: string
): ContentfulPost => {
  return getContentfulPosts().find(
    (item) => item.fields.slug === slug && item.sys.locale === locale
  )!;
};
