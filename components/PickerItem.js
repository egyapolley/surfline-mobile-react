import React from 'react';
import {TouchableHighlight, View,Text} from "react-native";
import {colors} from "../utils/config";

function PickerItem({item,onPress}) {
    return (
        <TouchableHighlight underlayColor="#ccc" onPress={() =>onPress(item)} >
            <View style={{
                padding:10
            }}>
                <Text style={{
                    fontFamily:'RobotoBold',
                    color:colors.primary
                }}>{item.label?item.label:item}</Text>
            </View>
        </TouchableHighlight>
    );
}

export default PickerItem;
