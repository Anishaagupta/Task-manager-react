import React from 'react';

function useCustom() {
  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          increament();
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          decreament();
        }}
      >
        -
      </button>
    </div>
  );
}

export default useCustom;
