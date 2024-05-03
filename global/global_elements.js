import { useState } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, FlatList, TextInput } from 'react-native';
import { observer } from 'mobx-react-lite';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Style, Item_Style } from './global_styles.js';







export const Vkladka_button = observer( (props) =>
{
    const [show_options, set_show_options] = useState(false);

    const { background_color_fon, background_color_item, color_text, text_size_20 } = Style



    return(
        <View>

            <TouchableOpacity 
                style=
                {[
                    styles.styleButton, 
                    {
                        backgroundColor: background_color_item
                    }
                ]} 
                onPress={ () => props.fun ? props.fun() : set_show_options(!show_options) } 
            >
                {props.item}
            </TouchableOpacity>


            {show_options && 
                (
                    <FlatList
                        data={props.data}
                        renderItem=
                        {
                            ({ item }) => 
                            {
                                if(props.data.length === item.id)
                                {
                                    return(
                                        <View style={styles.styleViev}>
                                            <TouchableOpacity 
                                                style=
                                                {[
                                                    styles.styleOptionButton,
                                                    {
                                                        backgroundColor: background_color_item, 
                                                        borderColor: background_color_fon,
                                                    },
                                                    styles.styleOptionButton_EndItem
                                                ]} 
                                                onPress={ () => {item.fun()} }
                                            >
                                                <View style={styles.styleVievButton}>
                                                    {item.icon}
                                                    <Text style={{textAlign: 'center', fontSize: text_size_20, color: color_text}}>{item.label}</Text>
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    )
                                }
                                else
                                {
                                    return(
                                        <View style={styles.styleViev}>
                                            <TouchableOpacity 
                                                style=
                                                {[
                                                    styles.styleOptionButton, 
                                                    {
                                                        backgroundColor: background_color_item, 
                                                        borderColor: background_color_fon
                                                    },
                                                ]} 
                                                onPress={ () => {item.fun()} }
                                            >
                                                <View style={styles.styleVievButton}>
                                                    {item.icon}
                                                    <Text style={{textAlign: 'center', fontSize: text_size_20, color: color_text}}>{item.label}</Text>
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    )
                                } 
                            }
                        }
                        keyExtractor={(item) => item.id.toString()}
                        scrollEnabled={false}
                    />
                )
            }
        </View> 
    )

} )





export const Vkladka = observer( (props) =>
{
    const { background_color_fon, background_color_item, color_text, text_size_20 } = Style



    return(
        <View style={ [styles.styleButton, {backgroundColor: background_color_item}] } >
            <View style={styles.styleVievButton}>
                {props.item}
            </View>
        </View>
    )

} )





export const Viev_Text_TextInput_Password = observer ( (props) =>
{
    const { background_color_item, color_text, text_size_20 } = Style
    const { style_Icon } = Item_Style

    const [visible_password, set_visible_password] = useState(true)


    return(
        <View>

            <Text style={ [styles.styleText, { marginTop: props.style_marginTop, fontSize: text_size_20, color: color_text}] }>{props.text}</Text>


            <View style={{flexDirection: 'row'}}>

                <TextInput secureTextEntry={visible_password} style={ [styles.styleTextInput, {fontSize: text_size_20, color: color_text, backgroundColor: background_color_item}] } onChangeText={ (text) => props.fun(text) }/>

                <TouchableOpacity style={{justifyContent: 'center'}} onPress={() => set_visible_password(!visible_password)}>
                { !visible_password ? 
                    <MaterialCommunityIcons name="eye-off-outline" size={34} color={style_Icon} style={styles.styleIcon} /> 
                    : 
                    <MaterialCommunityIcons name="eye-outline" size={34} color={style_Icon} style={styles.styleIcon} /> 
                }
                </TouchableOpacity>

            </View>

        </View>
    )

} )







const styles = StyleSheet.create(
{
    styleViev:
    {
        marginLeft: '10%',
        marginRight: '10%',
    }
    ,


    styleButton:
    {
        marginTop: 20,

        // width: '70%',
        // marginLeft: '15%',

        padding: 17,
        borderRadius: 20,

        // backgroundColor: '#fff',

        // alignItems: 'center'
    }
    ,

    styleVievButton:
    {
        flexDirection: 'row', 
        alignItems: 'center'
    }
    ,


    styleOptionButton:
    {
        // marginTop: 20,

        // width: '80%',
        // marginLeft: '10%',

        padding: 17,

        borderTopWidth: 1,

        // borderRadius: 20,

        alignItems: 'center',

    }
    ,

    styleOptionButton_EndItem:
    {
        borderBottomRightRadius: 17, 
        borderBottomLeftRadius: 17,
    }
    ,



    styleText:
    {
        textAlign: 'center',
        padding: 10,
    }
    ,

    styleTextInput:
    {
        flex: 1,

        padding: 10,
        borderRadius: 13,
    }
    ,

    styleIcon:
    {
        marginLeft: 15,
    }
    ,

})






