import '../animations.css'
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop, faCoffee, faBicycle, faDog, faHiking, faPuzzlePiece, faPodcast, faPlane } from '@fortawesome/free-solid-svg-icons';


export default function Hobbies() {
  return (
    <div>
      <h3>Some things I enjoy:</h3>
      <FontAwesomeIcon className="fa-4x tossing hobbie-icons" icon={faLaptop} />
      <FontAwesomeIcon className="fa-4x floating hobbie-icons" icon={faCoffee} />
      <FontAwesomeIcon className="fa-4x tossing hobbie-icons" icon={faBicycle} />
      <FontAwesomeIcon className="fa-4x floating hobbie-icons" icon={faDog} />
      <FontAwesomeIcon className="fa-4x floating hobbie-icons" icon={faHiking} />
      <FontAwesomeIcon className="fa-4x tossing hobbie-icons" icon={faPuzzlePiece} />
      <FontAwesomeIcon className="fa-4x floating hobbie-icons" icon={faPodcast} />
      <FontAwesomeIcon className="fa-4x tossing hobbie-icons" icon={faPlane} />

    </div>
  )
}

