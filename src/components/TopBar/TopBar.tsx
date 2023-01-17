import logo from '../../images/logo.png';
import search from '../../images/search.svg';
import { Passage, StateSetter } from '../../types/types';

export const TopBar = (props: { passage: Passage; setPassage: StateSetter<Passage> }): JSX.Element => (
  <div className='fixed top-0 left-0 h-14 w-screen flex flex-row shadow-md bg-slate-100 font-bold text-xl z-10'>
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
      <div className='flex items-center bg-gray-200 h-8 my-3 rounded-md p-1'>
        {/* w-1/2 */}
        <input placeholder='Search...' className='align-middle bg-transparent'>
          {/* w-full */}
        </input>
        <button className='w-7 '>
          <img src={search} alt='search button' />
        </button>
      </div>
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
