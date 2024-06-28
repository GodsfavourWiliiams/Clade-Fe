import { AppContainer } from '@/components/appContainer';
import Image from 'next/image';
import React from 'react';

const JobDetails = () => {
  return (
    <div className="border-foreground border-b">
      <AppContainer className="py-6 pl-7 2xl:pl-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          <div className="flex flex-col gap-3 py-4">
            <span className="text-xs text-text">Skills Required</span>
            <div className="flex items-start flex-col gap-2 text-xs">
              <span className="flex items-center gap-2 border-[#D0D5DD] border rounded-lg px-2 py-1">
                <Image
                  src="/figma.png"
                  alt="figma"
                  width={10}
                  height={10}
                  unoptimized
                  className="w-4 h-4"
                />
                Figma
              </span>
              <span className="flex items-center gap-2 border-[#D0D5DD] border rounded-lg py-1 px-2">
                <Image
                  src="/ai.png"
                  alt="adobe"
                  width={10}
                  height={10}
                  unoptimized
                  className="w-4 h-4"
                />
                Adobe Illustrator
              </span>
              <span className="flex items-center gap-2 border-[#D0D5DD] border rounded-lg py-1 px-2">
                <Image
                  src="/xd.png"
                  alt="adobe xd"
                  width={10}
                  height={10}
                  unoptimized
                  className="w-4 h-4"
                />
                Adobe XD
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-3 py-4">
            <span className="text-xs text-text">Preferred Language</span>
            <span className="text-deep-text font-medium text-sm">English</span>
          </div>
          <div className="flex flex-col gap-3 py-4">
            <span className="text-xs text-text">Type</span>
            <span className="text-deep-text font-medium text-sm">
              Full time
            </span>
          </div>
          <div className="flex flex-col gap-3 py-4">
            <span className="text-xs text-text">Years of Experience</span>
            <span className="text-deep-text font-medium text-sm">
              3+ Years of Experience
            </span>
          </div>
        </div>
      </AppContainer>
    </div>
  );
};

export default JobDetails;
