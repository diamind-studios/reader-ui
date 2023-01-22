import logo from '../../images/logo.png';
import { Passage, StateSetter } from '../../types/types';
import { SearchBar } from './SearchBar';

export const TopBar = (props: { passage: Passage; setPassage: StateSetter<Passage> }): JSX.Element => (
  <div className='fixed top-0 left-0 h-14 w-screen flex flex-row shadow-md bg-slate-100 font-bold text-xl z-20'>
    <header id='logo' className='flex items-center w-full'>
      <a className='w-10 h-10 absolute' href='http://localhost:3000'>
        {/* This shouldn't be duplicated below. But if it's not absolute, it resizes with the browser window */}
        <img
          className='w-10 align-middle mx-2'
          src={logo}
          alt='https://publicdomainvectors.org/en/free-clipart/Icon-book/58707.html'
        />
      </a>
      <img
        className='w-10 align-middle mx-2'
        src={logo}
        alt='https://publicdomainvectors.org/en/free-clipart/Icon-book/58707.html'
      />
      <SearchBar></SearchBar>
      <div id='navigation' className='flex w-full justify-center'>
        <button className='topbar-item topbar-button group'>
          <span>{'<'}</span>
          <span className='tooltip topbar-tooltip '>Previous Chapter</span>
        </button>
        <span className='topbar-item cursor-default'>
          {props.passage.book} {props.passage.chapter}
        </span>
        <button className='topbar-item topbar-button group'>
          <span>{'>'}</span>
          <span className='tooltip topbar-tooltip'>Next Chapter</span>
        </button>
      </div>
    </header>
  </div>
);
