import { AppContainer } from '@/components/appContainer';
import Image from 'next/image';
import React from 'react';

const CompanyInformation = () => {
  return (
    <AppContainer className="py-6 pl-7 2xl:pl-0">
      <div className=" max-w-5xl mx-auto">
        <div className="flex items-center gap-4">
          <Image
            src="/profile-picture.png"
            alt="profile picture"
            width={40}
            height={40}
            className="w-10 h-10 "
            unoptimized
          />
          <span className="text-deep-text text-sm">Atlassian</span>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="">
            <div className="flex flex-col gap-3 py-4">
              <span className="text-xs text-text">Company size</span>
              <span className="text-deep-text font-medium text-sm">
                1k - 2k Employees
              </span>
            </div>
            <div className="flex flex-col gap-3 py-4">
              <span className="text-xs text-text">Sector</span>
              <span className="text-deep-text font-medium text-sm">
                Information Technology, Infrastructure
              </span>
            </div>
            <div className="flex flex-col gap-3 py-4">
              <span className="text-xs text-text">Founded In</span>
              <span className="text-deep-text font-medium text-sm">2019</span>
            </div>
          </div>
          <div className="">
            <div className="flex flex-col gap-3 py-4">
              <span className="text-xs text-text">Type</span>
              <span className="text-deep-text font-medium text-sm">
                Private
              </span>
            </div>
            <div className="flex flex-col gap-3 py-4">
              <span className="text-xs text-text">Funding</span>
              <span className="text-deep-text font-medium text-sm">
                Bootstrapped
              </span>
            </div>
            <div className="flex flex-col gap-3 py-4">
              <span className="text-xs text-text">Founded By</span>
              <span className="text-deep-text font-medium text-sm">
                Scott Farquhar, Mike Cannon-Brookes
              </span>
            </div>
          </div>
        </div>
      </div>
    </AppContainer>
  );
};

export default CompanyInformation;
