import React from 'react'
import OurTeam from '../common/OurTeam'
import PlaceHolder from '../common/PlaceHolder'
import TeamPhotos from '../common/TeamPhotos'

const SecondSlide: React.FC = () => {
    const teamMembers: TeamMember[] = [{name: 'Bartosz', surname: 'Wajda', title: 'title', imgPath: '../../images/MemberBartek.jpg'}, {name: 'Justyna', surname: 'Wójtowicz', title: 'title', imgPath: 'none'}]
  
    return (
    <React.Fragment>
        <PlaceHolder/>
        <OurTeam/>
        <TeamPhotos teamMembers={teamMembers}/>
    </React.Fragment>
  )
}

export default SecondSlide;

export type TeamMember = {
    name: string,
    surname: string, 
    imgPath: string,
    title: string,
}