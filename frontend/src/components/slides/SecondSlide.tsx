import React from 'react'
import OurTeam from '../common/OurTeam'
import PlaceHolder from '../common/PlaceHolder'
import TeamPhotos from '../common/TeamPhotos'
import OurOffer from '../OurOffer/OurOffer'

const SecondSlide: React.FC = () => {
    const teamMembers: TeamMember[] = [
     {name: 'Bartosz', surname: 'Wajda', title: 'title', imgPath: '../../images/MemberBartek.jpg', description: 'This is some basic description. Text is generated to visualize how it will look. This one is for Bartek.'},
     {name: 'Justyna', surname: 'Wójtowicz', title: 'title', imgPath: 'none', description: 'This is second basic description. Text is generated to visualize how it will look. This one is for Justyna'}
    ]
  
    return (
    <React.Fragment>
        <PlaceHolder/>
        <OurOffer/>
        {/* <OurTeam/>
        <TeamPhotos teamMembers={teamMembers}/> */}
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