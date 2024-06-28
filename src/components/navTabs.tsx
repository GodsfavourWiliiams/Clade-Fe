'use client';

import React from 'react';
import { AppContainer } from './appContainer';
import { cn } from '@/utils';
import { usePathname } from 'next/navigation';

const NavTabs = () => {
  const pathname = usePathname();

  // Define links with their respective paths and labels
  const links = [
    { path: '/jobs', label: 'Job preview' },
    { path: '/jobs/applicants', label: 'Applicants' },
    { path: '/jobs/match', label: 'Match' },
    { path: '/jobs/messages', label: 'Messages' },
  ];

  return (
    <div className="border border-border h-[67px] items-center flex">
      <AppContainer className="text-sm text-center text-grey flex flex-wrap items-center">
        <ul className="flex flex-wrap">
          {links.map((link, index) => (
            <li key={index}>
              <a
                href={link.path}
                className={cn(
                  'inline-block relative text-grey py-6 px-4 hover:border-border hover:text-text',
                  { 'text-primary font-medium': pathname === link.path }
                )}
                aria-current={pathname === link.path ? 'page' : undefined}
              >
                {link.label}
                {pathname === link.path && (
                  <span className="bg-primary absolute left-1/2 -translate-x-1/2 bottom-0 w-14 h-[3px] rounded-sm" />
                )}
              </a>
            </li>
          ))}
        </ul>
      </AppContainer>
    </div>
  );
};

export default NavTabs;
