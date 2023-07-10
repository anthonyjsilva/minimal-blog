import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

// Define the options for formatting the date
const options: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

const PostPreview = (props: PostMetadata): JSX.Element => {
  // Create a new Date object
  const date = new Date(props.date);
  // Format the date using the options
  const formattedDate: string = date.toLocaleDateString("en-US", options);

  return (
    <div className="border-2 border-transparent rounded-lg shadow-sm hover:cursor-pointer hover:opacity-70">
      <Link href={`/posts/${props.slug}`}>
        <img className="rounded-lg" src={`/images/${props.thumbnail}`} alt="" />

        <div className="p-4">
          <h2 className="text-white uppercase text-2xl font-extrabold tracking-widest mb-2">
            {props.title}
          </h2>
          <p className="text-light-gray font-semibold tracking-widest italic mb-2">
            {props.subtitle}
          </p>
          <p className="font-semibold text-gray">{formattedDate}</p>
        </div>
      </Link>
    </div>
  );
};

export default PostPreview;
