import React from "react";
import User from "./components/user";

const users = ({ users }) => {
  return (
    <>
      <h2>users</h2>
      {users.map((item) => {
        return (
          <div key={item.id}>
            <User user={item} />
          </div>
        );
      })}
    </>
  );
};

export default users;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data, "123");
  return {
    props: {
      users: data,
    },
  };
}

//
