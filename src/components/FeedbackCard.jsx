import { Testimonials, people01, people02, people03 } from '../containers/exports'


const FeedbackCard = () => {
  return (
    <>
    <div className="flex flex-col sm:flex-row sm:gap-10 m-auto w-[85%] justify-between my-20">
      <h2 className="text-white max-w-[250px] md:max-w-[300px] font-semibold text-2xl mb-3">What people are saying about us</h2>
      <p className="text-dimWhite mb-5 mt-3">Everything you need to accept card payments and grow your business anywhere on the planet.</p>
    </div>

    <div className="flex flex-wrap gap-4 m-auto items-center justify-center">
        <Testimonials 
          text={`Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.`}
          image={people01}
          name={`Herman Jensen`}
          role={`Founder & Leader`}
        /> 
        <Testimonials 
          text={`Money makes your life easier. If you're lucky to have it, you're lucky.`}
          image={people02}
          name={`Steve Mark`}
          role={`Founder & Leader`}        
        /> 
        <Testimonials 
          text={`It is usually people in the money business, finance, and international trade that are really rich.`}
          image={people03}
          name={`Kenn Gallagher`}
          role={`Founder & Leader`}        
        /> 
      </div>
    </>
  )
}

export default FeedbackCard
