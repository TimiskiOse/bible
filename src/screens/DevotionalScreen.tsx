import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ReaderScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Genesis 1</Text>
      <Text style={styles.text}>1 In the beginning God created the heaven and the earth.</Text>
      {/* We will load the actual database here in Phase 2 */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // Dark Mode background
    padding: 20,
  },
  title: {
    color: '#FFFFFF', // White text
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    color: '#E0E0E0', // Slightly off-white for easier reading
    fontSize: 18,
    lineHeight: 28,
  },
});