import { useState } from 'react';
import { getReaderCloser } from '../common/closeItem';
import { Passage, ReaderMeta } from '../types/types';
import { Reader } from './Reader';

const MAX_READER_TABS = 3;

export const PageContent = (props: { passage: Passage }): JSX.Element => {
  const defaultReaderList: ReaderMeta[] = [{ key: crypto.randomUUID() }];
  const [readers, setReaders] = useState(defaultReaderList);

  const addReaderTab = () => {
    if (readers.length === MAX_READER_TABS) return;
    const key = crypto.randomUUID();
    const closeAction = getReaderCloser(key, setReaders);
    const newReader = { key, passage: props.passage, closeAction };
    setReaders([...readers, newReader]);
  };

  const maxReaders = readers.length === MAX_READER_TABS;

  const baseNewTabStyles =
    'relative align-middle font-bold py-1 my-3 h-9 px-3 right-0 group rounded-md shadow-md text-white';
  const newTabStyles = maxReaders
    ? 'bg-gray-300 cursor-default ' + baseNewTabStyles
    : 'bg-blue-600 hover:bg-blue-500 ' + baseNewTabStyles;

  return (
    <div id='content' className='my-16 w-full text-lg mr-10 flex bg-transparent justify-center relative overflow-show'>
      {readers.map((readerMeta: any) => (
        <Reader key={readerMeta.key} passage={props.passage} closeAction={readerMeta.closeAction}></Reader>
      ))}
      <button onClick={addReaderTab} className={newTabStyles}>
        <span>+</span>
        <span className={maxReaders ? 'tooltip group-hover:scale-0' : 'tooltip top-8 -left-2'}>Add another Bible</span>
      </button>
    </div>
  );
};
