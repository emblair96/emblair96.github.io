import '../animations.css'
import '../App.css'
import test from '../images/sync.svg'
import LocalFloristIcon from '@material-ui/icons/LocalFlorist';
import { Grid, Typography, Divider, Icon } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faBicycle, faDog, faHiking, faPuzzlePiece, faPodcast } from '@fortawesome/free-solid-svg-icons'


export default function Animation() {
  return (
    <div>

      <h3 style={{textAlign: "center"}}>What I do when I'm not coding:</h3>
      <FontAwesomeIcon className="fa-4x bigEntrance hobbie-icons" icon={faCoffee} />
      <FontAwesomeIcon className="fa-4x bigEntrance hobbie-icons" icon={faBicycle} />
      <FontAwesomeIcon className="fa-4x bigEntrance hobbie-icons" icon={faDog} />
      <FontAwesomeIcon className="fa-4x bigEntrance hobbie-icons" icon={faHiking} />
      <FontAwesomeIcon className="fa-4x bigEntrance hobbie-icons" icon={faPuzzlePiece} />
      <FontAwesomeIcon className="fa-4x bigEntrance hobbie-icons" icon={faPodcast} />
      <FontAwesomeIcon className="fa-4x bigEntrance hobbie-icons" icon={faDog} />
      <FontAwesomeIcon className="fa-4x bigEntrance hobbie-icons" icon={faDog} />

    </div>
  )
}

