import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
 
const styles = theme => ({
    '@global': {
      body: {
        backgroundColor: theme.palette.common.white,
      },
    },
    appBar: {
      position: 'relative',
    },
    toolbarTitle: {
      flex: 1,
    },
    layout: {
      width: 'auto',
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3,
      [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
        width: 900,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    heroContent: {
      maxWidth: 600,
      margin: '0 auto',
      padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
    },
    cardHeader: {
      backgroundColor: theme.palette.grey[200],
    },
    cardSensors: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'baseline',
      marginBottom: theme.spacing.unit * 2,
    },
    cardActions: {
      [theme.breakpoints.up('sm')]: {
        paddingBottom: theme.spacing.unit * 2,
      },
    },
    cardMedia: {
        height: 0,
        paddingTop: '56.25%', // 16:9
      },
    footer: {
      marginTop: theme.spacing.unit * 8,
      borderTop: `1px solid ${theme.palette.divider}`,
      padding: `${theme.spacing.unit * 6}px 0`,
    },
  });

const tiers = [
    {
        title: 'DIY',
        image: 'images/diy.jpg',
        price: '?',
        description: [
        'AirCasting is a platform for recording, mapping, and sharing health and environmental data using your smartphone.',
        ],
        buttonText: 'Get started',
        buttonVariant: 'outlined',
    },
    {
        title: 'Appmosfera',
        image: 'images/appmosfera.jpg',
        price: '180',
        description: [
        'Simply designed and compatible with all bicycles to update your smartphone in real-time. Can also be built as a kit.',
        ],
        buttonText: 'Buy',
        buttonVariant: 'outlined',
    },
    {
        title: 'AirBeam',
        image: 'images/AirBeam.jpg',
        price: '259',
        description: ['AirBeam is a wearable air monitor that maps, graphs, and crowdsources your pollution exposures in real-time.'],
        buttonText: 'Buy',
        buttonVariant: 'outlined',
    },
];

function Sensors(props) {
    const { classes } = props;

    return (
      <React.Fragment>
        <CssBaseline />
        <main className={classes.layout}>
          {/* Hero unit */}
          <div className={classes.heroContent}>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                Sensors
            </Typography>
            <Typography variant="h6" align="center" color="textSecondary" component="p">
                Sensors are available at a variety of price points 
            </Typography>
          </div>
          {/* End hero unit */}
          <Grid container spacing={40} alignItems="flex-end">
            {tiers.map(tier => (
              // Enterprise card is full width at sm breakpoint
              <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
                <Card>
                  <CardHeader
                    title={tier.title}
                    subheader={tier.subheader}
                    titleTypographyProps={{ align: 'center' }}
                    subheaderTypographyProps={{ align: 'center' }}
                    className={classes.cardHeader}
                  />
                  <CardMedia
                    className={classes.cardMedia}
                    image={`${process.env.PUBLIC_URL}/${tier.image}`}
                    title="Image title"
                  />
                  <CardContent>
                    <div className={classes.cardSensors}>
                      <Typography component="h2" variant="h3" color="textPrimary">
                        ${tier.price}
                      </Typography>
                      <Typography variant="h6" color="textSecondary">
                      </Typography>
                    </div>
                    {tier.description.map(line => (
                      <Typography variant="subtitle1" align="center" key={line}>
                        {line}
                      </Typography>
                    ))}
                  </CardContent>
                  <CardActions className={classes.cardActions}>
                    <Button fullWidth variant={tier.buttonVariant} color="primary">
                      {tier.buttonText}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </main>
      </React.Fragment>
    );
  }

Sensors.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(Sensors);
