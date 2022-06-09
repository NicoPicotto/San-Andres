import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import LoginScreen from '../Screens/login';
import TaskListScreen from '../Screens/task-list';

const Stack = createNativeStackNavigator();

const MainStack = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name='LoginScreen' component={LoginScreen} />
				<Stack.Screen name='TaskListScreen' component={TaskListScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default MainStack;
