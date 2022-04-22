import { FlatList, SafeAreaView, TouchableOpacity, Text, View, Image } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

const HomeScreen = (props) => {
    const CategoriesArray  = [
        {
            name: "Fruits", img: require("../assets/oven1.jpg"),
            catId : "1",
            "items": [
                {itemId: "1", title: "Apple", price: "65.00" },
                {itemId: "2", title: "Banana", price: "85.00" },
                {itemId: "3", title: "Orange", price: "80.00" },
                {itemId: "4", title: "WaterMelon", price: "95.00" },
                {itemId: "5", title: "Strawberry",price: "110.00" },
            ]
        },
        {
            name: "Snacks", img: require("../assets/kitchen1.jpg"),
            catId:"2",
            "items": [
                {itemId:"6", title: "Lays",price: "150.00" },
                {itemId:"7", title: "Peanuts", price: "€148.00" },
            ]

        },
        {
            name: "Vegetables", img: require("../assets/appliance1.jpg"),
            catId:"3",
            "items": [
                {itemId:"8", title: "Lady Finger", price: "65.00" },
                {itemId:"9", title: "Carrots", price: "45.00" },
                {itemId:"10", title: "Potatos", price: "45.00" },
                {itemId:"11", title: "Tomatos", price: "40.00" },
                {itemId:"12", title: "Onions", price: "30.00" },
            ]
        },
        {
            name: "Breads", img: require('../assets/bbq1.jpg'),
            catId:"4",
            "items": [
                {itemId:"13", title: "Plain Bread", price: "60.00" },
                {itemId:"14", title: "Brown Bread", price: "75.00" },
                {itemId:"15", title: "Milky Bread", price: "90.00" },
            ]
        },
        {
            name: "Daily Products", img: require('../assets/extractor1.jpg'),
            catId:"5",
            "items": [
                {itemId:"16", title: "Milk", price: "20.00" },
                {itemId:"17", title: "Yougurt", price: "05.00" },
                {itemId:"18", title: "Cheese", price: "10.00" },
            ]
        }

    ]
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
    < StatusBar hidden={true} />
    <View style={{ width: "90%", alignSelf: 'center', marginTop:30 }}>
        <View style={{ marginTop: 10, backgroundColor: '#E3F8FF', width: 89, height: 28, justifyContent: "center", alignItems: 'center', borderRadius: 6 }}>
            <Text style={{ fontFamily: "PM", fontSize: 13 }}>Categories</Text>
        </View>
        <FlatList
            numColumns={2}
            columnWrapperStyle={{ width: "100%", justifyContent: 'space-between' }}
            data={CategoriesArray}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => {
                return (
                    <TouchableOpacity
                        onPress={() => {
                            // console.log(item)
                            // navigate('asd',item)
                        
                            props.navigation.navigate('Prices', {
                                data: item,
                            })
                            // props.route.params.data
                        }}
                        style={{ width: "48.5%", height: 130, borderRadius: 4, marginTop: 20 }}>

                        <Image style={{ width: "100%", height: "100%", resizeMode: 'stretch' }}
                            source={item.img} />

                        <Image source={require('../assets/mask1.png')}
                            style={{ position: 'absolute', bottom: 1, width: "100%", height: "100%", resizeMode: 'stretch' }}
                        />
                        <View style={{ position: 'absolute', bottom: 20, left: 10 }}>
                            <Text style={{ color: 'white', fontFamily: 'PSB' }}>{item.name}</Text>
                            {/* <Text style={{ color: 'white', fontFamily: 'PSB' }}>Cleaning Prices</Text> */}
                        </View>
                    </TouchableOpacity>
                )
            }}
        />
    </View>
</SafeAreaView>
  )
}

export default HomeScreen