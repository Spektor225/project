
import { Platform,BackHandler, StyleSheet, Text, View, TextInput, Button, TouchableOpacity, StatusBar } from 'react-native';
import { observer } from 'mobx-react-lite';


import { app_name } from '../../settings/app.js'

import { User, Names_Akt_Window, Names_Zaivki_Window } from '../../global/global_state.js';
import { Style, Item_Style } from '../../global/global_styles.js';

import { AntDesign } from '@expo/vector-icons';

import { Vkladka_button } from '../../global/global_elements.js'






export const names_windows =
{
    zaivki_window:
    {
        in_progress_zaivki: 'В работе',
        new_zaivki: 'Новые',
    }   
}





export const Global_main_window = observer( (props) =>
{
    const { user_name } = User
    const { background_color_fon, background_color_item, color_text, text_size_20, icon_size_min } = Style
    const { style_Icon } = Item_Style

    const { set_name_zaivki_window } = Names_Zaivki_Window


    const data_zaivka = 
    [
        { 
            id: 1, 
            label: names_windows.zaivki_window.new_zaivki,
            fun: () =>
            {
                set_name_zaivki_window(names_windows.zaivki_window.new_zaivki)

                props.navigation.navigate('zaivki_window')
            },
        }
        ,
        { 
            id: 2, 
            label: names_windows.zaivki_window.in_progress_zaivki,
            fun: async() =>
            {
                set_name_zaivki_window(names_windows.zaivki_window.in_progress_zaivki)

                props.navigation.navigate('zaivki_window')
            },
        }
    ]





    return (
        <View style={ [styles.container, {backgroundColor: background_color_fon}] }>

            <View style={ [styles.header, {backgroundColor: background_color_item}] }>
                <View style={{width: '48%'}}>
                    <Text style={{fontSize: text_size_20, color: color_text}}>{app_name}</Text>
                </View>

                <TouchableOpacity style={{width: '48%'}} onPress={() => props.navigation.navigate('user_window')}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text numberOfLines={1} style={{flex: 1, fontSize: text_size_20, color: color_text, textAlign: 'right'}}>{user_name}</Text>
                        <AntDesign name="user" size={icon_size_min} color={style_Icon} style={styles.styleUserIcon} />
                    </View>
                </TouchableOpacity>
            </View>



            <View style={styles.styleViev}>
                <Vkladka_button 
                    item=
                    {
                        <View style={{alignItems: 'center'}}>
                            <View style={styles.styleVievButton}>
                                <Text style={{fontSize: text_size_20, color: color_text}}>Заявки</Text>
                            </View>
                        </View>
                    }
                    data={data_zaivka}
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

    header:
    {
        padding: 10,

        justifyContent: 'space-between',
        flexDirection: 'row',

        alignItems: 'center',

        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    }
    ,

    styleUserIcon:
    {
        marginLeft: 10,
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
        alignItems: 'center',
    }
    ,

})