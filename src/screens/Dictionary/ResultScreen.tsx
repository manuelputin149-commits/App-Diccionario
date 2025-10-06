import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

type Definition = {
  definition: string;
  example?: string;
  synonyms?: string[];
  antonyms?: string[];
};

type Meaning = {
  partOfSpeech: string;
  definitions: Definition[];
};

type WordData = {
  word: string;
  phonetic?: string;
  phonetics?: Array<{ text?: string; audio?: string }>;
  meanings: Meaning[];
  sourceUrls?: string[];
};

export function ResultScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const { word } = route.params as { word: string };
  
  const [loading, setLoading] = useState(true);
  const [wordData, setWordData] = useState<WordData | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchWordData();
  }, [word]);

  const fetchWordData = async () => {
    setLoading(true);
    setError('');
    
    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word.toLowerCase()}`
      );
      
      if (!response.ok) {
        throw new Error('Palabra no encontrada');
      }
      
      const data = await response.json();
      setWordData(data[0]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al buscar la palabra');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#0891b2" />
        <Text style={styles.loadingText}>Buscando...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.errorIcon}>❌</Text>
        <Text style={styles.errorText}>{error}</Text>
        <TouchableOpacity 
          style={styles.retryButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.retryButtonText}>Intentar de nuevo</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (!wordData) return null;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.header}>
        <Text style={styles.word}>{wordData.word}</Text>
        {wordData.phonetic && (
          <Text style={styles.phonetic}>{wordData.phonetic}</Text>
        )}
      </View>

      {wordData.meanings.map((meaning, index) => (
        <View key={index} style={styles.meaningContainer}>
          <Text style={styles.partOfSpeech}>{meaning.partOfSpeech}</Text>
          
          {meaning.definitions.slice(0, 3).map((def, defIndex) => (
            <View key={defIndex} style={styles.definitionContainer}>
              <Text style={styles.definitionNumber}>{defIndex + 1}.</Text>
              <View style={styles.definitionContent}>
                <Text style={styles.definition}>{def.definition}</Text>
                {def.example && (
                  <Text style={styles.example}>
                    Ejemplo: "{def.example}"
                  </Text>
                )}
                {def.synonyms && def.synonyms.length > 0 && (
                  <View style={styles.synonymsContainer}>
                    <Text style={styles.synonymsLabel}>Sinónimos: </Text>
                    <Text style={styles.synonyms}>
                      {def.synonyms.slice(0, 5).join(', ')}
                    </Text>
                  </View>
                )}
              </View>
            </View>
          ))}
        </View>
      ))}

      <TouchableOpacity 
        style={styles.newSearchButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.newSearchButtonText}>Nueva búsqueda</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
  },
  contentContainer: {
    padding: 20,
  },
  centerContainer: {
    flex: 1,
    backgroundColor: '#1a1a2e',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  loadingText: {
    color: '#fff',
    fontSize: 16,
    marginTop: 10,
  },
  errorIcon: {
    fontSize: 60,
    marginBottom: 20,
  },
  errorText: {
    color: '#ff6b6b',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  retryButton: {
    backgroundColor: '#0891b2',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 12,
  },
  retryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  header: {
    marginBottom: 30,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#16213e',
  },
  word: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  phonetic: {
    fontSize: 18,
    color: '#0891b2',
    fontStyle: 'italic',
  },
  meaningContainer: {
    marginBottom: 25,
  },
  partOfSpeech: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0891b2',
    marginBottom: 15,
    textTransform: 'capitalize',
  },
  definitionContainer: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  definitionNumber: {
    fontSize: 16,
    color: '#a0a0a0',
    marginRight: 10,
    marginTop: 2,
  },
  definitionContent: {
    flex: 1,
  },
  definition: {
    fontSize: 16,
    color: '#fff',
    lineHeight: 24,
    marginBottom: 8,
  },
  example: {
    fontSize: 14,
    color: '#a0a0a0',
    fontStyle: 'italic',
    marginBottom: 8,
    lineHeight: 20,
  },
  synonymsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  synonymsLabel: {
    fontSize: 14,
    color: '#0891b2',
    fontWeight: '600',
  },
  synonyms: {
    fontSize: 14,
    color: '#a0a0a0',
    flex: 1,
  },
  newSearchButton: {
    backgroundColor: '#16213e',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40,
    borderWidth: 1,
    borderColor: '#0891b2',
  },
  newSearchButtonText: {
    color: '#0891b2',
    fontSize: 16,
    fontWeight: '600',
  },
});