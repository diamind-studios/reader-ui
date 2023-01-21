import { useEffect, useState } from 'react';
import { getSourceList, getTranslationList } from '../services/bible-api/bible-api';
import { StateSetter, Version, VersionListData } from '../types/types';
import { VersionListOption } from './VersionListOption';

export const VersionList = (props: {
  setters: {
    setVersion: StateSetter<Version>;
    setShowVersions: StateSetter<boolean>;
  };
  showVersions: boolean;
}): JSX.Element => {
  const [versionList, setVersionList] = useState<VersionListData>();
  useEffect(() => {
    const populateVersionList = async () => {
      const translations = await getTranslationList();
      const sources = await getSourceList();
      setVersionList({ translations, sources });
    };
    populateVersionList();
  }, []);

  return (
    <span
      id='versionSelect'
      className={`duration-50 left-1/2 -translate-x-1/2 flex-col absolute top-14 bg-gray-200 
      shadow-md w-4/5 rounded-md z-10 ${props.showVersions ? 'scale-100' : 'scale-0'}`}
    >
      <div
        tabIndex={100}
        className='standard-transition font-bold version-selection bg-inherit px-3 
      py-1 cursor-default select-none rounded-md'
      >
        {'Translations:'}
      </div>
      {versionList?.translations.map((version, index) => (
        <VersionListOption key={`translation${index}`} version={version} setters={props.setters}></VersionListOption>
      ))}
      <div
        tabIndex={100}
        className='standard-transition font-bold version-selection bg-inherit px-3 
      py-1 cursor-default select-none rounded-md'
      >
        {'Source Texts:'}
      </div>
      {versionList?.sources.map((version, index) => (
        <VersionListOption key={`source${index}`} version={version} setters={props.setters}></VersionListOption>
      ))}
    </span>
  );
};
