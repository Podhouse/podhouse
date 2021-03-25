import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

import { API, BlogArticleType } from "src/types";

const articlesDirectory = join(process.cwd(), "src/articles");

function getRawArticleBySlug(slug: string): matter.GrayMatterFile<string> {
  const fullPath = join(articlesDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  return matter(fileContents);
}

function getAllSlugs(): Array<string> {
  return fs.readdirSync(articlesDirectory);
}

function getArticleBySlug(
  slug: string,
  fields: string[] = [],
): BlogArticleType {
  const realSlug = slug.replace(/\.mdx$/, "");
  const { data, content } = getRawArticleBySlug(realSlug);
  const timeReading: any = readingTime(content);

  const items: BlogArticleType = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }
    if (field === "timeReading") {
      items[field] = timeReading;
    }
    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

function getAllArticles(fields: string[] = []): Array<BlogArticleType> {
  return getAllSlugs()
    .map((slug) => getArticleBySlug(slug, fields))
    .sort((article1, article2) => (article1.date > article2.date ? -1 : 1));
}

function getArticlesByTag(
  tag: string,
  fields: string[] = [],
): Array<BlogArticleType> {
  return getAllArticles(fields).filter((article) => {
    const tags = article.tags ?? [];
    return tags.includes(tag);
  });
}

function getAllTags(): Array<string> {
  const articles = getAllArticles(["tags"]);

  const allTags = new Set<string>();
  articles.forEach((article) => {
    const tags = article.tags as Array<string>;
    tags.forEach((tag) => allTags.add(tag));
  });

  return Array.from(allTags);
}

export const api: API = {
  getRawArticleBySlug,
  getAllSlugs,
  getAllArticles,
  getArticlesByTag,
  getArticleBySlug,
  getAllTags,
};
