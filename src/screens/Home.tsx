import React, {useCallback, useState} from 'react';

import {useData, useTheme, useTranslation} from '../hooks/';
import {Block, Button, Image, Input, Product, Text} from '../components/';
import { TextInput } from 'react-native-gesture-handler';
import { Dimensions ,ScrollView} from 'react-native'
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation=useNavigation()
  const {t} = useTranslation();
  const [tab, setTab] = useState<number>(0);
  const {following, trending} = useData();
  const [products, setProducts] = useState(following);
  const {assets, colors, fonts, gradients, sizes} = useTheme();
  const {userName,setUserName}= useData()
  const {userMail,setUserMail}= useData()
  const {usernumber,setUserNumber}= useData()
  
console.log(userName,usernumber)
  return (
    <ScrollView>
    <Block flex={1}>
      
          <Block   marginHorizontal={50} marginTop={20} justify="space-between">
            <Text size={24} weight={"bold"} >Create Account</Text>
            <Text marginTop={10}>Name</Text>
              <Block flex={1}  marginTop={10}>
              <Input height={10}  color={"black"} onChangeText={(el)=>setUserName(el)}/></Block>

              <Text>Email</Text>
              <Block flex={1} marginTop={10} >
              <Input height={10}  color={"black"} onChangeText={(el)=>setUserMail(el)}/></Block>

              <Text>Phone Number</Text>
              <Block flex={1} marginTop={10} >
              <Input height={10}  color={"black"} onChangeText={(el)=>setUserNumber(el)} keyboardType={"numeric"}/></Block>
          </Block>
         
          <Button color={"lightblue"} marginHorizontal={60} marginTop={0} width={100} onPress={()=>navigation.navigate("Components")} ><Text>Sumit</Text></Button>
          
          
     
    </Block>
    </ScrollView>
  );
};

export default Home;
