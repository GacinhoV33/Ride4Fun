import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import React from "react";
import Carousel from "react-multi-carousel";
import PlaceHolder from "../common/PlaceHolder";
// import {BackgroundSlide1} from '../../images/BackgroundSlide1.jpg';
// import slide from './BackgroundSlide1.jpg';
const ThirdSlide: React.FC = ({}) => {
  const imagesPath = [
    "../../images/BackgroundSlide1.jpg",
    "../../images/BackgroundSlide3.jpg",
    "../../images/testPhoto.jpg",
    "../../images/Logo_biale.png",
    "../../images/BackgroundSlide1.jpg",
    "../../images/BackgroundSlide3.jpg",
    "../../images/testPhoto.jpg",
    "../../images/Logo_biale.png",
    "../../images/BackgroundSlide1.jpg",
    "../../images/BackgroundSlide3.jpg",
    "../../images/testPhoto.jpg",
    "../../images/Logo_biale.png",
  ];
  
  function srcset(image: string, size: number, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }
  console.log(window.location.href)
  const itemData = [
    {
      img: 'BackgroundSlide1.jpg',
      title: 'Breakfast',
      rows: 2,
      cols: 2,
    },
    {
      img: "BackgroundSlide3.jpg",
      title: 'Burger',
    },
    {
      img: "BackgroundSlide1.jpg",
      title: 'Camera',
    },
    {
      img: "BackgroundSlide3.jpg",
      title: 'Coffee',
      cols: 2,
    },
    {
      img: "BackgroundSlide1.jpg",
      title: 'Hats',
      cols: 2,
    },
    {
      img: "BackgroundSlide3.jpg",
      title: 'Honey',
      author: '@arwinneil',
      rows: 2,
      cols: 2,
    },
    {
      img: "MemberBartek.jpg",
      title: 'Basketball',
    },
    {
      img: "BackgroundSlide3.jpg",
      title: 'Fern',
    },
    {
      img: "MemberBartek.jpg",
      title: 'Mushrooms',
      rows: 2,
      cols: 2,
    },
    {
      img: "BackgroundSlide3.jpg",
      title: 'Tomato basil',
    },
    {
      img: "MemberBartek.jpg",
      title: 'Sea star',
    },
    {
      img: "BackgroundSlide3.jpg",
      title: 'Bike',
      cols: 2,
    },
    {
      img: "BackgroundSlide1.jpg",
      title: 'Bike',
      cols: 2,
    },
    {
      img: "BackgroundSlide3.jpg",
      title: 'Bike',
      cols: 1,
    },
    {
      img: "BackgroundSlide1.jpg",
      title: 'Bike',
      cols: 1,
    },
  ];

  return (
    <div className="slide-third">
      <PlaceHolder/>
      <div className='third-content'>
        <ImageList
          sx={{ width: '40vw', height: '60vh'}}
          variant="quilted"
          cols={4}
          rowHeight={121}
        >
      {itemData.map((item, index) => (
          <ImageListItem key={item.img + index} cols={item.cols || 1} rows={item.rows || 1}>
            <img
              src={require(`../../images/${item.img}`)}
              style={{width: `${item.cols || 1 *  121}`, height: `${item.rows || 1 * 121}`}}
              alt={item.title}
              loading="lazy"
              
            />
          </ImageListItem>
        ))}
        </ImageList>
        <div>
          Content 
        </div>
      </div>
      
    </div>
  );
};

export default ThirdSlide;

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
