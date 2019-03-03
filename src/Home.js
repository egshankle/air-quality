import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

function Home(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        {/* <Grid item xs={12}>
          <Paper className={classes.paper}>Inhale</Paper>
        </Grid> */}
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/40/Paolo_Bettini_profile.jpg"
              className="user-image"
              alt="profile"
            />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <div className="user-info">
              <h3 className="username">Paulo</h3>
              <p className="user-info">Morningside Heights</p>
              <p className="user-info">Cyclist</p>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            {/* <h1 className="rank-number">1</h1> */}
            <Typography component="h2" variant="h2" gutterBottom>
              1
            </Typography>
            <h3 className="current-rank-text">Current Rank</h3>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <h1 className="map-text">My Measurements</h1>

            <iframe
              src="https://www.google.com/maps/d/embed?mid=1GkWSW-Z6B-vV-a0tkTYqh6SGeqP-8zzx"
              width="640"
              height="480"
            />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            {/* <h1 className="point-number">300</h1> */}
            <Typography variant="h2" gutterBottom>
              300
            </Typography>
            <h3 className="point-text">Current Points</h3>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <Typography variant="h2" gutterBottom>
              20
            </Typography>
            {/* <h1 className="measurements-number">20</h1> */}
            <h3 className="measurements-text">Measurements Taken</h3>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <Typography variant="h2" gutterBottom>
              5
            </Typography>
            {/* <h1 className="lifetime-rank-number">5</h1> */}
            <h3 className="liftime-rank-text">Lifetime Rank</h3>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);

// class Home extends React.Component {
//   render() {
//     return (
//       <div className="homepage">
//         <div className="profile-info">
//           <img
//             src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAOVBMVEXk5ueutLepsLPo6uursbXJzc/p6+yvtbji5OWorrK2u77Z3N24vcDO0dPg4uPAxcfMz9HDx8rU19hwHDZQAAAFQklEQVR4nO2d25qrIAyFhUA9oVbf/2G31rYzbe0egaQEm/9q5q7rCyQxwrIoBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEE4IABQ9O3ULUzt5d8DMauZrFO61ubC/Idy41QdRSX050Yb9YLWje3zFwnQbcpbMbrpiqw1AljzVt5N5JixRrDvw/dLY52rRpjUDn1rHLsMJULh9D59F41Nn5tGmHbG767xnJdEGD0CuKJdVhIbzwheoqiq1D97N5W/vFVjm0kY+4AArug8JIYLzERiFSFwkZj69/9NjL5FIvd0A02kQqV4r1MYotbogmFdF2HyLvSvaMtYYoUgUKmab7YBhyFQqZJrEKFDCeG8Fdmu0+gsc4NpyYARTaHimU+rGk0gz9YGBjyBSjUMg9gjhpBlEDF34QLDnYgrUNV9akFPQIes0IzMgojwTPEMM4U9Ujvzg55Sa3oALPIinRlYBZFgkSpzSq3qAfRFyu0hyneGvwdjU6v6BYz4AnkV/VNJodAwUgioPekNzaitwa+GC4ZRRaRINLyGGZZCIKeaT5NKOSVTrCniM3ymihQ9Gy+FNOVwJrWwO1QKTWphd4BGoCj8IMdfpcfPNFTVgs8w6gsqfvzb+034dG3H77y/4OkJ973TXSGjJ+DjTzG+YBKF+v73BqNUSpRqOE2EkQ5DPcJrqk/yZobTIv2Ct2vHf0NKsEx5LdJZ4fnoJxXQT5twamhWsIs+q3K/gptrGJ76+oKTe6iPUBxDiDvLYLgLL6DtRHbH9q6gnd5jWAuvoDU2XAViVQyeaWYF5cYFpxHbKxj5lGUp/AGiZ1J8Xji9I1Igv477hZhrwNyGM29oY246T7w34Qq0wQk1D4FF+EKtc7irfiXENUJl5Bqx1MUA54/UP9oP7y6c9f3mTaBqfBx4yuwceIpLGPfGMb8ArgCMe5ywlB4ydcIqFrOo8U83MzPkuEB/gKJr6v840pU23/jdAOjtpu3eLG9s83cVvABQTWNTL8aQ68LUdV0O3QFME38Dp1PRTt3Z2nM3tRWcDqXuK4ANUv8mFOBqPXu2w+CaplxpGueG0c6rtZ9Xa7ZK59/eT9Y1SuvFenajEM4ZR5vSjV1b5bYr57C03VDW7wvhg9TFftfZbEx3L57Bjd7Vrj2gdQ4FBKC1TodPhecmYJj4NjmzvLH0j91rLF1XMRQJp3bY/bD0F6ZmZ6AMlVW4R4ZM7SY2exJgcvGL8xWtLIvVOj8elSS3gNWSeIbk88Udj7hxaJdUIxS7DLsjNTZtKoMM2GdIjqIxSRw9RmnxGt3nZznQkuWXbY3jZ2sHFP5T+0iM+uR7qROGTak32n2qz/FzzEfV+JkPDKD4zIZKHD4h0N8xHxGjqAsHVGHvPvHQtN9QgJhTCFgSKe9hQEdyC88TU9IJTLoFf0PU4QS8m6eC5jMR4NLvwTsUElkJpDh6A6mrxDPYEplFcAH3Yx9UpglRGMRzmhT3JzHAEzhxKPQboJ2XpvEMRMAgNXDxR7fJwHlgZJllbmCcCk/5wLsDjK3IOIIK4/oJlUESGtHrtGVaKH6IXKeM8+iNOGcC9O8BUBBlTQCs8+iVmO97cu1Hn4gIImQhMCKIWezChWBvvgwS6UpwOg2/ofVpAq/v0xh4kRDa2GSyC1Vwd0pjhkhDUOuW0SIN/Ngelf0xCaYLUMh2OrNJyMQml3K/EvBhoay2YZDfC5mDNQ0Bbq40pqt0+Btl5pVoQlIN7yHiK/41P69UqgJ8iWyts6L2Fbh924wz/goFQRAEQRAEQRAEQRCET/IP1+RU5rUCFhYAAAAASUVORK5CYII="
//             className="user-image"
//             alt="profile"
//           />
//           <h3 className="username">Username</h3>
//           <p className="user-info">Area</p>
//           <p className="user-info">Activity/title</p>
//         </div>
//         <div className="current-rank">
//           <h3 className="current-rank-text">Current Rank:</h3>
//           <h1 className="rank-number">1</h1>
//         </div>
//         <div className="current-points">
//           <h3 className="point-text">Current Points:</h3>
//           <h1 className="point-number">300</h1>
//         </div>
//         <div className="measurements">
//           <h1 className="measurements-number">20</h1>
//           <h3 className="measurements-text">Measurements Taken</h3>
//         </div>
//         <div className="lifetime-rank">
//           <h1 className="lifetime-rank-number">5</h1>
//           <h3 className="liftime-rank-text">Lifetime Rank</h3>
//         </div>
//         <div className="map">
//           <img
//             className="map-img"
//             alt="map of measurements"
//             src="https://upload.wikimedia.org/wikipedia/commons/0/04/NYC_subway-4D.svg"
//           />
//           <h3 className="map-text">Map of Measurements</h3>
//         </div>
//       </div>
//     );
//   }
// }

// export default Home;
