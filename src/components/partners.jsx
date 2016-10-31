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
    name: 'SUPSI',
    title: 'INSTITUTE OF EARTH SCIENCES',
    subtitle: 'SWITZERLAND',
    role: '(COORDINATOR)',
    url: 'http://www.supsi.ch/ist_en/',
    coords: [45,8]
  },
  {
    img: logoUoM,
    name: 'UoM',
    title: 'UNIVERSITY OF MORATUWA',
    subtitle: 'SRI LANKA',
    role: '(PARTNER)',
    url: 'https://www.mrt.ac.lk/web/',
    coords: [45,70]
  },
  {
    img: logoIst,
    name: 'IST',
    title: 'INSTITUTE OF SPACE TECHNOLOGY',
    subtitle: 'PAKISTAN',
    role: '(PARTNER)',
    url: 'http://www.ist.edu.pk/',
    coords: [45,60]
  },
  {
    img: logoUgm,
    name: 'UGM',
    title: 'UNIVERSITY OF GADJAH MADA',
    subtitle: 'INDONESIA',
    role: '(PARTNER)',
    url: 'http://ugm.ac.id/en/',
    coords: [45,50]
  },
  {
    img: logoIWMI,
    name: 'IWMI',
    title: 'INTERNATIONAL WATER MANAGEMENT INSTITUTE',
    subtitle: 'SRI LANKA',
    role: '(COLLABORATION)',
    url: 'http://www.iwmi.cgiar.org/',
    coords: [45,55]
  },
  {
    img: logoIrri,
    name: 'IRRI',
    title: 'IRRIGATION DEPARTMENT OF ANURADHAPURAS',
    subtitle: 'SRI LANKA',
    role: '(COLLABORATION)',
    url: 'http://www.irrigation.gov.lk/',
    coords: [44,80]
  },
  {
    img: logoGFDRR,
    name: 'GFDRR',
    title: 'WORLD BANK GFDRR',
    subtitle: 'USA',
    role: '(COLLABORATION)',
    url: 'https://www.gfdrr.org/',
    coords: [39,39]
  },
];

const Partners = React.createClass({
  handleClickHref (value, event) {
    window.open(value, '_blank');
  },
  componentDidMount () {
    var mymap = L.map('map',{
      zoomControl: false,
      minZoom:2,
      maxZoom:18,
      maxBounds: [L.latLngBounds([-5,-180], [90,180])]
    }).setView([49.505, 0], 2)

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
      marker.bindPopup(`<strong>${tile.name}</strong><br/>${tile.title}<br/>${tile.role}`).openPopup()
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
      //backgroundImage: 'url('+partners+')',
      backgroundPosition:'center',
      height:((heightCarousel*3)/4)+'px'
    }
    return (
      <div id='page-top'>
        <div id='map' style={styleCarouselItem}></div>
        <div className='container' style={{paddingBottom: '10px'}}>
          <h2 className='title-page'>Partners</h2>
          <Divider />
          <div className='partner-container'>
            <Row>
              {tilesData.map((tile, index) => (
                <Col md={3} sm={6} key={'key-partner-'+index}>
                  <div className='partner-member' onClick={this.handleClickHref.bind(this, tile.url)}>
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
