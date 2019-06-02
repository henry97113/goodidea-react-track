import * as React from 'react';
import { List } from 'models/list';
import Book from './Book';

const BookList = props => {
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
    <div className="book-list">
      <div className="card-columns">
        {!list.length ? (
          <div>讀取中...</div>
        ) : (
          list.map(item => {
            return <Book book={item} key={item.ISBN} />;
          })
        )}
      </div>
    </div>
  );
};

export default BookList;
