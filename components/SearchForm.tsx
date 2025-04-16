import Image from 'next/image';

const SearchForm = () => {
  return (
    <form className='flex items-start gap-4 mx-4 mb-8'>
      <div className='relative w-6 h-6'>
        <Image src='/assets/icon-search.svg' fill alt='' />
      </div>
      <input
        type='text'
        className='pb-3 border-transparent border-[1px] focus:border-b-(--greysh-blue) focus:border-solid focus-visible:outline-none'
        placeholder='Search for movies or TV series'
      />
    </form>
  );
};

export default SearchForm;
