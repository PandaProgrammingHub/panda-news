import React, { Component } from 'react';
import { Player } from 'video-react';
import Moment from 'react-moment';
import 'moment-timezone';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';


class Middle extends Component {

  constructor(props){
    super(props)
    this.state = {
      uploadVideo:{
        description:'Demo Video 3',
        posterUrl:'https://upload.wikimedia.org/wikipedia/commons/e/e8/Elephants_Dream_s5_both.jpg',
        videoUrl:'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
        default:true
      },
     }
  }

  handelClick = (prop,url) => event =>{
    this.setState({
        urlLink:url,
        linkName:prop,
        isPopup:true
    });
  } 
  handelOpenNewPopup = prop => event => {
        let newwindow=window.open(prop,'name','height=600,width=700');
          if (window.focus) {newwindow.focus()}
          this.handleClose();
  }
  handleClose = () =>{
      this.setState({
          isPopup:false
      });
  }

    render() {
        const toDay = new Date();
        return (
          <div className="w3-col m9">
          <div className="w3-row-padding">
            <div className="w3-col m12">
              <div className="w3-card w3-round w3-white">
                <div className="w3-container w3-padding">
                <h4>Headlines Today <Moment format="(dddd, MMMM DD YYYY)" date={toDay} /> !!!</h4>
                </div>
              </div>
            </div>
          </div>
          
          <div 
            className="w3-container divLink w3-card w3-white w3-round w3-margin" 
            onClick={this.handelClick("Sintel Wiki","https://en.wikipedia.org/wiki/Sintel")}
          >
            <br />
            <img src="https://www.w3schools.com/w3images/avatar5.png" alt="Avatar" className="w3-left w3-circle w3-margin-right" style={{"width":"60px"}} />
            <span className="w3-right w3-opacity">16 min</span>
            <h4>Jane Doe</h4><br />
            <hr className="w3-clear" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div className="w3-row-padding" style={{"margin":"0 -16px"}}>
            <Player
                playsInline
                autoPlay = {true}
                poster={this.state.uploadVideo.posterUrl}
                src={this.state.uploadVideo.videoUrl}
            />
            </div>
          </div> 
          <div 
            className="w3-container divLink w3-card w3-white w3-round w3-margin" 
            onClick={this.handelClick("India national cricket team Wiki","https://en.wikipedia.org/wiki/India_national_cricket_team")}
          >
            <br />
            <img src="https://www.w3schools.com/w3images/avatar2.png" alt="Avatar" className="w3-left w3-circle w3-margin-right" style={{"width":"60px"}} />
            <span className="w3-right w3-opacity">1 min</span>
            <h4>John Doe</h4><br />
            <hr className="w3-clear" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <div className="w3-row-padding" style={{"margin":"0 -16px"}}>
                <div className="w3-half">
                  <img src="https://media.indiatimes.in/media/content/2018/Jun/sachin_tendulkar_biopic_sports_1530340709_725x725.jpg" style={{"width":"100%"}} alt="Northern Lights" className="w3-margin-bottom" />
                </div>
                <div className="w3-half">
                  <img src="https://media.indiatimes.in/media/content/2017/Dec/5_1513948369.jpg" style={{"width":"100%"}} alt="Nature" className="w3-margin-bottom" />
              </div>
            </div>            
          </div>    
          <div 
            className="w3-container divLink w3-card w3-white w3-round w3-margin" 
            onClick={this.handelClick("Rs 1,484 Crore Have Been Spent On PM Modi's 84 Foreign Trips Since He Took Office In 2014","https://www.indiatimes.com/news/india/rs-1-484-crore-have-been-spent-on-pm-modi-s-84-foreign-trips-since-he-took-office-in-2014_-349728.html")}
          >
            <br />
            <img src="https://www.w3schools.com/w3images/avatar6.png" alt="Avatar" className="w3-left w3-circle w3-margin-right" style={{"width":"60px"}} />
            <span className="w3-right w3-opacity">32 min</span>
            <h4>Angie Jane</h4><br />
            <hr className="w3-clear" />
            <p>Have you seen this?</p>
            <img src="https://media.indiatimes.in/media/content/2018/Jul/modi_1532085104_725x725.jpg" alt="modi" style={{"width":"100%"}} className="w3-margin-bottom" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            
          </div> 

          {(this.state.isPopup)?
                <Dialog
            open={this.state.isPopup}
            onClose={this.handleClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title"></DialogTitle>
            <DialogContent>
              {this.state.linkName}
             : <br />
             <strong> {this.state.urlLink} </strong>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handelOpenNewPopup(this.state.urlLink)} variant="contained" color="primary">
                Open
              </Button>
              <Button onClick={this.handleClose} variant="contained" color="default">
                Cancel
              </Button>
            </DialogActions>
          </Dialog>
                :null}



        </div>
        );
    }

}

export default Middle;
