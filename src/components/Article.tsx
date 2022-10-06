import React from 'react';
import dayjs from 'dayjs';
import {SectionList, TouchableOpacity} from 'react-native';

import Text from './Text';
import Block from './Block';
import Image from './Image';
import {useTheme, useTranslation} from '../hooks/';
import {IArticle} from '../constants/types';
import { useNavigation } from '@react-navigation/native';
import { Pro } from '../screens';
import { useData } from '../hooks/';

const Article = ({
  title,
  image,
  user,
  onPress,
}: IArticle) => {
  const {t} = useTranslation();
  const {colors, gradients, icons, sizes} = useTheme();
  const navigation = useNavigation()
  const {list,setList}=useData()
  const {listTitle,setListTitle}=useData()
  

  // render card for Newest & Fashion
 const handleNavigation =(image:any)=>{
  setList(image)
  setListTitle(title)
  // console.log(title,"title")
  return(
navigation.navigate("Pro")
  )
 }

  // render card for Popular
  return (
    <TouchableOpacity onPress={()=>handleNavigation(image)}>
      <Block card white padding={0} marginTop={sizes.sm}>
        <Image
        height ={250}
          background
          resizeMode="cover"
          radius={sizes.cardRadius}
          source={{uri: image}}>
          <Block color={colors.overlay} padding={sizes.padding}>
            <Text h4 white marginBottom={sizes.sm}>
              {title}
            </Text>
            <Block row marginTop={sizes.xxl}>
              <Image
                radius={sizes.s}
                width={sizes.xl}
                height={sizes.xl}
                source={{uri: user?.avatar}}
                style={{backgroundColor: colors.white}}
              />
              <Block justify="center" marginLeft={sizes.s}>
                <Text p white semibold>
                  {user?.name}
                </Text>
                <Text p white>
                  {user?.department}
                </Text>
              </Block>
            </Block>
          </Block>
        </Image>
      </Block>
    </TouchableOpacity>
  );
};

export default Article;
