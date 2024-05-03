
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, FlatList } from 'react-native';
import { observer } from 'mobx-react-lite';

import { AntDesign } from '@expo/vector-icons';

import { Names_Setting_Window } from '../../global/global_state.js';
import { Style, Item_Style } from '../../global/global_styles.js';

import { Vkladka_button } from '../../global/global_elements.js'





export const names_windows =
{
    name_window_change_password: 'Изменить пароль',

    name_window_sort: 'Сортировка',
    name_window_thematic_design: 'Тематическое оформление',
    name_window_text_scale: 'Масштаб текста',
    name_window_text_font: 'Шрифт текста',
}





export const Global_user_window = observer( (props) =>
{
    const { set_name_setting_window } = Names_Setting_Window

    const { background_color_fon, text_size_20, color_text, icon_size_min } = Style
    const { style_Icon } = Item_Style



    

    const data_user_settings = 
    [
        { 
            id: 1, 
            label: names_windows.name_window_change_password,
            fun: () =>
            {
                set_name_setting_window(names_windows.name_window_change_password)

                props.navigation.navigate('setting_window')
            }
        }
    ];


    const data_app_settings = 
    [
        { 
            id: 1, 
            label: names_windows.name_window_thematic_design,
            fun: () =>
            {
                set_name_setting_window(names_windows.name_window_thematic_design)

                props.navigation.navigate('setting_window')
            }
        }
        ,
        { 
            id: 2, 
            label: names_windows.name_window_text_scale,
            fun: () =>
            {
                set_name_setting_window(names_windows.name_window_text_scale)

                props.navigation.navigate('setting_window')
            }
        }
    ];





    return (
        <View style={ [styles.container, {backgroundColor: background_color_fon}] }>

            <View style={styles.styleViev}>

                <Vkladka_button 
                    item=
                    {
                        <View style={{alignItems: 'center'}}>
                            <View style={styles.styleVievButton}>
                                <AntDesign name="user" size={icon_size_min} color={style_Icon} style={{marginRight: 10}} />
                                <Text style={{textAlign: 'center', fontSize: text_size_20, color: color_text}}>Настройки профиля</Text>
                            </View>
                        </View>
                    }
                    data={data_user_settings}
                />


                <Vkladka_button 
                    item=
                    {
                        <View style={{alignItems: 'center'}}>
                            <View style={styles.styleVievButton}>
                                <AntDesign name="setting" size={icon_size_min} color={style_Icon} style={{paddingRight: 10}} />
                                <Text style={{textAlign: 'center', fontSize: text_size_20, color: color_text}}>Настройки приложния</Text>
                            </View>
                        </View>
                    }
                    data={data_app_settings}
                />

            </View>

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
        flexDirection: 'row', 
        alignItems: 'center'
    }
    ,

})




