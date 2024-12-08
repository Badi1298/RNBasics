import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={{ color: 'green', padding: 16 }}>Aaaaaaaaaaa</Text>
            <Button title="This is a button" />
            <View style={styles.innerContainer}>
                <Text style={{ color: 'green' }}>Aaaaaaaaaaa</Text>
                <Text style={{ color: 'red' }}>Aaaaaaaaaaa</Text>
                <Text style={{ color: 'blue' }}>Aaaaaaaaaaa</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    innerContainer: {
        display: 'flex',
        flexDirection: 'row',
        columnGap: 16,
        marginTop: 20,
    },
});
