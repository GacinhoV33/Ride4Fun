import React from 'react'
//@ts-ignore
import { FullPage, Slide } from 'react-full-page';
import FirstSlide from "./FirstSlide";
import FourthSlide from './FourthSlide';
import SecondSlide from './SecondSlide';
import ImagesPortfolio from './ImagesPortfolio';
import ThirdSlide from './ThirdSlide';


export interface SlidesProps{
  setCurrentTab: React.Dispatch<React.SetStateAction<number>>;
}

const Slides: React.FC<SlidesProps> = ({setCurrentTab}) => {
  return (
    <FullPage >
            <Slide onSlideLeave={() => console.log('Blabla')}>
              <FirstSlide/>
            </Slide>
            <Slide>
              <SecondSlide setCurrentTab={setCurrentTab}/>
            </Slide>
            <Slide>
              <ThirdSlide />
            </Slide>
            <Slide>
              <FourthSlide/>
            </Slide>
    </FullPage>
  )
}

export default Slides