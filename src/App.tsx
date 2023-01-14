import React, { useState } from 'react';
import { PageContent } from './components/PageContent';
import { TopBar } from './components/TopBar';

function App() {
  const defaultPassage = { book: 'Genesis', chapter: 1 };
  const [passage, setPassage] = useState(defaultPassage);
  return (
    <div className='flex w-screen min-h-screen font-sans'>
      <TopBar></TopBar>
      <PageContent passage={passage}></PageContent>
    </div>
  );
}

export default App;
