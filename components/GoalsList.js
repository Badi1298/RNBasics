import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';

export default function GoalsList({ goals, setGoals }) {
	function deleteGoalHandler(index) {
		setGoals((prev) => prev.filter((_, i) => index !== i));
	}

	return (
		<View style={styles.goalsContainer}>
			{goals.length === 0 && <Text>Start adding goals...</Text>}
			<FlatList
				data={goals}
				renderItem={({ item, index }) => (
					<Pressable onPress={() => deleteGoalHandler(index)}>
						<View style={styles.item}>
							<Text style={styles.title}>{item}</Text>
						</View>
					</Pressable>
				)}
				keyExtractor={(item) => item}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	goalsContainer: {
		flex: 6,
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
