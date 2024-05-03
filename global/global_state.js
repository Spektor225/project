import { makeAutoObservable, makeObservable, observable, action } from "mobx";

import { names_app_tema } from '../settings/app.js'





class class_App
{
    session_hash = ''

    app_tema = names_app_tema.app_tema_light



    constructor()
    {
        makeAutoObservable(this)
    }



    set_session_hash = (session_hash) =>
    {
        this.session_hash = session_hash
    }



    set_app_tema = (app_tema) =>
    {
        this.app_tema = app_tema
    }

}



export const App = new class_App()








class Class_User 
{
    user_name = 'no_name'


    constructor()
    {
        makeAutoObservable(this)
    }


    set_user_name = (user_name) =>
    {
        this.user_name = user_name
    }


}



export const User = new Class_User()






class class_names_setting_window
{
    name_setting_window = 'name_window'



    constructor()
    {
        makeAutoObservable(this)

        // makeObservable(this, 
        // {
        //     name_setting_window: observable,

        //     set_name_setting_window: action,
        // })
    }



    set_name_setting_window = (name_setting_window) =>
    {
        this.name_setting_window = name_setting_window
    }


}



export const Names_Setting_Window = new class_names_setting_window()










class class_names_akt_window
{
    name_akt_window = 'name_window'



    constructor()
    {
        makeAutoObservable(this)

        // makeObservable(this, 
        // {
        //     name_akt_window: observable,

        //     set_name_akt_window: action,
        // })
    }



    set_name_akt_window = (name_akt_window) =>
    {
        this.name_akt_window = name_akt_window
    }


}



export const Names_Akt_Window = new class_names_akt_window()










class class_names_zaivki_window
{
    name_zaivki_window = 'name_window'



    constructor()
    {
        makeAutoObservable(this)

        // makeObservable(this, 
        // {
        //     name_zaivki_window: observable,

        //     set_name_zaivki_window: action,
        // })
    }



    set_name_zaivki_window = (name_zaivki_window) =>
    {
        this.name_zaivki_window = name_zaivki_window
    }


}



export const Names_Zaivki_Window = new class_names_zaivki_window()






