import * as React from 'react';

interface HeaderProps {
  handleInput: (e) => void;
}

const Header = (props: HeaderProps) => {
  return (
    <div className="header">
      <h3 className="py-3 text-center text-primary">
        好想工作室 - 天瓏書局書單搜尋
      </h3>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          onInput={e => props.handleInput(e)}
          placeholder="輸入書名或 ISBN"
          aria-label="enter book title"
          aria-describedby="book search"
        />
      </div>
    </div>
  );
};

export default Header;