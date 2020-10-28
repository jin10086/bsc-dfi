import React from 'react';
import PropTypes from "prop-types";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from "components/CustomButtons/Button.js";

export default function CustomDialog(props){
  return (
    <Dialog
      open={props.open}
      onClose={()=>{
        props.handleClose();
        props.disagreeJson.callback()
      }}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{props.dialogTitle}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">{props.dialogContent}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button 
          onClick={()=>{
            props.disagreeJson.callback()
            props.handleClose();
          }} 
          color="primary">
          {props.disagreeJson.content}
        </Button>
        <Button 
          onClick={()=>{
            props.agreeJson.callback();
            props.handleClose();
          }} 
          color="primary" 
          autoFocus>
          {props.agreeJson.content}
        </Button>
      </DialogActions>
    </Dialog>
  )
}

CustomDialog.defaultProps = {
  open:false,
  dialogTitle:'Alert',
  dialogContent:'dialogContent',
  agreeJson:{
    content:'Agree',
    callback:()=>{}
  },
  disagreeJson:{
    content:'Disagree',
    callback:()=>{}
  },
  handleClose:()=>{}
}

CustomDialog.propTypes = {
  open:PropTypes.bool,
  dialogTitle:PropTypes.string,
  dialogContent:PropTypes.string,
  agreeJson:PropTypes.object,
  disagreeJson:PropTypes.object,
  handleClose:PropTypes.func,
}