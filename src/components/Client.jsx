import { airbnb, coinbase, binance, dropbox } from "../containers/exports"


const Client = () => {
  return (
    <div className="flex gap-2 justify-evenly items-center m-auto max-w-[900px] w-[80%] my-20">
      <img src={airbnb} alt="Airbnb logo" className="w-[88px] md:w-24"/>
      <img src={coinbase} alt="Coinbase logo" className="w-20 md:w-24"/>
      <img src={binance} alt="Binance logo" className="w-[90px] md:w-24"/>
      <img src={dropbox} alt="Dropbox logo" className="w-[88px] md:w-24"/>
    </div>
  )
}

export default Client
