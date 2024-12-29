import Header from '../../UI/Header';
import Icon from '../../UI/Icon';
import TitleText from './TitleText';

const AboutUsTitle = () => {
  return (
    <div className='flex justify-between gap-8 pb-8 sm:pb-12 md:pb-24 md:pt-4 lg:pt-8'>
      <div className='relative'>
        <Header title={data.title} className='whitespace-pre' />
        <Icon
          name='arrow'
          className='absolute left-1/2 h-[10.625rem] w-[1.875rem] -translate-x-1/2'
        />
      </div>
      <TitleText text={data.text} />
    </div>
  );
};

export default AboutUsTitle;

const data = {
  title: 'ПРО НАС',
  text: 'Наша фотостудія — це простір, де кожен кадр перетворюється на витвір мистецтва. Тут ми створюємо атмосферу, яка надихає на творчість і дозволяє розкривати найкращі якості кожної миті.',
};
