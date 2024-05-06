import ServiceItem from './ServiceItem';

const Services = () => {
  return (
    <section
      id='services'
      className='2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20'
    >
      <div className='hide-scrollbar flex flex-col md:flex-row  h-[600px]  w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[540px] xs:h-[450px] '>
        <ServiceItem
          backgroundImage='bg-bg-img-1'
          title='Retirement insurance'
          subtitle='Securing Your Golden Years: Retirement Insurance Essentials 🌟'
          peopleJoined='50+ Joined'
        />
        <ServiceItem
          backgroundImage='bg-bg-img-2'
          title='Life Insurance'
          subtitle='Financial Protection for Loved Ones: Life Insurance Essentials 🌟'
          peopleJoined='50+ Joined'
        />
      </div>
    </section>
  );
};

export default Services;
