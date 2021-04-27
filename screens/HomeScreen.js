import React from 'react';
import AppHeader from "../components/AppHeader";
import AppAddBanner from "../components/AppAddBanner";
import AppMainGrid from "../components/AppMainGrid";
import BalanceCard from "../components/BalanceCard";
import AppScreen from "../components/AppScreen";
import AppHeaderButton from "../components/AppHeaderButton";

function HomeScreen(props) {
    return <AppScreen>
        <AppHeaderButton />
        <AppHeader/>
        <AppAddBanner/>
        <AppMainGrid PickerItemComponent={BalanceCard} numColumns={2} items={[
            {name: "Cash", value:'456.00',expiry:null, unit:"GHC"},
            {name: "Data", value:'8',expiry:"23-03-2021", unit:"GB"},
            {name: "Bonus", value:'99',expiry:"23-03-2021", unit:"GB"},
            {name: "GIFT", value:'5',expiry:"23-03-2021", unit:"GB"},
        ]}/>
    </AppScreen>
}

export default HomeScreen;
