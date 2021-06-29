import React from "react";
import "./post-status-filter.css";

function PostStatusFilter() {
   return (
      <div className="btn-group">
         <button type="button" className="btn btn-info">All</button>
         <button type="button" className="btn btn-outline-secondary">Понравились</button>
      </div>
   )
}
export default PostStatusFilter;