//react
import React from 'react'
//material ui
import Divider from 'material-ui/Divider';
//bootstrap
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
//icons
import GovImg from '../data/images/governance/governance.png'

const Governance = React.createClass({
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
      //backgroundImage: 'url('+GovImg+')',
      backgroundPosition:'center',
      height:((heightCarousel*3)/4)+'px'
    }
    return (
      <div id='page-top' style={{minHeight: (this.props.size.height-(this.props.appBar.height+160))+'px'}}>
        <div className='container'>
          <h2 className='title-page'>Governance</h2>
          <Divider />
          <div className='paragraph'>
          <Row>
            <Col md={8}>
              The project governance follows the best practice in the Free and Open Source project management.
              The following roles and governing bodies are identified:

              <ul>
                <li>
                  <h4><u>Core partners</u></h4>
                  <p><strong>SUPSI</strong> (Switzerland) and <strong>UoM</strong> (Sri Lanka) as leading institution of the research.</p>
                </li>
                <li>
                  <h4><u>Testing partners</u></h4>
                  <p><strong>IST</strong> (Pakistan) and <strong>UGM</strong> (Indonesia) as participating in the system testing and dissemination phases only; additional members could be selected during the project execution provided that they can fully cover their live costs.</p>
                </li>
                <li>
                  <h4><u>Project coordinator</u></h4>
                  <p><strong>Massimiliano Cannata</strong> (SUPSI) is the main applicant responsible for the overall implementation of the project as described in the work plan. Contact between the SNSF and the project.</p>
                </li>
                <li>
                  <h4><u>Dissemination and Communication Manager (DCM)</u></h4>
                  <p><strong>Markus Hoffman</strong> (SUPSI) is in charge of managing and maintain the project information (communication of activities, updates of website and news, etc.).</p>
                </li>
                <li>
                  <h4><u>Steering Group (SG)</u></h4>
                  <p>Assertive small group from the core partners to support and assist the decision making and (possible) conflicts resolution. The Steering Group will be the formal governing body of the project, and approve the project’s reports.</p>
                  <p>
                    SG Members are:
                    <ul>
                      <li>Massimiliano Cannata (SUPSI) - chair</li>
                      <li>Milan Antonovic (SUPSI)</li>
                      <li>Rangajeewa Ratnayake (UOM)</li>
                      <li>P.K.S. Mahanama (UOM)</li>
                      <li>Imran Sahid (IST)</li>
                      <li>Oka Karyanto (UGM)</li>
                    </ul>
                  </p>
                </li>
                <li>
                  <h4><u>Advisory Board (AB)</u></h4>
                  <p>A group of international experts independent from the project, to accompany the course of the project in critical review, validate project, directions, work and outputs. Members of the Advisory Board will be invited from relevant scientific per sonalities in the project’s fields.</p>
                </li>
                <li>
                  <h4><u>Local Stakeholder Group (LSG)</u></h4>
                  <p>A restricted group of Sri Lankan Stakeholders that are directly supporting the project execution by facilitating the access at data, permits, information and other relevant aspects. Members will be invited from the irrigation Department and from the meteorological Office of Sri Lanka and from other selected interested bodies.</p>
                </li>
              </ul>
            </Col>
            <Col md={4}>
              <div style={styleCarouselItem}>
                <img role='presentation' width={'100%'} src={GovImg} />
              </div>
            </Col>
          </Row>
        </div>
        </div>
      </div>
    )
  }
})

export default Governance
