import Image from 'next/image';

const SearchForm = () => {
  return (
    <form className='grid grid-cols-[auto_1fr] items-start gap-4 mt-6 mx-4 mb-6 xs:mx-6 lg:mx-0'>
      <div className='relative w-6 h-6 md:w-8 md:h-8'>
        <Image src='/assets/icon-search.svg' fill alt='' />
      </div>
      <input
        type='text'
        className='pb-2 text-base text-(--white) font-light caret-(--red) border-transparent border-[1px] placeholder:text-(--white)/50 focus:border-b-(--greysh-blue) focus:border-solid focus-visible:outline-none md:text-lg lg:text-2xl lg:pb-3'
        placeholder='Search for movies or TV series'
      />
    </form>
  );
};

export default SearchForm;
