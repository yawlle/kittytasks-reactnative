/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';

import commonStyles from "../commonStyles"
import todayImage from '../../assets/imgs/today.png';

import moment from 'moment';
import 'moment/locale/pt-br';

import Task from '../components/Task'


export default class Tasklist extends Component {
  render() {
    const today = moment().locale('pt-br').format('ddd, D [de] MMMM');
    return (
      <SafeAreaView style={[styles.container]}>
        <StatusBar backgroundColor="#CA3D33" />
        <ImageBackground source={todayImage} style={styles.background}>
          <View style={styles.titleBar}>
            <Text style={styles.title}>Hoje</Text>
            <Text style={styles.subtitle}>{today}</Text>
          </View>
        </ImageBackground>
        <View style={styles.taskList}>
          <Task desc="Comprar Livro" estimateAt={new Date()} doneAt={new Date()} />
          <Task desc="Ler Livro" estimateAt={new Date()} doneAt={null} />

        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 3,
  },
  taskList: {flex: 7},
  titleBar: {
    flex: 1,
    justifyContent: 'flex-end',

  },
  title: {
    fontFamily: commonStyles.fontFamily,
    fontSize: 60,
    color: commonStyles.colors.secondary,
    marginLeft: 10,
    
  },
  subtitle:{
    fontFamily: commonStyles.fontFamily,
    color: commonStyles.colors.secondary,
    fontSize:20,
    marginLeft: 10,
    marginBottom: 6,

  }
});
