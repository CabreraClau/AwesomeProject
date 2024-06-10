import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MyButton from './MyButton';


export const Adivinador = () => {
  const [rango, setRango] = useState([0, 100]);
  const [mensaje, setMensaje] = useState('');


  
  const Adivinar = (respuesta:string) => {
    const [min, max] = rango;
    const numeroAdivinado = Math.floor((min + max) / 2);
    if (respuesta === "mayor") {
      setRango([numeroAdivinado + 1, max]);
    } else if (respuesta === "menor") {
      setRango([min, numeroAdivinado - 1]);
    } else if (respuesta === "correcto") {
      setMensaje('¡Correcto!');
    }
  }

  const Reiniciar = () => {
    setRango([0, 100]);
    setMensaje('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.botones}>
        <Text style={styles.title}>El número es: {Math.floor((rango[0] + rango[1]) / 2)}</Text>
        <MyButton color="Amarillo" click={() => Adivinar("mayor")} label="Mayor" />
        <MyButton color="Rojo" click={() => Adivinar("menor")} label="Menor" />
        <MyButton color="Azul" click={Reiniciar} label="Reiniciar" />
        <MyButton color="Verde" click={() => Adivinar("correcto")} label="Correcto" />
      </View>
      <Text>{mensaje}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Arial',
  },
  botones: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});
