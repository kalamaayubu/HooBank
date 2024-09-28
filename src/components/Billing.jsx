import { bill, apple, google } from "../containers/exports";


const Billing = () => {
  return (
    <div className="flex flex-col items-center justify-between md:flex-row m-auto gap-10 w-[90%] mt-20">
      <div className="max-w-[500px] mb-16">
        <img src={bill} alt="Bill" className=""/>
      </div>

      <div className="flex flex-col gap-4 max-w-[600px]">
        <h2 className="font-semibold text-3xl text-white max-w-[300px] mb-4">Easily control your billing & invoicing.</h2>
        <p className="text-dimWhite mb-6">Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
        <div className="flex flex-nowrap gap-10">
          <img src={apple} alt="Apple store" className="cursor-pointer"/>
          <img src={google} alt="Google playstore" className="cursor-pointer"/>
        </div>
      </div>
    </div>
  )
}

export default Billing
