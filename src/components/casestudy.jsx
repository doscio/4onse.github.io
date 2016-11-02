//react
import React from 'react'
//bootstrap
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
//material ui
import Divider from 'material-ui/Divider';
import {Card, CardHeader, CardText} from 'material-ui/Card';
//icons
import OyaBasin from '../data/images/casestudy/OyaBasin.png'

const Casestudy = React.createClass({
  render () {
    return (
      <div id='page-top'>
        <div className='container' style={{minHeight: (this.props.size.height-(this.props.appBar.height+160))+'px'}}>
          <h2 className='title-page'>Case study</h2>
          <Divider />
          <div className='paragraph'>
            <Card>
              <CardHeader
                title={<strong>Deduru Oya basin - Sri Lanka</strong>}
              />
              <CardText>
                <Row>
                  <Col md={4}>
                    <figure>
                      <img role='presentation' width='100%' src={OyaBasin} />
                      <figcaption>Fig. 1: Oya Basin map</figcaption>
                    </figure>
                  </Col>
                  <Col md={8}>
                    <p>The project case study, where the 4ONSE system will be deployed and investigated is the Deduru Oya basin.
                    It is the fourth largest river basin in Sri Lanka and is located within the highly vulnerable areas due to climate change according to recent studies (Katupotha, 2009).
                    The Deduru Oya is 115km long and covers 2623km2 of catchment area. 97% of the basin’s area covered by the North Western Province (Kurunegala and Puttalam Districts)
                    and 3% by the Central Province (Kandy and Matale Districts). The basin area falls under two climatic zones, wet and intermediate (Figure 1).
                    </p>
                    <p>The annual average rainfall of the basin area is about 1628mm. The hydrometric network in the basin consists of several meteorological stations and two gauging stations.
                    The major sources of water available in the basin include direct rainfall, stream flow, surface water storage and groundwater storage.
                    These available water resources vary spatially and temporally across the basin, significantly.
                    </p>
                    <p>The Deduru Oya is affected by flash floods in some periods and also
                    suffers from long periods of low flows which occurs in the months of February, March, June, July, August, and September (Samarasinghe, et.al, 2000).
                    More runoffs available at upper basin which is located in the Wet Zone. Middle and tail end parts of the basin locate in the Intermediate Zone, face water shortage
                    problems in dry periods. Sometimes the Drought period endure in the area for nearly 7 to 9 months creating an acute water shortage (Katupotha, 2009).
                    </p>
                    {/*<h3>References</h3>
                    <ul>
                      <li><em>Coetzee, L., & Eksteen, J. (2011, May). The Internet of Things-promise for the future? An introduction. In IST-Africa Conference Proceedings, 2011 (pp. 1-9). IEEE.</em></li>
                      <li><em>Evans, D. (2011). The internet of things: how the next evolution of the internet is changing everything. CISCO white paper, 1.</em></li>
                      <li><em>Snow, J.T. (2013). Non-traditional Approaches to Weather Observations in Developing Countries. International Finance Corporation. Available online at: <a href='http://www.ifc.org/wps/wcm/connect/91c3778042bd94eeb2c6be0dc33b630b/NonTraditional+Approaches+to+Weather+Observations+in+Developing+Countries+-+John+Snow.pdf?MOD=AJPERES' target='_blank'>Link</a> [consulted on January 2015]</em></li>
                      <li><em>GSMA (2014). The Mobile Economy 2014 GSMA 2014. Available online at:<a href='http://www.gsmamobileeconomy.com/GSMA_ME_Report_2014_R2_WEB.pdf' target='_blank'>Link</a> [consulted on January 2015]</em></li>
                    </ul>*/}
                  </Col>
                </Row>
              </CardText>
            </Card>
          </div>
        </div>
      </div>
    )
  }
})

export default Casestudy
