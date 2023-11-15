import Image from 'next/image';

export default function Render({ size = 80 }) {
  return (
    <div className='relative -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-white dark:!border-navy-700'>
      <Image
        alt='Omnibody avatar'
        src='/assets/img/avatar.png'
        width={size}
        height={size}
        className='h-20 w-20 rounded-full'
      />
    </div>
  );
}
