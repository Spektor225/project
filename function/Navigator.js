import React from 'react'
import { observer } from 'mobx-react-lite';


import { User, Names_Setting_Window, Names_Akt_Window, Names_Zaivki_Window } from '../global/global_state.js'
import { Style } from '../global/global_styles.js'


import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


import { Global_loading_window } from '../window/loading_window/Global_loading_window.js'
import { Global_login_window } from '../window/login_window/Global_login_window.js'

import { Global_main_window } from '../window/main_window/Global_main_window.js'

import { Global_user_window } from '../window/user_window/Global_user_window.js'
import { Global_setting_window } from '../window/user_window/setting_window/Global_setting_window.js'

import { Global_zaivki_window } from '../window/main_window/zaivki_window/Global_zaivki_window.js'
import { Global_info_zaivka_window } from '../window/main_window/zaivki_window/info_zaivka_window/Global_info_zaivka_window.js'


import { Text, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';







const Stack = createStackNavigator()





export const Fun_navigation_stack__main_window = observer( () =>
{
    const { user_name } = User
    const { background_color_item, text_size_12, color_text } = Style

    const { name_setting_window } = Names_Setting_Window
    const { name_zaivki_window } = Names_Zaivki_Window



    return (
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName='loading_window' 

                screenOptions =
                {{
                    headerStyle:
                    {
                        backgroundColor: background_color_item,
                        shadowOpacity: 0,
                    }
                    ,
                    headerTitleStyle:
                    {
                        color: color_text,
                        fontSize: text_size_12,
                    }
                    ,
                    headerBackTitleStyle:
                    {
                        fontSize: text_size_12,
                    }
                    ,
                    headerTintColor: 'blue'
                }}
                
            >

                <Stack.Screen 
                    name='loading_window' 
                    component={Global_loading_window}
                    options={{ headerShown: false, gestureEnabled: false  }} 
                />


                <Stack.Screen 
                    name='login_window'
                    component={Global_login_window} 
                    options={{ headerShown: false, gestureEnabled: false  }} 
                />


                <Stack.Screen 
                    name='main_window'
                    component={Global_main_window} 
                    options=
                    {{ 
                        headerShown: false, 
                        gestureEnabled: false,
                        
                        // headerLeft: () => { return(<Text style={{fontSize: 20, marginLeft: 10, backgroundColor: 'red', width: '100%'}}>АДС</Text>) },
                        // headerRight: () => 
                        // { 
                        //     return(
                        //         <TouchableOpacity style={{marginRight: 10, backgroundColor: 'red', width: '100%'}} onPress={() => navigation.navigate('user_window')}>
                        //             <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        //                 <Text numberOfLines={1} style={{fontSize: 20, paddingRight: 10, textAlign: 'right'}}>{user_name}{user_name}</Text>
                        //                 <AntDesign name="user" size={24} color="black" style={styles.styleUserIcon} />
                        //             </View>
                        //         </TouchableOpacity>
                        //     ) 
                        // }
                    }}
                />


                <Stack.Screen 
                    name='user_window' 
                    component={Global_user_window} 
                    options=
                    {{
                        title: user_name, 
                        headerBackTitle: 'Главная',
                    }} 
                />


                <Stack.Screen 
                    name='setting_window' 
                    component={Global_setting_window} 
                    options=
                    {{
                        title: name_setting_window, 
                        headerBackTitle: 'Назад',
                    }} 
                />


                <Stack.Screen 
                    name='zaivki_window' 
                    component={Global_zaivki_window} 
                    options=
                    {{
                        title: name_zaivki_window, 
                        headerBackTitle: 'Назад',
                    }} 
                />


                <Stack.Screen 
                    name='info_zaivka_window' 
                    component={Global_info_zaivka_window} 
                    options=
                    {{
                        title: 'Информация по заявке', 
                        headerBackTitle: 'Назад',
                    }} 
                />


                

            </Stack.Navigator>
        </NavigationContainer>
    )
} )











const styles = (
{
    container: 
    {
        flex: 1,
        
    //   alignItems: 'center',
    //   justifyContent: 'center',
    }
    ,

    header:
    {
        backgroundColor: '#fff',

        borderColor: 'blаck',
        borderBottomWidth: 1,

        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10,

        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    }
    ,

    styleUserIcon:
    {
        padding: 6,  // 5

        borderColor: 'black', 
        borderWidth: 1, 
        borderRadius: 19,  // 18
    }
    ,

    // styleText:
    // {
    //     fontSize: 20,
    // }
    // ,

    styleViev:
    {
        marginTop: 20,

        width: '80%',
        marginLeft: '10%',

        padding: 17,
        borderRadius: 20,

        backgroundColor: '#fff',

        alignItems: 'center'
    }
    ,

})
