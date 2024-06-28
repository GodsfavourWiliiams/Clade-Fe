'use client';

import { IconProps, Icons } from '@/assets/icons';
import { cn } from '@/utils';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { AppContainer } from './appContainer';

// Define the interface for the nav links
interface NavLink {
  name: string;
  href: string;
  icon: React.FC<IconProps>;
}

const Header = () => {
  const pathname = usePathname();
  const navLinks: NavLink[] = [
    {
      name: 'Jobs',
      href: '/jobs',
      icon: Icons.JobsIcon,
    },
    {
      name: 'Messages',
      href: '/messages',
      icon: Icons.MessagesIcon,
    },
    {
      name: 'Payments',
      href: '/payments',
      icon: Icons.PaymentsIcon,
    },
  ];
  return (
    <div className="bg-white header-wrapper">
      <nav className="flex items-center justify-between p-4">
        <div className="flex lg:flex-1">
          <Link
            href="/"
            className="flex items-center justify-center p-2 w-[100px] h-[61px] bg-foreground"
          >
            <span className="text-primary text-sm font-medium">Logo</span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
          </button>
        </div>
        <div className="w-[534px] h-[74px] bg-white backdrop-blur-sm rounded-full hidden lg:flex items-center gap-4 justify-between overflow-hidden border-border border px-2.5">
          {navLinks?.map((item: NavLink, index: number) => (
            <button
              type="button"
              className={cn('flex-none rounded-full p-1', {
                'bg-primary/20 ': item.href === pathname,
              })}
              key={index}
            >
              <Link
                className={cn(
                  'flex items-center gap-2 text-sm font-medium text-grey p-3',
                  {
                    'text-white bg-primary rounded-full':
                      item.href === pathname,
                  }
                )}
                href={item.href}
              >
                <item.icon className="h-6 w-6" aria-hidden="true" /> {item.name}
              </Link>
            </button>
          ))}
        </div>

        <div className="flex lg:flex-1 lg:justify-end gap-6 items-center">
          <div className="relative">
            <Icons.BellIcon />
            <span className="absolute top-0 right-1 w-2 h-2 bg-primary rounded-full" />
          </div>

          <button className="flex items-center gap-1" type="button">
            <Image
              src="/profile-picture.png"
              alt="profile picture"
              width={40}
              height={40}
              className="w-10 h-10 "
              unoptimized
            />
            <Icons.ArrowDown />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
