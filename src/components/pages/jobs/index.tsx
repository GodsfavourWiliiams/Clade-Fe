import Header from '@/components/header';
import NavTabs from '@/components/navTabs';
import React from 'react';
import JobHeader from './jobHeader';
import { Icons } from '@/assets/icons';
import JobDetails from './jobDetails';
import JobDescription from './jobDescription';
import CompanyInformation from './companyInformation';
import JobManagement from './jobManagement';

const JobsPage = () => {
  return (
    <>
      <Header />
      <NavTabs />
      <div className="overflow-hidden flex md: md:flex-row flex-col pb-20">
        <div className="relative flex flex-col flex-1 overflow-x-hidden overflow-y-auto">
          <JobHeader />
          <JobDetails />
          <JobDescription />
          <CompanyInformation />
        </div>
        <JobManagement />
      </div>
    </>
  );
};

export default JobsPage;
