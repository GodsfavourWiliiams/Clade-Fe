import { AppContainer } from '@/components/appContainer';
import Image from 'next/image';
import React from 'react';

const JobDescription = () => {
  return (
    <div className="border-border border-b">
      <AppContainer className="py-6 pl-7 2xl:pl-0">
        <div className="flex flex-col gap-2 text-sm max-w-5xl mx-auto font-medium text-deep-text">
          <h2 className="text-sm font-normal text-text">About the job</h2>
          <ul className="list-decimal list-inside text-sm ">
            <li>Handle the UI/UX research design</li>
            <li>
              Work on researching on latest web applications designs & trends
            </li>
            <li>Work on conceptualizing and visualizing</li>
            <li>
              Work on creating graphics content and other graphic related works
            </li>
          </ul>

          <h3 className="">Benefits:</h3>
          <ul className="list-disc list-inside text-sm ">
            <li>Health insurance</li>
            <li>Provident Fund</li>
          </ul>

          <h3 className="">Schedule:</h3>
          <p className=" text-sm">Day shift</p>

          <h3 className="">Supplemental pay types:</h3>
          <ul className="list-disc list-inside text-sm ">
            <li>Performance bonus</li>
            <li>Yearly bonus</li>
          </ul>
          <div className="flex items-center gap-2">
            <h3 className="">Work Location:</h3>
            <p>In person</p>
          </div>
        </div>
      </AppContainer>
    </div>
  );
};

export default JobDescription;
