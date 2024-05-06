import Button from './Button';
import Image from 'next/image';
import NavigationLink from './NavigationLink';

const Actions = () => {
  return (
    <section className='flexCenter w-full flex-col pb-[100px]'>
      <div className='get-app'>
        <div className='z-20 flex w-full flex-1 flex-col items-start justify-center gap-12'>
          <h2 className='bold-40 lg:bold-64 xl:max-w-[320px]'>Contact us!</h2>
          <p className='regular-16 text-gray-10'>Talk with an expert now.</p>
          <div className='flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row'>
            <NavigationLink href='/contact_form'>
              <Button
                type='button'
                title='Fill in the form'
                icon='/form.svg'
                variant='btn_white'
                full
              />
            </NavigationLink>
            <NavigationLink href='/contact_form'>
              <Button
                type='button'
                title='Call us'
                icon='/phone-outgoing.svg'
                variant='btn_white'
                full
              />
            </NavigationLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Actions;
