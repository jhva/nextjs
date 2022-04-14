import Link from "next/link";
import React from "react";

const PostList = ({ posts }) => {
  console.log(posts);
  return (
    <>
      <h1>zzz</h1>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <Link href={`posts/${post.id}`} passHref>
              <h2>
                {post.id} {post.title}
              </h2>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default PostList;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  console.log(data, "123");
  return {
    props: {
      posts: data.slice(0, 3),
    },
  };
}
