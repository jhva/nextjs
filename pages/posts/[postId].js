import React from "react";

const Post = ({ post }) => {
  return (
    <>
      <h2>
        {post.id} &nbsp; {post.title}
      </h2>
      <p>{post.body}바디</p>
    </>
  );
};

export default Post;
export async function getStaticPaths() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await response.json();

  const paths = data?.map((post) => {
    return {
      params: {
        postId: `${post.id}`,
      },
    };
  });

  return {
    paths,
    // paths: [
    //   { params: { postId: "1" } },
    //   { params: { postId: "2" } },
    //   { params: { postId: "3" } },
    // ],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  console.log(params.postId, "!23");
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await response.json();
  console.log(data, "123");
  return {
    props: {
      post: data,
    },
  };
}
