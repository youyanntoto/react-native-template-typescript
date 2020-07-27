import React from 'react'
import {Image, SafeAreaView, StyleSheet} from 'react-native'

export default function SplashScreen() {
	return (
		<SafeAreaView style={styles.root}>
			<Image style={styles.appIcon} source={require('../assets/logo.png')}/>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	root: {
		backgroundColor: '#fbf2ff',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	appIcon: {
		resizeMode: 'contain',
		width: 160,
		height: 160
	}
})
