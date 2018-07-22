import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';


class Rightbar extends Component {
    constructor(props){
        super(props)
        this.state = {
          urlLink:'',
          linkName:'',
          isPopup:false
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
        let {classes} = this.props;
        return (
            <div className="w3-col m3">
                <div className="w3-card w3-round w3-white w3-center">
                <div className="w3-container">
                <p><strong>More Headlines</strong></p>
                <div className="divLink" onClick={this.handelClick("Rahul Gandhi Wiki","https://en.wikipedia.org/wiki/Rahul_Gandhi")}>
                <img src="https://media.indiatimes.in/media/content/2018/Jul/rahul_1532078944_300x450.jpg" alt="Steak" style={{"width":"100%"}} />
                <p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p>
                </div>
                <hr className="w3-clear" />
                <div className="divLink" onClick={this.handelClick("Narendra Modi Wiki","https://en.wikipedia.org/wiki/Narendra_Modi")}>
                <img src="https://media.indiatimes.in/media/content/2018/Jul/modi_1532083673_300x450.jpg" alt="Cherries" style={{"width":"100%"}} />
                <p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p>
               </div>
                <hr className="w3-clear" />
                <div className="divLink" onClick={this.handelClick("AB de Villiers Wiki","https://en.wikipedia.org/wiki/AB_de_Villiers")}>
                <img src="https://media.indiatimes.in/media/content/2018/May/ab_de_villierspti_1526619061_300x450.jpg" alt="Steak" style={{"width":"100%"}} />
                <p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p>
                </div>
                <hr className="w3-clear" />
                <div className="divLink" onClick={this.handelClick("Aadhaar Card Wiki","https://en.wikipedia.org/wiki/Aadhaar")}>
                <img src="https://media.indiatimes.in/media/content/2018/Mar/you_have_now_time_till_june_30_to_link_your_aadhaar_with_welfare_schemes_1522308806_300x450.jpg" alt="Steak" style={{"width":"100%"}} />
                <p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p>
                </div>
                </div>
                </div>
                <br />
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

export default Rightbar;
