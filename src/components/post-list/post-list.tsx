import React from "react";
import { DataType } from "../app/app";
import { PostListItem } from "../posr-list-item/post-list-item";

import { ListGroup } from 'reactstrap';
import "./post-list.css";

export type PostListType = {
   props: Array<DataType>
   onDelete: (id: number) => void
   onToggleImportant: (id: number) => void
   onToggleLike: (id: number) => void
}

function PostList(props: PostListType) {
   const element = props.props.map((item) => {
      const { id, ...itemProps } = item;
      return (<ul key={id} className="list-group-item">
         <PostListItem
            {...itemProps}
            onDelete={() => { props.onDelete(id); }}
            onToggleImportant={() => { props.onToggleImportant(id) }}
            onToggleLike={() => { props.onToggleLike(id) }}
         />
      </ul>);
   });

   return (
      <ListGroup className="post-list">
         {element}
      </ListGroup>
   );
}
export default PostList;
