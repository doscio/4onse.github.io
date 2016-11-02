// react
import React from 'react'
// material ui
import Divider from 'material-ui/Divider';
//bootstrap
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
// leaflet
import L from 'leaflet'
//icons
import logoSupsi from '../data/images/partners/supsi_logo.png'
import logoUgm from '../data/images/partners/ugm_logo.png'
import logoUoM from '../data/images/partners/uom_logo.png'
import logoIst from '../data/images/partners/ist_logo.png'
import logoIWMI from '../data/images/partners/iwmi_logo.png'
import logoIrri from '../data/images/partners/irri_logo.png'
import logoGFDRR from '../data/images/partners/gfdrr_logo.png'
//images
//import partners from '../data/images/background/partners.jpg'
//css
import markerIcon from '../css/leaflet/images/marker-icon.png';
import markerShadow from '../css/leaflet/images/marker-shadow.png';
import '../css/leaflet/leaflet.css';
import '../css/partners.css';

const tilesData = [
  {
    img: logoSupsi,
    name: 'SUPSI - Institue of earth sciences',
    code: 'SUPSI',
    title: 'INSTITUTE OF EARTH SCIENCES',
    subtitle: 'SWITZERLAND',
    role: '(COORDINATOR)',
    url: 'http://www.supsi.ch/ist_en/',
    coords: [46.02821,8.96105]
  },
  {
    img: logoUoM,
    name: 'Univeristy of Moratuwa',
    code: 'UoM',
    title: 'UNIVERSITY OF MORATUWA',
    subtitle: 'SRI LANKA',
    role: '(PARTNER)',
    url: 'https://www.mrt.ac.lk/web/',
    coords: [6.7958437,79.8994541]
  },
  {
    img: logoIst,
    name: 'Institute od Space technology',
    code: 'IST',
    title: 'INSTITUTE OF SPACE TECHNOLOGY',
    subtitle: 'PAKISTAN',
    role: '(PARTNER)',
    url: 'http://www.ist.edu.pk/',
    coords: [33.520377,73.173724]
  },
  {
    img: logoUgm,
    name: 'University of Gadjah Mada',
    code: 'UGM',
    title: 'UNIVERSITY OF GADJAH MADA',
    subtitle: 'INDONESIA',
    role: '(PARTNER)',
    url: 'http://ugm.ac.id/en/',
    coords: [-7.7713847,110.3753058]
  },
  {
    img: logoIWMI,
    name: 'International Water Management Institute',
    code: 'IWMI',
    title: 'INTERNATIONAL WATER MANAGEMENT INSTITUTE',
    subtitle: 'SRI LANKA',
    role: '(COLLABORATION)',
    url: 'http://www.iwmi.cgiar.org/',
    coords: [6.89189,79.92768]
  },
  {
    img: logoIrri,
    name: 'Irrigation department of Anuradhapuras',
    code: 'IRRI',
    title: 'IRRIGATION DEPARTMENT OF ANURADHAPURAS',
    subtitle: 'SRI LANKA',
    role: '(COLLABORATION)',
    url: 'http://www.irrigation.gov.lk/',
    coords: [8.3204342,80.416592]
  },
  {
    img: logoGFDRR,
    name: 'World Bnak GFDRR',
    code: 'GFDRR',
    title: 'WORLD BANK GFDRR',
    subtitle: 'USA',
    role: '(COLLABORATION)',
    url: 'https://www.gfdrr.org/',
    coords: [0,0]
  },
];

const Partners = React.createClass({
  handleClickHref (value, event) {
    window.open(value, '_blank');
  },
  handleHover (value, event) {
    let tilesDataFiltered = tilesData.filter(item => item.code===value)
    this.mymap.setView(tilesDataFiltered[0].coords,15)
  },
  componentDidMount () {
    var mymap = this.mymap = L.map('map',{
      zoomControl: false,
      minZoom:2,
      maxZoom:18,
      //maxBounds: [L.latLngBounds([-20,-180], [80,180])]
    }).setView([30.14381, 44.78440], 2)

	  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw', {
      maxZoom: 18,
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      id: 'mapbox.streets'
	  }).addTo(mymap)
    var stdIcon = L.icon({
      iconUrl: markerIcon,
      iconSize: [25, 41],
      iconAnchor: [17, 40],
      popupAnchor: [-3, -25],
      shadowUrl: markerShadow,
      shadowSize: [41, 41],
      shadowAnchor: [20, 40],
    })
    tilesData.map((tile,index)=>{
      let marker = L.marker(tile.coords,{icon: stdIcon})
      marker.bindPopup(`<strong>${tile.name}</strong><br/>${tile.role}`).openPopup()
      marker.addTo(mymap)
      return true
    })
  },
  render () {
    let heightCarousel
    if (this.props.size.width>=992) {
      heightCarousel = ((992/1.77)-((992*20)/100))
    } else if (this.props.size.width>=750) {
      heightCarousel = ((992/1.77)-((992*20)/100))
    } else {
      heightCarousel = (this.props.size.width/1.77)
    }
    let styleCarouselItem = {
      /*backgroundImage: 'url('+partners+')',*/
      backgroundPosition:'center',
      height:((heightCarousel*3)/4)+'px'
    }
    return (
      <div id='page-top'>
        <div id='map' style={styleCarouselItem}></div>
        {/*<div style={styleCarouselItem}></div>*/}
        <div className='container' style={{paddingBottom: '10px'}}>
          <h2 className='title-page'>Partners</h2>
          <Divider />
          <div className='partner-container'>
            <Row>
              {tilesData.map((tile, index) => (
                <Col md={3} sm={6} key={'key-partner-'+index}>
                  <div className='partner-member' onClick={this.handleClickHref.bind(this, tile.url)} onMouseOver={this.handleHover.bind(this, tile.code)}>
                    <img role='presentation' src={tile.img} width='100%' />
                    <figcaption>
                      <p className='member-name' style={{fontSize:'12px'}}>{tile.title}</p>
                      <p className='designation' style={{margin:'0px'}}>{tile.subtitle}</p>
                      <p style={{fontSize:'9px',margin:'0px'}}>{tile.role}</p>
                    </figcaption>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </div>
    )
  }
})

export default Partners
