import { Button } from "../containers/exports"


const CTA = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between m-auto w-[90%] max-w-[1000px] bg-black-gradient-2 px-4 py-2 rounded-xl">
      <div className="">
        <h2 className="text-white font-semibold text-2xl mb-2">Let’s try our service now!</h2>
        <p className="text-dimWhite max-w-[500px] md:max-w-[600px] mb-4">Everything you need to accept card payments and grow your business anywhere on the planet.</p>
      </div>

      <div className="">
        <Button />
      </div>
    </div>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export default CTA
