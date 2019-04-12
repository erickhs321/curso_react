import React from 'react'
import ReactDOM from 'react-dom'
// import PrimeiroComponente from './componentes/PrimeiroComponente'
// import { CompA, CompB } from './componentes/DoisComponentes'
// // import FamiliaSilva from './componentes/FamiliaSilva'
// import Membro from './componentes/Membro'
// import Familia from './componentes/Familia'
// import MultiElementos from './componentes/MultiElementos'
// import ComponenteComFuncao from './componentes/ComponenteComFuncao'
// import Pai from './componentes/Pai'
// import ComponenteClasse from  './componentes/ComponenteClasse'
// import Contador from './componentes/Contador'
import Hook from './componentes/Hook'

const elemento = document.getElementById('root')


ReactDOM.render(
  <div>
    <Hook />
    {/* <Contador valorInicial={100} /> */}
    {/* <ComponenteClasse valor="Sou um componente de classe" /> */}
    {/* <Pai /> */}
    {/* <ComponenteComFuncao /> */}
    {/* <Familia sobrenome="Pereira" numero={123}>
      <Membro nome="Andre" />
      <Membro nome="Mariana" />
    </Familia> */}
    {/* <FamiliaSilva sobrenome="Silva Pereira"></FamiliaSilva> */}
  </div>
  , elemento
)
// ReactDOM.render(
//   <div>
//     <CompA valor="Olá eu sou o A" />
//     <CompB valor="Olá eu sou o B" />
//     {/* <PrimeiroComponente valor="Bom dia!" aBcD={2**8}/> */}
//   </div>
//   , elemento
// )
// const jsx = 'Olá React!'
// ReactDOM.render(jsx, elemento)