import * as React from 'react';
import { List } from 'models/list';

interface BookProps {
  book: List;
}

const Book = (props: BookProps) => {
  const { book } = props;
  return (
    <div className="card" key={book.ISBN}>
      <img src={book.image} className="card-img-top" alt="#" />
      <div className="card-body">
        <h5 className="card-title">{book.name}</h5>
        <p className="card-text text-danger">
          特價：<span style={{ fontSize: '20px' }}>{book.sellPrice}</span> 元
        </p>
        <a
          href={book.link}
          className="btn btn-primary"
          target="_blank"
          rel="noopener"
        >
          前往購書
        </a>
      </div>
    </div>
  );
};

export default Book;
