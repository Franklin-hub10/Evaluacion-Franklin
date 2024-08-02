import React from 'react'
import { StyleSheet, View } from 'react-native'

const Posicion2 = () => {
  return (

        <View style={styles.container}>
            <View style={styles.boxPurple}></View>
            <View style={styles.boxOrange}></View>
            <View style={styles.boxGreen}></View>
        </View>
    )
}

//gestion de estilos

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        width: '100%',
        height: '100%',
        marginTop: 10,
        backgroundColor: '#44becf',
      //  justifyContent:'center',
      //  alignItems: 'center',
       // flexDirection: 'column'
     
    },


    boxPurple: {
      
        width: 100,
        height: 100,
        backgroundColor: '#EE82EE',
        borderWidth: 10,
        borderColor: 'white',
      //  alignItems: 'center',
      
    },

    boxOrange: {
       // flex:1,
        width: 100,
        height: 100,
        backgroundColor: 'orange',
        borderWidth: 10,
        borderColor: 'white'
    },

    boxGreen: {
        width: 100,
        height: 100,
        backgroundColor: '#00FFFF',
        borderWidth: 10,
        borderColor: 'white',
      //  bottom: 0
    },
})


export default Posicion2



