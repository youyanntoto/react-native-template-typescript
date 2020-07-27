import React, {useEffect, useState} from 'react'
import SplashScreen from 'react-native-splash-screen'

import {RootContainer} from './src/navi'

export default function App() {
	const [initialized, setInitialized] = useState<boolean>(false)

	useEffect(() => {
		SplashScreen.hide()
		// TODO アプリの初期化処理を追加
		// ex. ログイン状態確認、ローカルDBの初期化
		setTimeout(() => setInitialized(true), 1000)
	}, [])

	return (
		<RootContainer initialized={initialized}/>
	)
};
