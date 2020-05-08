import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import Divider from '@material-ui/core/Divider';
// import ListItemText from '@material-ui/core/ListItemText';
// import Typography from '@material-ui/core/Typography';

// const useStyles = makeStyles(theme => ({
//   root: {
//     width: '100%',
//     maxWidth: '36ch',
//     backgroundColor: theme.palette.background.paper,
//   },
//   inline: {
//     display: 'inline',
//   },
// }));

// const AlignItemsList = props => {
//     const {country, totalCases, casesReportedToday, deathsReportedToday, active, totalDeaths, recovered, critical} = props;
//   const classes = useStyles();

//   return (
//     <List className={classes.root}>
//       <ListItem alignItems="flex-start">
//         <ListItemText
//           primary={country} //country name
//           secondary={
//             <React.Fragment>
//               <Typography
//                 component="span"
//                 variant="body2"
//                 className={classes.inline}
//                 color="textPrimary"
//               >
//                 {/* total cases | reportedToday | Active*/}
//                 Total Cases : {totalCases} || Today : {casesReportedToday} || Active : {active}
//               </Typography>
//               <br />

//               <Typography
//                 component="span"
//                 variant="body2"
//                 className={classes.inline}
//                 color="textPrimary"
//               >
//                 {/* Deaths  | ReportedToday */}
//                 Total Deaths : {totalDeaths} || Today : {deathsReportedToday}
//               </Typography>
//               <br />

//               <Typography
//                 component="span"
//                 variant="body2"
//                 className={classes.inline}
//                 color="textPrimary"
//               >
//                 {/* Recovered  | Critical */}
//                 Recovered : {recovered} || Critical : {critical}
//               </Typography>
//             </React.Fragment>
//           }
//         />
//       </ListItem>
//       <Divider variant="inset" component="li" />  
//     </List>
//   );
// }

// export default AlignItemsList;

const AlignItemsList = props => {
  const {country, totalCases, casesReportedToday, deathsReportedToday, active, totalDeaths, recovered, critical} = props;

  return(
    <React.Fragment>
      <div className="container my-5">
        <div className="row my-5">
          <div className="col-md-12 my-1">
            <div className="card">
              <div className="view overlay">
              </div>
              <div className="card-body">
                <h2 className="h3">{country}</h2> <br />
                <h4 className=" card-subtitle my-3">Total Cases : {totalCases} || Today : {casesReportedToday} || Active : {active}</h4>
                <h4 className=" card-subtitle my-3">Total Deaths : {totalDeaths} || Today : {deathsReportedToday}</h4>
                <h4 className=" card-subtitle my-3">Total Recovered : {recovered} || Critical : {critical}</h4>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );

}

export default AlignItemsList;