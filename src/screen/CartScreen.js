import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { Arrow, QuoteMIcon, QuotePIcon } from '../components/Svgs'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { useFocusEffect } from '@react-navigation/native';

import { retrieveItem, useForceUpdate, storeItem } from '../functions'


const CartScreen = () => {
    // const QuoteView = () => (
    //     <FlatList
    //         data={items}
    //         numColumns={2}
    //         showsVerticalScrollIndicator={false}
    //         contentContainerStyle={{ paddingBottom: 300 }}
    //         columnWrapperStyle={{ justifyContent: 'space-between' }}
    //         keyExtractor={(item, index) => index.toString()}
    //         renderItem={({ item }) => {
    //             return (
    //                 <View style={{ width: "48%", backgroundColor: 'white', elevation: 5, marginTop: 15, paddingBottom: 15, marginBottom: 5 }}>
    //                     <View style={{ marginTop: 10, paddingHorizontal: 10 }}>
    //                         {/* <Text style={{ fontFamily: 'OSS' }}>{item.title}
    //                             <Text style={{ fontSize: 12 }}> {item.price}</Text>
    //                         </Text> */}
    //                     </View>
    //                     <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, justifyContent: 'space-between', marginHorizontal: 10 }}>
    //                         <TouchableOpacity
    //                             // onPress={() => {
    //                             //     if (item.quantity != 0) {
    //                             //         item.cartPrice = item.cartPrice - item.price ;
    //                             //         item.quantity = item.quantity - 1;
    //                             //         forceUpdate();
    //                             //     }

    //                             // }}
    //                             style={{ width: 24, height: 24, borderWidth: 0.5, borderColor: 'grey', borderRadius: 15, alignItems: 'center', justifyContent: 'center' }}>
    //                             <QuoteMIcon />
    //                         </TouchableOpacity>
    //                         <View style={{ width: 44, height: 24, borderWidth: 0.5, borderRadius: 5, alignItems: 'center', justifyContent: 'center', borderColor: 'grey' }}>
    //                             <Text style={{ color: 'grey' }}>{item.quantity}</Text>
    //                         </View>
    //                         <TouchableOpacity
    //                             // onPress={() => {
    //                             //         item.cartPrice = (item.quantity+1) * item.price
    //                             //         item.quantity = item.quantity + 1
    //                             //         forceUpdate();


    //                             // }}
    //                             style={{ width: 24, height: 24, borderWidth: 0.5, borderColor: 'grey', borderRadius: 15, alignItems: 'center', justifyContent: 'center' }}>
    //                             <QuotePIcon />
    //                         </TouchableOpacity>
    //                     </View>
    //                     <View style={{ alignSelf: 'center', alignItems: 'center', marginTop: 20 }}>
    //                         {/* <Text style={{ color: "grey" }}>{item.cartPrice} PKR</Text> */}
    //                     </View>
    //                 </View>
    //             )

    //         }}
    //     />
    // )
    const [cartItems, setCartItems] = useState([]);



    useFocusEffect(
        React.useCallback(() => {

            retrieveItem('cartItems')
                .then(data => {
                    console.log('this is the cart data');
                    console.log(data)
                    setCartItems(data)
                })

        }, [])
    );


    const QuoteView = () => (
        <FlatList
            data={cartItems}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 300 }}
            columnWrapperStyle={{ justifyContent: 'space-between' }}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => {
                return (
                    <View style={{ width: "48%", backgroundColor: 'white', elevation: 5, marginTop: 15, paddingBottom: 15, marginBottom: 5 }}>
                        <View style={{ marginTop: 10, paddingHorizontal: 10 }}>
                            <Text style={{ fontFamily: 'OSS' }}>{item.title}
                                <Text style={{ fontSize: 12 }}> {item.price}</Text>
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, justifyContent: 'space-between', marginHorizontal: 10 }}>
                            <TouchableOpacity
                                onPress={() => {
                                    let arr = addedItems;

                                    if (item.quantity != 0) {
                                        item.quantity = item.quantity - 1;
                                        // forceUpdate();
                                        let index = addedItems.indexOf(item)
                                        arr[index] = item;

                                    }
                                    else if (item.quantity == 0) {
                                        let index = addedItems.indexOf(item)
                                        arr[index] = item;
                                        arr.splice(index, 1);
                                    }
                                    // setAddedItems(arr);


                                }}
                                style={{ width: 24, height: 24, borderWidth: 0.5, borderColor: 'grey', borderRadius: 15, alignItems: 'center', justifyContent: 'center' }}>
                                <QuoteMIcon />
                            </TouchableOpacity>
                            <View style={{ width: 44, height: 24, borderWidth: 0.5, borderRadius: 5, alignItems: 'center', justifyContent: 'center', borderColor: 'grey' }}>
                                <Text style={{ color: 'grey' }}>{item.quantity}</Text>
                            </View>
                            <TouchableOpacity
                                onPress={() => {

                                    item.quantity = item.quantity + 1
                                    forceUpdate();

                                    let arr = addedItems;
                                    if (addedItems.includes(item)) {
                                        let index = addedItems.indexOf(item)
                                        arr[index] = item;
                                    }
                                    else arr.push(item);

                                    // setAddedItems(arr);
                                }}
                                style={{ width: 24, height: 24, borderWidth: 0.5, borderColor: 'grey', borderRadius: 15, alignItems: 'center', justifyContent: 'center' }}>
                                <QuotePIcon />
                            </TouchableOpacity>
                        </View>
                        <View style={{ alignSelf: 'center', alignItems: 'center', marginTop: 20 }}>
                            <Text style={{ color: "grey" }}>{item.quantity * item.price} PKR</Text>
                        </View>
                    </View>
                )

            }}
        />
    )



    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ paddingHorizontal: 15, width: '100%', height: 60, justifyContent: 'space-between', backgroundColor: "#FFFFFF", elevation: 3, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ marginLeft: 9, fontSize: 20, fontFamily: "OSS" }}>Requested Order</Text>
            </View>
            < StatusBar hidden={true} />
            <View style={{ backgroundColor: '#BDFF63', marginTop: 10, alignItems: 'center', alignSelf: 'center', paddingHorizontal: 20, paddingVertical: 10, borderRadius: 5 }}>
                <Text style={{ fontSize: 12 }}>Selected Products</Text>
            </View>
            <View style={{ backgroundColor: 'white', width: "90%", alignSelf: 'center', marginTop: 20 }}>
                <QuoteView />
            </View>
           
        </SafeAreaView>
    )

}

export default CartScreen