import React, {useState} from 'react';
//import {Button} from 'reactstrap';
import {Pagination, Button, Modal, Container, Row, Col} from 'react-bootstrap'
import Brick from './Brick'
import LettlerContent from './LettlerContent'
//import BrickModal from './BrickModal'
import './Letras.css';
//import ModalTemp from './Modal';
import BrickModal from './BrickModal'

//SE IMPORTAN LAS LETRAS INICIALES DE PUNTOS
import lettler_a from './Letras/Puntos/Minusculas/a.svg';
import lettler_b from './Letras/Puntos/Minusculas/b.svg';
import lettler_c from './Letras/Puntos/Minusculas/c.svg';
import lettler_d from './Letras/Puntos/Minusculas/d.svg';
import lettler_e from './Letras/Puntos/Minusculas/e.svg';
import lettler_f from './Letras/Puntos/Minusculas/f.svg';
import lettler_g from './Letras/Puntos/Minusculas/g.svg';
import lettler_h from './Letras/Puntos/Minusculas/h.svg';
import lettler_i from './Letras/Puntos/Minusculas/i.svg';
import lettler_j from './Letras/Puntos/Minusculas/j.svg';
import lettler_k from './Letras/Puntos/Minusculas/k.svg';
import lettler_l from './Letras/Puntos/Minusculas/l.svg';
import lettler_m from './Letras/Puntos/Minusculas/m.svg';
import lettler_n from './Letras/Puntos/Minusculas/n.svg';
import lettler_o from './Letras/Puntos/Minusculas/o.svg';
import lettler_p from './Letras/Puntos/Minusculas/p.svg';
import lettler_q from './Letras/Puntos/Minusculas/q.svg';
import lettler_r from './Letras/Puntos/Minusculas/r.svg';
import lettler_s from './Letras/Puntos/Minusculas/s.svg';
import lettler_t from './Letras/Puntos/Minusculas/t.svg';
import lettler_u from './Letras/Puntos/Minusculas/u.svg';
import lettler_v from './Letras/Puntos/Minusculas/v_1.svg';
import lettler_w from './Letras/Puntos/Minusculas/w.svg';
import lettler_x from './Letras/Puntos/Minusculas/x.svg';
import lettler_y from './Letras/Puntos/Minusculas/y.svg';
import lettler_z from './Letras/Puntos/Minusculas/z.svg';
import white from './Letras/Puntos/Minusculas/white.svg';


/*export const reportLettler = (lettlerChange, index, language) => {
    checkLettler(lettlerChange, index, language);
}*/

//SE IMPORTAN LAS LETRAS NORMALES QUE REMPLAZAN LAS DE PUNTOS
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

let english = null; let eng_change;
let spanish = null; let spa_change;
let scoreSpanish = []; let scoreEnglish = [];
let html1 = ""; let html2 = "";
let displayContent = null;
let spaLength = 0; let engLength = 0;
let goodSp = 0; let lbadSp = 0;
let goodEng = 0; let lbadEng = 0;
let inicialCount = 0;
let englishObj = [];
    let spanishObj = [];


/*
NECESITO QUE CUANDO TODAS LAS LETRAS ESTEN CAMBIADAS CAMBIE LA PAGINACION
Y QUE DESPUES DE LA ULTIMA PAGINA LLEME EL SCORE PERO EL PROBLEMA ES QUE LAS LETRAS NO REFRESCAN LOS ATRIBUTOS SE QUEDAN CON LAS
DEL COLOR ANTERIOR (LETTLERCONTENT.JS)
*/
function Letras(props) {
  
  //SE DECLARAN LOS USESTATE
  const [showModal, setShowModal] = useState(false);//PARA ACTIVAR O CERRAR EL MODAL
  const [countTrue, setCountTrue] = useState(true);//PARA VALIDAR EL PRIMER LLAMADO DE LOS COLORES
  const [countTrueObj, setCountTrueObj] = useState(true);//PARA VALIDAR EL PRIMER LLAMADO DE LOS COLORES
  const [countBlock, setCountBlock] = useState(0);//LLEVA LA CUENTA DE LOS COLORES
  const [clickLettler, setClickLettler] = useState("");//SETEA LA LETRA ACTIVADA
  const [clickLanguage, setClickLanguage] = useState("");//SETEA EL IDIOMA QUE SE CLICKEA
    
  const [selected, setSelected] = useState(false);
  const [pages, setPages] = useState({
      max: 6,
      selected: 1
  })
  //const [spa_change, setSpaChange] = useState([]);
  //const [eng_change, setEngChange] = useState([]); 

  const [nextBtn, setBtnNext] = useState("btnActive");
  const [scoreBtn, setBtnScore] = useState("btnInactive");
  const [brickColor, setColorBrick] = useState("#00861c");
  const [colorBrick] = useState(["#51a5db","#0055bf","#e3000b","#ff8500","#ffed00"]);
  const [colors] = useState(["verde","celeste","azul","rojo","naranja","amarillo"]);

  const [colorState, setColorState] = useState({
    'color-1': {},
    'color-2': {},
    'color-3': {},
    'color-4': {},
    'color-5': {},
    'color-6': {}
})

  //FUNCION PARA ABRIR EL MODAL
  const showModalClick = () => {
    setShowModal(true);
  }
  //FUNCION PARA CERRAR EL MODAL  
  const onSelect = () => {
    setShowModal(false)
  }

  //SE CREA UN OBJETO CON LOS DATOS DE LAS LETRAS DEL ABECEDARIO
  const lettler = [
      {// 0
        id: "lettler_a",
        correcta: "normal_lettler_a",
        change: "",
        nombre: "orange",
        ruta: lettler_a,
        alt: "a"
      },
      {// 1
        id: "lettler_b",
        correcta: "normal_lettler_b",
        change: "",
        nombre: "orange",
        ruta: lettler_b,
        alt: "b"
      },
      {//  2
        id: "lettler_c",
        correcta: "normal_lettler_c",
        change: "",
        nombre: "orange",
        ruta: lettler_c,
        alt: "c"
      },
      {// 3
        id: "lettler_d",
        correcta: "normal_lettler_d",
        change: "",
        nombre: "orange",
        ruta: lettler_d,
        alt: "d"
      },
      {// 4
        id: "lettler_e",
        correcta: "normal_lettler_e",
        change: "",
        nombre: "green",
        ruta: lettler_e,
        alt: "e"
      },
      {// 5
        id: "lettler_f",
        correcta: "normal_lettler_f",
        change: "",
        nombre: "green",
        ruta: lettler_f,
        alt: "f"
      },
      {// 6
        id: "lettler_g",
        correcta: "normal_lettler_g",
        change: "",
        nombre: "green",
        ruta: lettler_g,
        alt: "g"
      },
      {// 7
        id: "lettler_h",
        correcta: "normal_lettler_h",
        change: "",
        nombre: "green",
        ruta: lettler_h,
        alt: "h"
      },
      {// 8
        id: "lettler_i",
        correcta: "normal_lettler_i",
        change: "",
        nombre: "#0055bf",
        ruta: lettler_i,
        alt: "i"
      },
      {// 9
        id: "lettler_j",
        correcta: "normal_lettler_j",
        change: "",
        nombre: "#0055bf",
        ruta: lettler_j,
        alt: "j"
      },
      {// 10
        id: "lettler_k",
        correcta: "normal_lettler_k",
        change: "",
        nombre: "#0055bf",
        ruta: lettler_k,
        alt: "k"
      },
      {// 11
        id: "lettler_l",
        correcta: "normal_lettler_l",
        change: "",
        nombre: "#0055bf",
        ruta: lettler_l,
        alt: "l"
      },
      {// 12
        id: "lettler_m",
        correcta: "normal_lettler_m",
        change: "",
        nombre: "ligth-#0055bf",
        ruta: lettler_m,
        alt: "m"
      },
      {// 13
        id: "lettler_n",
        correcta: "normal_lettler_n",
        change: "",
        nombre: "ligth-#0055bf",
        ruta: lettler_n,
        alt: "n"
      },
      {// 14
        id: "lettler_o",
        correcta: "normal_lettler_o",
        change: "",
        nombre: "ligth-#0055bf",
        ruta: lettler_o,
        alt: "o"
      },
      {// 15
        id: "lettler_p",
        correcta: "normal_lettler_p",
        change: "",
        nombre: "ligth-#0055bf",
        ruta: lettler_p,
        alt: "p"
      },
      {// 16
        id: "lettler_q",
        correcta: "normal_lettler_q",
        change: "",
        nombre: "#ffed00",
        ruta: lettler_q,
        alt: "q"
      },
      {// 17
        id: "lettler_r",
        correcta: "normal_lettler_r",
        change: "",
        nombre: "#ffed00",
        ruta: lettler_r,
        alt: "r"
      },
      {// 18
        id: "lettler_s",
        correcta: "normal_lettler_s",
        change: "",
        nombre: "#ffed00",
        ruta: lettler_s,
        alt: "s"
      },
      {// 19
        id: "lettler_t",
        correcta: "normal_lettler_t",
        change: "",
        nombre: "#ffed00",
        ruta: lettler_t,
        alt: "t"
      },
      {// 20
        id: "lettler_u",
        correcta: "normal_lettler_u",
        change: "",
        nombre: "#e3000b",
        ruta: lettler_u,
        alt: "u"
      },
      {// 21
        id: "lettler_v",
        correcta: "normal_lettler_v",
        change: "",
        nombre: "#e3000b",
        ruta: lettler_v,
        alt: "v"
      },
      {// 22
        id: "lettler_w",
        correcta: "normal_lettler_w",
        change: "",
        nombre: "#e3000b",
        ruta: lettler_w,
        alt: "w"
      },
      {// 23
        id: "lettler_x",
        correcta: "normal_lettler_x",
        change: "",
        nombre: "#e3000b",
        ruta: lettler_x,
        alt: "x"
      },
      {// 24
        id: "lettler_y",
        correcta: "normal_lettler_y",
        change: "",
        nombre: "#e3000b",
        ruta: lettler_y,
        alt: "y"
      },
      {// 25
        id: "lettler_z",
        correcta: "normal_lettler_z",
        change: "",
        nombre: "#e3000b",
        ruta: lettler_z,
        alt: "z"
      },
      {// 26
        id: "white",
        correcta: "normal_white",
        change: "",
        nombre: "space",
        ruta: white,
        alt: ""
      }
      ];

  //FUNCION PARA LLAMAR EL MODAL QUE MUESTRAS LAS LETRAS Y HAGA EL LLAMADO A LA FUNCION CHECKLETTLER() 
  const changeImage = (lettlerChange,lettlerNameChange) => {
    //alert(clickLettler);
    //let nameLettler = "#"+lettlerClick;
    if(lettlerChange !== null && clickLettler !== ""){
      //alert(lettlerChange);
      let lc = document.getElementById(clickLettler);
      let splitLettler = clickLettler.split('-');
      lc.src = lettlerChange;
      lc.name = "change_"+clickLanguage;
      setClickLettler("");
      
      checkLettler(lettlerNameChange,splitLettler[1],clickLanguage);
      setClickLanguage("");
      setSelected({...selected})
      setShowModal(false);
    }else{
      let lc = document.getElementById(clickLettler);
      let splitLettler = clickLettler.split('-');
      lc.src = lettlerChange;
      lc.name = "original_"+clickLanguage;
    }
  }

  //FUNCION PARA CAMBIAR LAS LETRAS, VALIDAR LOS SCORE Y CAMBIAR PAGINACION
  const checkLettler = (lettlerChange, index, language) => {    

    /*spaLength = spanish.length;
    engLength = english.length;*/        
    //alert(spa_change[index]);

    //SE LLEVA EL REGISTRO DE LAS LETRAS CAMBIADAS SEGUN EL INDEX CORRECTO EN LA LISTA PRINCIPAL BASADO EN EL IDIOMA
    if(language == 'sp'){       
        spa_change[index] = lettlerChange;            
    }else if(language == 'eng'){            
        eng_change[index] = lettlerChange;            
    }

    //alert(spa_change[index]);

    //SE TRAEN LAS LETRAS MODIFICADOS DE ESPAÑOL
    let lettlerSpanish = document.getElementsByName('change_sp');
    //SE COMPARA LA CATIDAD DE LETRAS MODIFICADAS EN PANTALLA VRS EL ARRAY DE LETRAS MODIFICADAS POR INDEX       
    if(lettlerSpanish.length == spaLength){
        goodSp = 0;
        //SE RECORRE LA LISTA PARA REVISAR LAS LETRAS BUENAS Y MALAS
        for (let i = 0; i < spa_change.length; i++) {
            //alert(spa_change[i] +"-"+ spanish[i].correcta);
            //SE VALIDA LAS LETRAS CORRECTAS PARA EL SCORE
            if(spa_change[i] == spanishObj[countBlock][i].correcta){
                goodSp += 1;
            }                
        }
    }
    //SE TRAEN LAS LETRAS MODIFICADOS DE INGLES
    let lettlerEnglish = document.getElementsByName('change_eng');
    //SE COMPARA LA CATIDAD DE LETRAS MODIFICADAS EN PANTALLA VRS EL ARRAY DE LETRAS MODIFICADAS POR INDEX       
    if(lettlerEnglish.length == engLength){
        goodEng = 0;
        for (let j = 0; j < eng_change.length; j++) {
          //SE VALIDA LAS LETRAS CORRECTAS PARA EL SCORE
            if(eng_change[j] == englishObj[countBlock][j].correcta){
                goodEng += 1;
            }                
        }
    }

    // alert(goodSp+"--"+goodEng);
    //SE VALIDAN LAS LETRAS CALCULADAS BUENAS PARA SACAR EL SCORE
    if((goodSp > 0) && (goodEng > 0)){
        let scoreS = (100/spaLength)*goodSp;
        let scoreE = (100/engLength)*goodEng;
        //SE ALMACENAN LOS SCORE SEGUN EL IDIOMA
        scoreSpanish.push(scoreS);
        scoreEnglish.push(scoreE);

        //LLAMA EL SIGUIENTE COLOR A RESOLVER
        nextImage();
        //SE MANEJAN LOS VALORES PARA LA PAGINACION
        let color = colors[countBlock];
        let score = {id: color, spa: scoreS, eng: scoreE}
        const nextPage = pages.selected + 1
        setColorState({
          ...colorState,
          [`color-${countBlock+1}`]:score
      })
      //SE VALIDA LA PAGINACION SI PASA AL SIGUENTE O LLAMA EL SOCRE FINAL
      if(nextPage > pages.max) {
        //setShowResult(true)
      } else {
          setPages({
              ...pages,
              selected: nextPage
          })
      }
    }
  }      
      
  //FUNCION QUE LLAMA EL PROXIMO COLOR A RESOLVER
  const nextImage = (e) => {
    console.log(lettler);
    english = null;
    spanish = null;
    //SE CUENTAN LOS COLORES
    inicialCount = countBlock + 1;
    setCountBlock(inicialCount);
    //VALIDA SI ES EL PRIMER LLAMADO DEL COLOR A RESOLVER
    setCountTrue(true);
    //setColors();
    //ACTIVA EL JUEGO
    playAgain(countBlock);
    
    //SE OBTIENE EL COLOR QUE SE ESTA RESOLVIENDO PARA CAMBIAR EL COLOR DEL BRICK SEGUN EL COLOR ACTIVO
    let color = colorBrick[countBlock];
    setColorBrick(color);

    /*if(color == '#ffed00'){
        setBtnNext('btnInactive');
        setBtnScore('btnActive');
    }*/
  }

      

  
//FUNCION DONDE SE CARGAN LAS LETRAS SEGUN EL COLOR A RESOLVER
  const setColors = (colorPrueba) => {
    let english = [];
    let spanish = [];

    
    /*eng_change1 = [];
    spa_change1 = [];*/
    //let blockColors = ;
    let color = colors[colorPrueba];
    if(countTrueObj){    
    
    switch(color){
      case "verde":
        spanish = {};
        english = {};

        spanish = {
          0:lettler[21],//V
          1: lettler[4],//E
          2: lettler[17],//R
          3: lettler[3],//D
          4: lettler[4]//E
        }

        english = {
          0: lettler[6],//G
          1: lettler[17],//R
          2: lettler[4],//E
          3: lettler[4],//E
          4: lettler[13]//N
        }
        
        spanishObj.push(spanish);
        englishObj.push(english);
        
      case "celeste":
        spanish = {};
        english = {};

        spanish = {
          0: lettler[2],//C
          1: lettler[4],//E
          2: lettler[11],//L
          3: lettler[4],//E
          4: lettler[18],//S
          5: lettler[19],//T
          6: lettler[4]//E
        }

        english = {
          0: lettler[11],//L
          1: lettler[8],//I
          2: lettler[6],//G
          3: lettler[7],//H
          4: lettler[19],//T
          5: lettler[26],//ESPACIO
          6: lettler[1],//B
          7: lettler[11],//L
          8: lettler[20],//U
          9: lettler[4]//E
        }

        spanishObj.push(spanish);
        englishObj.push(english);
          
      case "azul":
        spanish = {};
        english = {};

        spanish = {
          0: lettler[0],//A
          1: lettler[25],//Z
          2: lettler[20],//U
          3: lettler[11]//L
        }

        english = {
          0: lettler[1],//B
          1: lettler[11],//L
          2: lettler[20],//U
          3: lettler[4]//E
        }

        spanishObj.push(spanish);
        englishObj.push(english);
          
      case "rojo":
        spanish = {};
        english = {};

        spanish = {
          0: lettler[17],//R
          1: lettler[14],//O
          2: lettler[9],//J
          3: lettler[14]//O
        }

        english = {
          0: lettler[17],//R
          1: lettler[4],//E
          2: lettler[3]//D
        }

        spanishObj.push(spanish);
        englishObj.push(english);

      case "naranja":
        spanish = {};
        english = {};

        spanish = {
          0: lettler[0],//A
          1: lettler[13],//N
          2: lettler[0],//A
          3: lettler[17],//R
          4: lettler[0],//A
          5: lettler[13],//N
          6: lettler[9],//J
          7: lettler[0],//A
          8: lettler[3],//D
          9: lettler[14]//O
        }

        english = {
          0: lettler[14],//O
          1: lettler[17],//R
          2: lettler[0],//A
          3: lettler[13],//N
          4: lettler[6],//G
          5: lettler[4]//E
        }

        spanishObj.push(spanish);
        englishObj.push(english);

      case "amarillo":
        spanish = {};
        english = {};
        
        spanish = {
          0: lettler[0],//A
          1: lettler[12],//M
          2: lettler[0],//A
          3: lettler[17],//R
          4: lettler[8],//I
          5: lettler[11],//L
          6: lettler[11],//L
          7: lettler[14]//O
        }

        english = {
          0: lettler[24],//Y
          1: lettler[4],//E
          2: lettler[11],//L
          3: lettler[11],//L
          4: lettler[14],//O
          5: lettler[22]//W
        }
        
        spanishObj.push(spanish);
        englishObj.push(english);
        setCountTrueObj(false);
        break;
      default:
  }
}

    
    //VALIDA LA PRIMER CARGA DEL COLOR PARA SACAR EL TAMAÑO MAXIMO DEL COLOR Y LLEVAR EL ARRAY EN EL CHECKLETTLER()
    if(countTrue){
      spaLength = 0; engLength = 0;
      spaLength = Object.keys(spanishObj[countBlock]).length;
      engLength = Object.keys(englishObj[countBlock]).length;
      
        //spaLength = spanishObj[countBlock].length;
        //engLength = englishObj[countBlock].length;
        eng_change = [engLength];
        spa_change = [spaLength];
        //VALIDA EL TAMAÑO DEL CELESTE PARA QUE NO CUENTE EL ESPACIO EN BLANCO
        if(color === 'celeste'){
          eng_change = [engLength-1];
        }
        setCountTrue(false);
    }
  }

  //FUNCIO PARA CAMBIAR LA PAGINACION
  const goToColor = (page) => {
    setPages({
        ...pages,
        selected: page
    })
  }

  //FUNCION QUE RENDERIZA LA PAGINACION EN LA INTERFAZ
  const renderPages = () => {
    const items = []
    for (let i = 1; i <= pages.max; i++) {
        const active = i === pages.selected
        const operation = colorState[`color-${i}`]
        const disabled = !operation.id && !active
        items.push(
            <div key={`pagination-item-${i}`} onClick={() => {if (!active && !disabled) goToColor(i)}}>
                <Pagination.Item key={i} active={active} disabled={disabled}>{i}</Pagination.Item>
            </div>                
        )
    }
    return items
  }
      

  //FUNCION PRINCIPAL DONDE SE CARGA LAS LETRAS E INICIA LA ACTIVIDAD
  const playAgain = (colorPrueba) => {
    setColors(colorPrueba);        
    
    displayContent = 
      <div className="activity-container align-middle">
          <Brick color={brickColor}/>
          <div className="content_lettler">
              <LettlerContent spanish={spanishObj[countBlock]} english={englishObj[countBlock]} color={colors[countBlock]} setClickLettler={setClickLettler} setClickLanguage={setClickLanguage} showModalClick={showModalClick}/>     
              <div>
                  <div>
                      <Pagination size="lg">{renderPages()}</Pagination>
                      <Button variant="dark" onClick={(e) => nextImage(e)} className={scoreBtn}>Puntaje</Button>
                  </div>          
              </div>
          </div>
          <Modal id="modalLettler" animation={false} show={showModal} onHide={onSelect}>
            <Modal.Header closeButton>
              <Modal.Title>Abecedario</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Container>
                <Row className="justify-content-md-center">
                  <Col xs lg="3"><BrickModal color={'#00861c'} onClick={() => changeImage(normal_lettler_a,"normal_lettler_a")} text={'a'} size="sm" /></Col>
                  <Col xs lg="3"><BrickModal color={'#51a5db'} onClick={() => changeImage(normal_lettler_b,"normal_lettler_b")} text={'b'} size="sm" /></Col>
                  <Col xs lg="3"><BrickModal color={'#0055bf'} onClick={() => changeImage(normal_lettler_c,"normal_lettler_c")} text={'c'} size="sm" /></Col>
                  <Col xs lg="3"><BrickModal color={'#e3000b'} onClick={() => changeImage(normal_lettler_d,"normal_lettler_d")} text={'d'} size="sm" /></Col>
                </Row>
                <Row className="justify-content-md-center">
                  <Col xs lg="3"><BrickModal color={'#ff8500'} onClick={() => changeImage(normal_lettler_e,"normal_lettler_e")} text={'e'} size="sm" /></Col>
                  <Col xs lg="3"><BrickModal color={'#ffed00'} onClick={() => changeImage(normal_lettler_f,"normal_lettler_f")} text={'f'} size="sm" /></Col>
                  <Col xs lg="3"><BrickModal color={'#00861c'} onClick={() => changeImage(normal_lettler_g,"normal_lettler_g")} text={'g'} size="sm" /></Col>
                  <Col xs lg="3"><BrickModal color={'#51a5db'} onClick={() => changeImage(normal_lettler_h,"normal_lettler_h")} text={'h'} size="sm" /></Col>
                </Row>
                <Row className="justify-content-md-center">
                  <Col xs lg="3"><BrickModal color={'#0055bf'} onClick={() => changeImage(normal_lettler_i,"normal_lettler_i")} text={'i'} size="sm" /></Col>
                  <Col xs lg="3"><BrickModal color={'#e3000b'} onClick={() => changeImage(normal_lettler_j,"normal_lettler_j")} text={'j'} size="sm" /></Col>
                  <Col xs lg="3"><BrickModal color={'#ff8500'} onClick={() => changeImage(normal_lettler_k,"normal_lettler_k")} text={'k'} size="sm" /></Col>
                  <Col xs lg="3"><BrickModal color={'#ffed00'} onClick={() => changeImage(normal_lettler_l,"normal_lettler_l")} text={'l'} size="sm" /></Col>
                </Row>
                <Row className="justify-content-md-center">
                  <Col xs lg="3"><BrickModal color={'#00861c'} onClick={() => changeImage(normal_lettler_m,"normal_lettler_m")} text={'m'} size="sm" /></Col>
                  <Col xs lg="3"><BrickModal color={'#51a5db'} onClick={() => changeImage(normal_lettler_n,"normal_lettler_n")} text={'n'} size="sm" /></Col>
                  <Col xs lg="3"><BrickModal color={'#0055bf'} onClick={() => changeImage(normal_lettler_o,"normal_lettler_o")} text={'o'} size="sm" /></Col>
                  <Col xs lg="3"><BrickModal color={'#e3000b'} onClick={() => changeImage(normal_lettler_p,"normal_lettler_p")} text={'p'} size="sm" /></Col>
                </Row>
                <Row className="justify-content-md-center">
                  <Col xs lg="3"><BrickModal color={'#ff8500'} onClick={() => changeImage(normal_lettler_q,"normal_lettler_q")} text={'q'} size="sm" /></Col>
                  <Col xs lg="3"><BrickModal color={'#ffed00'} onClick={() => changeImage(normal_lettler_r,"normal_lettler_r")} text={'r'} size="sm" /></Col>
                  <Col xs lg="3"><BrickModal color={'#00861c'} onClick={() => changeImage(normal_lettler_s,"normal_lettler_s")} text={'s'} size="sm" /></Col>
                  <Col xs lg="3"><BrickModal color={'#51a5db'} onClick={() => changeImage(normal_lettler_t,"normal_lettler_t")} text={'t'} size="sm" /></Col>
                </Row>
                <Row className="justify-content-md-center">
                  <Col xs lg="3"><BrickModal color={'#0055bf'} onClick={() => changeImage(normal_lettler_u,"normal_lettler_u")} text={'u'} size="sm" /></Col>
                  <Col xs lg="3"><BrickModal color={'#e3000b'} onClick={() => changeImage(normal_lettler_v,"normal_lettler_v")} text={'v'} size="sm" /></Col>
                  <Col xs lg="3"><BrickModal color={'#ff8500'} onClick={() => changeImage(normal_lettler_w,"normal_lettler_w")} text={'w'} size="sm" /></Col>
                  <Col xs lg="3"><BrickModal color={'#ffed00'} onClick={() => changeImage(normal_lettler_x,"normal_lettler_x")} text={'x'} size="sm" /></Col>
                </Row>
                <Row className="justify-content-md-center">
                  <Col xs lg="3"><BrickModal color={'#00861c'} onClick={() => changeImage(normal_lettler_y,"normal_lettler_y")} text={'y'} size="sm" /></Col>
                  <Col xs lg="3"><BrickModal color={'#51a5db'} onClick={() => changeImage(normal_lettler_z,"normal_lettler_z")} text={'z'} size="sm" /></Col>
                  </Row>
              </Container>

            </Modal.Body>
            <Modal.Footer>            
              <Button variant="primary" onClick={onSelect}>
                Cerrar
              </Button>
            </Modal.Footer>
          </Modal>
      </div>
    return displayContent;
  }

  // const setLettler = (e) => {
  //   setColors();        
  // }
    
  //ACA SE RENDERIZA LA ACTIVIDAD PARA SER MOSTRADA EN COLORES002.JS   
  return (
    <div>{playAgain(inicialCount)}</div>        
  )//Fin del Return
}//Fin del Componente

export default Letras