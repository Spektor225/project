import { names_app_tema, names_AsyncStorage } from '../../../settings/app.js'

import React, {useState} from 'react';
import { Platform, useColorScheme, StyleSheet, View, Text, TextInput, Button, Switch, TouchableOpacity, Alert, Modal, ActivityIndicator } from "react-native"
import { observer } from "mobx-react-lite"

import { Ionicons } from '@expo/vector-icons';

import { Fun_set_tema, set_style_text } from '../../../function/Fun_settings_styles.js'
import { Fun__get__AsyncStorage, Fun__set__AsyncStorage } from '../../../function/Fun_async_storage.js' 
import { Fun_axios__api__put_users_password } from '../../../function/Fun_axios.js'
import { function__hech_md5 } from '../../../function/hech_md5.js'

import { names_windows } from '../Global_user_window.js'

import { App, Names_Setting_Window } from '../../../global/global_state.js'

import { Style, Item_Style } from '../../../global/global_styles.js';

import { Vkladka, Viev_Text_TextInput_Password } from '../../../global/global_elements.js'







export const Global_setting_window = observer( (props) =>
{
    const { app_tema, session_hash } = App
    
    const { name_setting_window } = Names_Setting_Window

    const { background_color_fon, background_color_item, text_size_30, text_size_20, text_size_12, color_text, icon_size_min } = Style
    const { style_Icon, style_Button, style_ActivityIndicator } = Item_Style



    // смена пароля
    const [visible_modal, set_visible_modal] = useState(false)

    const [password, set_password] = useState('')
    const [new_password, set_new_password] = useState('')
    const [new_password_confirm, set_new_password_confirm] = useState('')



    // тематическое оформление
    const set_disabled = (tema) =>
    {
        if(app_tema === tema || app_tema === names_app_tema.app_tema_light)
        {
            return false
        }
        else if (app_tema === null)
        {
            return false
        }
        else
        {
            return true
        }
    }

    const [ disabled_dark_tema, set_disabled_dark_tema ] = useState( set_disabled(names_app_tema.app_tema_dark) )   // блокировка
    const [ is_enabled_dark_tema, set_is_enabled_dark_tema ] = useState( app_tema === names_app_tema.app_tema_dark ? true : false )   // положение переключателя

    const [ disabled_system_tema, set_disabled_system_tema ] = useState( set_disabled(names_app_tema.app_tema_system) )
    const [ is_enabled_system_tema, set_is_enabled_system_tema ] = useState( app_tema === names_app_tema.app_tema_system ? true : false )



    // размер текста
    const text_primer = 'Пример текста! ;)'





    // функции смены пароля
    const Fun_password = async() =>
    {
        set_visible_modal(true)


        if( await Fun__get__AsyncStorage(names_AsyncStorage.user_password) === function__hech_md5(password) )
        {
            if(new_password === new_password_confirm)
            {
                const data = await Fun_axios__api__put_users_password( session_hash, function__hech_md5(new_password) )

                if ( data.error_code !== 0 )
                {
                    Alert.alert('Ошибка', data.error_text, [{text: 'ОК'}])
                }
                else
                {
                    Fun__set__AsyncStorage( names_AsyncStorage.user_password, function__hech_md5(new_password) )

                    Alert.alert('Успешно', data.error_text, [{text: 'ОК'}])
                    
                    props.navigation.navigate('user_window')
                }
            }
            else
            {
                Alert.alert('Ошибка', 'Новый пароль не совпадает с его подтверждением', [{text: 'ОК'}])
            }
        }
        else
        {
            Alert.alert('Ошибка', 'Неверный старый пароль', [{text: 'ОК'}])
        }

        
        set_visible_modal(false)
    }



    // функции смены темы
    const Fun_switch_dark_tema = () => 
    {
        set_is_enabled_dark_tema( !is_enabled_dark_tema );


        if( !is_enabled_dark_tema === false )
        {
            Fun_set_tema( names_app_tema.app_tema_light )

            set_disabled_system_tema(false)
        }
        else
        {
            Fun_set_tema( names_app_tema.app_tema_dark )

            set_disabled_system_tema(true)
        }
    }

    const Fun_switch_system_tema = () => 
    {
        set_is_enabled_system_tema( !is_enabled_system_tema )


        if( !is_enabled_system_tema === false )
        {
            Fun_set_tema( names_app_tema.app_tema_light )
            
            set_disabled_dark_tema(false)
        }
        else
        {
            Fun_set_tema( names_app_tema.app_tema_system )

            set_disabled_dark_tema(true)
        }
    }





    return(
        <View style={ [styles.container, {backgroundColor: background_color_fon}] }>
            {
                name_setting_window === names_windows.name_window_change_password ?
                <View>

                    <Modal visible={visible_modal}>
                        <View style={ [styles.styleViewModal, {backgroundColor: background_color_fon}] }>
                            <ActivityIndicator size='large' color={style_ActivityIndicator} />
                        </View>
                    </Modal>


                    <View style={ styles.styleViev }>
                        <Viev_Text_TextInput_Password  text={'Введите старый пароль'}  style_marginTop={Platform.isPad ? '5%' : '10%'}  fun={ (text) => set_password(text) }/>
                        <Viev_Text_TextInput_Password  text={'Введите новый пароль'}  style_marginTop={Platform.isPad ? '5%' : '10%'}  fun={ (text) => set_new_password(text) }/>
                        <Viev_Text_TextInput_Password  text={'Подтвердите новый пароль'}  style_marginTop={Platform.isPad ? '2%' : '5%'}  fun={ (text) => set_new_password_confirm(text) }/> 


                        <TouchableOpacity style={ [styles.styleVievButton_Password, {backgroundColor: style_Button}] } onPress={ () => Fun_password() }>
                            <Text style={ [styles.styleButton_Password, {fontSize: text_size_20}] }>Изменить пароль</Text>
                        </TouchableOpacity>
                    </View>

                </View>
                

                : name_setting_window === names_windows.name_window_sort ?
                <View>
                
                </View>

                : name_setting_window === names_windows.name_window_thematic_design ?
                <View>

                    <View style={styles.styleViev}>
                        <Vkladka 
                            item=
                            {
                                <View style={styles.styleVievButton}>
                                    <Text style={{flex: 1, fontSize: text_size_20, color: color_text}}>Темная тема</Text>

                                    <Switch
                                        value={is_enabled_dark_tema}
                                        disabled={disabled_dark_tema}

                                        onChange={ Fun_switch_dark_tema }

                                        ios_backgroundColor="#3e3e3e"

                                    />
                                    
                                </View>
                            }
                        />

                        <Vkladka 
                            item=
                            {
                                <View style={styles.styleVievButton}>
                                    <Text style={{flex: 1, fontSize: text_size_20, color: color_text}}>Использовать тему устройства</Text>

                                    <Switch
                                        value={is_enabled_system_tema}
                                        disabled={disabled_system_tema}

                                        onChange={ Fun_switch_system_tema }

                                        ios_backgroundColor="#3e3e3e"

                                    />
                                </View>
                            }
                        />
                    </View>

                </View>

                : name_setting_window === names_windows.name_window_text_scale ?
                <View>

                    <View style={ styles.styleViev }>

                        <View style={{marginTop: 20, minHeight: 300, maxHeight: 400, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontSize: text_size_30, color: color_text}}>{text_primer}</Text>
                            <Text style={{fontSize: text_size_20, color: color_text, marginTop: 10}}>{text_primer}</Text>
                            <Text style={{fontSize: text_size_12, color: color_text, marginTop: 10}}>{text_primer}</Text>
                        </View>
                        

                        <View style={styles.styleVievButtons_TextScale}>
                            <TouchableOpacity style={ [styles.styleVievButton_TextScale, {backgroundColor: background_color_item}] } onPress={ () => set_style_text.set_size(-1) }>
                                <Ionicons name="text-outline" size={icon_size_min} color={style_Icon} />
                                <Text style={{fontSize: text_size_20, color: color_text, marginLeft: 10}}>-</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={ [styles.styleVievButton_TextScale, {backgroundColor: background_color_item}] } onPress={ () => set_style_text.set_size(1) }>
                                <Ionicons name="text-outline" size={icon_size_min} color={style_Icon} />
                                <Text style={{fontSize: text_size_20, color: color_text, marginLeft: 10}}>+</Text>
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity style={ [styles.styleVievButton_TextScale, {backgroundColor: background_color_item, width: '100%'}] } onPress={ () => set_style_text.set_size_default() }>
                                <Text style={{fontSize: text_size_20, color: color_text, marginLeft: 10}}>Установить по умолчанию</Text>
                        </TouchableOpacity>
                        
                    </View>

                </View>

                :  // names_windows.name_window_text_font
                <View>
                    <Text style={{color: 'red'}}>4</Text>
                </View>
            }
        </View>
    )

} )





const styles = StyleSheet.create(
{
    container: 
    {
      flex: 1,
    }
    ,

    styleViev:
    {
        marginLeft: '10%',
        marginRight: '10%',
    }
    ,

    styleVievButton:
    { 
        flex: 1, 

        alignItems: 'center', 

        justifyContent: 'space-between', 
        flexDirection: 'row',

    }
    ,



    styleViewModal:
    {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
    ,

    styleVievButton_Password:
    {
        marginTop: Platform.isPad ? '10%' : '20%',

        marginLeft: '28%',
        marginRight: '28%',
        
        padding: 10,

        borderRadius: 15,
    }
    ,

    styleButton_Password:
    {
        textAlign: 'center',

        color: 'white',
    }
    ,



    styleVievButtons_TextScale:
    {
        flexDirection: 'row', 
        justifyContent: 'space-between'
    }
    ,

    styleVievButton_TextScale:
    {
        width: '46%',

        marginTop: 20,

        padding: 17,
        borderRadius: 17,

        flexDirection: 'row',
        justifyContent: 'center',
        
        alignItems: 'center',
    }
    ,
})




