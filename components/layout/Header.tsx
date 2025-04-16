import Navigation from '@/components/Navigation';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className='sticky z-10 top-0 left-0 xs:mx-6 xs:top-6 lg:h-screen lg:top-0 lg:mr-0 lg:ml-[auto]'>
      <div className='p-4 grid grid-cols-[auto_1fr_auto] items-center bg-(--semi-dark-blue) xs:rounded-xl lg:grid-cols-1 lg:justify-center lg:items-start lg:h-[calc(100%-4rem)] lg:mt-8 lg:pt-9 lg:pb-8 lg:px-7'>
        <h1 className='lg:justify-self-center'>
          <Link href='/'>
            <Image src='/assets/logo.svg' alt='' width={33} height={27} />
          </Link>
        </h1>
        <Navigation />
        <div className='w-6 h-6 rounded-full border-[1px] border-solid border-(--white) sm:w-8 sm:h-8 lg:w-10 lg:h-10 lg:self-end'>
          <Image src='/assets/image-avatar.png' width={80} height={80} alt='' />
        </div>
      </div>
    </header>
  );
};

export default Header;
