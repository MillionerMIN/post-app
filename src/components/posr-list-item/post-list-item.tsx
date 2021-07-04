import React, { Component } from "react";

import "./post-list-item.css";

type PropsListItemType = {
   label: string
   important: boolean
   onDelete: () => void
}

type PostListStateType = {
   important: boolean
   like: boolean
}

export default class PostListItem extends Component<PropsListItemType, PostListStateType> {
   constructor(props: PropsListItemType) {
      super(props)
      this.state = {
         important: false,
         like: false,
      };
      this.onImportant = this.onImportant.bind(this);
      this.onLike = this.onLike.bind(this);
   }

   onImportant(): void {
      this.setState((state) => ({
         important: !state.important
      }))
   }

   onLike(): void {
      this.setState((state) => ({
         like: !state.like
      }))
   }

   render() {
      const { label, onDelete } = this.props;
      const { important, like } = this.state;
      let classNames = "app-list-item d-flex justify-content-between";

      if (important) {
         classNames += ' important'
      }
      if (like) {
         classNames += ' like'
      }
      return (
         <li className={classNames}>
            <span onClick={this.onLike} className="app-list-item-label">
               {label}
            </span>
            <div className="d-flex justify-content-center align-items-center">
               <button type="button" onClick={this.onImportant} className="btn-star btn-sm">
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
}

