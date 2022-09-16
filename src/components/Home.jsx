import React from "react";
import useFetch from "../Api/useFetch";
import BlogList from "./BlogList";

export default function Home() {
  const {data:blogs,isPending,error} =useFetch("http://localhost:8200/blogs")

  return (
    <div className="home">
         { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
     { blogs && <BlogList blogs={blogs} title={"All Blogs"} />}
    </div>
  );
}
