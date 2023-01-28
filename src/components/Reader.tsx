import { useMemo, useState } from 'react';
import { getSourceText, getTranslationText } from '../services/bible-api/bible-api';
import { Passage, Version } from '../types/types';
import { CloseButton } from './CloseButton';
import { PassageText } from './PassageText/PassageText';
import { VersionList } from './VersionList';

const defaultVersion: Version = {
  translation_id: 3,
  full_name: 'Choose A Version',
  name: 'BSB',
  type: 'translation',
};

export const Reader = (props: {
  key: string;
  passage: Passage;
  closeAction?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}): JSX.Element => {
  const [selectedVersion, setVersion] = useState<Version>(defaultVersion);
  const [showVersions, setShowVersions] = useState(false);
  const [passageData, setPassageData] = useState<any[]>([]);
  const setters = { setVersion, setShowVersions, setReaderText: setPassageData };

  useMemo(async () => {
    let passageText;
    if (selectedVersion.type === 'translation') {
      passageText = await getTranslationText(selectedVersion.translation_id, props.passage);
    } else if (selectedVersion.type === 'source') {
      passageText = await getSourceText(selectedVersion.source_id, props.passage);
    }
    setPassageData(passageText);
  }, [props.passage, selectedVersion]);

  return (
    <div className='w-2/5 mx-3 flex-row relative'>
      <VersionList setters={setters} showVersions={showVersions}></VersionList>
      <div className='relative'>
        <div
          tabIndex={100}
          onFocus={() => setShowVersions(true)}
          onBlur={(e) => {
            if (!e.relatedTarget?.classList.contains('version-selection')) setShowVersions(false);
          }}
          className={`flex w-full py-1 reader my-3 select-none cursor-pointer hover:bg-white 
        justify-center relative group ${showVersions ? 'bg-white' : 'bg-gray-100'}`}
        >
          <h2 className='text-xl font-bold text-center'>{selectedVersion.full_name}</h2>
        </div>
        {props.closeAction ? <CloseButton closeAction={props.closeAction}></CloseButton> : null}
      </div>
      <PassageText passageData={passageData} versionType={selectedVersion.type}></PassageText>
    </div>
  );
};
