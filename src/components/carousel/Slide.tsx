import React from 'react';

type ImageCustomProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  alt: string;
};
type ItemProp = {
  item: {
    id: number;
    image: string;
    caption: string;
  };
  forwardSlide: () => void;
  previousSlide: () => void;
};

const MyImage = ({ src, alt }: ImageCustomProps) => {
  return <img src={src} alt={alt} />;
};

export const Slide = ({ item, forwardSlide, previousSlide }: ItemProp) => {
  return (
    <div className="relative flex flex-row justify-center transition-all duration-1000 pt-5">
      <p className="absolute top-10 font-semibold p-10 text-lg text-orange-400">
        {item.caption}
      </p>
      <button
        className=" rounded-r-none rounded-l-xl bg-slate-100 text-black text-2xl font-bold shadow-lg"
        onClick={previousSlide}
      >
        {'<'}
      </button>
      <MyImage
        key={item.id}
        src={item.image}
        alt={item.caption}
        className="shadow-lg transition-all duration-1000"
      />
      <button
        className="bg-slate-100 text-black text-2xl font-bold rounded-r-xl rounded-l-none shadow-lg"
        onClick={forwardSlide}
      >
        {'>'}
      </button>
    </div>
  );
};
