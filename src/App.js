import React from 'react';
import { SafeAreaView, View, Text, FlatList, StyleSheet, ScrollView, Image, Dimensions } from 'react-native';
import news_data from './news_data.json';
import news_banner_data from './/news_banner_data.json'
import NewsCard from './components/NewsCard';

function App() {
  const renderNews = ({item}) => <NewsCard news={item} />
  const  keyExtractor = item => item.u_id.toString()
  const bannerData = bannerNews => <Image style={styles.bannerImage} source={{uri: bannerNews.imageUrl}}/>
  
  return (
    <SafeAreaView style={styles.container}>

      <FlatList ListHeaderComponent={()=>(<View><Text style={styles.header}>⌁ NEWS</Text><ScrollView style={styles.bannerContainer} horizontal showsHorizontalScrollIndicator={false}>
      {news_banner_data.map(bannerData)}
      </ScrollView></View>)} keyExtractor={keyExtractor} data={news_data} renderItem={renderNews} />
    </SafeAreaView>
  )
}
const styles  = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#ece111',
  },
  bannerImage:{
    height: Dimensions.get("window").height/4,
    width: Dimensions.get("window").width/1,

  },
  bannerContainer:{
    marginTop:10,
  },
  header:{
    fontWeight: "bold",
    fontSize:25,
    color:'aliceblue',
    textAlign: "center" ,
    marginTop:5,
    backgroundColor: "black",
  },
})

export default App
