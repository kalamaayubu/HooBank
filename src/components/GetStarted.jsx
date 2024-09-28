import { arrowUp } from '../containers/exports';


const GetStarted = () => {
  return (
    <div className={`bg-blue-gradient p-[1px] text-[14px] w-[75px] h-[75px] rounded-full absolute left-[180px] bottom-10`}>
      <div className={`w-full h-full rounded-full bg-black relative`}>
        <div className={`text-gradient flex flex-col justify-center gap-0 p-3 pt-4 cursor-default`}>
          <span>Get</span>
          <span>Started</span>
        </div>
        <img src={arrowUp} alt="Arrow Up" className='absolute top-5 right-4 cursor-pointer'/>
      </div>
    </div>
  )
}

export default GetStarted
