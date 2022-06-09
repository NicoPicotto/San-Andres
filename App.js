import { SafeAreaView } from 'react-native';
import { styles } from './styles';
import MainStack from './src/Navigation/MainStack';
import React from 'react';


const App = () => {
	return (
		<SafeAreaView style={styles.container}>
			<MainStack />
		</SafeAreaView>
	);
};

export default App;
