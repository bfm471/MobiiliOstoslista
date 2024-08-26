import { StatusBar } from 'expo-status-bar';
import { useEffect, useRef, useState } from 'react';
import { Button, FlatList, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [item, setItem] = useState('');
  const [items, setItems] = useState([]);
  const inputFocus = useRef(null);

  const handleAdd = () => {
    if (item) {
      setItems([...items, item]);
      setItem('');
    }
  }

  const handleClear = () => {
    setItems([]);
    setItem('');
  }

  useEffect(() => {
    inputFocus.current.focus();
  })

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder='Enter item'
          onChangeText={text => setItem(text)}
          value={item}
          ref={inputFocus}
        />
        <View style={styles.buttonContainer}>
          <Button title='ADD' onPress={handleAdd} />
          <Button title='CLEAR' onPress={handleClear}/>
        </View>
      </View>
      <View style={styles.listContainer}>
        <FlatList 
          data={items}
          renderItem={({item}) => <Text style={styles.list}>- {item}</Text>}
          ListHeaderComponent={<Text style={styles.listHeader}>Shopping List</Text>}
          ListEmptyComponent={<Text style={styles.listEmpty}>No items to get...</Text>}
        />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  inputContainer: {
    flex: 1,
  },
  input: {
    fontSize: 18,
    width: 200,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 8
  },
  buttonContainer: {
    marginTop: 40,
    flexDirection: 'row',
    alignSelf: 'center',
    gap: 10
  },
  listContainer: {
    flex: 3,
  },
  listHeader: {
    marginBottom: 10,
    fontSize: 20,
    fontWeight: '600',
    color: '#008b8b',
    textShadowColor: '#404040',
    textShadowOffset: {width: 1, height: -1},
    textShadowRadius: 1,
  },
  listEmpty: {
    fontSize: 15,
    marginTop: 20,
  },
  list: {
    fontSize: 18,
    textAlign: 'left',
    marginLeft: 20,
  },
});
