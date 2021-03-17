import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';
import ProfilePic from '../img/profile.jpg';
import ChatPic from '../img/CHAT.png';
import DiscoveryPic from '../img/Discovery.png';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
      toolbar:{
          backgroundColor: '#DEB887'
      },
    profile: {
      position: 'absolute',
      right: 10,
      width: theme.spacing(7),
      height: theme.spacing(7)
    },
    chat:{
        position: 'absolute',
        left: 10,
        width: theme.spacing(6.5),
      height: theme.spacing(6.5)
    },
    discovery:{
        position: 'absolute',
        left: 60,
        width: theme.spacing(6.5),
      height: theme.spacing(6.5)
    },
    title:{
        position: 'absolute',
        right: 80,
        fontSize: 30
    }
  }),
);

const NavBar = () => {
    const classes = useStyles();

    return (
        <div>
            <AppBar position="static">
                <Toolbar className={classes.toolbar}>
                    <Avatar className={classes.chat} src={ChatPic}/>
                    <Avatar className={classes.discovery} src={DiscoveryPic}/>
                    <div className={classes.title}>Good Mornning Ofir!</div>
                    <Avatar className={classes.profile} src={ProfilePic}/>
                </Toolbar>
            </AppBar>
        </div>
    )
};

export default NavBar;