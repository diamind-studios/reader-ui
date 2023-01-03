import { changeVersion } from '../common/changeVersion';

export const VersionListOption = (props: { key: string; version: string; setters: any }) => {
  return (
    <div
      tabIndex={100}
      onClick={() => changeVersion(props.version, props.setters)}
      className='standard-transition version-selection bg-inherit px-3 
      py-1 hover:bg-white hover:scale-105 cursor-pointer select-none rounded-md'
    >
      {props.version}
    </div>
  );
};
