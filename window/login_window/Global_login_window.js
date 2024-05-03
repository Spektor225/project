import { names_AsyncStorage } from '../../settings/app.js'

import { useState, useEffect } from 'react';
import { Dimensions, Platform, Alert, StyleSheet, Text, View, TextInput, TouchableOpacity, Modal, ActivityIndicator } from 'react-native';
import { observer } from 'mobx-react-lite';

import { App, User } from '../../global/global_state.js';
import { Style } from '../../global/global_styles.js';
import { Item_Style } from '../../global/global_styles.js';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { function__hech_md5 } from '../../function/hech_md5.js'
import { Fun_get_tema } from '../../function/Fun_settings_styles.js'
import { Fun__set__AsyncStorage } from '../../function/Fun_async_storage.js';

import { Fun_authorization } from './Fun_authorization.js'








export const Global_login_window = observer( (props) =>
{
    const { set_session_hash } = App
    const { set_user_name } = User

    const { background_color_fon, background_color_item, color_text, text_size_20, text_size_30, icon_size_max } = Style
    const { style_ActivityIndicator, style_Icon, style_Button } = Item_Style
    


    const [login, set_login] = useState('')
    const [password, set_password] = useState('')
    const [db_guid, set_db_guid] = useState('325613DF-95BD-4804-873B-5DFC10C40E8D')


    const [visible_modal, set_visible_modal] = useState(false)
    const [visible_password, set_visible_password] = useState(true)





    const fun = async () =>
    {
      set_visible_modal(true)


      const result = await Fun_authorization(login, function__hech_md5(password), db_guid)

      if(result.is_active === true)
      {
        Fun__set__AsyncStorage(names_AsyncStorage.session_hash, result.session_hash)
        Fun__set__AsyncStorage(names_AsyncStorage.user_name, result.user_name)
        Fun__set__AsyncStorage(names_AsyncStorage.user_password, function__hech_md5(password))

        set_session_hash(result.session_hash)
        set_user_name(result.user_name)

        Fun_get_tema()

        props.navigation.navigate('main_window')
        
        set_visible_modal(false)

      }
      else
      {
        Alert.alert('Ошибка', result.errtext, [{text: 'ОК'}])
        
        set_visible_modal(false)
      }
    }





    return (
      <View style={ [styles.container, {backgroundColor: background_color_fon}] }>

        <Modal visible={visible_modal}>
          <View style={ [styles.styleViewModal, {backgroundColor: background_color_fon}] }>
            <ActivityIndicator size='large' color={style_ActivityIndicator} />
          </View>
        </Modal>



        <View style={styles.styleViev}>

          <Text style={ [styles.styleTitle, {fontSize: text_size_30, color: color_text}] }>ВХОД</Text>
          

          <Text style={ [styles.styleText, { marginTop: Platform.isPad ? '5%' : '10%', fontSize: text_size_20, color: color_text}] }>Логин</Text>
          <TextInput style={ [styles.styleInput, {fontSize: text_size_20, color: color_text, backgroundColor: background_color_item}] } onChangeText={(text) => set_login(text)}/>


          <Text style={ [styles.styleText, {marginTop: Platform.isPad ? '2%' : '5%', fontSize: text_size_20, color: color_text}] }>Пароль</Text>
          <View style={{flexDirection: 'row'}}>
            <TextInput secureTextEntry={visible_password} style={ [styles.styleInput, {flex: 1, fontSize: text_size_20, color: color_text, backgroundColor: background_color_item}] } onChangeText={(text) => set_password(text)}/> 
            <TouchableOpacity style={{justifyContent: 'center'}} onPress={() => set_visible_password(!visible_password)}>
              { !visible_password ? 
                <MaterialCommunityIcons name="eye-off-outline" size={icon_size_max} color={style_Icon} style={styles.styleIcon} /> 
                : 
                <MaterialCommunityIcons name="eye-outline" size={icon_size_max} color={style_Icon} style={styles.styleIcon} /> 
              }
            </TouchableOpacity>
          </View>
          

          <Text style={ [styles.styleText, {marginTop: Platform.isPad ? '5%' : '10%', fontSize: text_size_20, color: color_text}] }>ID Огранизации</Text>
          <TextInput style={ [styles.styleInput, {fontSize: text_size_20, color: color_text, backgroundColor: background_color_item}] } value='325613DF-95BD-4804-873B-5DFC10C40E8D' onChangeText={(text) => set_db_guid(text)}/> 


          <TouchableOpacity style={ [styles.styleVievButton, {backgroundColor: style_Button}] } onPress={() => fun()}>
            <Text style={ [styles.styleButton, {fontSize: text_size_20}] }>Войти</Text>
          </TouchableOpacity>

        </View>

      </View>
    );

} )







const styles = StyleSheet.create(
{
  container: 
  {
    flex: 1,
  }
  ,
  
  styleViewModal:
  {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
  ,
  
  styleViev:
  {
    marginTop: Platform.isPad ? '5%' : '10%',

    marginRight: '10%',
    marginLeft: '10%',
  }
  ,

  styleTitle:
  {
    textAlign: 'center',
  }
  ,

  styleText:
  {
    textAlign: 'center',
    padding: 10,
  }
  ,

  styleInput:
  {
    padding: 10,

    borderRadius: 13,
  }
  ,

  styleIcon:
  {
    marginLeft: 15,
  }
  ,

  styleVievButton:
  {
    marginTop: Platform.isPad ? '10%' : '20%',

    marginLeft: '28%',
    marginRight: '28%',
    
    padding: 10,

    borderRadius: 15,
  }
  ,

  styleButton:
  {
    textAlign: 'center',

    color: 'white',
  }
  ,

})








