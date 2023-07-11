/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { View, Text } from 'native-base'
import { Alert, TouchableOpacity } from 'react-native'
import React from 'react'

interface IChaptersList {
    navigation: any;
    item: any
}

const handleSura = (id:number) =>{
    console.log("id--->",id)
};

function ChaptersList(props: IChaptersList) {
    const { navigation, item } = props;

    return (
        <View>
            <TouchableOpacity key={item} style={{
                justifyContent: "space-between",
                alignSelf: "center",
                display: "flex",
                flexDirection: "row",
                width: "90%",
                marginTop: 10,
                padding: 8,
                backgroundColor: "#09223a",
                borderColor: "#0DB440",
                borderWidth: 0.3,
                borderRadius: 8,
            }} onPress={() => handleSura(item?.id)}>

                <View
                    display="flex"
                    flexDirection="row">
                    <View
                        backgroundColor="#ffffffbf"
                        width="40px"
                        height="40px"
                        borderRadius={360}
                        justifyContent="center" alignSelf="center">
                        <Text textAlign="center"  mt={1} color="#0DB440" fontWeight="bold">{item?.id}</Text>
                    </View>
                    <View ml={3}>
                        <Text mt={1} color="#fff" fontSize={18} fontWeight="bold">{item?.name_simple}</Text>
                        <Text mt={1} color="#fff">{item?.revelation_place}</Text>
                    </View>
                </View>
                <View justifyContent="center" alignContent="center" mr={3}>
                    <Text
                        color="#0DB440"
                        fontSize={18}
                        fontWeight="bold"
                       >
                        {item?.name_arabic}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}
export default ChaptersList;