import { FlatList, StyleSheet, Text, View } from 'react-native';

import GoalItem from './GoalItem';

export default function GoalsList({ goals, setGoals }) {
	const onDeleteGoal = (index) => {
		setGoals((prev) => prev.filter((_, i) => index !== i));
	};

	return (
		<View style={styles.goalsContainer}>
			{goals.length === 0 && <Text>Start adding goals...</Text>}
			<FlatList
				data={goals}
				renderItem={({ item, index }) => (
					<GoalItem
						item={item}
						index={index}
						onDeleteGoal={onDeleteGoal}
					/>
				)}
				keyExtractor={(item) => item}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	goalsContainer: {
		flex: 6,
		paddingTop: 16,
	},
	item: {
		backgroundColor: 'teal',
		padding: 20,
		borderRadius: 6,
		marginBottom: 10,
	},
	title: {
		fontSize: 16,
		color: 'white',
	},
});
