import * as React from 'react';

interface BookListProps {
  render: () => JSX.Element[];
}

const BookList = (props: BookListProps) => {
  const { render } = props;
  return (
    <div className="book-list">
      <div className="card-columns">{render()}</div>
    </div>
  );
};

export default BookList;
