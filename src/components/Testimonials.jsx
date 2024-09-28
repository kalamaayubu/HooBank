import { quotes } from "../containers/exports";
import PropTypes from 'prop-types';


const Testimonials = ({ text, image, name, role }) => {
  return (
      <div className="flex flex-col gap-8 bg-black-gradient rounded-2xl p-4 max-w-[300px]">
        <img src={quotes} alt="Quotes" className="w-10"/>
        <p className="text-dimWhite">{text}</p>

        <div className="flex flex-nowrap gap-4 items-center">
          <img src={image} alt="Person" />
          <div>
            <p className="text-white">{name}</p>
            <p className="text-dimWhite">{role}</p>
          </div>
        </div>
      </div>
  )
}

// Props validation
Testimonials.propTypes = {
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
}

export default Testimonials
