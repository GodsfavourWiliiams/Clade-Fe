import { Icons } from '@/assets/icons';
import { AppContainer } from '@/components/appContainer';
import React from 'react';

const JobHeader = () => {
  return (
    <div className="border-foreground border-b">
      <AppContainer className="py-6 pl-7 2xl:pl-0">
        <div className="flex flex-col gap-4 items-start max-w-5xl mx-auto">
          <div className="flex items-start lg:items-center lg:flex-row flex-col gap-4">
            <h1 className="font-semibold text-[35px] text-deep-text">
              Senior Product Designer
            </h1>
            <span className="w-2 h-2 lg:block hidden bg-border rounded-full" />
            <div className="flex items-center gap-4">
              <p className="tex-xs text-text">posted 2 days ago</p>
              <span className="px-4 py-2 rounded-full bg-light-green text-deep-green flex items-center gap-2 border-2 border-lime-green/20">
                <span className="w-2 h-2 bg-lime-green rounded-full" /> Open
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-4">
              <Icons.Location />
              Delaware, USA
            </span>
            <span className="w-2 h-2 bg-border rounded-full" />
            <span className="flex items-center gap-4">
              <Icons.CoinStack />
              $300k-$400k
            </span>
          </div>
        </div>
      </AppContainer>
    </div>
  );
};

export default JobHeader;
