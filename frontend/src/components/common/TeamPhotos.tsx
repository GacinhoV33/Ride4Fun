import React from 'react';
import { TeamMember } from '../slides/SecondSlide';
import Member from './Member';
import './common.scss';
export interface TeamPhotoProps{
    teamMembers: TeamMember[]
}

const TeamPhotos: React.FC<TeamPhotoProps> = ({teamMembers}) => {
  return (
    <div className='team-photos-main'>
      <div className='team-photos'>
            {teamMembers.map(({name, surname, imgPath, title, description}) => (
                <Member name={name} surname={surname} imgPath={require('../../images/MemberBartek.jpg')} title={title} description={description}/>
            ))}
        </div>
    </div>
    
  )
}

export default TeamPhotos