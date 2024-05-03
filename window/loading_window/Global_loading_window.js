import { names_app_tema, names_AsyncStorage } from '../../settings/app.js'

import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

import { App, User } from '../../global/global_state.js'

import {Fun_checked_session_check} from './Fun_checked_session_check.js';

import { Fun_get_tema, set_style_SafeAreaView } from '../../function/Fun_settings_styles.js'
import { Fun__get__AsyncStorage } from '../../function/Fun_async_storage.js'







export const Global_loading_window = (props) =>
{
    const { set_session_hash } = App
    const { set_user_name } = User



    const fun = async () =>
    {
        // setTimeout(() => {props.navigation.navigate('login_window')}, 1000)

        if( await Fun_checked_session_check() )
        {
            set_session_hash( await Fun__get__AsyncStorage(names_AsyncStorage.session_hash) )
            set_user_name( await Fun__get__AsyncStorage(names_AsyncStorage.user_name) )

            await Fun_get_tema()

            props.navigation.navigate('main_window')
        }
        else
        {
            if (await Fun_get_tema() === names_app_tema.app_tema_light)
            {
                set_style_SafeAreaView.set_style_dirty_white()
            }
            else
            {
                set_style_SafeAreaView.set_style_black()
            }

            props.navigation.navigate('login_window')
        }
    }
    fun()



    return (
        <View style={ [styles.container, {backgroundColor: 'black'}] }>
            <ActivityIndicator size='large' color='white' />
        </View>
    )
}





const styles = StyleSheet.create(
{
    container: 
    {
        flex: 1,

        alignItems: 'center',
        justifyContent: 'center',
    }
    ,

})