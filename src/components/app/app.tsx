import React from 'react';
import AppHeader from '../app-header/app-header';
import PostAddForm from '../post-add-form/post-add-form';
import PostList from '../post-list/post-list';
import PostStatusFilter from '../post-status-filter/post-status-filter';
import SearchPanel from '../search-panel/search-panel';
import './app.css';

export type DataType = {
   id: string
   label: string
   important: boolean
}

function App() {

   const data: Array<DataType> = [
      { id: 'hdfksj', label: 'Going to learns React', important: true },
      { id: 'hdvsd', label: 'This is good', important: true },
      { id: 'jkksdi', label: 'I am a break...', important: true },
   ]

   return (
      <div className="app">
         <AppHeader />
         <div className="search-panel d-flex">
            <SearchPanel />
            <PostStatusFilter />
         </div>
         <div className="post-list">
            <PostList props={data} />
            <PostAddForm />
         </div>
      </div>
   );
}

export default App;