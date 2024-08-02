import React from 'react'
import { StyleSheet, View } from 'react-native'

const Posicion3 = () => {
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
        justifyContent: 'space-between',
        width: '100%',
        height: '100%',
        marginTop: 10,
        backgroundColor: 'blue',
  
      //  alignItems: 'center',
   
     
    },


    boxPurple: {
    //  flex: 1,
        width: 100,
        height: 100,
        backgroundColor: '#EE82EE',
        borderWidth: 10,
        borderColor: 'white',
      //  alignItems: 'center',
      alignSelf: 'flex-start',
      
    },

    boxOrange: {
    //  flex:1,
        width:100,
        height: 100,
        backgroundColor: 'orange',
        borderWidth: 10,
        borderColor: 'white',
        alignSelf: 'center',
    },

    boxGreen: {
     // flex:1,
        width: 100,
        height: 100,
        backgroundColor: '#00FFFF',
        borderWidth: 10,
        borderColor: 'white',
        alignSelf: 'flex-end',
      //  bottom: 0
    },
})


export default Posicion3



