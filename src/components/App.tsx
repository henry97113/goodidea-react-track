import * as React from 'react';
import Header from './Header';
import BookList from './BookList';
import { List } from 'models/list';
import Book from './Book';

const App = props => {
  const [list, setList] = React.useState<List[]>([]);
  const fetchBookList = async () => {
    try {
      const res = await fetch('https://bookshelf.goodideas-studio.com/api');
      if (res.ok) {
        const data = await res.json();
        const list = data.list;
        setList(list);
      } else {
        throw Error('Fail to fetch data.');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  React.useEffect(() => {
    fetchBookList();
  }, [list]);
  return (
    <div className="bg-light" style={{ minHeight: '100vh' }}>
      <div className="container-fluid" style={{ maxWidth: '60%' }}>
        <Header />
        <BookList
          render={() => {
            return list.map(item => <Book key={item.ISBN} book={item} />);
          }}
        />
      </div>
    </div>
  );
};

export default App;
