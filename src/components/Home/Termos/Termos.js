import React from 'react'
import {TermosGerais} from './style'

import TermosData from '../../../Data/TermosData'

const Termos = () => {
  return (
    <TermosGerais>
     <div> <h1>Termos</h1> </div>

      <ul>
        {TermosData.map(termos => (
          <li>
          <span>{termos.Title}</span>
           <p>{termos.Description}</p>
         </li>
        ))}
      </ul>
    </TermosGerais>
  )
}

export default Termos

