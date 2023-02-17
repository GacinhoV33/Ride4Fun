import React from 'react'
//@ts-ignore
import { FullPage, Slide } from 'react-full-page';
import FirstSlide from "./FirstSlide";
import FourthSlide from './FourthSlide';
import SecondSlide from './SecondSlide';
import ThirdSlide from './ThirdSlide';

const Slides: React.FC = () => {
  return (
    <FullPage>
            <Slide >
              <FirstSlide/>
            </Slide>
            <Slide>
              <SecondSlide/>
            </Slide>
            <Slide>
              <ThirdSlide/>
            </Slide>
            <Slide>
              <FourthSlide/>
            </Slide>
    </FullPage>
  )
}

export default Slides