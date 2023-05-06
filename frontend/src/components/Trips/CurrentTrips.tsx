import React, { useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Trips.scss'

const CurrentTrips: React.FC = () => {
    const [currentTrip, setCurrentTrip] = useState<number>(0);
  return <div>
    Nadchodzące wyjazdy:
    <div className="current-cards">
        {CurrentTripsContent.map((item, index) => (
         <TripCard {...item} key={`card-${index}`} currentTrip={currentTrip} setCurrentTrip={setCurrentTrip}/>
        ))}
    </div>
    
  </div>;
};

export interface TripCardProps{
    imgPath: string,
    title: string,
    content: any,
    month: number,
    day: number,
    year: number,
    hour: string,
    tripId: number,
    currentTrip?: number,
    setCurrentTrip?: React.Dispatch<React.SetStateAction<number>>
}

const TripCard: React.FC<TripCardProps> = ({imgPath, title, content, month, day, year, tripId, currentTrip, setCurrentTrip}) => {
  return (
    <Card sx={{ maxWidth: 345 }} className='tripcard' style={tripId === currentTrip ? {border: '1px solid #B70000'} : undefined} onClick={() => setCurrentTrip ? setCurrentTrip(tripId) : undefined}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={imgPath}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {year}-{month}-{day}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Zapisz się </Button>
        <Button size="small">Informacje </Button>
      </CardActions>
    </Card>
  );
};

export default CurrentTrips;


const CurrentTripsContent: TripCardProps[] = [
{
    imgPath: "test_trip_img.jpg",
    title: "Krynica",
    content: "This is content. There should be a quick description of trip",
    month: 0o5,
    day: 10,
    year: 2023,
    tripId: 0,
    hour: '17:00'
},
{
    imgPath: "test_trip_img.jpg",
    title: "Zakopane",
    content: "This is content. There should be a quick description of trip",
    month: 0o5,
    day: 10,
    year: 2023,
    hour: '17:00',
    tripId: 1,
},
]