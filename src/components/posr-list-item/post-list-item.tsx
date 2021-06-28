import React from "react";
import "./post-list-item.css";

function PostListItem() {
   return (
      <li className="app-list-item d-flex justify-content-between">
         <span className="app-list-item-lable">
            Hello!
         </span>
         <div className="d-flex justify-content-center align-items-center">
            <button type="button" className="btn-star btn-sm">
               <i className="fas fa-star"></i>
            </button>
            <button type="button" className="btn-trash btn-sm">
               <i className="fas fa-trash-alt"></i>
            </button>
            <i className="fas fa-heart"></i>
         </div>
      </li>
   )
}
export default PostListItem;