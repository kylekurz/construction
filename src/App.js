import React from 'react';
import logo from './logo.svg';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  grid: {
    display: 'flex',
    padding: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    display: 'flex',
    flexDirection: 'column',
  },
  control: {
    padding: theme.spacing(2),
  },
  cardHeader: {
    backgroundColor: theme.palette.grey[200],
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <header className="App-header">
        <Card className={classes.paper} raised>
          <CardHeader
            title='Under Construction'
            titleTypographyProps={{ align: 'center' }}
            subheaderTypographyProps={{ align: 'center' }}
            className={classes.cardHeader}
            />
          <CardContent>
              <Typography variant="subtitle1" align="center">
              This site is currently under construction. Please check back soon.
              </Typography>
          </CardContent>
        </Card>
      </header>
    </div>
  );
}

export default App;
