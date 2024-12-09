import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import GoalsList from './components/GoalsList';
import AddGoals from './components/AddGoals';

export default function App() {
	const [goalText, setGoalText] = useState('');
	const [goals, setGoals] = useState([]);

	return (
		<View style={styles.appContainer}>
			<AddGoals
				goalText={goalText}
				setGoalText={setGoalText}
				setGoals={setGoals}
			/>
			<GoalsList
				goals={goals}
				setGoals={setGoals}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		paddingTop: 36,
		paddingHorizontal: 16,
	},
});
