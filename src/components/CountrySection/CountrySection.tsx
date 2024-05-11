import { Section2 }  from './sect';

const CountrySection = () => {
  return (
  <div className='wrapperCountry'>
      <h1 className='mainTitle mb-6'>Revisa nuestras ofertas</h1>
      {/* <p className='text-[#4a4a4a] dark:text-[#ffffffea] mb-12 max-w-lg'>
        Experience an Exquisite Hotel Immersed in Rich History and Timeless
        Elegance.
      </p>
      <button className='btn-primary'>Get Started</button> */}
    <div className='countrySection'>
      <div>
        <h1 className='cityTitle mb-6'>Medellín</h1>
        <Section2 imgUrl='/images/medellin.jpg'></Section2>
      </div>
      <div>
        <h1 className='cityTitle mb-6'>Bogotá</h1>
        <Section2 imgUrl='/images/bogota.jpg'></Section2>
      </div>
      <div>
        <h1 className='cityTitle mb-6'>Cali</h1>
        <Section2 imgUrl='/images/cali.jpg'></Section2>
      </div>
    </div>
  </div>)
}

export default  CountrySection;