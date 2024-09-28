import { logo, Socials } from '../containers/exports'


const Footer = () => {
  return (
    <div className="bg-black mt-20 text-dimWhite pt-10 px-10">
      <div className=' mb-8'>
        <div className='flex flex-col gap-1'>
          <img src={logo} alt="HooBank" className='max-w-[200px]'/>
          <p className='text-dimWhite max-w-[270px] mb-10'>A new way to make the payments easy, reliable and secure.</p>
        </div>

        <div className='flex sm:flex-row w-full justify-between max-w-[1000px] items-center m-auto'>

          <div className='flex flex-col mb-8'>
            <h3 className='text-white text-[1.1rem] mb-2'>Usefull Links</h3>
            <a href="#">Content</a>
            <a href="#">How it Works</a>
            <a href="#">Create</a>
            <a href="#">Explore</a>
            <a href="#">Terms and Services</a>
          </div>
          <div className='flex flex-col mb-8'>
            <h3 className='text-white text-[1.1rem] mb-2'>Community</h3>
            <a href="#">Help Center</a>
            <a href="#">Partners</a>
            <a href="#">Suggestions</a>
            <a href="#">Blog</a>
            <a href="#">Newsletters</a>
          </div>
          <div className='flex flex-col mb-8'>
            <h3 className='text-white text-[1.1rem] mb-2'>Partner</h3>
            <a href="#">Our Partners</a>
            <a href="#">Become a Partner</a>
          </div>

        </div>

      </div>

      <hr />
      <div className='flex flex-col sm:flex-row py-6 gap-6 justify-between'>
        <p>Copyright &copy; {new Date().getFullYear()} HooBank. All Rights Reserved.</p>
        <Socials />
      </div>
    </div>
  )
}

export default Footer
