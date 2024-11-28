import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import HomeScreen from './src/screens/HomeScreen'; // Mengimpor HomeScreen

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HomeScreen /> {/* Menampilkan layar beranda */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
});

export default App;
