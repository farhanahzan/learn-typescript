import React, { useState } from 'react';
import { faqList } from './faq';
import FaqList from './FaqList';

const FaqBody = () => {
    const [open, setOpen] = useState<number>(0)
 
  return (
    <div className="w-[100vw] divide-y-[1px] divide-slate-300">
      {faqList.map((faq, index) => (
        <FaqList key={faq.id} faq={faq} open={open} setOpen={setOpen} />
      ))}
    </div>
  );
};

export default FaqBody;
