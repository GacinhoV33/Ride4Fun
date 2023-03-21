import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import React from "react";

const ImagesPortfolio: React.FC = ({}) => {


  return (
      <div className='fifth-content'>
        <ImageList
          sx={{ width: '40vw', height: '60vh'}}
          variant="quilted"
          cols={4}
          rowHeight={121}
        >
      {itemData.map((item, index) => (
          <ImageListItem key={item.img + index} cols={item.cols || 1} rows={item.rows || 1}>
            <img
              src={`./images/${item.img}`}
              style={{width: `${item.cols || 1 *  121}`, height: `${item.rows || 1 * 121}`}}
              alt={item.title}
              loading="lazy"
              
            />
          </ImageListItem>
        ))}
        </ImageList>
      
      </div>
  );
};

export default ImagesPortfolio;

export const itemData = [
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
