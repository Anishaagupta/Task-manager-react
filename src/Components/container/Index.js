import React from 'react';
import { useState, useCount } from 'react';

function Home() {
  const { count, increament, decreament } = useCount(0);
  
  const increament = setCount(count + 1);
  const decreament = setCount(count - 1);
  return { count, increament, decreament };
}

export default Home;
