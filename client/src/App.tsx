import React from 'react';
import { Store } from './Store';
import { Link } from '@reach/router';

const App = (props: any) => {
  const { state } = React.useContext(Store);

  return (
    <>
      <header className="header">
        <div>
          <h1>Rick and Morty</h1>
          <p>Pick your favourite episode!</p>
          <br />
          <p>
            Built using React, TypeScript, Context, Hooks, Lazy Loading, Reach
            Router & Flex Box{' '}
          </p>
        </div>
        <div className="links">
          <Link to="/">Home</Link>
          <br />
          <Link to="/faves">Favourites(s): {state.favourites.length}</Link>
        </div>
      </header>
      {props.children}
    </>
  );
};

export default App;
