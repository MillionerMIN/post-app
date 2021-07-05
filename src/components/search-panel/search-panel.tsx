import React, { Component } from "react";
import './search-panel.css'

type SearchPanelType = {
   term: string
}

type UpdateSearchType = {
   onUpdateSearch: (term: string) => void
}

export default class SearchPanel extends Component<UpdateSearchType, SearchPanelType> {

   constructor(props: UpdateSearchType) {
      super(props)
      this.state = {
         term: '',
      }
      this.onUpdateSearch = this.onUpdateSearch.bind(this);
   }

   onUpdateSearch(e: React.ChangeEvent<HTMLInputElement>) {
      const term = e.target.value;
      this.setState({term});
      this.props.onUpdateSearch(term);
   }
   render() {
      return <input
         className='form-control search-input'
         type='text'
         placeholder='Поиск по записям' 
         onChange={this.onUpdateSearch}/>
   }
}