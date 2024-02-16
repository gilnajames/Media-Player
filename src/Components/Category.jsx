import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { addCategory, deleteCategory, getAllCategory, getVedioDetails } from '../Services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Category() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [allCategory, setAllCategory] = useState([])
  const [isDelete, setIsDelete] = useState()
  const [category, setCategory] = useState({
    id: "",
    categoryName: ""
  })

  const getCategoryFromDB = async () => {
    const response = await getAllCategory();
    const { data } = response;
    setAllCategory(data)

  }

  useEffect(() => {
    getCategoryFromDB();
  }, [isDelete])


  const uploadCategory = async () => {


    const { id, categoryName } = category;
    if (!id || !categoryName) {

      toast.warning("please fill the form completely")
    }
    else {
      const response = await addCategory(category);
      console.log(response);
      if (response.status === 201) {
        toast.success(`${response.data.categoryName} is sucessfully uploaded`);

        handleClose();
        getCategoryFromDB();
      }
      else {
        toast.error("something went wrong")
      }

    }
  }
  const deleteCategoryItem = async (id) => {
    const response = await deleteCategory(id);
    setIsDelete(response)
  }
  const drageOver = (e) => {

    // to prevent page refresh by default on Drageover will do page refresh
    e.preventDefault();
    console.log("drage over");
  }
  const vedioDrop =  async(e, id) => {
    console.log(`vedio card need to be placed in card with id ${id} `);
    const vedioid =e.dataTransfer.getData('VedioId');
    console.log(`vedio with id ${vedioid}need to be placed in category with id ${id} `);
    const response=await getVedioDetails(vedioid);
    const{data}=response;
    console.log("vedio details");
    console.log(data);

  
  }


  return (
    <>

      <div >
        <button className='btn btn-warning ' onClick={handleShow}>Add New  Category</button>
      </div>
      {
        allCategory.length > 0 ?
          allCategory.map((item) => (


            <div className='d-grid' style={{ width: "275px" }} droppable onDragOver={(e) => drageOver(e)}

              onDrop={(e) => vedioDrop(e, item.id)}
            >
              <div className=' mt-3 border border-secondary rounded p-3'>
                <div className='d-flex justify-content-between align-items-center'>
                  <h6>{item.categoryName}</h6>
                  <button className='btn btn-danger'><i class="fa-solid fa-trash" onClick={() => deleteCategoryItem(item.id)}></i></button>
                </div>
              </div>

            </div>
          ))
          :
          <p>Nothing to display</p>
      }







      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title><i class="fa-solid fa-pencil text-warning me-3"></i>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please Fill The Folowing Details</p>
          <Form className='border border-secondary p-3'>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter  Category Id" onChange={(e) => setCategory({ ...category, id: e.target.value })} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter Category Name Caption" onChange={(e) => setCategory({ ...category, categoryName: e.target.value })} />
            </Form.Group>


          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={uploadCategory}>Add</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme='colored' autoclosed={2000}></ToastContainer>



    </>
  )
}
export default Category;