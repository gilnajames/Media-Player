import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { addToHistory, deleteVedio } from '../Services/allAPI';



function VedioCard({ displayVedio, setDeleteVedioStatus }) {


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);

    //call function to store details to watch history
    //destructring
    const { caption, embededLink } = displayVedio;
    console.log("vedio details");
    console.log(caption);
    console.log(embededLink);
    const today = new Date();
    const timeStamp = new Intl.DateTimeFormat('en-us', {
      year: 'numeric',
      month: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    }).format(today)
    console.log(timeStamp);
    let vedioDetails = {
      caption: caption,
      embededLink: embededLink,
      timeStamp: timeStamp
    }
    await addToHistory(vedioDetails)


  };
  const removeVedio = async (id) => {
    const response = await deleteVedio(id);
    console.log(response);
    setDeleteVedioStatus(true)
  }
  const dragStarted = (e,id) => {
    console.log(`vedio card with id ${id} started dragging`);
    e.dataTransfer.setData("vedioId",id)
  }


  return (
    <>
      <Card style={{ width: '120%', height: '350px' }}
        className='mt-5 mb-5' draggable onDragStart={(e) => dragStarted(e, displayVedio.id)}>
        <Card.Img height="285px" variant="top" src={displayVedio.url} onClick={handleShow} />
        <Card.Body>
          <div className='d-flex align-item-center justify-content-evenly'> <h6>{displayVedio.caption}</h6>


            <Button variant="danger " className='ms-5' onClick={() => removeVedio(displayVedio.id)}>
              <i class="fa-solid fa-trash"></i>
            </Button>
          </div>
        </Card.Body>
      </Card>





      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe width="100%" height="400" src={displayVedio.embededLink}
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}
export default VedioCard;

