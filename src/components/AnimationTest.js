import React, { useRef, useState, useEffect, useCallback } from 'react'
import { useTransition, animated } from 'react-spring'
import '../App.css';
import { useTheme, createMuiTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export default function AnimationTest() {
  const responsiveTheme = createMuiTheme({
    breakpoints: {
      values: {
        sm: 813,
      },
    },
  })

  var line = 100
  const theme = useTheme();
  const matches = useMediaQuery(responsiveTheme.breakpoints.up("sm"));

  const ref = useRef([])
  const [items, set] = useState([])
  const transitions = useTransition(items, null, {
    from: { opacity: 0, height: 0, innerHeight: 0, transform: 'perspective(600px) rotateX(0deg)', color: '#37474f' },
    enter: [
      { opacity: 1, height: line, innerHeight: line },
      { transform: 'perspective(600px) rotateX(180deg)', color: '#303f9f' },
      { transform: 'perspective(600px) rotateX(0deg)' },
    ],
    leave: [{ color: '#001970' }, { innerHeight: 0 }, { opacity: 0, height: 0 }],
    update: { color: '#37474f' },
  })

  const reset = useCallback(() => {
    ref.current.map(clearTimeout)
    ref.current = []
    set([])
    ref.current.push(setTimeout(() => set(['Emily', 'Blair']), 200))
    ref.current.push(setTimeout(() => set(['Emily', 'Empathetic', 'Blair']), 2500))
    ref.current.push(setTimeout(() => set(['Emily', 'Blair']), 5000))
    ref.current.push(setTimeout(() => set(['Emily', 'Creative', 'Blair']), 8200))
    ref.current.push(setTimeout(() => set(['Emily', 'Blair']), 10800))
    ref.current.push(setTimeout(() => set(['Emily', 'Innovative', 'Blair']), 14000))
    ref.current.push(setTimeout(() => set(['Emily', 'Blair']), 17000))
  }, [])

  useEffect(() => void reset(), [])

  // var responsive;

  // if (useMediaQuery(theme.breakpoints.down("sm"))) {
  //   responsive = <h1 style={{fontSize: "6em", lineHeight: "80px", textTransform: "uppercase", display: "inline"}} className="welcome-msg-text">Emily Blair</h1>
  // } else if (useMediaQuery(theme.breakpoints.down("md"))) {
  //   responsive = <div>
  //   {transitions.map(({ item, props: { innerHeight, ...rest }, key }) => (
  //     <animated.div className="transitions-item" key={key} style={rest}>
  //       <animated.div style={{ overflow: 'hidden', height: innerHeight }}>{item}</animated.div>
  //     </animated.div>
  //   ))}
  // </div>
  // } else {
  //     {line === "80px"}
  // }

  const responsive = 
  matches 
  ? <div>
  {transitions.map(({ item, props: { innerHeight, ...rest }, key }) => (
    <animated.div className="transitions-item welcome-msg-text" key={key} style={rest}>
      <animated.div style={{ overflow: 'hidden', height: innerHeight }}>{item}</animated.div>
    </animated.div>
  ))}
</div>
  : <h1 style={{textTransform: "uppercase", display: "inline"}} className="welcome-msg-text">Emily Blair</h1>
  return (
    <div>


      {responsive}
      {/* {transitions.map(({ item, props: { innerHeight, ...rest }, key }) => (
        <animated.div className="transitions-item" key={key} style={rest}>
          <animated.div style={{ overflow: 'hidden', height: innerHeight }}>{item}</animated.div>
        </animated.div>
      ))} */}
    </div>
  )
}