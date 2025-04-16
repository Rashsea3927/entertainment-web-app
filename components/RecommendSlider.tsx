'use client';
import useEmblaCarousel from 'embla-carousel-react';

const RecommendSlider = () => {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div ref={emblaRef} className='overflow-hidden'>
      <div className='flex gap-4 ml-4 mr-4'>
        <div className='basis-[240px] grow-0 shrink-0 min-w-0 h-[140px] bg-(--greysh-blue)'>Slide 01</div>
        <div className='basis-[240px] grow-0 shrink-0 min-w-0 h-[140px] bg-(--greysh-blue)'>Slide 02</div>
        <div className='basis-[240px] grow-0 shrink-0 min-w-0 h-[140px] bg-(--greysh-blue)'>Slide 03</div>
      </div>
    </div>
  );
};

export default RecommendSlider;
