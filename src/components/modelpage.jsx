import React , {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Modeldetails from "./modeldetails"
import karsilama from './karsilama'


function modelpage() {

  const [product, setproduct] = useState([]);
  const {id} = useParams();


  return (
    <div>
        <Modeldetails content={karsilama.img}/>
    </div>
  )
}

export default modelpage