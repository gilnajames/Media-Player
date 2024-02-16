import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { uploadAllVedio } from '../Services/allAPI';
import {ToastContainer,toast}from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Add({setUploadVedioStatus}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [vedio, setVedio] = useState({
        id: "",
        caption: "",
        url: "",
        embededLink: ""

    });
    const embededVedioLink = (e) => {
        const { value } = e.target;
        const link = `https://www.youtube.com/embed/${value.slice(-11)}`
        console.log("link for embeded vedio");
        console.log(link);
        setVedio({ ...vedio, embededLink: link })
    }
    const handleUpload = async () => {
        const { id, caption, url, embededLink } = vedio;
        if (!id || !caption || !url || !embededLink) {
            toast.warning("please fill the form completely")
        }
        else {
            const response = await uploadAllVedio(vedio);
            console.log(response);
            if (response.status === 201) {
                toast.success(`${response.data.caption} is sucessfully uploaded`)
                setUploadVedioStatus(response.data)
                handleClose();
            }
            else{
                toast.error("something went wrong")
            }

        }
    }

    return (


        <>
            <div className='d-flex align-item-center '>
                <h5>Uplod New Vedio</h5>
                <i class="fa-solid fa-cloud-arrow-up ms-3 mt-2 " style={{ color: "white" }} onClick={handleShow}></i>
            </div>


            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title style={{ fontSize: "23px" }}>
                        < i class="fa-solid fa-film text-warning me-3 "></i>
                        Upload Vedio</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Please Fill The Folowing Details</p>
                    <Form className='border border-secondary p-3'>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Enter Vedio Id" onChange={(e) => setVedio({ ...vedio, id: e.target.value })} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Enter Vedio Caption" onChange={(e) => setVedio({ ...vedio, caption: e.target.value })} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Enter Vedio Image Url" onChange={(e) => setVedio({ ...vedio, url: e.target.value })} />
                        </Form.Group>



                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Enter Youtube Vedio Link" onChange={(e) =>  embededVedioLink(e)} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" className='btn btn-warning' onClick={handleUpload}>Upload</Button>
                </Modal.Footer>
            </Modal>
            <ToastContainer position='top-center' theme='colored' autoclosed={2000}></ToastContainer>
        </>
    )
}
export default Add;
