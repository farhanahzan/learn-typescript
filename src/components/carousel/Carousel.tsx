import { useEffect, useState } from 'react';
import { images } from './image';
import { ImageProp } from './image';
import { Slide } from './Slide';

export const Carousel = () => {
  const [current, setCurrent] = useState<ImageProp[]>(images);
  const [state, setState] = useState(1);

  const forward =  () => {
     setState(state === current.length ? 1 : state + 1);
    console.log('forwards', state);
  };

  const backward =  () => {
     setState(state === 1 ? current.length : state - 1);
    console.log('backward', state);
  };
  useEffect(() => {
   setState(state)
  }, [state])
  

  return (
    <div>
        <h1>01 Carousal</h1>

      {current.map(
        (item, index) =>
          state === item.id && <Slide key={item.id} item={item} forwardSlide={forward} previousSlide={backward}/>
      )}
    </div>
  );
};
