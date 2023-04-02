import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import React, { useState } from "react";
import { Box, Modal } from "@mui/material";

export interface ImagesPortfolioProps{
  width?: string,
  height?: string,
}

export interface openPhotoProps{
  srcPath: string,
}

// const openPhoto: React.FC<openPhotoProps> = ({srcPath}) => {

//   return (
//     <div>

//     </div>
//   )
// }

const ImagesPortfolio: React.FC<ImagesPortfolioProps> = ({width='40vw', height='60vh'}) => {

  // const [showModal, setShowModal] = useState<boolean>(false);
  // const handleClose = () => setShowModal(false);
  // const [currentPhoto, setCurrentPhoto] = useState<string>('1.jpg');
  // function handleShow(srcPath: string){
  //   setCurrentPhoto(srcPath);
  //   setShowModal(true);
  // }
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
              // onClick={() => handleShow(item.img)}
              
            />
          </ImageListItem>
        ))}
        </ImageList>
        {/* <Modal
          open={showModal}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          style={{width: '90vw', height: '80vh'}}
        >
           <Box className='modal-box-images'>
              <img src={`./images/r4f_academy/${currentPhoto}`} alt={`${currentPhoto} - modal`} style={{width: '75vw', height: '75vh'}}/>
            </Box>
        </Modal> */}
        {/* <Modal show={showModal} onHide={handleClose} className='portfolio-styl'>
          <Modal.Title>This is modal!</Modal.Title>
          <Modal.Body>
            <img src={`./images/r4f_academy/${currentPhoto}`}/>
          </Modal.Body>
        </Modal> */}
      </div>
  );
};

export default ImagesPortfolio;

export const itemData = [
  {
    img: '7_mod.PNG',
    title: 'photo-r4f-academy1',
    rows: 2,
    cols: 2,
  },
  {
    img: "1.jpg",
    title: 'photo-r4f-academy2',
  },
  {
    img: "2.jpg",
    title: 'photo-r4f-academy3',
  },
  {
    img: "3.jpg",
    title: 'photo-r4f-academy4',
    cols: 2,
  },
  {
    img: "4.jpg",
    title: 'photo-r4f-academy5',
    cols: 2,
  },
  {
    img: "5.jpg",
    title: 'photo-r4f-academy6',
    rows: 2,
    cols: 2,
  },
  {
    img: "6_mod.JPG",
    title: 'photo-r4f-academy7',
  },
  {
    img: "8.jpg",
    title: 'photo-r4f-academy8',
  },
  {
    img: "9.jpg",
    title: 'photo-r4f-academy9',
    rows: 2,
    cols: 2,
  },
  {
    img: "10.jpg",
    title: 'photo-r4f-academy10',
  },
  {
    img: "11.jpg",
    title: 'photo-r4f-academy11',
  },
  {
    img: "12.jpg",
    title: 'photo-r4f-academy12',
    cols: 2,
  },
  {
    img: "17.jpg",
    title: 'photo-r4f-academy13',
    cols: 2,
  },
  {
    img: "14.jpg",
    title: 'photo-r4f-academy14',
    cols: 1,
  },
  {
    img: "15.jpg",
    title: 'photo-r4f-academy15',
    cols: 1,
  },
  {
    img: "16.jpg",
    title: 'photo-r4f-academy16',
    cols: 2,
    rows: 2
  },
  {
    img: "18.jpg",
    title: 'photo-r4f-academy17',
    cols: 1,
    rows: 2
  },
  {
    img: "19.jpg",
    title: 'photo-r4f-academy18',
    cols: 1,
    rows: 1
  },
  {
    img: "20.jpg",
    title: 'photo-r4f-academy19',
    cols: 1,
    rows: 1
  },
];
