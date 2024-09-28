import { Button, card } from '../containers/exports'


const CardDeal = () => {
  return (
    <div className='flex flex-col justify-between md:flex-row m-auto items-center md:mt-6 mt-20 gap-10 w-[90%]'>
      <div className="flex flex-col gap-4 max-w-[600px]">
      <h2 className='text-white font-semibold text-[1.7rem] mb-5 max-w-[300px]'>Find a better card deal in few easy steps.</h2>
        <p className='text-dimWhite mb-5'>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
        <div className='flex'>
          <Button /> 
        </div>
      </div>

      <div className='max-w-[500px]'>
        <img src={card} alt="Card Deal" />
      </div>
    </div>
  )
}

export default CardDeal
