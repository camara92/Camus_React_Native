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
        <AvatarInfos
          name={name}
          level={level}
          isMale={isMale}
          src={require('../../assets/images/image1.jpg')}
        />
        <AvatarInfos
          name={'Atlas 01'}
          level={10}
          isMale={false}
          src={require('../../assets/images/image2.jpg')}
        />
        <AvatarInfos
          name={'Jimmy'}
          level={70}
          isMale={true}
          src={require('../../assets/images/image3.jpg')}
        />
      </View>
    </ScrollView>
  );
};
// infos
// utilisation des en react native
type AvatarInfosType = {
  name: string;
  level: number;
  isMale: boolean;
  src: any;
};
const AvatarInfos = ({name, level, isMale, src}: AvatarInfosType) => {
  return (
    <View>
      <Text style={styles.TextCenter}>This is an Avatar </Text>
      <Text>
        His name is {name}, his level is {level}
      </Text>
      {isMale ? <Text>This is a male </Text> : <Text>This is a female</Text>}
      <Image source={src} style={styles.imageAvatar} />
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {},
  TextCenter: {
    textAlign: 'center',
    paddingBottom: 15,
    justifyContent: 'center',
    padding: 15,
  },
  imageAvatar: {
    width: 200,
    height: 200,
  },
});

export default HomeView;
