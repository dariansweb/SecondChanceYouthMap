// lib/parseMarkdown.ts

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export async function getDoc(slug: string) {
  console.log("Reading markdown for slug:", slug); 

  const filePath = path.join(process.cwd(), "src/content/docs", `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");

  const { content, data } = matter(fileContents);
  const processed = await remark().use(html).process(content);
  const htmlContent = processed.toString();

  return {
    htmlContent,
    frontmatter: data,
  };
}
