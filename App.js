
import React, {useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { observer } from 'mobx-react-lite';

import { Item_Style } from './global/global_styles.js'

import {Fun_navigation_stack__main_window} from './function/Navigator.js'





export default App = observer( () => 
{
  const { style_StatusBar, style_SafeAreaView } = Item_Style



  return(
    <SafeAreaView style={ [styles.container, {backgroundColor: style_SafeAreaView}] }>

      <Fun_navigation_stack__main_window />

      <StatusBar style={style_StatusBar} />
    </SafeAreaView>
  )
  
} )





const styles = StyleSheet.create(
{
  container: 
  {
    flex: 1,
  }
  ,

});
