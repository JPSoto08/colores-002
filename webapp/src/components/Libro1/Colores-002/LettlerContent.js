import React, {useState} from 'react';
import {Image} from 'react-bootstrap'

const buildColor = (color) => {
    return {
        color 
    }
}

//FUNCION QUE RENDERIZA LAS IMAGENES DE CADA COLOR TANTO ESPAÑOL E INGLES
function LettlerContent(props) {
    /*
    EL PROBLEMA ACA ES QUE CUANDO SE ACTIVA EL NEXTIMAGE DE LETRAS.JS MANTIENE EL ATRIBUTO NAME BASADO EN LAS LETRAS DEL COLOR ANTERIOR, CUANDO SE VAN MARCANDO 
    UNA A UNA SE CAMBIA EL NAME DE ORIGNAL_SP O ORIGINAL_ENG POR CHANGE_SP O CHANGE_ENG PERO CUANDO ACTIVO LA FUNCION NO ME LAS CARGA CON EL ORIGINAL
    */

    //CARGA LETRAS DE ESPAÑOL
    /*const html1 = props.spanish.map((spanish1,index) =>
           <Image style={buildColor(props.color)} className={props.color} width="50" height="50" alt={spanish1.alt} src={spanish1.ruta} id={spanish1.id+'-'+index+'-sp'} name="original_sp" onClick={() => {props.showModalClick(); props.setClickLettler(spanish1.id+'-'+index+'-sp'); props.setClickLanguage("sp")}}/>
        ); */
        //let index = 0;
        let html1 = [];let html2 = [];
        let spLenght = 5;
        for (const key in props.spanish) {
            let element = props.spanish[key];
            html1.push(<Image style={buildColor(props.color)} className={props.color} width="50" height="50" alt={element.alt} src={element.ruta} id={element.id+'-'+key+'-sp'} name="original_sp" onClick={() => {props.showModalClick(); props.setClickLettler(element.id+'-'+key+'-sp'); props.setClickLanguage("sp")}}/>)
        }

    //CARGA LETRAS DE INGLES
    /*const html2 = props.english.map((english1,index) =>
            <Image style={buildColor(props.color)} className={props.color} width="50" height="50" alt={english1.alt} src={english1.ruta} id={english1.id+'-'+index+'-eng'} name="original_eng" disabled={english1.nombre === "space"?"disabled":''} onClick={() => {props.showModalClick(); props.setClickLettler(english1.id+'-'+index+'-eng'); props.setClickLanguage("eng")}}/>
        );*/
        //index = 0;
        let engLenght = 5;
        for (const key in props.english) {
            let element = props.english[key];
            html2.push(<Image style={buildColor(props.color)} className={props.color} width="50" height="50" alt={element.alt} src={element.ruta} id={element.id+'-'+key+'-eng'} name="original_eng" disabled={element.nombre === "space"?"disabled":''} onClick={() => {props.showModalClick(); props.setClickLettler(element.id+'-'+key+'-eng'); props.setClickLanguage("eng")}}/>)
        }
        
    //RETORNA LAS LETRAS ESPAÑOL E INGLES PARA SER MOSTRADAS EN LETRAS.JS
    return (
        <>
            <div className="lettler_spanish">
                {html1}
            </div>
            <div className="lettler_english">
                {html2}
            </div>
        </>
    )
}

export default LettlerContent