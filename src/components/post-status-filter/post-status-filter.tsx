import React, { Component } from "react";

import "./post-status-filter.css";


type PostStatusFilterType = {
   data: StateType[]
}

type StateType = {
   name: string
   label: string
}

type FilterType = {
   filter: string
   onFilterSelect: (filter: string) => void
}

export default class PostStatusFilter extends Component<FilterType, PostStatusFilterType> {
   constructor(props: any) {
      super(props)
      this.state = {
         data: [
            { name: 'all', label: 'Все' },
            { name: 'like', label: 'Понравилось' },
         ]
      }
   }

   render() {
      const buttons = this.state.data.map(({ name, label }) => {
         const { filter, onFilterSelect } = this.props
         const active = filter === name;
         const clazz = active ? 'btn-info' : 'btn-outline-secondary';
         return (
            <button
               key={name}
               type="button"
               className={`btn ${clazz}`}
               onClick={() => onFilterSelect(name) }>{label}</button>
         )
      })
      return (
         <div className="btn-group">
            {buttons}
         </div>
      )
   }
}


