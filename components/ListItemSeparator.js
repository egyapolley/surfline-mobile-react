import React from 'react';
import {View,StyleSheet} from "react-native";

function ListItemSeparator(props) {
    return (
      <View style={styles.container}/>

    );
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:1,
        backgroundColor:"#cccccc"
    }
})

export default ListItemSeparator;
