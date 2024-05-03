import { names_app_tema, names_AsyncStorage } from '../settings/app.js'

import { Appearance } from "react-native"

import { App } from '../global/global_state.js'
import { Style, Item_Style } from '../global/global_styles.js'

import { Fun__get__AsyncStorage, Fun__set__AsyncStorage } from './Fun_async_storage.js'





const { set_app_tema } = App
const { set_tema_white, set_tema_black, set_icon_size, set_text_size, set_text_icon_size_default } = Style
const { set_tema_white_item, set_tema_black_item, set_style_black_SafeAreaView, set_style_dirty_white_SafeAreaView } = Item_Style





const Fun_tema = (tema) =>
{
    set_app_tema(tema)


    if( tema === names_app_tema.app_tema_light )
    {
        set_tema_white()
        set_tema_white_item()
    }
    else if( tema === names_app_tema.app_tema_dark )
    {
        set_tema_black()
        set_tema_black_item()
    }
    else if( tema === names_app_tema.app_tema_system )
    {
        if(Appearance.getColorScheme() === 'light')
        {
            set_tema_white()
            set_tema_white_item()
        }
        else   // dark
        {
            set_tema_black()
            set_tema_black_item()
        }
    }
    else
    {
        set_tema_white()
        set_tema_white_item()
    }
}





export const Fun_get_tema = async() =>
{
    const tema = await Fun__get__AsyncStorage(names_AsyncStorage.style_tema)

    Fun_tema(tema)


    return tema
}





export const Fun_set_tema = async(tema) =>
{
    Fun__set__AsyncStorage(names_AsyncStorage.style_tema, tema)

    Fun_tema(tema)
}











export const set_style_SafeAreaView = 
{
    set_style_dirty_white: () => set_style_dirty_white_SafeAreaView(),
    set_style_black: () => set_style_black_SafeAreaView(),
}





export const set_style_text = 
{
    
    set_size: (i) => { set_text_size(i); set_icon_size(i) },
    set_size_default: () => set_text_icon_size_default(),
}







