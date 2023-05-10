import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';
import { Typography, TypographyTypeMap } from '@mui/material';
import { isMobile } from 'react-device-detect';


export const TimeLine1 = () => {

  return (
    <Timeline
    style={{width: '40vw'}}
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.2,
        },
      }}
    >
      <TimelineItem >
        <TimelineOppositeContent color="textSecondary">
          7:30 
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Zbiórka na parkingu koło sklepu Action przy ul. Dąbrowskiego w Tarnowie</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="textSecondary">
          
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Przejazd do Krynicy Zdroju</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="textSecondary">
          10:00
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />

        </TimelineSeparator>
        <TimelineContent >Start szkolenia rowerowego Enduro Downhill </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="textSecondary">
          
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />

        </TimelineSeparator>
        <TimelineContent >5h szkolenia z przerwą na posiłek w Restauracji „Widokowa”  </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="textSecondary">
            16:00
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />

        </TimelineSeparator>
        <TimelineContent > Powrót do Tarnowa  </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="textSecondary">
            17:30
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent > Przyjazd na miejsce zbiórki  </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
  

export const TripContentData: TripContentProps[] = [
  {
    title: "BIKE PARK SŁOTWINY ARENA 13.05.2023",
    imgMain: "./images/content/content1.jpg",
    imgMaps: "./images/content/maps1.jpg",
    contentHeader: (
      <span>
        Zapraszamy na pierwszy klubowy wyjazd na jednodniowe szkolenie rowerowe
        z RIDE4FUN! <br /> Naszą pierwszą odwiedzoną miejscówką będzie Bike Park
        Słotwiny Arena w Krynicy Zdroju.
      </span>
    ),
    bikeParkDescribtion: (
      <span style={isMobile ? {width: '85vw'} : undefined}>
        {" "}
        Bikepark Słotwiny Arena posiada różnorodne, dobrze utrzymane trasy o
        łącznej długości 10 km, które zostały zaprojektowane z myślą o
        bezpieczeństwie i dobrej zabawie rowerzystów. Na szkoleniu skupimy się
        na poznaniu tras w Bike Parku, bezpiecznym i skutecznym pokonywaniu
        nowych przeszkód, doskonaleniu umiejętności zdobytych podczas treningów
        w Tarnowie, a przede wszystkim na dobrze spędzonym dniu na rowerze z
        kumplami!
      </span>
    ),
    roadsDescribtion: (
      <div style={{fontSize: '20px'}}>
        Na terenie parku znajdują się cztery trasy, w tym jedna czerwona, dwie
        niebieskie i jedna zielona. Wszystkie trasy są zbudowane z dala od
        pieszych szlaków, co zapewnia dodatkowe bezpieczeństwo, a dodatkowo
        posiadają odpowiednie nachylenie, miejsca do wytracania prędkości oraz
        bandy ułatwiające pokonywanie zakrętów. Park jest odpowiedni zarówno dla
        początkujących jak i doświadczonych rowerzystów.{" "}
      </div>
    ),
    timeLine: <TimeLine1/>,
    city: 'Krynica',
    date: '13.05.2023',
    additionalInfo: <Typography style={{ marginBottom: "15px" }}>
    {" "}
    *Ilość miejsc ograniczona <br/>
    **W przypadku złej pogody możliwość przeniesienia wyjazdu na Niedzielę 14.05.
  </Typography>
  },
  // {
  //   title: "BIKE PARK SŁOTWINY ARENA 13.05.2024",
  //   imgMain: "test_img.jpg",
  //   imgMaps: "./images/content/test_img.jpg",
  // },
];

export interface TripContentProps {
  title: string;
  imgMain: string;
  imgMaps: string;
  city: string;
  date: string;
  contentHeader?: any;
  bikeParkDescribtion?: any;
  roadsDescribtion?: any;
  requirments?: any;
  timeLine?: any;
  additionalInfo?: any
}


