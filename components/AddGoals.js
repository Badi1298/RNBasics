import { Button, Image, Modal, StyleSheet, TextInput, View } from 'react-native';

export default function AddGoals({ goalText, setGoalText, setGoals, modalVisibility, toggleModalVisibilityHandler }) {
	function goalInputHandler(text) {
		setGoalText(text);
	}

	function addGoalHandler() {
		if (!goalText) return;

		setGoals((prev) => [...prev, goalText]);
		setGoalText('');
		toggleModalVisibilityHandler();
	}

	return (
		<Modal
			animationType="slide"
			visible={modalVisibility}
			onRequestClose={() => toggleModalVisibilityHandler}
		>
			<View style={styles.inputContainer}>
				<Image
					style={styles.image}
					source={require('../assets/images/goal.png')}
				/>
				<TextInput
					value={goalText}
					style={styles.textInput}
					placeholder="Your course goal"
					onChangeText={goalInputHandler}
				/>
				<View style={styles.buttonsContainer}>
					<Button
						title="Add Goal"
						onPress={addGoalHandler}
					/>
					<Button
						title="Close Modal"
						onPress={toggleModalVisibilityHandler}
					/>
				</View>
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		rowGap: 20,
		paddingHorizontal: 20,
		backgroundColor: '#daedf4',
	},
	image: {
		width: 100,
		height: 100,
		margin: 20,
	},
	buttonsContainer: {
		flexDirection: 'row',
		columnGap: 12,
	},
	textInput: {
		borderWidth: 1,
		borderColor: '#cccccc',
		width: '100%',
		padding: 8,
	},
});
