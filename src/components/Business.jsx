import { Send, Shield, star, Button } from "../containers/exports"



const Business = () => {
  return (
    <div className="flex flex-col md:flex-row md:gap-10 m-auto w-[85%] justify-between">
      <div className="mb-5">
        <h2 className="text-white font-semibold text-[1.7rem] mb-7 max-w-[300px]">You do the business, we handle the money.</h2>
        <p className="text-dimWhite mb-10 max-w-[500px]">With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
        <Button />      
      </div>

      <div className="flex flex-col max-w-[600px]">
        <div className="flex items-center gap-4 mb-6 cursor-pointer hover:bg-black-gradient px-2 py-1 rounded-md">
          <div className="p-4 max-w-12 bg-gray-800 rounded-full flex items-center justify-center">
            <img src={star} alt="star" className="w-[34px]"/>
          </div>
          <div className="flex flex-col">
            <h3 className="text-white font-semibold mb-1">Rewards</h3>
            <p className="text-dimWhite">The best credit cards offer some tantalizing combinations of promotions and prizes.</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4 mb-6 cursor-pointer bg-black-gradient px-2 py-1 rounded-md">
          <div className="p-4 max-w-12 bg-gray-800 rounded-full flex items-center justify-center">
            <img src={Shield} alt="Shield" className="w-[34px]"/>
          </div>
          <div className="flex flex-col">
            <h3 className="text-white font-semibold mb-1">100% Secured</h3>
            <p className="text-dimWhite">We take proactive steps make sure your information and transactions are secure.</p>
          </div>
        </div>

        <div className="flex items-center gap-4 mb-6 cursor-pointer hover:bg-black-gradient px-2 py-1 rounded-md">
          <div className="p-4 max-w-12 bg-gray-800 rounded-full flex items-center justify-center">
            <img src={Send} alt="Send" className="w-[34px]"/>
          </div>
          <div className="flex flex-col">
            <h3 className="text-white font-semibold mb-1">Balance Transfer</h3>
            <p className="text-dimWhite">A balance transfer credit card can save you a lot of money in interest charges.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Business
