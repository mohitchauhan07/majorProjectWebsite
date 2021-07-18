import React from 'react'
import './index.css'

const FutureScope=()=>{
   return(
    <section className={"futureScope"}>
    <div className={"container futureScopeContainer"}>
      <h1 className={"heading futureScopeHeading"}>Future Scope</h1>
      <div className={"displayRow futureScopeCardsContainer"}>
      <figure className={"card graphicsPart"}></figure>
        <div className={"card contentPart"}></div>
        <div className={"card contentPart"}></div>
        <figure className={"card graphicsPart"}></figure>
        <figure className={"card graphicsPart"}>
           <img className={'scopeImg'} src={'images/futureMarket.jpg'} alt={'future market'}/>
        </figure>
        <div className={"card contentPart"}>
          <h2 className={'title scopeHeading'}>{'Future Market'}</h2>
          <p className={'para scopeContent'}>{'The global 3D Reconstruction Technology market is valued at 210 million USD in 2018 and is expected to reach 530 million USD by the end of 2024, growing at a CAGR of 16.9% between 2019 and 2024.The 3D Reconstruction Technology market is in the promotion and innovation stage, and it is widely believed that 3D Reconstruction Technology will be a useful technique and will change the world. Europe plays an important role in the global market, with a market size of million USD in 2019 and will be million USD in 2024, with a CAGR.'}</p>
        </div>
       </div>
    </div>
  </section>
   )
}

export default FutureScope