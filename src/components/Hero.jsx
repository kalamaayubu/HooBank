import { GetStarted, Discount } from '../containers/exports';
import { robot } from '../containers/exports';


const Hero = () => {
  return (
    <div className={`bg-primary `}>
      <section className={`m-auto`}>
        <div className='flex flex-col sm:flex-row'>
          <div className={`flex flex-col m-auto mx-20 mt-20`}>

            {/* The discount label */}
            <Discount />

            {/* The Hero heading */}
            <div className={`flex items-center mb-6 relative max-w-[500px] gap-4`}>
              <div className='text-white font-bold text-3xl flex flex-col space-y-1 lg:space-y-2'>
                <p>The next</p>
                <p className='text-gradient bg-transparent bg-clip-text'>Generation</p>
                <p>Payment Method.</p>
              </div>
              <GetStarted />
            </div>

            <div className={`mb-20`}>
              <p className='text-dimWhite max-w-[470px]'>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. 
              We examine annual percentage rates, annual fees.</p>
            </div>
          </div>

          {/* The robot arm */}
          <div className='md:absolute md:right-0 relative flex flex-col flex-1 items-center justify-center md:my-0 my-10 bg-robot-gradient'>
            <img src={robot} alt="Robot hand" className='z-[5] relative max-w-[500px] m-auto'/>
          </div>
        </div>
      </section>
    </div>

  )
}

export default Hero
