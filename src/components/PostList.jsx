import Post from "./Post";

const posts = [
  {
    img: "https://via.placeholder.com/150",
    title: "Episode 1",
    description: "Episode 1 description",
  },
  {
    img: "https://via.placeholder.com/150",
    title: "Episode 2",
    description: "Episode 2 description",
  },
  {
    img: "https://via.placeholder.com/150",
    title: "Episode 3",
    description: "Episode 3 description",
  },
  {
    img: "https://via.placeholder.com/150",
    title: "Episode 4",
    description: "Episode 4 description",
  },
];

function PostList() {
  const postsComponents = posts.map((post, i) => (
    <Post
      key={i}
      img={post.img}
      title={post.title}
      description={post.description}
    />
  ));

  return <div className="flex p-5">{postsComponents}</div>;
}

export default PostList;
