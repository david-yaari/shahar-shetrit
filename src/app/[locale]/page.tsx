// import {useTranslations} from 'next-intl';
import Actions from '@/components/Actions';
import Hero from '@/components/Hero';
import Services from '@/components/Services';

export default function Index() {
  // const t = useTranslations('IndexPage');

  return (
    <>
      <Hero />
      <Services />
      <Actions />
    </>
  );
}
