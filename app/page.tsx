import getPostMetadata from "../components/getPostMetadata";
import PostPreview from "../components/PostPreview";
import { PostMetadata } from "../components/PostMetadata";

const HomePage = (): JSX.Element => {
  const postMetadata: PostMetadata[] = getPostMetadata();
  const postPreviews: JSX.Element[] = postMetadata
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .map((post) => <PostPreview key={post.slug} {...post} />);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">{postPreviews}</div>
  );
};

export default HomePage;
