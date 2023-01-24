import { useEffect, useState } from 'react';
import { getConcordance } from '../services/bible-api/bible-api';
import { StateSetter, Word } from '../types/types';
import { CloseButton } from './CloseButton';
import { ConcordancePanel } from './ConcordancePanel/ConcordancePanel';
import { WordDefinitions } from './WordDefinitions';

export const WordLookup = (props: { wordData: Word; setLoadWord: StateSetter<boolean> }) => {
  const [concordanceData, setConcordanceData] = useState<any[]>([]);
  const [parsingData, setParsingData] = useState<any[]>([]);
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
      className='wordLookup absolute z-10 reader border-solid border-2 border-gray-300  w-48 -right-52 group'
    >
      <CloseButton closeAction={() => props.setLoadWord(false)} display={'scale-100'}></CloseButton>
      <ConcordancePanel color='red' concordanceData={concordanceData}></ConcordancePanel>
      {/* {concordanceData ? <WordDefinitions data={concordanceData}></WordDefinitions> : 'N/A'} */}
    </div>
  );
};
