import { useMemo, useState } from 'react';
import { getTranslationText } from '../services/bible-api/bible-api';
import { Passage } from '../types/types';
import { CloseButton } from './CloseButton';
import { VersionList } from './VersionList';

export const Reader = (props: {
  key: string;
  passage: Passage;
  closeAction?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}): JSX.Element => {
  const [selectedVersion, setVersion] = useState({ id: 0, full_name: 'Choose A Version', name: 'KJV' });
  const [showVersions, setShowVersions] = useState(false);
  const [passageData, setPassageData] = useState<any[]>([]);
  const setters = { setVersion, setShowVersions, setReaderText: setPassageData };

  useMemo(async () => {
    console.log('🌐 retrieving text...');
    const passage = await getTranslationText(selectedVersion.name);
    setPassageData(passage);
  }, [props.passage, selectedVersion]);

  return (
    <div className='w-2/5 mx-3 flex-row relative'>
      <VersionList setters={setters} showVersions={showVersions}></VersionList>
      <div
        tabIndex={100}
        onFocus={() => setShowVersions(true)}
        onBlur={(e) => {
          if (!e.relatedTarget?.classList.contains('version-selection')) setShowVersions(false);
        }}
        className={`flex w-full py-1 reader my-3 select-none cursor-pointer hover:bg-white 
        justify-center relative group ${showVersions ? 'bg-white' : 'bg-gray-100'}`}
      >
        {props.closeAction ? <CloseButton closeAction={props.closeAction}></CloseButton> : null}
        <h2 className='text-xl font-bold text-center'>{selectedVersion.full_name}</h2>
      </div>
      <div className='leading-8 p-4 reader'>
        {passageData ? passageData.map((verse) => <div>{`${verse.verse}. ` + verse.text}</div>) : 'N/A'}
      </div>
    </div>
  );
};
