import React from "react";
import { DataType } from "../app/app";
import PostListItem from "../posr-list-item/post-list-item";
import "./post-list.css";

type PostListType = {
   props: Array<DataType>
}

function PostList(props: PostListType) {
   const element = props.props.map((item) => {
      return (<ul key={item.id} className="list-group-item">
         <PostListItem label={item.label} important={item.important} />
      </ul>
      )
   })

   return (
      <ul className="post-list list-group">
         {element}
      </ul>
   )
}
export default PostList;