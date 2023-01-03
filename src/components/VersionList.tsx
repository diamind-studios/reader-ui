import { StateSetter } from './types';

export const VersionList = (props: {
  setters: { setVersion: StateSetter<string>; setShowVersions: StateSetter<boolean> };
  showVersions: boolean;
}): JSX.Element => {
  const versions = ['Berean Study Bible', 'King James Version', 'Vulgate'];
  const changeVersion = (version: string) => {
    props.setters.setVersion(version);
    // load the actual version text here
    props.setters.setShowVersions(false);
  };
  return (
    <span
      id='versionSelect'
      className={`flex-col absolute top-14 bg-gray-200 shadow-md mx-4 w-3/4 rounded-md ${
        props.showVersions ? 'scale-100' : 'scale-0'
      }`}
    >
      {versions.map((version, index) => (
        <div
          tabIndex={100}
          onClick={() => changeVersion(version)}
          className='version-selection bg-inherit px-3 py-1 hover:bg-white cursor-pointer select-none rounded-md'
        >
          {version}
        </div>
      ))}
    </span>
  );
};
