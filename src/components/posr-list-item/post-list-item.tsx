import React from "react";

import "./post-list-item.css";

type PostListItemType = {
   label: string
   important: boolean
   like: boolean
   onDelete: () => void
   onToggleImportant: () => void
   onToggleLike: () => void
}

export function PostListItem(props: PostListItemType) {
   const { label, onDelete, onToggleImportant, onToggleLike, important, like } = props;

   let classNames = "app-list-item d-flex justify-content-between";

   if (important) {
      classNames += ' important'
   }
   if (like) {
      classNames += ' like'
   }
   return (
      <li className={classNames}>
         <span onClick={onToggleLike} className="app-list-item-label">
            {label}
         </span>
         <div className="d-flex justify-content-center align-items-center">
            <button type="button" onClick={onToggleImportant} className="btn-star btn-sm">
               <i className="fas fa-star"></i>
            </button>
            <button type="button"
               className="btn-trash btn-sm"
               onClick={onDelete}>
               <i className="fas fa-trash-alt"></i>
            </button>
            <i className="fas fa-heart"></i>
         </div>
      </li>
   );
}

