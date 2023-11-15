import React from 'react';

interface RenderProps {
  title: string;
  headline: string | undefined;
  description: string | undefined;
  leftButtonText: string | undefined;
  rightButtonText: string | undefined;
  onLeftButtonClick: any | undefined;
  onRightButtonClick: any | undefined;
}

export default function Render({
  title,
  headline,
  description,
  leftButtonText,
  rightButtonText,
  onLeftButtonClick,
  onRightButtonClick,
}: RenderProps) {
  return (
    <div className='flex w-full flex-col rounded-[20px] bg-gradient-to-br from-brand-400 via-brand-500 to-brand-600 bg-cover p-[30px] md:px-[64px] md:py-[56px]'>
      <div className='w-full'>
        <h4 className='mb-[14px] max-w-full text-xl font-bold text-white md:w-[64%] md:text-3xl md:leading-[42px] lg:w-[46%] xl:w-[85%] 2xl:w-[75%] 3xl:w-[64%]'>
          {headline + title}
        </h4>
        <p className='max-w-full text-base font-medium text-[#E3DAFF] md:w-[64%] lg:w-[40%] xl:w-[72%] 2xl:w-[60%] 3xl:w-[45%]'>
          {description}
        </p>

        {leftButtonText || rightButtonText ? (
          <div className='mt-[40px] flex items-center justify-between gap-4 sm:justify-start 2xl:gap-10'>
            {leftButtonText && (
              <button
                type='button'
                className='linear rounded-xl bg-white px-4 py-2 text-center text-base font-medium text-black transition duration-200 hover:!bg-white/80 active:!bg-white/70'
                onClick={onLeftButtonClick}
              >
                {leftButtonText}
              </button>
            )}
            {rightButtonText && (
              <button
                type='button'
                onClick={onRightButtonClick}
                className='text-base font-medium text-lightPrimary hover:text-lightPrimary 2xl:ml-2'
              >
                {rightButtonText}
              </button>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
}
