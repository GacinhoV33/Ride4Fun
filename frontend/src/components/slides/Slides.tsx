import React from 'react'
//@ts-ignore
import { FullPage, Slide } from 'react-full-page';
import FirstSlide from "./FirstSlide";

const Slides: React.FC = () => {
  return (
    <FullPage>
            <Slide style={{height :'20vh'}}>
              <FirstSlide/>
            </Slide>
            <Slide>
              <h1>Inner slide content</h1>
            </Slide>
    </FullPage>
  )
}

export default Slides