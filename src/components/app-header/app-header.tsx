import React from "react";
import "./app-header.css";

type AppHeaderType = {
   liked: number
   oldPosts: number
}

function AppHeader(props: AppHeaderType) {
   return (
      <div className='app-header d-flex'>
         <h1>Vladimir Liankevich</h1>
         <h2>{props.oldPosts} записей, из них понравилось: {props.liked}</h2>
      </div>
   )
}

export default AppHeader;