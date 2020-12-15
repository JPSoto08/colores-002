import {Button, Modal, Container, Row, Col,} from 'react-bootstrap'
import React, {useState} from 'react'
import BrickModal from './BrickModal'

import normal_lettler_a from './Letras/Completas/Minusculas/a.svg';
import normal_lettler_b from './Letras/Completas/Minusculas/b.svg';
import normal_lettler_c from './Letras/Completas/Minusculas/c.svg';
import normal_lettler_d from './Letras/Completas/Minusculas/d.svg';
import normal_lettler_e from './Letras/Completas/Minusculas/e.svg';
import normal_lettler_f from './Letras/Completas/Minusculas/f.svg';
import normal_lettler_g from './Letras/Completas/Minusculas/g.svg';
import normal_lettler_h from './Letras/Completas/Minusculas/h.svg';
import normal_lettler_i from './Letras/Completas/Minusculas/i.svg';
import normal_lettler_j from './Letras/Completas/Minusculas/j.svg';
import normal_lettler_k from './Letras/Completas/Minusculas/k.svg';
import normal_lettler_l from './Letras/Completas/Minusculas/l.svg';
import normal_lettler_m from './Letras/Completas/Minusculas/m.svg';
import normal_lettler_n from './Letras/Completas/Minusculas/n.svg';
import normal_lettler_o from './Letras/Completas/Minusculas/o.svg';
import normal_lettler_p from './Letras/Completas/Minusculas/p.svg';
import normal_lettler_q from './Letras/Completas/Minusculas/q.svg';
import normal_lettler_r from './Letras/Completas/Minusculas/r.svg';
import normal_lettler_s from './Letras/Completas/Minusculas/s.svg';
import normal_lettler_t from './Letras/Completas/Minusculas/t.svg';
import normal_lettler_u from './Letras/Completas/Minusculas/u.svg';
import normal_lettler_v from './Letras/Completas/Minusculas/v.svg';
import normal_lettler_w from './Letras/Completas/Minusculas/w.svg';
import normal_lettler_x from './Letras/Completas/Minusculas/x.svg';
import normal_lettler_y from './Letras/Completas/Minusculas/y.svg';
import normal_lettler_z from './Letras/Completas/Minusculas/z.svg';

//import { reportLettler } from './Letras.js';

export const textColors = {
    A: '#6d4c41',
    B: '#e53935',
    C: '#d81b60',
    D: '#8e24aa',
    E: '#3949ab',
    F: '#1e88e5',
    G: '#039be5',
    H: '#00acc1',
    I: '#00897b',   
    J: '#43a047',
    K: '#7cb342',
    L: '#120078',
    M: '#9d0191',
    N: '#fd3a69',
    O: '#fecd1a',
    P: '#ffa45b',
    Q: '#fbf6f0',
    R: '#aee6e6',
    S: '#34626c',
    T: '#839b97',
    U: '#cfd3ce',
    V: '#c6b497',
    W: '#30475e',
    X: '#5c6e91',
    Y: '#8f384d',
    Z: '#dd9866'
}


function ModalTemp(props) {    
  
  const [selected, setSelected] = useState(false);
  
  const closeModal = () => {
    {props.onSelected(selected)}
  }

  const changeImage = (lettlerChange,lettlerNameChange,lettlerClick,language) => {
    //alert(lettlerClick);
    //let nameLettler = "#"+lettlerClick;
    if(lettlerChange !== null && lettlerClick !== ""){
      //alert(lettlerChange);
      let lc = document.getElementById(lettlerClick);
      let splitLettler = lettlerClick.split('-');
      lc.src = lettlerChange;
      lc.name = "change_"+language;
      reportLettler(lettlerNameChange,splitLettler[1],language);
      setSelected({...selected})
    }
}

    return (
      
             
        <Modal id="modalLettler" animation={false} show={props.show} onHide={closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Abecedario</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Row className="justify-content-md-center">
                <Col xs lg="3"><BrickModal color={'darkgreen'} onClick={() => changeImage(normal_lettler_a,"normal_lettler_a",props.lettlerClick,props.language)} text={'a'} size="sm" /></Col>
                <Col xs lg="3"><BrickModal color={'lightskyblue'} onClick={() => changeImage(normal_lettler_b,"normal_lettler_b",props.lettlerClick,props.language)} text={'b'} size="sm" /></Col>
                <Col xs lg="3"><BrickModal color={'blue'} onClick={() => changeImage(normal_lettler_c,"normal_lettler_c",props.lettlerClick,props.language)} text={'c'} size="sm" /></Col>
                <Col xs lg="3"><BrickModal color={'red'} onClick={() => changeImage(normal_lettler_d,"normal_lettler_d",props.lettlerClick,props.language)} text={'d'} size="sm" /></Col>
              </Row>
              <Row className="justify-content-md-center">
                <Col xs lg="3"><BrickModal color={'orangered'} onClick={() => changeImage(normal_lettler_e,"normal_lettler_e",props.lettlerClick,props.language)} text={'e'} size="sm" /></Col>
                <Col xs lg="3"><BrickModal color={'yellow'} onClick={() => changeImage(normal_lettler_f,"normal_lettler_f",props.lettlerClick,props.language)} text={'f'} size="sm" /></Col>
                <Col xs lg="3"><BrickModal color={'darkgreen'} onClick={() => changeImage(normal_lettler_g,"normal_lettler_g",props.lettlerClick,props.language)} text={'g'} size="sm" /></Col>
                <Col xs lg="3"><BrickModal color={'lightskyblue'} onClick={() => changeImage(normal_lettler_h,"normal_lettler_h",props.lettlerClick,props.language)} text={'h'} size="sm" /></Col>
              </Row>
              <Row className="justify-content-md-center">
                <Col xs lg="3"><BrickModal color={'blue'} onClick={() => changeImage(normal_lettler_i,"normal_lettler_i",props.lettlerClick,props.language)} text={'i'} size="sm" /></Col>
                <Col xs lg="3"><BrickModal color={'red'} onClick={() => changeImage(normal_lettler_j,"normal_lettler_j",props.lettlerClick,props.language)} text={'j'} size="sm" /></Col>
                <Col xs lg="3"><BrickModal color={'orangered'} onClick={() => changeImage(normal_lettler_k,"normal_lettler_k",props.lettlerClick,props.language)} text={'k'} size="sm" /></Col>
                <Col xs lg="3"><BrickModal color={'yellow'} onClick={() => changeImage(normal_lettler_l,"normal_lettler_l",props.lettlerClick,props.language)} text={'l'} size="sm" /></Col>
              </Row>
              <Row className="justify-content-md-center">
                <Col xs lg="3"><BrickModal color={'darkgreen'} onClick={() => changeImage(normal_lettler_m,"normal_lettler_m",props.lettlerClick,props.language)} text={'m'} size="sm" /></Col>
                <Col xs lg="3"><BrickModal color={'lightskyblue'} onClick={() => changeImage(normal_lettler_n,"normal_lettler_n",props.lettlerClick,props.language)} text={'n'} size="sm" /></Col>
                <Col xs lg="3"><BrickModal color={'blue'} onClick={() => changeImage(normal_lettler_o,"normal_lettler_o",props.lettlerClick,props.language)} text={'o'} size="sm" /></Col>
                <Col xs lg="3"><BrickModal color={'red'} onClick={() => changeImage(normal_lettler_p,"normal_lettler_p",props.lettlerClick,props.language)} text={'p'} size="sm" /></Col>
              </Row>
              <Row className="justify-content-md-center">
                <Col xs lg="3"><BrickModal color={'orangered'} onClick={() => changeImage(normal_lettler_q,"normal_lettler_q",props.lettlerClick,props.language)} text={'q'} size="sm" /></Col>
                <Col xs lg="3"><BrickModal color={'yellow'} onClick={() => changeImage(normal_lettler_r,"normal_lettler_r",props.lettlerClick,props.language)} text={'r'} size="sm" /></Col>
                <Col xs lg="3"><BrickModal color={'darkgreen'} onClick={() => changeImage(normal_lettler_s,"normal_lettler_s",props.lettlerClick,props.language)} text={'s'} size="sm" /></Col>
                <Col xs lg="3"><BrickModal color={'lightskyblue'} onClick={() => changeImage(normal_lettler_t,"normal_lettler_t",props.lettlerClick,props.language)} text={'t'} size="sm" /></Col>
              </Row>
              <Row className="justify-content-md-center">
                <Col xs lg="3"><BrickModal color={'blue'} onClick={() => changeImage(normal_lettler_u,"normal_lettler_u",props.lettlerClick,props.language)} text={'u'} size="sm" /></Col>
                <Col xs lg="3"><BrickModal color={'red'} onClick={() => changeImage(normal_lettler_v,"normal_lettler_v",props.lettlerClick,props.language)} text={'v'} size="sm" /></Col>
                <Col xs lg="3"><BrickModal color={'orangered'} onClick={() => changeImage(normal_lettler_w,"normal_lettler_w",props.lettlerClick,props.language)} text={'w'} size="sm" /></Col>
                <Col xs lg="3"><BrickModal color={'yellow'} onClick={() => changeImage(normal_lettler_x,"normal_lettler_x",props.lettlerClick,props.language)} text={'x'} size="sm" /></Col>
              </Row>
              <Row className="justify-content-md-center">
                <Col xs lg="3"><BrickModal color={'darkgreen'} onClick={() => changeImage(normal_lettler_y,"normal_lettler_y",props.lettlerClick,props.language)} text={'y'} size="sm" /></Col>
                <Col xs lg="3"><BrickModal color={'lightskyblue'} onClick={() => changeImage(normal_lettler_z,"normal_lettler_z",props.lettlerClick,props.language)} text={'z'} size="sm" /></Col>
                </Row>
            </Container>

          </Modal.Body>
          <Modal.Footer>            
            <Button variant="primary" onClick={closeModal}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      
    );
  }

  export default ModalTemp