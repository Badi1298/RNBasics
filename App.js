import { useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';

import AddGoals from './components/AddGoals';
import GoalsList from './components/GoalsList';

export default function App() {
	const [goals, setGoals] = useState([]);
	const [goalText, setGoalText] = useState('');
	const [modalVisibility, setModalVisibility] = useState(false);

	const toggleModalVisibilityHandler = () => {
		setModalVisibility(!modalVisibility);
	};

	return (
		<View style={styles.appContainer}>
			<Button
				title="Open Add Goal Modal"
				color="teal"
				onPress={toggleModalVisibilityHandler}
			></Button>
			<AddGoals
				goalText={goalText}
				setGoals={setGoals}
				setGoalText={setGoalText}
				modalVisibility={modalVisibility}
				toggleModalVisibilityHandler={toggleModalVisibilityHandler}
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
