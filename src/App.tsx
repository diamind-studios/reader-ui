import React from 'react';
import { PageContent } from './components/PageContent';
import { TopBar } from './components/TopBar';

function App() {
  return (
    <div className='flex w-screen min-h-screen font-sans'>
      <TopBar></TopBar>
      <PageContent></PageContent>
    </div>
  );
}

export default App;
