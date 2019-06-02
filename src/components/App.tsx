import * as React from 'react';
import Header from './Header';
import BookList from './BookList';

const App = props => {
  return (
    <div className="bg-light" style={{ minHeight: '100vh' }}>
      <div className="container-fluid" style={{ maxWidth: '60%' }}>
        <Header />
        <BookList />
      </div>
    </div>
  );
};

export default App;
