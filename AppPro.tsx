import React from "react";
import {
    Text,
    View,
    SafeAreaView,
    StyleSheet,
    useColorScheme
} from 'react-native'

function AppPro(): JSX.Element{

    const isDarkmode = useColorScheme() === 'dark'
    
    return(
        <View style={styles.container}>
            <Text style={isDarkmode ? styles.darktext : styles.darktext}>hello india</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
       flex:1,
       alignItems: 'center', 
       justifyContent: 'center',
       fontWeight: '800'
    },
    whitetext:{
        color:'#ffffff'
    },
    darktext:{
        color:'#000000'
    }
    
})



export default AppPro