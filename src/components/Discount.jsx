import { discount } from '../containers/exports'

const Discount = () => {
  return (
    <div className='flex'>
      <div className='bg-discount-gradient py-[1px] px-1 sm:px-2 flex sm:w-80 sm:text-[14px] lg:w-90 text-[13px] items-center rounded-md justify-between mb-5'>
        <img src={discount} alt="Discount" />
        <p className=''>
          <span className='text-white'>20% </span>
          <span className='text-dimWhite'>DISCOUNT FOR </span>
          <span className='text-white'>1 MONTH </span>
          <span className='text-dimWhite'>ACCOUNT</span>
        </p>
      </div>
    </div>
  )
}

export default Discount
