import '../animations.css'
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { faLaptop, faCoffee, faBicycle, faDog, faHiking, faPuzzlePiece, faPodcast, faPlane } from '@fortawesome/free-solid-svg-icons';


export default function Hobbies() {

  const matches = useMediaQuery('(max-width:500px)');

  const responsiveSize = matches ? "fa-2x" : "fa-4x"

  return (
    <div>
      <h3>Some things I enjoy:</h3>
      <FontAwesomeIcon className={` ${responsiveSize} tossing hobbie-icons`} icon={faLaptop} />
      <FontAwesomeIcon className={`${responsiveSize} floating hobbie-icons`} icon={faCoffee} />
      <FontAwesomeIcon className={`${responsiveSize} tossing hobbie-icons`} icon={faBicycle} />
      <FontAwesomeIcon className={`${responsiveSize} floating hobbie-icons`} icon={faDog} />
      <FontAwesomeIcon className={`${responsiveSize} floating hobbie-icons`} icon={faHiking} />
      <FontAwesomeIcon className={`${responsiveSize} tossing hobbie-icons`} icon={faPuzzlePiece} />
      <FontAwesomeIcon className={`${responsiveSize} floating hobbie-icons`} icon={faPodcast} />
      <FontAwesomeIcon className={`${responsiveSize} tossing hobbie-icons`} icon={faPlane} />

    </div>
  )
}

