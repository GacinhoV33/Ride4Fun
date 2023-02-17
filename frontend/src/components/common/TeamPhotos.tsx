import React from 'react'
import { TeamMember } from '../slides/SecondSlide'
import Member from './Member'

export interface TeamPhotoProps{
    teamMembers: TeamMember[]
}

const TeamPhotos: React.FC<TeamPhotoProps> = ({teamMembers}) => {
  return (
    <div className='team-photos'>
        {teamMembers.map(({name, surname, imgPath, title}) => (
            <Member name={name} surname={surname} imgPath={imgPath} title={title}/>
        ))}
    </div>
  )
}

export default TeamPhotos