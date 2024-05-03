import { useState } from 'react';
import { BackHandler, Alert, StyleSheet, Text, View, TextInput, Button, TouchableOpacity, FlatList, ActivityIndicator, Modal } from 'react-native';
import { observer } from 'mobx-react-lite';

import { App } from '../../../../global/global_state.js';
import { Style, Item_Style } from '../../../../global/global_styles.js';

import { Vkladka } from '../../../../global/global_elements.js'

import { Fun_axios__api__get_request_info, Fun_axios__api__put_request_take } from '../../../../function/Fun_axios.js'







export const Global_info_zaivka_window = observer( ({navigation, route}) =>
{
    const { background_color_fon, background_color_item, text_size_30, text_size_20, text_size_12, text_size_5, color_text } = Style
    const { style_ActivityIndicator } = Item_Style

    const [visible_modal, set_visible_modal] = useState(false)
    const [visible_button, set_visible_button] = useState(true)

    const [data, set_data] = useState(null)





    const fun = async() =>
    {
        const data = await Fun_axios__api__get_request_info( App.session_hash, route.params.req_id )

        
        if( data.postdata[0].ID_StateRequest === 3 || data.postdata[0].ID_StateRequest === 6)
        {
            set_visible_button(false)
        }


        data.postdata[0].req_date = data.postdata[0].req_date.split('T').join(' ')

        if( data.postdata[0].TimeLimit !== null )
        {
            data.postdata[0].TimeLimit = data.postdata[0].TimeLimit.split('T').join(' ')
        }
        

        set_data( data.postdata )
    }

    if(data === null)
    {
        fun()
    }



    const button_hire = async() =>
    {
        set_visible_modal(true)


        const hire_data = await Fun_axios__api__put_request_take( App.session_hash, data[0].req_id) 

        if( hire_data.error_code === 0)
        {
            Alert.alert('Успешно', hire_data.error_text, [{text: 'ОК'}])

            navigation.navigate('main_window')
        }
        else
        {
            Alert.alert('Ошибка', hire_data.error_text, [{text: 'ОК'}])
        }


        set_visible_modal(false)
    }
    




    return(
        <View style={ [styles.container, {backgroundColor: background_color_fon}] }>

            <Modal visible={visible_modal}>
                <View style={ [styles.styleViewModal, {backgroundColor: background_color_fon}] }>
                    <ActivityIndicator size='large' color={style_ActivityIndicator} />
                </View>
            </Modal>


            <View style={styles.styleViev}>
                {
                    data === null ?
                    <View style={styles.styleViewActivityIndicator}>
                        <ActivityIndicator size='large' color={style_ActivityIndicator} />
                    </View>

                    :
                    <View style={{flex:1}}>
                        <FlatList 
                            data={data}
                            renderItem=
                            { 
                                ({item}) => 
                                {
                                    return(
                                        <Vkladka 
                                            item=
                                            {
                                                <View>
                                                    <Text style={{fontSize: text_size_20, color: color_text}}>Заявка № {item.req_id} от {item.req_date}</Text>

                                                    <Text style={ [styles.styleText, {fontSize: text_size_20, color: color_text}] }><Text style={{fontWeight: 'bold'}}>Адрес:</Text></Text>
                                                    <Text style={ {fontSize: text_size_20, color: color_text} }>{item.req_adr}</Text>

                                                    <Text style={ [styles.styleText, {fontSize: text_size_20, color: color_text}] }><Text style={{fontWeight: 'bold'}}>Статус: </Text>{item.RequestStatus}</Text>

                                                    {item.TimeLimit && <Text style={ [styles.styleText, {fontSize: text_size_20, color: color_text}] }><Text style={{fontWeight: 'bold'}}>Предельный срок исполнения:</Text></Text> }
                                                    {item.TimeLimit && <Text style={ {fontSize: text_size_20, color: color_text} }>{item.TimeLimit}</Text> }

                                                    <Text style={ [styles.styleText, {fontSize: text_size_20, color: color_text}] }><Text style={{fontWeight: 'bold'}}>Состояние: </Text>{item.RequestState}</Text>

                                                    <Text style={ [styles.styleText, {fontSize: text_size_20, color: color_text}] }><Text style={{fontWeight: 'bold'}}>Причина обращения:</Text></Text>
                                                    <Text style={ {fontSize: text_size_20, color: color_text} }>{item.ReasonRequest} {item.ProblemText ? "(" + item.ProblemText + ")" : ''}</Text>

                                                    {item.Comment && <Text style={ [styles.styleText, {fontSize: text_size_20, color: color_text}] }><Text style={{fontWeight: 'bold'}}>Комментарий: </Text>{item.Comment}</Text> }
                                                </View>
                                            }
                                        />
                                    )
                                }
                            }
                            showsVerticalScrollIndicator={false}
                        />


                        {visible_button && <View style={styles.styleVievButtons}>
                            <TouchableOpacity style={ [styles.styleVievButton, {backgroundColor: 'green'}] } onPress={ () => button_hire() }>
                                <Text style={{fontSize: text_size_12, color: color_text}}>Принять в работу</Text>
                            </TouchableOpacity>
                        </View>}
                    </View>
                }
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

    styleViewModal:
    {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
    ,

    styleViev:
    {   
        flex: 1,

        marginLeft: '5%',
        marginRight: '5%',
    }
    ,

    styleViewActivityIndicator:
    {
        marginTop: 50,
    }
    ,

    styleText:
    {
        marginTop: 8,
    }
    ,

    styleVievButtons:
    {
        flexDirection: 'row', 
        justifyContent: 'space-between'
    }
    ,

    styleVievButton:
    {
        width: '46%',

        marginTop: 20,
        marginBottom: 20,

        padding: 17,
        borderRadius: 17,

        justifyContent: 'center',
        alignItems: 'center',
    }
    ,

})






