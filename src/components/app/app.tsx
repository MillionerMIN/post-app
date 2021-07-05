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
   like: boolean
}

type ObjDataType = {
   data: DataType[]
   term: string
   filter: string
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
            { id: 1, label: 'Going to learns React', important: true, like: false, },
            { id: 2, label: 'This is good', important: true, like: false, },
            { id: 3, label: 'I am a break...', important: true, like: false, },
         ],
         term: '',
         filter: 'all',
      }
      this.deleteItem = this.deleteItem.bind(this);
      this.addItem = this.addItem.bind(this);
      this.onToggleImportant = this.onToggleImportant.bind(this);
      this.onToggleImportant = this.onToggleImportant.bind(this);
      this.onToggleLike = this.onToggleLike.bind(this);
      this.searchPost = this.searchPost.bind(this);
      this.onUpdateSearch = this.onUpdateSearch.bind(this);
      this.filterPost = this.filterPost.bind(this);
      this.onFilterSelect = this.onFilterSelect.bind(this);

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
         like: false,
      }
      this.setState(({ data }) => {
         const newArr = [...data, newItem];
         return {
            data: newArr
         }
      })
   }

   onToggleImportant(id: number): void {
      this.setState(({ data }) => {
         const index = data.findIndex(elem => elem.id === id);
         const old = data[index];
         const newItem = { ...old, important: !old.important, };
         const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
         return {
            data: newArr,
         }
      });
   }

   onToggleLike(id: number): void {
      this.setState(({ data }) => {
         const index = data.findIndex(elem => elem.id === id);
         const old = data[index];
         const newItem = { ...old, like: !old.like, };
         const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
         return {
            data: newArr,
         }
      });
   }

   searchPost(items: DataType[], term: string) {
      if (term.length === 0) {
         return items;
      }

      return items.filter((item) => {
         return item.label.indexOf(term) > -1;
      });
   }

   onUpdateSearch(term: string) {
      this.setState({ term });
   }

   onFilterSelect(filter: string) {
      this.setState({ filter });
   }

   filterPost(items: DataType[], filter: string) {
      if (filter === 'like') {
         return items.filter(item => item.like);
      } else {
         return items;
      }
   }

   render() {
      const { data, term, filter } = this.state;
      const liked = data.filter(item => item.like).length;
      const oldPosts = data.length;

      const visiblePost = this.filterPost(this.searchPost(data, term), filter);

      return (
         <div className="app" >
            <AppHeader
               liked={liked}
               oldPosts={oldPosts} />
            <div className="search-panel d-flex">
               <SearchPanel onUpdateSearch={this.onUpdateSearch} />
               <PostStatusFilter
                  filter={filter}
                  onFilterSelect={this.onFilterSelect} />
            </div>
            <div className="post-list">
               <PostList
                  props={visiblePost}
                  onDelete={this.deleteItem}
                  onToggleImportant={this.onToggleImportant}
                  onToggleLike={this.onToggleLike}
               />
               <PostAddForm
                  onAdd={this.addItem} />
            </div>
         </div>
      );
   }
}