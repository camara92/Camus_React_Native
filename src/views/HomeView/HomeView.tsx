

import {StyleSheet, View, Text, Image, ScrollView, FlatList} from 'react-native';
import { ListAvatar } from '../../data/AvatarsLists';
import { Avatar } from '../../models/Avatars';

const HomeView = () => {
  const name = 'Atlas Avatar';
  const level: number = 15;
  const isMale: boolean = true;
  console.log('Name is : ', name);

  return (
  
      <View>
      <FlatList
        data={ListAvatar}
        keyExtractor={item => item.id.toString()}
        renderItem={({item})=> 
            <AvatarInfos
        id={item.id}
          name={item.name}
          level={item.level}
          isMale={item.isMale}
          src={item.src}/>
        
        }
      />
      </View>
   
  );
};

const AvatarInfos = ({name, level, isMale, src}: Avatar) => {
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
    // textAlign: 'center',
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
