'use client';
import Link from 'next/link';
import { ReactNode } from 'react';

type Props = {
  item: {
    label: string;
    href: string;
    icon: ReactNode;
    width: number;
  };
};

const NavItem = ({ item }: Props) => {
  return (
    <li key={item.label}>
      <Link href={item.href}>{item.icon}</Link>
    </li>
  );
};

export default NavItem;
