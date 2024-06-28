import { Icons } from '@/assets/icons';
import React from 'react';

const JobManagement = () => {
  return (
    <div className="md:w-96 w-full h-screen flex flex-col gap-6 flex-shrink-0 border-foreground border-l-2 p-6">
      <div className="grid grid-cols-2 gap-4 font-medium w-full tex-sm">
        <button className="w-full flex flex-shrink-0 items-center gap-4 p-3 text-primary bg-[#FEF4F2] border border-primary rounded-xl">
          <Icons.Delete />
          Delete job
        </button>
        <button className="w-full rounded-xl flex-shrink-0 flex items-center gap-4 p-3 bg-primary text-white">
          <Icons.Edit />
          Edit job
        </button>
      </div>
      <div className="">
        <div className="flex items-center justify-between border-foreground border-b gap-3 p-4">
          <div className="flex items-center gap-2">
            <Icons.Applicant className="w-4 h-4 " />
            <span className="text-xs font-medium text-[#4F4F4F]">
              Applicants
            </span>
          </div>
          <span className="text-[#3D3D3D] font-semibold text-sm">400</span>
        </div>
        <div className="flex items-center justify-between border-foreground border-b gap-3 p-4">
          <div className="flex items-center gap-2">
            <Icons.Matches className="w-4 h-4 " />
            <span className="text-xs font-medium text-[#4F4F4F]">Matches</span>
          </div>

          <span className="text-[#3D3D3D] font-semibold text-sm">100</span>
        </div>
        <div className="flex items-center justify-between border-foreground border-b gap-3 p-4">
          <div className="flex items-center gap-2">
            <Icons.MessagesIcon className="w-4 h-4 " />
            <span className="text-xs font-medium text-[#4F4F4F]">Messages</span>
          </div>
          <span className="text-[#3D3D3D] font-semibold text-sm">147</span>
        </div>
        <div className="flex items-center justify-between border-foreground border-b gap-3 p-4">
          <div className="flex items-center gap-2">
            <Icons.EyeIcon className="w-4 h-4 " />
            <span className="text-xs font-medium text-[#4F4F4F]">Views</span>
          </div>

          <span className="text-[#3D3D3D] font-semibold text-sm">800</span>
        </div>
      </div>
    </div>
  );
};

export default JobManagement;
