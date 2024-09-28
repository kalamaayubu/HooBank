import { linkedin, twitter, facebook, instagram } from "../containers/exports";


const SocialMedia = () => {
  return (
    <div className="flex items-center space-x-5">
      <img src={instagram} alt="Instagram Icon" />
      <img src={facebook} alt="facebook Icon" />
      <img src={twitter} alt="twitter Icon" />
      <img src={linkedin} alt="linkedin Icon" />
    </div>
  )
}

export default SocialMedia
