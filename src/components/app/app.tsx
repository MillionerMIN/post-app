import React, { Component } from 'react';
import AppHeader from '../app-header/app-header';
import PostAddForm from '../post-add-form/post-add-form';
import PostList from '../post-list/post-list';
import PostStatusFilter from '../post-status-filter/post-status-filter';
import SearchPanel from '../search-panel/search-panel';

import './app.css';

export type DataType = {
   id: number
   label: string
   important: boolean
}

type ObjDataType = {
   data: DataType[]
}

type AppType = {
   maxId: number
}

export default class App extends Component<{}, ObjDataType> {
   maxId: number;

   constructor(props: AppType) {
      super(props);
      this.state = {
         data: [
            { id: 1, label: 'Going to learns React', important: true },
            { id: 2, label: 'This is good', important: true },
            { id: 3, label: 'I am a break...', important: true },
         ]
      }
      this.deleteItem = this.deleteItem.bind(this);
      this.addItem = this.addItem.bind(this);

      this.maxId = 4;
   }

   deleteItem(id: number): void {
      this.setState(({ data }) => {
         const index = data.findIndex(elem => elem.id === id);

         const newArr = [...data.slice(0, index), ...data.slice(index + 1)]
         return {
            data: newArr
         }
      })
   }

   addItem(body: string): void {
      const newItem = {
         id: this.maxId++,
         label: body,
         important: false,
      }
      this.setState(({ data }) => {
         const newArr = [...data, newItem];
         return {
            data: newArr
         }
      })
   }

   render() {
      return (
         <div className="app" >
            <AppHeader />
            <div className="search-panel d-flex">
               <SearchPanel />
               <PostStatusFilter />
            </div>
            <div className="post-list">
               <PostList
                  props={this.state.data}
                  onDelete={this.deleteItem} />
               <PostAddForm
                  onAdd={this.addItem} />
            </div>
         </div>
      );
   }
}