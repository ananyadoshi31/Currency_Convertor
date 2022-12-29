import React from 'react';
import {Text, Flatlist, View, StatusBar} from 'react-native';

import currencies from '../data/currencies';

const CurrenctList=()=>(
    <View style={{flex:1}}>
        <StatusBar barStyle="default" translucent={false}/>
        <Flatlist
            data={currencies}
            renderItems={({item})=> <Text>{item}</Text>}
            keyExtractor={item=>item}
        />
    </View>
)

export default CurrenctList;