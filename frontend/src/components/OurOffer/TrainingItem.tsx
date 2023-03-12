import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@mui/material';
import React from 'react';


//<FontAwesomeIcon icon="fa-sharp fa-regular fa-person-biking-mountain" />
export type TrainingItemProps = {
    title: string,
    description: string, 
    icon: IconDefinition, 
    color: string,
    srcPath: string,
}

const TrainingItem: React.FC<TrainingItemProps> = ({title, description, icon, color, srcPath}) => {
  return (
    <div style={{height: '75vh', width: '20vw', border: '1px solid black', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <div>
            <img style={{width: '20vw', height: '35vh'}} src={require(`./${srcPath}`)}>
            </img>
        </div>

        <div style={{color: color}}>
            <h2>{title}</h2>
        </div>

        <div style={{padding: '10px 0'}}>
            <FontAwesomeIcon icon={icon} style={{margin: '0 10px', height: '4vh'}}/>
        </div>

        <div style={{padding: '10px', textAlign: 'center'}}>
            {description}
        </div>

        <div>
            <Button variant="contained" style={{background: color, color: 'white', padding: '10px'}}>
                Contained
            </Button>

        </div>
    </div>
  )
}

export default TrainingItem