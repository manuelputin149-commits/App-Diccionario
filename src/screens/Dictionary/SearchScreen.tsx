import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { screens } from '../../utils/screens';

export function SearchScreen() {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    if (searchText.trim()) {
      navigation.navigate(screens.dictionary.resultScreen as never, { word: searchText.trim() } as never);
    }
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.content}>
        <Text style={styles.icon}>🔍</Text>
        <Text style={styles.title}>Buscar palabra</Text>
        <Text style={styles.subtitle}>Ingresa una palabra en inglés</Text>
        
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.input}
            placeholder="Escribe una palabra..."
            placeholderTextColor="#666"
            value={searchText}
            onChangeText={setSearchText}
            autoCapitalize="none"
            autoCorrect={false}
            onSubmitEditing={handleSearch}
          />
          
          <TouchableOpacity 
            style={[styles.button, !searchText.trim() && styles.buttonDisabled]}
            onPress={handleSearch}
            disabled={!searchText.trim()}
          >
            <Text style={styles.buttonText}>Buscar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.suggestionsContainer}>
          <Text style={styles.suggestionsTitle}>Sugerencias:</Text>
          {['hello', 'computer', 'beautiful', 'happiness'].map((word) => (
            <TouchableOpacity 
              key={word}
              style={styles.suggestionChip}
              onPress={() => {
                setSearchText(word);
                navigation.navigate(screens.dictionary.resultScreen as never, { word } as never);
              }}
            >
              <Text style={styles.suggestionText}>{word}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  icon: {
    fontSize: 60,
    textAlign: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#a0a0a0',
    textAlign: 'center',
    marginBottom: 30,
  },
  searchContainer: {
    marginBottom: 40,
  },
  input: {
    backgroundColor: '#16213e',
    borderRadius: 12,
    padding: 15,
    fontSize: 16,
    color: '#fff',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#0891b2',
  },
  button: {
    backgroundColor: '#0891b2',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#0891b244',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  suggestionsContainer: {
    marginTop: 20,
  },
  suggestionsTitle: {
    fontSize: 14,
    color: '#a0a0a0',
    marginBottom: 10,
  },
  suggestionChip: {
    backgroundColor: '#16213e',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  suggestionText: {
    color: '#0891b2',
    fontSize: 14,
  },
});