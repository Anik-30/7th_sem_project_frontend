import React from 'react'
import '../style/description.css'
import { FaArrowUp,FaArrowDown, FaWind } from 'react-icons/fa';
import {BiHappy} from "react-icons/bi"
import {MdCompress, MdOutlineWaterDrop} from "react-icons/md"

const Description = ({weather,units}) => {

    const tempUnit = units === 'metric' ? '℃' : '℉'
    const windUnit = units === 'metric' ? 'm/s' : 'km/h'

    const cards = [
        {
            id: 1,
            icon: <FaArrowDown/>,
            title: "min",
            data: weather.temp_min.toFixed(),
            unit: tempUnit,
        },
        {
            id:2,
            icon: <FaArrowUp/>,
            title: "max",
            data: weather.temp_max.toFixed(),
            unit: tempUnit,
        },
        {
            id: 3,
            icon:<BiHappy/>,
            title: "feels like",
            data: weather.feels_like.toFixed(),
            unit: tempUnit,
        },
        {
            id: 4,
            icon:<MdCompress/>,
            title: "pressure",
            data: weather.pressure,
            unit: "hpa",
        },
        {
            id: 5,
            icon:<MdOutlineWaterDrop/>,
            title: "humidity",
            data: weather.humidity,
            unit: "%",
        },
        {
            id: 6,
            icon:<FaWind/>,
            title: "wind speed",
            data: weather.speed.toFixed(),
            unit: windUnit,
        },
    ]

  return (
    <div className='section section_description'>
        {cards.map(({id,icon,title,data,unit})=>(
        <div className='card' key={id}>
            <div className='icon1'>
                {icon}
                <small>{title}</small>
            </div>
            <h2>{`${data} ${unit}`}</h2 >
        </div>   
        ))}   
    </div>
  )
}

export default Description
