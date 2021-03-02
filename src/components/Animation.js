import anime from 'animejs/lib/anime.es.js';

export default function Animation() {
  const animation = anime({
    targets: '.test',
    translateX: 250,
    rotate: '1turn',
    backgroundColor: '#FFF',
    duration: 800
  });
  return (
    <div className="test">Test!!!</div>
  )
}