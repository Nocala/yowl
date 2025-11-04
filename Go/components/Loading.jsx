import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { theme } from '../constants/theme'
import API_CONFIG from '../config/api'

const Loading = ({ size = "large", color = theme.colors.blueDark }) => {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size={size} color={color} />
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({})