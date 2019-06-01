import * as React from 'react';
import Header from './Header';
import BookList from './BookList';

const App = props => {
  return (
    <div className="bg-light" style={{ minHeight: '100vh' }}>
      <div className="container-fluid w-75">
        <Header />
      </div>
    </div>
  );
};

export default App;
