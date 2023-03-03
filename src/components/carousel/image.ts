import image1 from '../../assets/image (1).png';
import image2 from '../../assets/image (2).png';
import image3 from '../../assets/image (3).png';
import image4 from '../../assets/image (4).png';

export type ImageProp={
    id:number
    image:string
    caption:string
}

export const images : ImageProp[] = [
  {
    id: 1,
    image:  image1 ,
    caption: 'Text 1',
  },
  {
    id: 2,
    image:  image2 ,
    caption: 'Text 2',
  },
  {
    id: 3,
    image:  image3 ,
    caption: 'Text 3',
  },
  {
    id: 4,
    image:  image4 ,
    caption: 'Text 4',
  },
];