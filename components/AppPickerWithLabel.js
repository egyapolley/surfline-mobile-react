import React from 'react';
import {View, Text, StyleSheet} from "react-native";
import {colors} from "../utils/config";
import AppPickerCustom from "./AppPickerCustom";

function AppPickerWithLabel({label,styleProp,data,onItemSelect,selectedItem, placeHolder,PickerItemComponent}) {
    return <View style={{...styles.container,...styleProp}}>
        <Text style={styles.text}>{label}</Text>
        {/*<AppPicker data={data} onItemSelect={onItemSelect} placeHolder={placeHolder}/>*/}
        <AppPickerCustom  PickerItemComponent={PickerItemComponent} items={data} selectedItem={selectedItem} onItemSelect={onItemSelect} placeholder={placeHolder}   />
    </View>
}


const styles = StyleSheet.create({
    container:{
        width:'100%',
    },
    text:{
        width:'100%',
        fontWeight:'bold',
        color:colors.charcoal,
        fontSize:15,
        marginBottom:5
    }

})

export default AppPickerWithLabel;
