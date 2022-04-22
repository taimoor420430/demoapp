
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { Arrow, QuoteMIcon, QuotePIcon } from '../components/Svgs'
import { retrieveItem, useForceUpdate,storeItem } from '../functions'

const Prices = (props) => {

    const data = props.route.params.data;
    const items = props?.route?.params?.data?.items;
    const [addedItems, setAddedItems] = useState([]);
    const forceUpdate = useForceUpdate()
    const navigation = useNavigation();

    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        retrieveItem('cartItems').then(data => {
            if (data) {
                setAddedItems(data)
                for (let key in data) {
                    for (let key1 in items) {
                        if (data[key].id == items[key1].id) {
                            items[key1].quantity = data[key].quantity
                        }
                        else items[key1].quantity = 0
                    }
                }
            }
            else {
                for (let key in items) {
                    items[key].quantity = 0
                }
            }
            forceUpdate();

        })
        setLoading(false)

        return () => {
            // second
        }
    }, [])


    function addToCart() {

        // console.log(addedItems);
        storeItem('cartItems',addedItems);
        // forceUpdate();
        props.navigation.navigate('CartStack');


        // retrieveItem('cartItems').then(data => {
        //     if (data) {
        //         // let arr = items;
        //         for (let key in data) {
        //             for (let key1 in items) {
        //                 if (data[key].id == items[key1].id) {
        //                     items[key1].quantity = data[key].quantity
        //                 }
        //                 else items[key1].quantity = 0
        //             }
        //         }
        //     }
        //     else {
        //         for (let key in items) {
        //             items[key].quantity = 0
        //         }
        //     }
        // })
        // setLoading(false)


    }




    const QuoteView = () => (
        <FlatList
            data={items}
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
                                        forceUpdate();
                                        console.log('this is ')
                                        console.log(item.quantity)
                                        let index = addedItems.indexOf(item)
                                        arr[index] = item;
                                        if (item.quantity == 0) {
                                            console.log('in this block')
                                            let index = addedItems.indexOf(item)
                                            arr[index] = item;
                                            arr.splice(index,1);
                                        }

                                    }
                                    
                                    setAddedItems(arr);
                                    forceUpdate();


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

                                    setAddedItems(arr);
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

    if (loading) return null;
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ paddingHorizontal: 15, width: '100%', height: 60, justifyContent: 'space-between', backgroundColor: "#FFFFFF", elevation: 3, flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.goBack();
                    }}>
                    <Arrow />
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <Text style={{ marginLeft: 9, fontSize: 20, fontFamily: "OSS" }}>Request An Order</Text>
                </View>
                <Text>      </Text>
            </View>
            < StatusBar hidden={true} />
            <View style={{ backgroundColor: '#BDFF63', marginTop: 10, alignItems: 'center', alignSelf: 'center', paddingHorizontal: 20, paddingVertical: 10, borderRadius: 5 }}>
                <Text style={{ fontSize: 12 }}>Select your products</Text>
            </View>

            <View style={{ backgroundColor: 'white', width: "90%", alignSelf: 'center', marginTop: 20 }}>
                <QuoteView />
            </View>
            <View style={{ position: 'absolute', bottom: 20, width: "90%", alignSelf: 'center' }}>
                <TouchableOpacity
                    onPress={() => addToCart()}
                    style={{ backgroundColor: '#32BBE8', marginTop: 10, width: 114, height: 46, borderRadius: 4, justifyContent: 'center', alignItems: 'center', alignSelf: 'flex-end', }}>
                    <Text style={{ color: 'white', fontFamily: 'OSS' }}>ADD TO CART</Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    )
}

export default Prices
