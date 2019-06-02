import * as React from 'react';
import * as _ from 'lodash';
import Header from './Header';
import BookList from './BookList';
import { List } from 'models/list';

const App = props => {
  const [list, setList] = React.useState<List[]>([]);
  const [filtered, setFiltered] = React.useState<List[]>([]);
  const fetchBookList = async () => {
    try {
      const res = await fetch('https://bookshelf.goodideas-studio.com/api');
      if (res.ok) {
        const data = await res.json();
        setList(data.list);
        setFiltered(data.list);
      } else {
        throw Error('Fail to fetch data.');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  const delaySearch = _.debounce((list: List[]) => {
    setFiltered(list);
  }, 500);
  const handleInput = e => {
    const text = e.target.value.toLowerCase().trim();
    const filtered = list.filter(item => {
      return item.name.toLowerCase().includes(text) || item.ISBN.includes(text);
    });
    delaySearch(filtered);
  };
  React.useEffect(() => {
    fetchBookList();
  }, []);
  return (
    <div className="app bg-light" style={{ minHeight: '100vh' }}>
      <div className="container-fluid">
        <Header handleInput={handleInput} />
        {list.length === 0 && filtered.length === 0 ? (
          'Loading...'
        ) : (
          <BookList list={filtered} />
        )}
      </div>
    </div>
  );
};

export default App;
