import Link from "next/link";
import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "../../../components/getPostMetadata";

const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

// Define the options for formatting the date
const options: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  // Create a new Date object
  const date = new Date(post.data.date);
  // Format the date using the options
  const formattedDate: string = date.toLocaleDateString("en-US", options);

  return (
    <div>
      <div className="my-12 text-center">
        <p>
          <Link
            className="w-full text-white underline text-center hover:text-blue hover:underline"
            href={`/`}
          >
            ⬅️ back to Home
          </Link>
        </p>

        <img
          className="rounded-xl w-100 mx-auto my-6"
          src={`/images/${post.data.thumbnail}`}
          alt=""
        />

        <h2 className="text-left text-white uppercase text-2xl font-extrabold tracking-widest mb-2">
          {post.data.title}
        </h2>
        <p className="text-left  text-light-gray font-semibold tracking-widest italic mb-2">
          {post.data.subtitle}
        </p>
        <p className="text-left  font-semibold text-gray">{formattedDate}</p>
      </div>

      <article className="prose text-white">
        <Markdown className=" text-white">{post.content}</Markdown>
      </article>
    </div>
  );
};

export default PostPage;
