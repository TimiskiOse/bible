import * as SQLite from 'expo-sqlite';

export const initDatabase = async () => {
  // Open or create the database file
  const db = await SQLite.openDatabaseAsync('bible.db');
  
  // Create our verses table and insert some starter data
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS verses (
      id INTEGER PRIMARY KEY NOT NULL, 
      book TEXT, 
      chapter INTEGER, 
      verse INTEGER, 
      text TEXT
    );
    
    INSERT OR IGNORE INTO verses (id, book, chapter, verse, text) 
    VALUES (1, 'Genesis', 1, 1, 'In the beginning God created the heaven and the earth.');
    
    INSERT OR IGNORE INTO verses (id, book, chapter, verse, text) 
    VALUES (2, 'Genesis', 1, 2, 'And the earth was without form, and void; and darkness was upon the face of the deep. And the Spirit of God moved upon the face of the waters.');
    
    INSERT OR IGNORE INTO verses (id, book, chapter, verse, text) 
    VALUES (3, 'Genesis', 1, 3, 'And God said, Let there be light: and there was light.');
  `);
  
  return db;
};

export const getChapter = async (db: SQLite.SQLiteDatabase, bookName: string, chapterNum: number) => {
  // Fetch all verses for a specific book and chapter
  const allRows = await db.getAllAsync(
    'SELECT * FROM verses WHERE book = ? AND chapter = ? ORDER BY verse ASC',
    [bookName, chapterNum]
  );
  return allRows;
};