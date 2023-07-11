/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { View, Text, Image, Spinner, ScrollView } from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaView, ImageBackground, TouchableOpacity, FlatList, ListRenderItem,StyleSheet,RefreshControl } from 'react-native';
import { ILogin } from 'Auth/Login/query/useLoginForm';
import { useFetchHome } from "./query/useFetchHome";
import ChaptersList from './components/Chapters-List';

interface IHome {
  navigation: any;
  route: any
}
export default function Home(props: IHome) {
  const { navigation, route } = props;
  const loginName: ILogin = {
    fname: 'Shadab Ansari',
    email: 'Shadab Ansari',
    password: '',
  };
  const renderItem: ListRenderItem<any> = ({ item }) => {
    return <ChaptersList navigation={navigation} item={item} />;
  };

  const keyExtractor = React.useCallback(
    (item: any, index: number) => `key-${index}-${item.id}`,
    [],
  );

  const {
    data: chaptersList,refetch,isLoading
  } = useFetchHome();
  return (
    <SafeAreaView style={{marginBottom:10}}>
      <ImageBackground resizeMode="stretch" style={{ width: "100%", height: "100%" }}
        source={require("../../assets/background-Img/islamic.jpg")}>
       <ScrollView>
      <View mt={8}>
        <Text
          textTransform="uppercase"
          textAlign="center"
          color="#000"
          fontSize={25}
          fontWeight="bold">
          Quran App
        </Text>
        <View m={5} justifyContent="center"
          alignSelf="center" width={"80%"}>
          <Text fontSize={16} color="#000" fontWeight="bold">Asalamu Alaikum !!!</Text>
          <Text fontSize={20} color="#000" fontWeight="bold">{loginName.fname}</Text>
        </View>
      </View>
      <View
        justifyContent="space-between"
        alignSelf="center"
        backgroundColor="#09223a"
        width={"90%"}
        padding={5}
        borderRadius={20} 
        flexDirection="row">
        <View
          flexDirection="column"
          justifyContent="center"
          alignSelf="center">
          <View display="flex" flexDirection="row">
            <MaterialCommunityIcons name="book-open-page-variant" color="#fff" size={20} />
            <Text ml={4} color="#fff">Last Read</Text>
          </View>
          <View mt={5}>
            <Text color="#fff" fontWeight="bold" fontSize={20}>The Noble Quran</Text>
            <Text color="#fff" fontSize={12}>Popular Searches</Text>
          </View>
        </View>
        <View mt={3} justifyContent="flex-end" alignItems="flex-end">
          <Image
            source={require('../../assets/SplashScreen/mosque-logo.png')}
            alt="mosque"
            style={{ width: 80, height: 80, }}
          />
        </View>
      </View>
      <View>
       <FlatList
          data={chaptersList?.data?.chapters}
          renderItem={renderItem} 
          keyExtractor={keyExtractor}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={
            <>
              <View p={5} alignItems="center">
                <Text>No Contact Found</Text>
              </View>
            </>
          }
          // ListFooterComponent={
          //   isFetchingNextPage ? <Spinner mb={20} mt={20} /> : null
          // }
          refreshControl={
            <RefreshControl refreshing={isLoading} onRefresh={refetch} />
          }
          refreshing={isLoading}
          // onEndReached={onEndReached}
          onEndReachedThreshold={0.8}
          />
       </View>
       </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create(({
  listContent:{
  flexGrow:1,
 }
}))