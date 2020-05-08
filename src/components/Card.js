import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const MediaCard = props => {

    const {cases, deaths, recovered} = props;

  const classes = useStyles();

  return (
    

    <Grid container direction="column" justify="space-between" alignItems="stretch">
        <Grid item direction="column">
            <Card className={classes.root}>
            <CardActionArea>
                
                <CardContent>
                <Typography gutterBottom variant="h4" component="h1">
                    Total Cases :
                </Typography>
                <Typography variant="h5" color="textSecondary" component="h2">
                    {cases}
                </Typography>

                <Typography gutterBottom variant="h4" component="h1">
                    Deaths :
                </Typography>
                <Typography variant="h5" color="textSecondary" component="h2">
                    {deaths}
                </Typography>

                <Typography gutterBottom variant="h4" component="h1">
                    Recovered :
                </Typography>
                <Typography variant="h5" color="textSecondary" component="h2">
                    {recovered}
                </Typography>
                
                </CardContent>
            </CardActionArea>
            </Card>
        </Grid>
        
    </Grid>
  );
}

export default MediaCard;