import React from 'react'
import PlaceHolder from '../common/PlaceHolder'
import OurOffer from '../OurOffer/OurOffer'

export interface SecondSlideProps{
    setCurrentTab: React.Dispatch<React.SetStateAction<number>>;
}

const SecondSlide: React.FC<SecondSlideProps> = ({setCurrentTab}) => {
    
    return (
    <React.Fragment>
        <PlaceHolder/>
        <OurOffer setCurrentTab={setCurrentTab}/>
    </React.Fragment>
  )
}

export default SecondSlide;

export type TeamMember = {
    name: string,
    surname: string, 
    imgPath: string,
    title: string,
    description: string
}