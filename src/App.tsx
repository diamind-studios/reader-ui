import React, { useState } from 'react';
import { PageContent } from './components/PageContent';
import { TopBar } from './components/TopBar/TopBar';
import { Passage } from './types/types';

function App() {
  const defaultPassage: Passage = { book: 'Genesis', chapter: 1 };
  const [passage, setPassage] = useState(defaultPassage);
  return (
    <div className='flex w-screen min-h-screen font-sans'>
      <TopBar passage={passage} setPassage={setPassage}></TopBar>
      <PageContent passage={passage}></PageContent>
    </div>
  );
}

export default App;
