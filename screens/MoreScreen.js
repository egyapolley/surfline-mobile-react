import React from 'react';
import AppHeader from "../components/AppHeader";
import AppAddBanner from "../components/AppAddBanner";
import AppMainGrid from "../components/AppMainGrid";
import BalanceCard from "../components/BalanceCard";
import AppScreen from "../components/AppScreen";
import MoreTabCard from "../components/MoreTabCard";
import AppHeaderButton from "../components/AppHeaderButton";

function MoreScreen(props) {
   return <AppScreen>
       <AppHeaderButton/>
        <AppHeader/>
        <AppAddBanner/>
        <AppMainGrid numColumns={3} PickerItemComponent={MoreTabCard} items={[
            {label:"Redeem Extra Time", icon:"clock-o"},
            {label:"Contact Us", icon:"phone"},
            {label:"Refer a Friend", icon:"group"},
            {label:"Support", icon:"support"},
            {label:"Shop Location", icon:"location-arrow"},
            {label:"Chat with Us", icon:"wechat"},

        ]}/>
    </AppScreen>
}

export default MoreScreen;
