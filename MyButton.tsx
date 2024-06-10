import React, { ReactNode } from 'react';
import { Button, StyleSheet, ViewStyle, View } from 'react-native';

type ButtonColor = 'Amarillo' | 'Verde' | 'Rojo' | 'Azul';

interface MyButtonProps{
  color: ButtonColor;
  click: () => void;
  label: string;

}

const MyButton: React.FC<MyButtonProps> = ({ color, click, label }) => {
  return (
    <View style={[styles.buttonContainer, styles[color]]}>
      <Button color="#ffffff" onPress={click} title={label} />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    margin: 10,
    borderRadius: 5,
    overflow: 'hidden',
  },
  Amarillo: {
    backgroundColor: 'yellow',
  },
  Verde: {
    backgroundColor: 'green',
  },
  Rojo: {
    backgroundColor: 'red',
  },
  Azul: {
    backgroundColor: 'blue',
  },
});

export default MyButton;
