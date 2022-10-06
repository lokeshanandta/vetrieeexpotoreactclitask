import React, {useEffect, useState} from 'react';
import {FlatList,TouchableOpacity} from 'react-native';

import {useData, useTheme} from '../hooks/';
import {IArticle, ICategory} from '../constants/types';
import {Block,  Article,Image,Text, Button} from '../components/';


const Articles = () => {
  const data = useData();
  const [selected, setSelected] = useState<ICategory>();
  const [articles, setArticles] = useState<IArticle[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const {colors, gradients, sizes} = useTheme();
  
  

  useEffect(() => {
    setArticles(data?.articles);
    setCategories(data?.categories);
    setSelected(data?.categories[0]);
  }, [data.articles, data.categories]);

  // update articles on category change
  useEffect(() => {
    const category = data?.categories?.find(
      (category) => category?.id === selected?.id,
    );

    const newArticles = data?.articles?.filter(
      (article) => article?.category?.id === category?.id,
    );

    setArticles(newArticles);
  }, [data, selected, setArticles]);

  return (
    <Block>
      
      
      <Block color={colors.card} row flex={0} paddingVertical={sizes.padding}>
        <Block
          scroll
          horizontal
          renderToHardwareTextureAndroid
          showsHorizontalScrollIndicator={false}
          contentOffset={{x: -sizes.padding, y: 0}}>
        </Block>
      </Block>


    {
      articles.map((el)=>{
        console.log(el)
        return(
          <Block card row white radius={10} flex={0.21} marginHorizontal={50} marginTop={20} >
<Image source={{uri:el.image}} flex={0.40} ></Image>


<Block white padding={10} flex={0.60}><Text  black semibold margin={10} >{el.title}</Text>

<Button
            
    
                gradient={gradients.primary}
                marginHorizontal={20}>
                  <Text white size={18}>{"Deliverd"}</Text>
               
              </Button>
</Block>

          </Block>
        )
      })
    }
    </Block>
  );
};

export default Articles;
