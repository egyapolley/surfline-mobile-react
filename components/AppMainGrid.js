import React from 'react';
import {FlatList, View} from "react-native";
import QuickServiceCard from "./QuickServiceCard";

function AppMainGrid({navigation,items, PickerItemComponent,numColumns=1}) {
    return <View style={{backgroundColor:"#f5f5f5", flexGrow:2, padding:10,flex:1,width:"100%"}}>
        <FlatList data={items}
                  columnWrapperStyle={{flex:1,alignItems:'center',backgroundColor:"#f5f5f5",padding:10,justifyContent:'center'}}
                  numColumns={numColumns}
                  keyExtractor={((item,index) => index.toString())}
                  renderItem={({item}) => <PickerItemComponent item={item} onPress={(itemSelected) => {
                      if (itemSelected.value === 'Buy Bundle'){
                          navigation.navigate("Quick Service TopUpMain")
                      }
                      if (itemSelected.value === 'Load Scratch'){
                          navigation.navigate("Quick Service TopUpVoucher")
                      }

                  }}/>}/>
    </View>
}

export default AppMainGrid;
