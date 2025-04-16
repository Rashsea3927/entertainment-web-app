'use client';

import NavBookmarkIcon from '@/components/icons/NavBookmarkIcon';
import NavHomeIcon from '@/components/icons/NavHomeIcon';
import NavMoviesIcon from '@/components/icons/NavMoviesIcon';
import NavTVSeriesIcon from '@/components/icons/NavTvSeriesIcon';
import NavItem from '@components/NavItem';
import { usePathname } from 'next/navigation';

const navLinks = [
  {
    label: 'home',
    href: '/',
    icon: (isActive: boolean) => <NavHomeIcon isActive={isActive} />,
    width: 20,
  },
  {
    label: 'movies',
    href: '/movies',
    icon: (isActive: boolean) => <NavMoviesIcon isActive={isActive} />,
    width: 20,
  },
  {
    label: 'tv-series',
    href: '/tv-series',
    icon: (isActive: boolean) => <NavTVSeriesIcon isActive={isActive} />,
    width: 20,
  },
  {
    label: 'bookmarks',
    href: '/bookmarks',
    icon: (isActive: boolean) => <NavBookmarkIcon isActive={isActive} />,
    width: 17,
  },
];

const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav>
      <ul className='flex justify-center items-center gap-6 sm:gap-8 lg:flex-col lg:gap-10'>
        {navLinks.map((item) => {
          const isActive = pathname === item.href; // 現在のパスと href を比較
          return (
            <NavItem
              key={item.label}
              item={{
                ...item,
                icon: item.icon(isActive), // isActive を渡してアイコンを生成
              }}
            />
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
