import React from 'react'
import "./home.css";
import Infocard from '../../components/topbar/infocard/Infocard';
import Chart from '../../components/topbar/chart/Chart';

export default function Home() {
  return (
    <div className='home'>
        <Infocard />
        <Chart/>
    </div>
  )
}
