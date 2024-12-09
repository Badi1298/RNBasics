import { Button, StyleSheet, TextInput, View } from 'react-native';

export default function AddGoals({ goalText, setGoalText, setGoals }) {
	function goalInputHandler(text) {
		setGoalText(text);
	}

	function addGoalHandler() {
		setGoals((prev) => [...prev, goalText]);
		setGoalText('');
	}

	return (
		<View style={styles.inputContainer}>
			<TextInput
				value={goalText}
				style={styles.textInput}
				placeholder="Your course goal"
				onChangeText={goalInputHandler}
			/>
			<Button
				title="Add Goal"
				onPress={addGoalHandler}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 24,
		borderBottomWidth: 1,
		borderBottomColor: '#cccccc',
	},
	textInput: {
		borderWidth: 1,
		borderColor: '#cccccc',
		width: '70%',
		padding: 8,
		marginRight: 8,
	},
});
