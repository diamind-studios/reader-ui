import { useEffect, useState } from 'react';
import { getConcordance, getParsing } from '../services/bible-api/bible-api';
import { Parsing, StateSetter, Word } from '../types/types';
import { CloseButton } from './CloseButton';
import { ConcordancePanel } from './ConcordancePanel/ConcordancePanel';

export const WordLookup = (props: { wordData: Word; setLoadWord: StateSetter<boolean> }) => {
  const [concordanceData, setConcordanceData] = useState<any[]>([]);
  const [parsingData, setParsingData] = useState<Parsing>();

  useEffect(() => {
    const getData = async () => {
      const parsings = getParsing(props.wordData.parsing_id);
      const concordanceEntries = getConcordance(props.wordData.words_id);
      setParsingData((await parsings)[0]);
      setConcordanceData(await concordanceEntries);
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
        <h2 className='font-semibold text-blue-700 text-xl'>{props.wordData.word}</h2> {/* this should be calling words endpoint for the lexeme and partofspeech */}
        <h2 className='font-semibold text-blue-600 text-sm'>{parsingData?.parsing_title}</h2>
        <h2 className='font-semibold text-blue-600 text-2xs'>{parsingData?.description}</h2>
      </div>
      <ConcordancePanel concordanceData={concordanceData}></ConcordancePanel>
    </div>
  );
};
