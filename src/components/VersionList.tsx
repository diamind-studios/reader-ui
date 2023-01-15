import { StateSetter, Version } from '../types/types';
import { VersionListOption } from './VersionListOption';

export const VersionList = (props: {
  setters: {
    setVersion: StateSetter<Version>;
    setShowVersions: StateSetter<boolean>;
  };
  showVersions: boolean;
}): JSX.Element => {
  const versions: Version[] = [
    { name: 'BSB', fullname: 'Berean Study Bible' },
    { name: 'KJV', fullname: 'King James Version' },
    { name: 'VUL', fullname: 'Vulgate' },
    { name: 'LXX', fullname: 'Septuagint' },
  ];
  return (
    <span
      id='versionSelect'
      className={`duration-50 left-1/2 -translate-x-1/2 flex-col absolute top-14 bg-gray-200 
      shadow-md w-4/5 rounded-md ${props.showVersions ? 'scale-100' : 'scale-0'}`}
    >
      {versions.map((version, index) => (
        <VersionListOption key={`versionOption${index}`} version={version} setters={props.setters}></VersionListOption>
      ))}
    </span>
  );
};
