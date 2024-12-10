import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function GoalItem({ item, index, onDeleteGoal }) {
	return (
		<View style={styles.item}>
			<Pressable
				style={({ pressed }) => {
					pressed && styles.pressedItem;
				}}
				android_ripple={{ color: '#dddddd' }}
				onPress={() => onDeleteGoal(index)}
			>
				<Text style={styles.title}>{item}</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	item: {
		backgroundColor: 'teal',
		borderRadius: 6,
		marginBottom: 10,
	},
	pressedItem: {
		opacity: 0.5,
	},
	title: {
		fontSize: 16,
		padding: 20,
		color: 'white',
	},
});
