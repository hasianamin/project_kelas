import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import FlightTakeOff from '@material-ui/icons/FlightTakeoff'
import {Link} from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  warna:{
      backgroundColor:'red',
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" position="static" className={classes.warna}>
        <Toolbar>
            <a href='http://localhost:3000/'>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <FlightTakeOff/>
                </IconButton>
            </a>
          <Typography variant="h6" className={classes.title}>
            JoinTrip
          </Typography>
          <Button color="inherit">Login</Button>
          <Link to='/ManageAdmin' style={{textDecoration:'none'}}>
            <Button color="inherit">Admin</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
