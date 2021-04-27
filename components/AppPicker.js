import React from 'react';
import {View,StyleSheet} from "react-native";
import RNPickerSelect from 'react-native-picker-select';
import {colors} from "../utils/config";

function AppPicker({data, onItemSelect,placeHolder}) {
        return <View style={{width:'100%'}}>
            <RNPickerSelect
                placeholder={{
                    label: `${placeHolder}`,
                    value: null,
                    color: colors.charcoal,
                }}
                style={{
                    ...pickerSelectStyles,
                    iconContainer: {
                        top: 20,
                        right: 10,
                    },
                    placeholder: {
                        color: colors.charcoal,
                        fontSize: 16,
                    },
                }}
                Icon={() => {
                    return (
                        <View
                            style={{
                                backgroundColor: 'transparent',
                                borderTopWidth: 10,
                                borderTopColor: colors.secondary,
                                borderRightWidth: 10,
                                borderRightColor: 'transparent',
                                borderLeftWidth: 10,
                                borderLeftColor: 'transparent',
                                width: 0,
                                height: 0,
                            }}
                        />
                    );
                }}
                useNativeAndroidPickerStyle={false}
                onValueChange={onItemSelect}
                items={data}
            />
        </View>

}

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 2,
        borderColor: 'gray',
        borderRadius: 25,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 2,
        borderColor: colors.charcoal,
        borderRadius: 25,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    },

});

export default AppPicker;
