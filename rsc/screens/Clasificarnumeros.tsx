import React, { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'


const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];


export const Clasificarnumeros = () => {

    const [pares, setPares] = useState<number[]>([]);
    const [impares, setImpares] = useState<number[]>([]);
    const [mostrarR, setMostrarR] = useState(false);

    const clasificar = () => {
        const pares = numeros.filter(numero => numero % 2 === 0);
        const impares = numeros.filter(numero => numero % 2 !== 0);
        setPares(pares);
        setImpares(impares);
        setMostrarR(true);

    };
    return (
        <View>
            <Text style = {styles.title}>Bienvenido</Text>
            <Text>Vector:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]</Text>
            <Button title="Clasificar" onPress={clasificar} />
            {mostrarR && (
                <View>
                    <Text>Pares: [ {pares.join(', ')} ]</Text>
                    <Text>Impares: [ {impares.join(', ')} ]</Text>
                </View>
            )}
        </View>
    )
}

//gestionar estilos

const styles = StyleSheet.create({
  
    title: {
      fontSize: 40,
      textAlign: 'center',
      top: -50,
      textShadowColor: 'red',
      justifyContent: 'center'
    },
   
  
  }
  )
  