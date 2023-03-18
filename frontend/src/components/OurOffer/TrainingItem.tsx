import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@mui/material';
import React from 'react';


//<FontAwesomeIcon icon="fa-sharp fa-regular fa-person-biking-mountain" />
export type TrainingItemProps = {
    textTitle: JSX.Element,
    description: string, 
    icon: IconDefinition, 
    color: string,
    srcPath: string,
}

const TrainingItem: React.FC<TrainingItemProps> = ({textTitle, description, icon, color, srcPath}) => {
  return (
    <div style={{height: '80vh', width: '20vw', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <div>
            <img style={{width: '20vw', height: '35vh', paddingBottom: '0px'}} src={require(`./${srcPath}`)}>
            </img>
        </div>

        <div style={{color: color, height: '20vh'}}>
                {textTitle}
        </div>

        <div style={{padding: '5px 0'}}>
            <FontAwesomeIcon icon={icon} style={{margin: '0 10px', height: '4vh'}}/>
        </div>

        <div style={{padding: '5px 10px', textAlign: 'center'}}>
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