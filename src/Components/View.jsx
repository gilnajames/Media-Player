import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import VedioCard from './VedioCard';
import { getAllVedios } from '../Services/allAPI';



function View({ uploadVedioStatus ,}) {
  const [allVedio, setAllVedio] = useState([])
  const [deleteVedioStatus, setDeleteVedioStatus]=useState(false)

  const getAllVedioFromDB = async () => {
    const response = await getAllVedios();
    const { data } = response;
    console.log(response);
    setAllVedio(data);
  }
  useEffect(() => {
    getAllVedioFromDB();
}, [uploadVedioStatus,deleteVedioStatus])
  return (
    <>
      <Row>{
        allVedio.length > 0 ?
          allVedio.map((vedio) => (
            <Col sm={12} md={6} lg={4} xl={3}>
              <VedioCard displayVedio={vedio}  setDeleteVedioStatus={setDeleteVedioStatus}/>
            </Col>
          ))
          :
          <p>Nothing to Display</p>
      }

      </Row>
    </>
  )
}

export default View;