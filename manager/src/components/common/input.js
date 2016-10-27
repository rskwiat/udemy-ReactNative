import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.labelText}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        autoCorrect={false}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={styles.textInput}
      />
    </View>
  );
};

const styles = {
  textInput: {
    flex: 2,
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23
  },
  labelText: {
    flex: 1,
    paddingLeft: 20,
    fontSize: 16
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};

export { Input };
