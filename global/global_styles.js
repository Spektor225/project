import { makeObservable, observable, action } from "mobx";

import { class_Styles_App } from '../settings/app.js'









class class_Style extends class_Styles_App
{
    icon_size_max = this._icon_size_max
    icon_size_min = this._icon_size_min


    text_size_30 = this._text_size_max
    text_size_20 = this._text_size_normal
    text_size_12 = this._text_size_min


    background_color_fon = this._color_dirty_white
    background_color_item = this._color_white

    color_text = this._color_black



    constructor()
    {
        super()

        makeObservable(this, 
        {
            icon_size_max: observable,
            icon_size_min: observable,

            text_size_30: observable,
            text_size_20: observable,
            text_size_12: observable,

            background_color_fon: observable,
            background_color_item: observable,

            color_text: observable,


            set_icon_size: action,
            set_text_size: action,
            set_text_icon_size_default: action,

            set_tema_white: action,
            set_tema_black: action
        })
    }



    set_icon_size = (i) =>
    {
        this.icon_size_max = this.icon_size_max + i
        this.icon_size_min = this.icon_size_min + i
    }


    set_text_size = (i) =>
    {
        this.text_size_30 = this.text_size_30 + i
        this.text_size_20 = this.text_size_20 + i

        this.text_size_12 = this.text_size_12 + i
    }


    set_text_icon_size_default = () =>
    {
        this.icon_size_max = this._icon_size_max
        this.icon_size_min = this._icon_size_min


        this.text_size_30 = this._text_size_max
        this.text_size_20 = this._text_size_normal

        this.text_size_12 = this._text_size_min
    }



    set_tema_white = () =>
    {
        this.background_color_fon = this._color_dirty_white
        this.background_color_item = this._color_white

        this.color_text = this._color_black
    }


    set_tema_black = () =>
    {
        this.background_color_fon = this._color_black
        this.background_color_item = this._color_light_black

        this.color_text = this._color_white
    }
    
}



export const Style = new class_Style()







class class_Item_Style extends class_Styles_App
{
    style_SafeAreaView = this._color_white
        
    style_ActivityIndicator = this._color_black

    style_Icon = this._color_black
        
    style_StatusBar = 'dark'  // 'light'

    style_Button = this._color_black_blue





    constructor()
    {
        super()

        makeObservable(this, 
        {
            style_SafeAreaView: observable,

            style_ActivityIndicator: observable,

            style_Icon: observable,

            style_StatusBar: observable,

            style_Button: observable,


            set_tema_black_item: action,
            set_tema_white_item: action,
            
            set_style_dirty_white_SafeAreaView: action,
            set_style_black_SafeAreaView: action,
        })
    }



    set_tema_black_item = () =>
    {
        this.style_SafeAreaView = this._color_light_black
        
        this.style_ActivityIndicator = this._color_white

        this.style_Icon = this._color_white
        
        this.style_StatusBar = 'light'

        this.style_Button = this._color_white_blue
    }


    set_tema_white_item = () =>
    {
        this.style_SafeAreaView = this._color_white
        
        this.style_ActivityIndicator = this._color_black

        this.style_Icon = this._color_black
        
        this.style_StatusBar = 'dark'

        this.style_Button = this._color_black_blue
    }


    
    set_style_dirty_white_SafeAreaView = () =>
    {
        this.style_SafeAreaView = this._color_dirty_white
    }

    
    set_style_black_SafeAreaView = () =>
    {
        this.style_SafeAreaView = this._color_black
    }

}



export const Item_Style = new class_Item_Style()













