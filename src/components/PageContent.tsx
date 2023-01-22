import { useState } from 'react';
import { getItemCloser } from '../common/closeItem';
import { Passage } from '../types/types';
import { Reader } from './Reader';

const MAX_READER_TABS = 3;

export const PageContent = (props: { passage: Passage }): JSX.Element => {
  const defaultReaderList = [<Reader key={crypto.randomUUID()} passage={props.passage}></Reader>];
  const [readers, setReaders] = useState(defaultReaderList);
  // const [versionsList, setVersionsList] = useState();

  const addReaderTab = async () => {
    if (readers.length === MAX_READER_TABS) return;
    const key = crypto.randomUUID();
    const closeAction = getItemCloser(key, setReaders);
    const newReader = <Reader key={key} passage={props.passage} closeAction={closeAction}></Reader>;
    await setReaders([...readers, newReader]);
  };

  const maxReaders = readers.length === MAX_READER_TABS;

  const baseNewTabStyles =
    'relative align-middle font-bold py-1 my-3 h-9 px-3 right-0 group rounded-md shadow-md text-white';
  const newTabStyles = maxReaders
    ? 'bg-gray-300 cursor-default ' + baseNewTabStyles
    : 'bg-blue-600 hover:bg-blue-500 ' + baseNewTabStyles;

  return (
    <div id='content' className='my-16 w-full text-lg mr-10 flex bg-transparent justify-center relative overflow-show'>
      {readers}
      <button onClick={addReaderTab} className={newTabStyles}>
        <span>+</span>
        <span className={maxReaders ? 'tooltip group-hover:scale-0' : 'tooltip top-8 -left-2'}>Add another Bible</span>
      </button>
    </div>
  );
};
