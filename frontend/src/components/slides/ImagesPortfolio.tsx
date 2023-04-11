import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import React, { useRef, useState } from "react";
import { Modal, useMediaQuery } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
export interface ImagesPortfolioProps{
  width?: string,
  height?: string,
  topScroll?: number,
}

export interface openPhotoProps{
  srcPath: string,
}


const ImagesPortfolio: React.FC<ImagesPortfolioProps> = ({width='40vw', height='60vh', topScroll=400}) => {
  const isNonMobile = useMediaQuery("(min-width: 700px");

  const [showModal, setShowModal] = useState<boolean>(false);
  const handleClose = () => {

    setShowModal(false)

  };
  const [currentPhoto, setCurrentPhoto] = useState<any>(itemData[0]);
  function handleShow(item: any){
    setCurrentPhoto(item);    
    window.scrollTo({
      top: 350,
      behavior: 'smooth',
    })
    setTimeout(() => setShowModal(true), 500);
  }


  return (
      <div className='fifth-content'>
        <ImageList
          className='image-portfolio-main'
          variant="quilted"
          cols={4}
          rowHeight={121}
        >
      {itemData.map((item, index) => (
          <ImageListItem key={item.img + index} cols={item.cols || 1} rows={item.rows || 1}>
            <img
              className='img-list-portfolio'
              src={`./images/r4f_academy/${item.img}`}
              style={{width: `${item.cols || 1 *  121}`, height: `${item.rows || 1 * 121}`, objectFit: 'cover', cursor: 'pointer'}}
              alt={item.title}
              loading="lazy"          
              onClick={isNonMobile ? () => handleShow(item) : undefined}
            />
          </ImageListItem>
        ))}
        </ImageList>
        <Modal
          open={showModal}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          disableEnforceFocus 
          style={{width: '100vh', position: 'absolute', top: currentPhoto.orient === 'horizontal' ? `60vh` : '50vh', left: currentPhoto.orient === 'horizontal' ? 'calc((100vw - 100vh)/2)' : '35vw'}}
        > 
        { currentPhoto.orient === 'horizontal' ? 
              <img src={`./images/r4f_academy/${currentPhoto.img}`} alt={`${currentPhoto.img} - modal`} style={{width: '100vh'}}/> : 
              <img src={`./images/r4f_academy/${currentPhoto.img}`} alt={`${currentPhoto.img} - modal`} style={{ width: '30vw'}}/>
              }
              
        </Modal> 
        
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
    orient: 'vertical'
  },
  {
    img: "1.jpg",
    title: 'photo-r4f-academy2',
    orient: 'horizontal'
  },
  {
    img: "2.jpg",
    title: 'photo-r4f-academy3',
    orient: 'horizontal'
  },
  {
    img: "3.jpg",
    title: 'photo-r4f-academy4',
    cols: 2,
    orient: 'horizontal'
  },
  {
    img: "4.jpg",
    title: 'photo-r4f-academy5',
    cols: 2,
    orient: 'horizontal'
  },
  {
    img: "5.jpg",
    title: 'photo-r4f-academy6',
    rows: 2,
    cols: 2,
    orient: 'vertical'
  },
  {
    img: "6_mod.JPG",
    title: 'photo-r4f-academy7',
    orient: 'vertical'
  },
  {
    img: "8.jpg",
    title: 'photo-r4f-academy8',
    orient: 'vertical'
  },
  {
    img: "9.jpg",
    title: 'photo-r4f-academy9',
    rows: 2,
    cols: 2,
    orient: 'vertical'
  },
  {
    img: "10.jpg",
    title: 'photo-r4f-academy10',
    orient: 'horizontal'
  },
  {
    img: "11.jpg",
    title: 'photo-r4f-academy11',
    orient: 'horizontal'
  },
  {
    img: "12.jpg",
    title: 'photo-r4f-academy12',
    cols: 2,
    orient: 'horizontal'
  },
  {
    img: "17.jpg",
    title: 'photo-r4f-academy13',
    cols: 2,
    orient: 'horizontal'
  },
  {
    img: "14.jpg",
    title: 'photo-r4f-academy14',
    cols: 1,
    orient: 'horizontal'
  },
  {
    img: "15.jpg",
    title: 'photo-r4f-academy15',
    cols: 1,
    orient: 'horizontal'
  },
  {
    img: "16.jpg",
    title: 'photo-r4f-academy16',
    cols: 2,
    rows: 2,
    orient: 'horizontal'

  },
  {
    img: "18.jpg",
    title: 'photo-r4f-academy17',
    cols: 1,
    rows: 2,
    orient: 'vertical'
  },
  {
    img: "19.jpg",
    title: 'photo-r4f-academy18',
    cols: 1,
    rows: 1,
    orient: 'vertical'

  },
  {
    img: "20.jpg",
    title: 'photo-r4f-academy19',
    cols: 1,
    rows: 1,
    orient: 'horizontal'
  },
];
