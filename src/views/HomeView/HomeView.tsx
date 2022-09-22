

import {StyleSheet, View, Text, Image, ScrollView, FlatList, Button, DrawerLayoutAndroidComponent, TouchableOpacity} from 'react-native';
import { ListAvatarORiginal } from '../../data/AvatarsLists';
import { Avatar } from '../../models/Avatars';
import React, { useState } from 'react';

const HomeView = () => {
  // state en react native :
  const [counterAvatar, setCounterAvatar]= useState(0);
  const [ListAvatar, setListAvatar]= useState(ListAvatarORiginal);
  // nom de l'avatar 
  const getNameAvatar =(nameAvatar:string) =>{
    console.log("My name is ", nameAvatar); 
    console.log("The next avatar name ", ListAvatar[counterAvatar + 1].name); 
  }
  // augmenter le niveau de l'avater : 
  const modifyLevelAvatar =() =>{
    let newArr= [...ListAvatar];
    ListAvatar[counterAvatar].level = ListAvatar[counterAvatar].level +5;
    setListAvatar(newArr); 
  }

  const onNext = ()=>{
    if(counterAvatar ===ListAvatar.length -1 ){
      setCounterAvatar(0);
    }else{
      setCounterAvatar(counterAvatar +1); 
    }
  }
  const onPrevious = ()=>{
    if(counterAvatar === 0 ){
      setCounterAvatar(ListAvatar.length  -1);
    }else{
       setCounterAvatar(counterAvatar -1); 
      
    }
  }
 

  return (
      <View>
        <Text>The value of counter is : {counterAvatar} </Text>
        <Button
          title="Next"
          onPress={onNext}
            />
             <Button
          title="Previous"
          onPress={()=> onPrevious()}
          
            />
               <AvatarInfos
        id={ListAvatar[counterAvatar].id}
          name={ListAvatar[counterAvatar].name}
          level={ListAvatar[counterAvatar].level}
          isMale={ListAvatar[counterAvatar].isMale}
          src={ListAvatar[counterAvatar].src} 
          // onClickAvatar = {getNameAvatar}
          onClickAvatar = {modifyLevelAvatar}
          />
      
      </View>
   
  );
};

const AvatarInfos = ({name, level, isMale, src, onClickAvatar}: Avatar) => {
 
  return (
    <View>
      <Text style={styles.TextCenter}>This is an Avatar : </Text>
      <Text>
        His name is {name}, his level is {level}
      </Text>
      {isMale ? <Text>This is a male </Text> : <Text>This is a female</Text>}
      <TouchableOpacity
        // onPress={()=>onClickAvatar(name)}
       onPress={()=>onClickAvatar()}
      >
      <Image source={src} style={styles.imageAvatar} />
      </TouchableOpacity>
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
    height: 420,
   
  },
});

export default HomeView;
function getNameAvatar(): void {
  throw new Error('Function not implemented.');
}

