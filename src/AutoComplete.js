import React from 'react';
import { View, TextInput, Text, KeyboardAvoidingView, ScrollView, TouchableOpacity } from 'react-native';
import styles from './styles';
import logo from './logo.png';
import Autocomplete from 'react-native-autocomplete-input'

const array = ["Thien", "Uyen", "Thien Huynh", "Uyen Nguyen", "Cọp", "AHAHAHA"]

const Demo = () => {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
      <ScrollView>
      <TextInput
          placeholder="Email"
          style={styles.input}
        />
        <TextInput
          placeholder="Email"
          style={styles.input}
        />
        <TextInput
          placeholder="Email"
          style={styles.input}
        />
        <TextInput
          placeholder="Email"
          style={styles.input}
        />
        <TextInput
          placeholder="Email"
          style={styles.input}
        />
        <View style={stylesInside.viewWrapper}>
          <Autocomplete
            data={array}
            renderItem={item => (
              <TouchableOpacity>
                <Text>{item}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
        <TextInput
          placeholder="Email"
          style={styles.input}
        />
        <TextInput
          placeholder="Username"
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          style={styles.input}
        />
        <TextInput
          placeholder="Confirm Password"
          style={styles.input}
        />
        <TextInput
          placeholder="The lastest"
          style={styles.input}
        />
        <View style={{ height: 60 }} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const stylesInside = {
  viewWrapper: {
    flex: 1,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 2,
    height: 250
  }
}

export default Demo;
