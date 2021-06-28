import React from 'react';
import AppHeader from '../app-header/app-header';
import PostAddForm from '../post-add-form/post-add-form';
import PostList from '../post-list/post-list';
import PostStatusFilter from '../post-status-filter/post-status-filter';
import SearchPanel from '../search-panel/search-panel';
import './app.css';


function App() {
   return (
      <div className="app">
         <AppHeader />
         <div className="search-panel d-flex">
            <SearchPanel />
            <PostStatusFilter />
         </div>
         <div className="post-list">
            <PostList />
            <PostAddForm />
         </div>
      </div>
   );
}

export default App;