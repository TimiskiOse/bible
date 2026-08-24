import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { initDatabase, getChapter } from '../database';

type Verse = {
  id: number;
  verse: number;
  text: string;
};

export default function ReaderScreen() {
  const [verses, setVerses] = useState<Verse[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBibleData = async () => {
      try {
        const db = await initDatabase();
        const data = await getChapter(db, 'Genesis', 1);
        setVerses(data as Verse[]);
      } catch (error) {
        console.error("Database error:", error);
      } finally {
        setLoading(false);
      }
    };

    loadBibleData();
  }, []);

  if (loading) {
    return (
      <View style={[styles.container, styles.centered]}>
        <ActivityIndicator size="large" color="#FFFFFF" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Genesis 1</Text>
      <FlatList
        data={verses}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.verseContainer}>
            <Text style={styles.verseNumber}>{item.verse}</Text>
            <Text style={styles.text}>{item.text}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 20,
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  verseContainer: {
    flexDirection: 'row',
    marginBottom: 15,
    paddingRight: 10,
  },
  verseNumber: {
    color: '#888888',
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 10,
    marginTop: 4,
  },
  text: {
    color: '#E0E0E0',
    fontSize: 18,
    lineHeight: 28,
    flex: 1,
  },
});