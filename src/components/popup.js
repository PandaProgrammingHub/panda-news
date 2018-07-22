import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle'; 
import Button from '@material-ui/core/Button';
import classNames from 'classnames';

class Popup extends Component {
    constructor(props){
        super(props)
        
      }
    handelClick = (prop,url) => event =>{
        let isConfirm = window.confirm("Are you sure want to open "+prop+ " in new popup?");
        if(isConfirm == true){
           let newwindow=window.open(url,'name','height=500,width=500');
            if (window.focus) {newwindow.focus()}
            return false;
        }
    } 
    
    render() {
        let {classes,urlLink,linkName} = this.props;
        return (
            <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">Link Name</DialogTitle>
            <DialogContent>
              { (linkName)?
                linkName
                
                :null}
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleUploadSubmit(this.state.uploadVideo)} variant="contained" color="primary" className={classes.button}>
                Open
              </Button>
              <Button onClick={this.handleClose} variant="contained" color="default" className={classes.button}>
                Cancel
              </Button>
            </DialogActions>
          </Dialog>
        );
    }
}

export default Popup;
