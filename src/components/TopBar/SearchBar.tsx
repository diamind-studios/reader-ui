import search from '../../images/search.svg';
export const SearchBar = () => {
  return (
    <div className='flex items-center bg-gray-200 h-8 my-3 rounded-md p-1'>
      {/* w-1/2 */}
      <input placeholder='Search...' className='align-middle bg-transparent'>
        {/* w-full */}
      </input>
      <button className='w-7 '>
        <img src={search} alt='search button' />
      </button>
    </div>
  );
};
