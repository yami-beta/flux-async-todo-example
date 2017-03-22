import React from 'react';
import ReactDOM from 'react-dom';

const AppContainer = (props) => {
  return (
    <div>
      <h1>Hello World!!</h1>
    </div>
  );
};
ReactDOM.render(<AppContainer />, document.getElementById('todo'));
