import { useState } from 'react';
import { parseSearchText } from '../../common/parseSearchText';
import search from '../../images/search.svg';
import { getVersePassage } from '../../services/bible-api/bible-api';
import { Passage, StateSetter } from '../../types/types';

export const SearchBar = (props: { setPassage: StateSetter<Passage> }) => {
  const [searchValue, setSearchValue] = useState<string>('');
  const getPassage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchValue) return;
    const parsedParams = parseSearchText(searchValue);
    const passage: Passage = await getVersePassage(parsedParams);
    if (passage) props.setPassage(passage);
    else console.log('unable to find a passage to match search temrs');
  };

  return (
    <form onSubmit={getPassage} className='flex items-center bg-gray-200 h-8 my-3 rounded-md p-1'>
      <input
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
        placeholder='Search...'
        className='align-middle bg-transparent'
      ></input>
      <button className='w-7 '>
        <img src={search} alt='search button' />
      </button>
    </form>
  );
};
