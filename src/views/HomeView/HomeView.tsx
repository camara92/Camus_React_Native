/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {StyleSheet, View, Text, Image, ScrollView} from 'react-native';

const HomeView = () => {
  const name = 'Atlas Avatar';
  const level: number = 15;
  const isMale: boolean = true;

  return (
    <ScrollView>
    <View>
      <AvatarInfos id={1 } name={name} level={level} isMale={isMale}  src={require('../../assets/images/image1.jpg')}  />
      <AvatarInfos id={2 } name={'Atlas 01'} level={10} isMale={false} src={require('../../assets/images/image2.jpg')} />
      <AvatarInfos id={3 } name={'Jimmy'}    level={70} isMale={true} src={require('../../assets/images/image3.jpg')} />
    </View>
    </ScrollView>
  );
};
// infos
// utilisation des props en react native
type AvatarInfosType = {
    name: string;
    level:number;
    isMale:boolean; 
    src:any; 
}
const AvatarInfos = (props: any) => {
  return (
    <View>
      <Text style={styles.TextCenter}>This is an Avatar </Text>
      <Text>
        His name is {props.name}, his level is {props.level}
      </Text>
      {props.isMale ? (
        <Text>This is a male </Text>
      ) : (
        <Text>This is a female</Text>
      )}
      <Image
        source={props.src} 
        style={styles.imageAvatar}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {},
  TextCenter: {
    textAlign: 'center',
    paddingBottom: 15,
    backgroundColor: 'blue',
    color: 'white',
    justifyContent: 'center',
    padding: 15,
  },
  imageAvatar: {
    width: 200,
    height: 200,
  },
});

export default HomeView;
