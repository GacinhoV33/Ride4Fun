import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import React from "react";

export interface ImagesPortfolioProps{
  width?: string,
  height?: string,
}

const ImagesPortfolio: React.FC<ImagesPortfolioProps> = ({width='40vw', height='60vh'}) => {

  return (
      <div className='fifth-content'>
        <ImageList
          // sx={{ width: width, height: height}}
          className='image-portfolio-main'
          variant="quilted"
          cols={4}
          rowHeight={121}
        >
      {itemData.map((item, index) => (
          <ImageListItem key={item.img + index} cols={item.cols || 1} rows={item.rows || 1}>
            <img
              src={`./images/r4f_academy/${item.img}`}
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
    img: '7.png',
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    img: "1.jpg",
    title: 'Burger',
  },
  {
    img: "2.jpg",
    title: 'Camera',
  },
  {
    img: "3.jpg",
    title: 'Coffee',
    cols: 2,
  },
  {
    img: "4.jpg",
    title: 'Hats',
    cols: 2,
  },
  {
    img: "5.jpg",
    title: 'Honey',
    rows: 2,
    cols: 2,
  },
  {
    img: "6.jpg",
    title: 'Basketball',
  },
  {
    img: "8.jpg",
    title: 'Fern',
  },
  {
    img: "9.jpg",
    title: 'Mushrooms',
    rows: 2,
    cols: 2,
  },
  {
    img: "10.jpg",
    title: 'Tomato basil',
  },
  {
    img: "11.jpg",
    title: 'Sea star',
  },
  {
    img: "12.jpg",
    title: 'Bike',
    cols: 2,
  },
  {
    img: "17.jpg",
    title: 'Bike',
    cols: 2,
  },
  {
    img: "14.jpg",
    title: 'Bike',
    cols: 1,
  },
  {
    img: "15.jpg",
    title: 'Bike',
    cols: 1,
  },
  {
    img: "16.jpg",
    title: 'Bike',
    cols: 2,
    rows: 2
  },
  {
    img: "18.jpg",
    title: 'Bike',
    cols: 1,
    rows: 2
  },
  {
    img: "19.jpg",
    title: 'Bike',
    cols: 1,
    rows: 1
  },
  {
    img: "20.jpg",
    title: 'Bike',
    cols: 1,
    rows: 1
  },
];
