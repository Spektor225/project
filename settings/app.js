
export const app_name = 'АДС'   // название приложения





export class class_Styles_App   // класс с визуальным оформлением приложения
{
    _icon_size_max = 34
    _icon_size_min = 24


    _text_size_max = 30
    _text_size_normal = 20
    _text_size_min = 17   // 15



    _color_white = '#FFFFFF'  // белый
    _color_dirty_white = '#F2F2F2'  // грязный белый
    
    _color_black = '#000000'  // черный
    _color_light_black = '#1C1C1E'  // светло черный


    _color_black_blue = '#538EB8'  // синий (темнее)
    _color_white_blue = '#5286F0'  // синий (светлее)
}





export const names_app_tema =   // имена названия тем
{
    app_tema_light: 'light',
    app_tema_dark: 'dark',
    app_tema_system: 'system',
}





export const names_AsyncStorage =   // названия переменных сохраняемых в AsyncStorage
{
    user_name: 'user_name',   // имя пользователя

    user_password: 'user_password',   // пароль пользователя

    session_hash: 'session_hash',   // session_hash

    style_tema: 'style_tema',   // выбраная тема приложения
}





export const id_states_zaivki =   // статус заявок
{
    in_progress: [3, 6],   // В работе: Исполнение, Подтверждена
    new: [2],   // Новые: Ожидает рассмотрения
}





export const id_statuses_zaivki =   // важность заявок
{
    id_prioritet: [3, 2, 1]

}








