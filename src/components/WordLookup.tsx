import { useEffect, useState } from 'react';
import { getConcordance } from '../services/bible-api/bible-api';
import { Word } from '../types/types';
import { WordDefinitions } from './WordDefinitions';

export const WordLookup = (props: { wordData: Word }) => {
  const [concordanceData, setConcordanceData] = useState<any>();
  useEffect(() => {
    const getData = async () => {
      const concordanceData = await getConcordance(props.wordData.words_id);
      console.log(concordanceData);
      setConcordanceData(concordanceData);
    };
    getData();
  }, [props.wordData]);
  return (
    <div
      tabIndex={10}
      className='wordLookup absolute z-10 bg-slate-100 rounded-md border-solid border-2 border-slate-200 shadow-md w-48 p-4 -right-52'
    >
      {concordanceData ? <WordDefinitions data={concordanceData}></WordDefinitions> : 'N/A'}
    </div>
  );
};
