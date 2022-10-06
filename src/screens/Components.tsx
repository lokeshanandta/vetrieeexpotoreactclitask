import React, {useCallback, useEffect, useState} from 'react';
import {Linking, Platform} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {useData, useTheme, useTranslation} from '../hooks/';
import * as regex from '../constants/regex';
import {Block, Button, Input, Image, Text, Checkbox} from '../components/';

const isAndroid = Platform.OS === 'android';

interface IRegistration {
  name: string;
  email: string;
  password: string;
  agreed: boolean;
}
interface IRegistrationValidation {
  name: boolean;
  email: boolean;
  password: boolean;
  agreed: boolean;
}

const Components = () => {
 const {userName,setUserName}= useData()
 const {userMail,setUserMail}= useData()
  const {usernumber,setUserNumber}= useData()
  const {isDark} = useData();
  const {t} = useTranslation();
  const navigation = useNavigation();
  const [isValid, setIsValid] = useState<IRegistrationValidation>({
    name: false,
    email: false,
    password: false,
    agreed: false,
  });
  const [registration, setRegistration] = useState<IRegistration>({
    name: '',
    email: '',
    password: '',
    agreed: false,
  });
  const {assets, colors, gradients, sizes} = useTheme();

  const handleChange = useCallback(
    (value) => {
      setRegistration((state) => ({...state, ...value}))
      
    },
    [setRegistration],
  );

  const handleSignUp = useCallback(() => {
    
   setUserName(true)
    
  }, [isValid, registration]);

  useEffect(() => {
    setIsValid((state) => ({
      ...state,
      name: regex.name.test(registration.name),
      email: regex.email.test(registration.email),
      password: regex.password.test(registration.password),
      agreed: registration.agreed,
    }));
  }, [registration, setIsValid]);
console.log(userName,"name",userMail,"mail",usernumber,"number")
  return (
    <Block white >
      <Block paddingHorizontal={sizes.s}>
        <Block style={{zIndex: 0}}>
          <Image
            background
            resizeMode="cover"
            padding={sizes.sm}
            radius={sizes.cardRadius}
            source={assets.background}
            height={sizes.height * 0.3}>
           

            <Text h4 center white marginBottom={sizes.md}>
              {"Payment"}
            </Text>
          </Image>
        </Block>
        {/* register form */}
        <Block
          keyboard
          behavior={!isAndroid ? 'padding' : 'height'}
          marginTop={-(sizes.height * 0.2 - sizes.l)}>
          <Block
            flex={0}
            radius={sizes.sm}
            marginHorizontal="8%"
            shadow={!isAndroid} // disabled shadow on Android due to blur overlay + elevation issue
          >
            <Block
              blur
              flex={0}
              intensity={90}
              radius={sizes.sm}
              overflow="hidden"
              justify="space-evenly"
              tint={colors.blurTint}
              paddingVertical={sizes.sm}>
             
              {/* social buttons */}
              
              
              {/* form inputs */}
              <Block paddingHorizontal={sizes.sm}>

                
                <Input
                  autoCapitalize="none"
                  marginBottom={sizes.m}
                  label={"Name On Card"}
                value={"Lokesh"}
                placeholder={"lokesh"}
                  
                 
                  editable={false}
                />
               <Input
                  autoCapitalize="none"
                  marginBottom={sizes.m}
                  label={"Card Number"}
                value={"2838  7890 3245"}
                placeholder={"2838  7890 3245"}
                  
                 
                  editable={false}
                />
                <Block></Block>
              </Block>
              {/* checkbox terms */}
              <Block row flex={0} align="center" justify="space-between" >
              <Input
                  autoCapitalize="none"
                  marginBottom={sizes.m}
                  label={"Expiry Date"}
                value={"09/18"}
                placeholder={"09/18"}
                  
                 
                  editable={false}
                />
                 <Input
                  autoCapitalize="none"
                  marginBottom={sizes.m}
                  label={"Cvv            "}
                value={"995"}
                placeholder={"995"}
                  
                 
                  editable={false}
                />
               
              </Block>
             
              
              
            </Block>
          </Block>
        </Block>
        <Block row flex={0} marginHorizontal={60}>
        <Button
                onPress={()=>navigation.goBack()}
                marginVertical={sizes.s}
                marginHorizontal={sizes.sm}
                gradient={gradients.primary}
                >
                <Text bold white transform="uppercase">
                  {"Cancel"}
                </Text>
              </Button>

              <Button
                onPress={()=>navigation.navigate("Profile")}
                marginVertical={sizes.s}
                marginHorizontal={sizes.sm}
                gradient={gradients.primary}
                >
                <Text bold white transform="uppercase">
                  {"SUMMIT"}
                </Text>
              </Button>
        </Block>
       
      </Block>
    </Block>
  );
};

export default Components;
