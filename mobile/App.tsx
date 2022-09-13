import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface ButtonPros {
  tilte: string;
}

function Button({tilte}: ButtonPros) {
  return (
    <TouchableOpacity>
      <Text style={styles.title}>
      {tilte}
      </Text>
    </TouchableOpacity>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Button  tilte='Send 01' />
      <Button tilte='Send 02' />
      <Button tilte='Send 03' />
      <StatusBar style="auto" />
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
  title: {
    color: '#000000',
    fontSize: 22,
    fontWeight: '900'
  }
});