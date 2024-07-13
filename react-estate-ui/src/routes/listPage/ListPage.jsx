import React from 'react'
import { listData } from '../../lib/dummydata'
import './listPage.scss';
import Filter from '../../components/filter/Filter';
import Card from '../../components/card/Card';
import Map from '../../components/map/Map';
import "leaflet/dist/leaflet.css";

function ListPage() {

  const data = listData;

  return (
    <div className='listPage'>
      <div className="listContainer">
        <div className="wrapper">
          <Filter/>
          {data.map((item)=>(
            <Card key={item} item={item}/>
          ))}
        </div>
      </div>
      <div className="mapContainer">
        <Map items={data}/>
      </div>
    </div>
  ) 
}

export default ListPage