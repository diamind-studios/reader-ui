import { useEffect, useState } from 'react';
import { getConcordance } from '../services/bible-api/bible-api';
import { StateSetter, Word } from '../types/types';
import { CloseButton } from './CloseButton';
import { ConcordancePanel } from './ConcordancePanel/ConcordancePanel';
import { WordDefinitions } from './WordDefinitions';

export const WordLookup = (props: { wordData: Word; setLoadWord: StateSetter<boolean> }) => {
  const [concordanceData, setConcordanceData] = useState<any[]>([]);
  //   const [parsingData, setParsingData] = useState<any[]>([]);
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
      className='wordLookup absolute z-10 reader border-solid border-2 border-gray-300 
      w-48 -right-52 md:w-60 md:-right-64 lg:w-72 lg:-right-80'
    >
      <CloseButton closeAction={() => props.setLoadWord(false)} display={'scale-100'}></CloseButton>
      <div className='py-2 text-center'>
        {/* this info shouldn't be included in source_text request but should be its own request to words & parsing */}
        <h2 className='font-semibold text-blue-700 text-xl'>{props.wordData.word}</h2>
        <h2 className='font-semibold text-blue-600 text-sm'>{props.wordData.parsing_title}</h2>
      </div>
      <ConcordancePanel concordanceData={concordanceData}></ConcordancePanel>
      {/* {concordanceData ? <WordDefinitions data={concordanceData}></WordDefinitions> : 'N/A'} */}
    </div>
  );
};
