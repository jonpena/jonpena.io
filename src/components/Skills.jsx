import { useEffect } from 'react';
import { styles } from '../styles';

const options = {
  maxSpeed: 'normal',
  initSpeed: 'fast',
  direction: 30,
  keep: true,
  radius: matchMedia('(min-width: 48em)').matches
    ? window.innerWidth * 0.32
    : 210,
};

const Skills = () => {
  useEffect(() => {
    window.TagCloud('.sphere-container', Array(17).fill(''), options);
  }, []);

  useEffect(() => {
    const handleResize = (mq = matchMedia('(min-width: 48em)'), options) => {
      const $sphere = document.querySelector('.sphere-container');
      options.radius = mq.matches ? window.innerWidth * 0.32 : 210;
      $sphere.removeChild($sphere.childNodes[0]);
      window.TagCloud('.sphere-container', Array(17).fill(''), options);
      document.querySelector('.tagcloud').style.width = '100%';
    };

    // Suscribirse al evento de cambio de tamaño de la ventana
    window.addEventListener(
      'resize',
      handleResize(matchMedia('(min-width: 48em)'), options)
    );

    // Limpiar el efecto cuando el componente se desmonte
    return () => {
      window.removeEventListener(
        'resize',
        handleResize(matchMedia('(min-width: 48em)'), options)
      );
    };
  }, [window.innerWidth]);

  return (
    <div className='relative bottom-14 pt-14'>
      <h3
        className={`${styles.sectionHeadText} mt-10 text-center font-blue`}
        data-section='about'
        data-value='about-subtitle'
      >
        HABILIDADES
      </h3>

      <div className='relative'>
        <span className='w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 sun-shadow rounded-full absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2'></span>
        <span className='sphere-container'></span>
      </div>
    </div>
  );
};

export default Skills;