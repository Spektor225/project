import { useState } from 'react';
import { BackHandler, StyleSheet, Text, View, TextInput, Button, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { observer } from 'mobx-react-lite';

import { MaterialCommunityIcons, Fontisto } from '@expo/vector-icons';

import { id_states_zaivki, id_statuses_zaivki } from '../../../settings/app.js'

import { Style, Item_Style } from '../../../global/global_styles.js';

import { names_windows } from '../Global_main_window.js'

import { Names_Zaivki_Window } from '../../../global/global_state.js';

import { Vkladka_button } from '../../../global/global_elements.js'

import { Fun_get_request_list } from './Fun_get_request_list.js'







export const Global_zaivki_window = observer( (props) =>
{
    const { background_color_fon, background_color_item, text_size_30, text_size_20, text_size_12, text_size_5, color_text, icon_size_min } = Style
    const { style_ActivityIndicator, style_Icon } = Item_Style

    const { name_zaivki_window } = Names_Zaivki_Window


    const [data, set_data] = useState(null)

    const [style_icon__sort_statuses, set_style_icon__sort_statuses] = useState(style_Icon)
    const [sort_statuses, set_sort_statuses] = useState(false)
    const [sort_data__statuses, set_sort_data__statuses] = useState([])

    const [style_icon__sort_data_time, set_style_icon__sort_data_time] = useState(style_Icon)
    const [sort_data_time, set_sort_data_time] = useState(false)
    const [sort_data__data_time, set_sort_data__data_time] = useState([])

    const [disabled__data_time, set_disabled__data_time] = useState(false)
    const [disabled_statuses, set_disabled_statuses] = useState(false)

    


    
    const fun_sort__data_time = () =>
    {
        if( !sort_data_time )
        {
            set_style_icon__sort_data_time('green')

            set_disabled_statuses(true)
        }
        else
        {
            set_style_icon__sort_data_time(style_Icon)

            set_sort_data_time( false )

            set_disabled_statuses(false)


            return
        }



        if( sort_statuses )
        {
            const data1 = []

            for( let i=0; i < id_statuses_zaivki.id_prioritet.length; i++ )
            {
                data1.push(
                    {
                        id: id_statuses_zaivki.id_prioritet[i],
                        arr: []
                    }
                )
            }



            let arr_i = sort_data__statuses[0].ID_StatusRequest
            let index_i = 0

            for( let i=0; i < sort_data__statuses.length; i++ )
            {
                if( arr_i === sort_data__statuses[i].ID_StatusRequest )
                {
                    data1[index_i].arr.push( sort_data__statuses[i] )
                }
                else
                {
                    arr_i = sort_data__statuses[i].ID_StatusRequest
                    index_i++

                    data1[index_i].arr.push( sort_data__statuses[i] )
                }
            }



            for( let i=0; i < data1.length; i++ )
            {
                data1[i].arr = shakerSort(data1[i].arr)
            }



            const fun = () =>
            {
                const data2 = []

                for( let i=0; i < data1.length; i++ )
                {
                    data2.push(
                        ...data1[i].arr
                    )
                }

                return data2
            }


            set_sort_data__data_time( fun(data1) )

            set_sort_data_time( true )
        }
        else
        {
            set_sort_data__data_time( shakerSort(data) )

            set_sort_data_time( true )
        }



        function shakerSort(data) 
        {
            const array = [...data]


            let sorted = false;

            let left = 0;
            let right = array.length - 1;


            while (!sorted) 
            {
                sorted = true;
            

                // Проход в прямом порядке
                for (let i = left; i < right; i++) 
                {
                    // if ( array[i] > array[i + 1]) 
                    if( compareDates(array[i].req_timelimit, array[i + 1].req_timelimit) ) 
                    {
                        let temp = array[i];

                        array[i] = array[i + 1];
                        array[i + 1] = temp;

                        sorted = false;
                    }
                }
            

                // Проход в обратном порядке
                for (let i = right; i > left; i--) 
                {
                    // if (array[i] < array[i - 1]) compareDates(array[i].req_timelimit, array[i + 1].req_timelimit)
                    if ( compareDates(array[i - 1].req_timelimit, array[i].req_timelimit) )
                    {
                        let temp = array[i];

                        array[i] = array[i - 1];
                        array[i - 1] = temp;

                        sorted = false;
                    }
                }
            

                left++;
                right--;
            }
        

            return array;
        }


        function compareDates(date1, date2) 
        {
            if(date1 === null)
            {
                return true
            }
            else if(date2 === null)
            {
                return false
            }


            const timestamp1 = new Date(date1).getTime();
            const timestamp2 = new Date(date2).getTime();


            if (timestamp1 < timestamp2) 
            {
                return false;
            } 
            else if (timestamp1 === timestamp2) 
            {
                return false;
            } 
            else 
            {
                return true;
            }
        }

    }


    const fun_sort__statuses = () =>
    {
        if( !sort_statuses )
        {
            set_style_icon__sort_statuses('green')

            set_disabled__data_time(true)
        }
        else
        {
            set_style_icon__sort_statuses(style_Icon)

            set_sort_statuses( false )

            set_disabled__data_time(false)


            return
        }



        const data1 = []

        const fun_set_data1 = () =>
        {
            for( let i1=0; i1 < id_statuses_zaivki.id_prioritet.length; i1++ )
            {
                for( let i=0; i < data.length; i++ )
                {
                    if( data[i].ID_StatusRequest === id_statuses_zaivki.id_prioritet[i1] )
                    {
                        data1.push( data[i] )
                    }
                }
            }


            set_sort_data__statuses( data1 )

            if( !sort_data_time )
            {
                set_sort_statuses( true )
            }
            
        }


        fun_set_data1()
    }


    const fun = async() =>
    {
        const data = await Fun_get_request_list()

        if(data.length === 0)
        {
            set_data( data )
        }
        else
        {
            const data1 = []


            const fun_set_data1 = (zaivka) =>
            {
                for( let i=0; i < data.length; i++ )
                {
                    for( let i1=0; i1 < zaivka.length; i1++ )
                    {
                        if( data[i].ID_StateRequest === zaivka[i1] )
                        {
                            data1.push(data[i])
                            break
                        }
                    }
                }
                
                set_data( data1 )
            }


            if(name_zaivki_window === names_windows.zaivki_window.in_progress_zaivki)
            {
                fun_set_data1(id_states_zaivki.in_progress)
            }
            else if(name_zaivki_window === names_windows.zaivki_window.new_zaivki)
            {
                fun_set_data1(id_states_zaivki.new)
            }

        }
    }

    if(data === null)
    {
        fun()
    }
    




    return (
        <View style={ [styles.container, {backgroundColor: background_color_fon}] }>

            <View style={styles.styleViev}>
                {
                    data === null ?
                    <View style={styles.styleViewActivityIndicator}>
                        <ActivityIndicator size='large' color={style_ActivityIndicator} />
                    </View>

                    : data.length === 0 ?
                    <View style={styles.styleViewTextResult}>
                        <Text style={{fontSize: text_size_20, color: color_text}}>Не найдено</Text>
                    </View>

                    :
                    <View style={{flex:1}}>
                        <View style={ [styles.styleVievButtons] }>
                            <TouchableOpacity style={ [styles.styleVievButton, {backgroundColor: background_color_item}] } disabled={disabled_statuses} onPress={ () => fun_sort__statuses() }>
                                <MaterialCommunityIcons name="sort-variant" size={icon_size_min} color={style_icon__sort_statuses} style={{marginRight: 10}}/>
                                <Text style={{flex: 1, fontSize: text_size_12, color: color_text}}>Фильтровать по статусу</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={ [styles.styleVievButton, {backgroundColor: background_color_item}] } disabled={disabled__data_time} onPress={ () => fun_sort__data_time() }>
                                <Fontisto name="date" size={icon_size_min} color={style_icon__sort_data_time} style={{marginRight: 10}}/>
                                <Text style={{flex: 1, fontSize: text_size_12, color: color_text}}>Сортировать по дате</Text>
                            </TouchableOpacity>
                        </View>


                        <View style={{flex:1}}>
                            <FlatList 
                                data={ sort_data_time ? sort_data__data_time : sort_statuses ? sort_data__statuses : data }
                                renderItem=
                                { 
                                    ({item}) => 
                                    {
                                        return(
                                            <Vkladka_button 
                                                item=
                                                {
                                                    <View>
                                                        <Text style=
                                                            {{
                                                                fontSize: text_size_20, 
                                                                color: item.ID_StatusRequest === id_statuses_zaivki.id_prioritet[0] ? 'red'   // 3
                                                                    : item.ID_StatusRequest === id_statuses_zaivki.id_prioritet[1] ? 'orange'   // 2
                                                                    : color_text   // 1 и все остальные
                                                            }}
                                                        >{item.req_status}</Text>
                                                        
                                                        <Text style={ [styles.styleText, {fontSize: text_size_12, color: color_text}] }>{item.req_adr}</Text>
                                                        <Text style={ [styles.styleText, {fontSize: text_size_12, color: color_text}] }>{item.req_reason}</Text>
                                                        { item.req_timelimit && <Text style={ [styles.styleText, {fontSize: text_size_12, color: color_text}] }>{ item.req_timelimit.split('T').join(' ') }</Text> }
                                                    </View>
                                                }
                                                fun={ () => props.navigation.navigate('info_zaivka_window', {req_id: item.req_id}) }
                                            />
                                        )
                                    }
                                }
                                showsVerticalScrollIndicator={false}
                            />
                        </View>
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

    styleViewTextResult:
    {
        marginTop: 50,

        alignItems: 'center',

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

        flexDirection: 'row',
        justifyContent: 'center',
        
        alignItems: 'center',
    }
    ,

})


