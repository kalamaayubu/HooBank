
const Stats = () => {
  return (
    <div className='flex flex-wrap items-center sm:flex-row w-[80%] justify-center space-x-4 font-semibold max-w-[700px] m-auto mt-20 mb-20'>
      <p className='flex items-center gap-4'><span className='text-white text-2xl'>3800+</span> <span className='text-gradient font-normal'>USER ACTIVE</span></p>
      <div className='w-[1px] h-3 bg-dimWhite mx-1 '/>
      <p className='flex items-center gap-4'><span className='text-white text-2xl'>230+</span> <span className='text-gradient font-normal'>TRUSTED COMPANY</span> </p>
      <div className='w-[1px] h-3 bg-dimWhite mx-1 '/>
      <p className='flex items-center gap-4'><span className='text-white text-2xl'>$250M+</span> <span className='text-gradient font-normal'>TRANSACTION</span> </p>
    </div>
  )
}

export default Stats
