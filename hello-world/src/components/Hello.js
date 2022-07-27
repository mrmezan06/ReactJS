import React from 'react';
/* JSX Style component */
const Hello = () => {
    // JSX style React component
  return (
    <div className='dummy'>
      <h1>Hello JSX Style</h1>
    </div>
  );
    // Without JSX style React component
/*     return React.createElement('div',
     {id: 'hello', className: 'dummy'},
      React.createElement('h1', null, 'Hello no JSX Style')); */
}

export default Hello;