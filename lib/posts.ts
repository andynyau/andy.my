import fs from "fs";
import path from "path";
import matter from "gray-matter";


const postsDirectory = path.join(
  process.cwd(),
  "content/blog"
);


export function getPosts() {

  const files = fs.readdirSync(postsDirectory);

  return files
    .filter(file => file.endsWith(".mdx"))
    .map(file => {

      const slug = file.replace(".mdx", "");

      const filePath = path.join(
        postsDirectory,
        file
      );

      const content = fs.readFileSync(
        filePath,
        "utf8"
      );

      const { data } = matter(content);


      return {
        slug,
        title: data.title,
        date: data.date,
        description: data.description,
      };

    });

}



export function getPost(slug: string) {

  const filePath = path.join(
    postsDirectory,
    `${slug}.mdx`
  );


  const fileContent = fs.readFileSync(
    filePath,
    "utf8"
  );


  return matter(fileContent);

}