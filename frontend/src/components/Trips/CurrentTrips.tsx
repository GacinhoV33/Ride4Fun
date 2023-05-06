import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Trips.scss'

const CurrentTrips: React.FC = () => {
  return <div>
    Nadchodzące wyjazdy:
    <div className="current-cards">
        {CurrentTripsContent.map((item, index) => (
         <TripCard {...item}/>
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
}

const TripCard: React.FC<TripCardProps> = ({imgPath, title, content, month, day, year}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="test_trip_img.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
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
    month: 5,
    day: 10,
    year: 2023,
},
{
    imgPath: "test_trip_img.jpg",
    title: "Zakopane",
    content: "This is content. There should be a quick description of trip",
    month: 5,
    day: 10,
    year: 2023,
},
]