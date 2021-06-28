import React from "react";
import PostListItem from "../posr-list-item/post-list-item";
import "./post-list.css";

function PostList() {
   return (
      <ul className="post-list list-group">
         <PostListItem />
         <PostListItem />
         <PostListItem />
      </ul>
   )
}
export default PostList;