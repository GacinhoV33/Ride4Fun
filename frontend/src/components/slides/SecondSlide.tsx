import React from 'react'
import PlaceHolder from '../common/PlaceHolder'
import OurOffer from '../OurOffer/OurOffer'

export interface SecondSlideProps{
    setCurrentTab: React.Dispatch<React.SetStateAction<number>>;
}

const SecondSlide: React.FC<SecondSlideProps> = ({setCurrentTab}) => {
    const teamMembers: TeamMember[] = [
     {name: 'Bartosz', surname: 'Wajda', title: 'title', imgPath: '../../images/MemberBartek.jpg', description: 'This is some basic description. Text is generated to visualize how it will look. This one is for Bartek.'},
     {name: 'Justyna', surname: 'Wójtowicz', title: 'title', imgPath: 'none', description: 'This is second basic description. Text is generated to visualize how it will look. This one is for Justyna'}
    ]
  
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