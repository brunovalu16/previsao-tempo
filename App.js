import React from 'react';
import { StatusBar } from 'expo-status-bar';

import Routes from './src/routes';
import { WeatherProvider } from './src/context/WeatherContext';



export default function App() {
  return (
    <>

      {/* <Home /> <ListCity />  <List /> <ListHome /> */}
      
      <WeatherProvider>
        <StatusBar
          barStyle='light-content'
          backgroundColor='#272271'
          translucent
        />
        <Routes />
      </WeatherProvider>
      
      
     </>   

      
     
     
      
      
 

    

  );
}
