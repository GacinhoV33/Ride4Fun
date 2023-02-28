import React, { useState } from 'react'
import { TeamMember } from '../slides/SecondSlide'

const Member: React.FC<TeamMember> = ({name, surname, imgPath, title}) => {
  const [isPhotoBlurred, setPhotoBlurred] = useState<Boolean>(false);
  return (
    <div style={{position: 'relative', height: '100%', width: '100%'}}>
      <div style={{height: '100%', width: '100%', borderRadius: '25%', backgroundImage:`url(${imgPath})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover',
          ...{...isPhotoBlurred ? {filter: 'blur(4px)', WebkitFilter: 'blur(4px)', } : undefined} 
          
          }}
          onMouseEnter={() => setPhotoBlurred(true)}
          onMouseLeave={() => setPhotoBlurred(false)}
          >
          
      </div>
      {isPhotoBlurred ? 
        <div className='text-member'
        onMouseEnter={() => setPhotoBlurred(true)} onMouseLeave={() => setPhotoBlurred(false)}
        > 
          <h1 style={{zIndex: '2', color: 'rgba(255, 255, 255, 1)', fontSize: '6vh', textAlign: 'center'}}> {name} {surname} </h1>
        </div> 
        : 
        null}
      
    </div>
    
  )
}

export default Member

// filter: 'blur(4px)', WebkitFilter: 'blur(4px)', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }  