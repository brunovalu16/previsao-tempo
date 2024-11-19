import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


import Home from './src/pages/Home/index';
import ListCity from './src/pages/ListCity/index';
import List from './src/components/List';
import ListHome from './src/components/ListHome';
import  Api  from './src/config/api';



export default function App() {
  return (
    <>

      {/* <Home /> <ListCity />  <List /> <ListHome /> */}
      
      <StatusBar barStyle="light-content" backgroundColor="#252072" />
      <ListCity /> 
      
     </>   

      
     
     
      
      
 

    

  );
}
