import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert } from 'react-native';
import CustomButton from './src/components/CustomButton';

export default function App() {
  const handlePress = () => {
    Alert.alert('Button Pressed!', 'You tapped the custom button.');
  };

  return (
    <View style={styles.container}>
      <CustomButton title="Click Me" onPress={handlePress} />

      <CustomButton
        title="Disabled"
        onPress={() => {}}
        backgroundColor="#ccc"
        textColor="#000"
        disabled
        style={{ marginTop: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
