import React from 'react';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

interface RatingProps {
  title: String;
};

const useStyles = makeStyles({
    root: {
      width: 200,
      display: 'flex',
      alignItems: 'center',
    },
    title: {

    }
  });

  const Ratings = ({title}: RatingProps) => {
    const classes = useStyles();
  
    return (
      <div>
        <Typography variant="h6" className={classes.title}>
          {title}
        </Typography>
        <Rating defaultValue={2.5} precision={0.5} size="large" className={classes.root}/>
      </div>
    );
  }

export default Ratings;