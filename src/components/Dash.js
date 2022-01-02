import React ,{Component} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../style/dash.css'



// card in dash

const Card= ({nameClass, cardTitle, cardData, cardIcon})=>{

  return(
    <>
      <div className={nameClass}>
            <div className="circle">
              <p>
                  <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                    <circle style={{ fill: 'rgba(245, 245, 245, 0.3)' }} cx="95.494" cy="122.854" r="42.205" transform="matrix(1.67493, 0, 0, 1.444034, -84.838043, -65.817322)"/>
                    <circle  style={{fill:' rgba(245, 245, 245,0.35)' }} cx="105.15" cy="131.438" r="23.301" transform="matrix(2.286858, 0, 0, 1.837233, -157.040665, -122.383369)"/>
                  </svg>
              </p>
            </div>
            <div className='cardTitle'>
              <p>{cardTitle}</p>
            </div>
            <div className="cardData">
                <div><p>{cardData}</p></div>

                <div><p><img src={cardIcon}/></p></div>
            </div>

      </div>
    </>
  )


}


class Dash extends Component{

  constructor(props){
    super(props)
    this.state = {
      date : new Date(),
    }
      this.onChange = this.onChange.bind(this)
    }

    onChange(date){
      this.setState({date})
    }

    render() {
      return(

        <div className="dash-style">
          <div className="dash-card">
              <Card nameClass='card-content reinscription'
                 cardData='150' cardTitle='REINSCRIPTION'
                 cardIcon={process.env.PUBLIC_URL+'./assets/image/reinscription.png'} >
               </Card>
              <Card nameClass='card-content inscription'
                 cardData='250' cardTitle='INSCRIPTION'
                 cardIcon={process.env.PUBLIC_URL+'./assets/image/inscription.png'}>
               </Card>
              <Card nameClass='card-content effectif' cardData='150'></Card>
          </div>
          <div className="calendar" >
              <Calendar className="calendar_content" onChange={this.onChange} value ={this.state.date}/>
          </div>
        </div>
      );
    }
}

export default Dash
