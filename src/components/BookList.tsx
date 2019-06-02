import * as React from 'react';
import { List } from 'models/list';
import Book from './Book';

interface BookListProps {
  list: List[];
}

const BookList = (props: BookListProps) => {
  return (
    <div className="book-list">
      {props.list.length === 0 ? (
        'No match found.'
      ) : (
        <div className="card-columns">
          {props.list.map(book => (
            <Book key={book.ISBN} book={book} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BookList;
