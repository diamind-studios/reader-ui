import { useState } from 'react';
import { getItemCloser } from '../common/closeItem';
import { Reader } from './Reader';

export const PageContent = () => {
  const defaultReaderList = [<Reader id={crypto.randomUUID()}></Reader>];
  const [readers, setReaders] = useState(defaultReaderList);

  const addBible = async () => {
    if (readers.length === 7) return;
    const id = crypto.randomUUID();
    const closeAction = getItemCloser(id, readers, setReaders);
    const newReader = <Reader id={id} closeAction={closeAction}></Reader>;
    await setReaders([...readers, newReader]);
  };

  return (
    <div id='content' className='my-16 text-lg w-full flex bg-transparent justify-center relative overflow-scroll'>
      {readers}
      <button
        onClick={addBible}
        className='absolute font-bold bg-blue-600 hover:bg-green-500 text-white h-12 p-2 z-0 shadow-md right-0 top-11'
      >
        + Add another Bible
      </button>
    </div>
  );
};
