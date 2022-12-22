import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card'
import Section from '../components/Section'
import staticdata from '../../staticdata.json'
import Cell from '../components/Cell'
import styled from 'styled-components'

const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #94a4ba;
  text-align: center;
`

const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  padding: 0 20px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const BuyPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
      <img src={require("../images/logo-badger.png")} width="150" alt="" />
        <h1>SLICK Digital <br /> PLATFORM <br /> <br /></h1>
        <h2>Savings & Stakings</h2>
    {/* <p>. . .</p> */}
        <p>The SAFE place for Digital Savings. </p>
   {/*<Link to="/page-2/">Watch the Video</Link>*/}
      <div className="Logos">
        <img src={require('../images/mera.png')} width="50" />
        <img src={require('../images/defichain.png')} width="50" />
        <img src={require('../images/cake-token.png')} width="50" />
        <img src={require('../images/facebook-white.svg')} width="50" />
        <img src={require('../images/discord_white.svg')} width="50" />
        <a href="https://www.wdwsolutions.com"><img src={require('../images/logowdw.png')} width="50" height="50"  /></a>
      </div>
      </div>
    </div>
    <div className="Cards">
      <h2>SLICK Token ID</h2>
      <div className="CardGroup">
        <a>
        <Card 
         title="Buy on PancakeSwap"
         text="PancakeSwap"
         image={require('../images/golden-honey2.png')} />
        </a>
        <a>
        <Card 
         title="Slick BSC Address"
         text="Slick Address | QR Code"
         image={require('../images/golden-honey2.png')} />
        </a>
      </div>
    </div>
    <Section 
      image={require('../images/grey-honey.jpg')}
      title="Digital Smart Investing"
      text="The SAFE place for Digital Savings."
    />
    <SectionCaption>ROADMAP</SectionCaption>
    <SectionCellGroup>
     {staticdata.cells.map(cell => (
       <Cell
         title={cell.title} 
         image={cell.image} />
     ))}
    </SectionCellGroup>
  </div>
)

export default BuyPage