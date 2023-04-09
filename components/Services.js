import { StyleSheet, Text, View ,ScrollView,Pressable,Image} from 'react-native'
import React from 'react'

const Services = () => {

 const services = [
    {
      id: "0",
      image: "https://sv1.picz.in.th/images/2023/04/09/mAbwAz.png",
      name: "Cleaning",
     
    },
    {
      id: "11",
      image: "https://sv1.picz.in.th/images/2023/04/09/mAb6PW.png",
      name: "Polish"
    },
    {
      id: "12",
      image: "https://sv1.picz.in.th/images/2023/04/09/mPWucy.png",
      name: "Vacuum"
    }
    
   
  ];
  return (
    <View style={{padding:10}}>
        <Text style={{fontSize:16,fontWeight:"500",marginBottom:7}}>Services Available</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {services.map((service,index) => (
                <Pressable style={{margin:10,backgroundColor:"white",padding:20,borderRadius:7}} key={index}>
                    <Image source={{uri:service.image}} style={{width:70,height:70}}/>

                    <Text style={{textAlign:"center",marginTop:10}}>{service.name}</Text>
                </Pressable>
            ))}
        </ScrollView>
    </View>
  )
}

export default Services

const styles = StyleSheet.create({})