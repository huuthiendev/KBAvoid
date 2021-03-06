import React from 'react';
import { View, TextInput, Image } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from './styles';
import logo from './logo.png';
import { KeyboardAwareView } from 'react-native-keyboard-aware-view'

const Demo = () => {
  return (
    <KeyboardAwareScrollView
      style={{ backgroundColor: '#4c69a5' }}
      // resetScrollToCoords={{ x: 0, y: 0 }}
      // contentContainerStyle={styles.container}
      scrollEnabled={true}
      enableOnAndroid={true}
      enableAutomaticScroll={true}
    >
      <View style={{height: 1200}}>
        <Image source={logo} style={styles.logo} />
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
          placeholder="Confirm Password"
          style={styles.input}
        />
        <TextInput
          placeholder="Confirm Password"
          style={styles.input}
        />
        <TextInput
          placeholder="Confirm Password"
          style={styles.input}
        />
        <TextInput
          placeholder="Confirm Password"
          style={styles.input}
        />
        <TextInput
          placeholder="Confirm Password"
          style={styles.input}
        />
        <TextInput
          placeholder="Confirm Password"
          style={styles.input}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Demo;
