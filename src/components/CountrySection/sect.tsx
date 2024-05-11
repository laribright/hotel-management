import { FC } from 'react';
import Image from 'next/image';

type Props = {
  imgUrl: string;
};

export const Section2 : FC<Props> =  (props) => {
  const { imgUrl } = props;
  return  <div className='md:grid hidden gap-8 grid-cols-1'>
            <div className='rounded-2xl overflow-hidden h-48'>
              <Image
                src={imgUrl}
                alt='hero-1'
                width={300}
                height={300}
                className='img scale-animation'
              />
            </div>
        
            <div className='grid grid-cols-2 gap-8 h-48'>
              <div className='rounded-2xl overflow-hidden'>
                <Image
                  src='/images/hero-2.jpeg'
                  alt='hero-2'
                  width={300}
                  height={300}
                  className='img scale-animation'
                />
              </div>
              <div className='rounded-2xl overflow-hidden'>
                <Image
                  src='/images/hero-3.jpeg'
                  alt='hero-3'
                  width={300}
                  height={300}
                  className='img scale-animation'
                />
              </div>
            </div>
          </div>
};