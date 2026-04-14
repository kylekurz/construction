import React from 'react';
import './App.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Card
          raised
          sx={{
            p: 2,
            color: 'text.secondary',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <CardHeader
            title="Under Construction"
            slotProps={{
              title: { align: 'center' },
            }}
            sx={{ bgcolor: 'grey.200' }}
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
