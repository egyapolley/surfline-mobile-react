import React,{ useState}from 'react';
import {TextInput, View, StyleSheet, Platform, TouchableWithoutFeedback, Modal, Button, FlatList,Text} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import AppScreen from "./AppScreen";
import PickerItem from "./PickerItem";
import {colors} from "../utils/config";
import ListItemSeparator from "./ListItemSeparator";



function AppPickerCustom({items,placeholder,selectedItem, onItemSelect,PickerItemComponent=PickerItem}) {

    const [isModalVisible, setIsModalVisible] =useState(false)


    return (
        <>
            <TouchableWithoutFeedback onPress={() =>setIsModalVisible(true)}>
                <View style={styles.container}>
                    {selectedItem?<Text style={styles.text}>{selectedItem}</Text>:<Text style={styles.placeholder}></Text>}
                    <MaterialCommunityIcons name="chevron-down" size={33} color="skyblue"/>
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={isModalVisible}>
              <AppScreen>
                     <View style={{width:'100%',marginBottom:20}}><Button title="Close" onPress={() =>setIsModalVisible(false)}/></View>
                      <FlatList data={items}
                                ItemSeparatorComponent={ListItemSeparator}
                                keyExtractor={(item, index) =>index.toString()}
                                renderItem={({item}) =><PickerItemComponent item={item} onPress={(itemSelected) =>{
                                    setIsModalVisible(false)
                                    onItemSelect(itemSelected)
                                }}/>}/>
              </AppScreen>
            </Modal>
        </>

    );
}

const styles = StyleSheet.create({
    container :{
        backgroundColor:'#f5f5f5',
        width:'100%',
        paddingHorizontal:15,
        alignItems:'center',
        flexDirection:'row',
        borderWidth:2,
        borderColor:"skyblue",
        borderRadius:25,
    },
    icon: {
        marginRight:5

    },
    text: {
        flex: 1,
        color:"#000"

    },
    placeholder: {
        flex:1,
        color:colors.charcoal
    }
})

export default AppPickerCustom
