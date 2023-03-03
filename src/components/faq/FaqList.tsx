import React, { useEffect, useState } from 'react';
type FaqListProps = {
  faq: {
    id: number;
    title: string;
    description: string;
  };
  open: number;
  setOpen: React.Dispatch<React.SetStateAction<number>>;
};

const FaqList = ({ faq, open, setOpen }: FaqListProps) => {
  const handleToggle = (id: number) => {
   
    setOpen(id);
  };

  return (
    <div className="  flex flex-col w-[90vw] ">
      <div
        className="px-2 py-2 text-left bg-blue-400 flex justify-between "
        onClick={() => handleToggle(faq.id)}
      >
        <h2 className="">
          {faq.id}. {faq.title}
        </h2>
        <div className="bg-slate-600  w-7 h-7  flex place-content-center   leading-2  rounded-full">
          {faq.id === open ? '-' : '+'}
        </div>
      </div>
      {faq.id === open && (
        <div className="text-left pl-8 py-4 bg-black text-sm ease-in-out duration-1000">
          {faq.description}
        </div>
      )}
    </div>
  );
};

export default FaqList;
