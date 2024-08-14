import { StatusBar } from 'expo-status-bar';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

// Define the type for Box props
type BoxProps = {
  color: string;
  children?: React.ReactNode; // `children` can be any valid React node
};

// Define the Box component with typed props
const Box: React.FC<BoxProps> = ({ color, children }) => (
  <View style={[styles.box, { backgroundColor: color }]}>
    {children}
  </View>
);

export default function App() {
  const [pressedCount, setPressedCount] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.textWrapper}>
        <Text style={styles.text}>Hello World</Text>
      </View>

      <View style={{ height: 400 }}>
        <ScrollView horizontal>
          <Box color="orange">
            <Text>My Name is Dow</Text>
          </Box>
          <Box color="blue">
            <Text>This is my first React Native App</Text>
          </Box>
        </ScrollView>
      </View>

      <Text style={{ margin: 16 }}>
        {pressedCount > 0
          ? `The button was pressed ${pressedCount} times!`
          : 'The button isn\'t pressed yet'
        }
      </Text>
      <Button
        title="Press Me"
        onPress={() => setPressedCount(pressedCount + 1)}
        disabled={pressedCount > 3}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'cream',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 400,
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textWrapper: {
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
  },
  text: {
    fontStyle: 'normal',
    color: 'red',
    padding: 4,
    fontFamily: 'Roboto',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
