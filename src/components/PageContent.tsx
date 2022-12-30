import { Reader } from './Reader';

export const PageContent = () => {
  return (
    <div id='content' className='my-14 text-lg w-full flex bg-transparent relative'>
      <Reader primary={true}></Reader>
      <button className='absolute font-bold bg-blue-600 hover:bg-green-500 text-white h-12 p-2 align-middle z-0 shadow-md '>
        + Add another Bible
      </button>
    </div>
  );
};
