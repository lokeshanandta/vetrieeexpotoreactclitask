import React, {useCallback, useEffect} from 'react';
import {Linking, StatusBar} from 'react-native';

import {useTheme, useTranslation} from '../hooks/';
import {Block, Button, Image, Text} from '../components/';
import { useData } from '../hooks/';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Pro = ({navigation}) => {
  const {t} = useTranslation();
  const {assets, colors, gradients, sizes} = useTheme();
  const {list,setList}= useData()
  const {listTitle,setListTitle}=useData()
 

  useEffect(() => {
    StatusBar.setBarStyle('light-content');
    return () => {
      StatusBar.setBarStyle('dark-content');
    };
  }, []);

  // const handleWebLink = useCallback((url) => Linking.openURL(url), []);
console.log(list,"lokesh")
// console.log(navigation.route.params)
  return (
    <Image
      background
      source={assets.background}
      padding={sizes.padding}
      style={{flex: 1,justifyContent:"center"}}>
       <Block card white padding={0} flex={0.60} color={"white"} >
        <Image source={{uri:list}} style={{flex:1}}></Image>
      </Block> 
      <Block white card center flex={0} marginTop={10}>
        <Text>{listTitle}</Text>
      </Block>
<Block  card flex={0} position={"absolute"} bottom={0} width={300} padding={10} margin={20}  style={{flexDirection:"row",justifyContent:"space-between",}}>

<Button
                onPress={()=>navigation.goBack()}
                marginVertical={sizes.s}
                marginHorizontal={sizes.sm}
                gradient={gradients.menu}
                >
                <Text black bold>Back</Text>
              </Button>

              <Button
                onPress={()=>navigation.navigate("Components")}
                marginVertical={sizes.s}
                marginHorizontal={sizes.sm}
                gradient={gradients.menu}
                >
                <Text black bold>sumit</Text>
              </Button>
</Block>
       
    </Image>
  );
};

export default Pro;
