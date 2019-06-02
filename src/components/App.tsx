import * as React from 'react';
import Header from './Header';
import BookList from './BookList';
import { List } from 'models/list';
import Book from './Book';

const App = props => {
  const [list, setList] = React.useState<List[]>([]);
  const [filtered, setFiltered] = React.useState<List[]>([]);
  const fetchBookList = async () => {
    try {
      const res = await fetch('https://bookshelf.goodideas-studio.com/api');
      if (res.ok) {
        const data = await res.json();
        setList(data.list);
      } else {
        throw Error('Fail to fetch data.');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  const handleInput = e => {
    const searchText = e.target.value.trim().toLowerCase();
    const filtered = list.filter(item => {
      return item.name.toLowerCase().includes(searchText);
    });
    setFiltered(filtered);
  };
  React.useEffect(() => {
    fetchBookList();
  }, []);
  React.useEffect(() => {
    if (filtered.length === 0 && list.length !== 0) {
      setFiltered(list);
    }
  });
  return (
    <div className="bg-light" style={{ minHeight: '100vh' }}>
      <div className="container-fluid" style={{ maxWidth: '60%' }}>
        <Header handleInput={handleInput} />
        <BookList
          render={() => {
            return filtered.map(item => <Book key={item.ISBN} book={item} />);
          }}
        />
      </div>
    </div>
  );
};

export default App;
