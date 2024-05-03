import { create_axios__api } from '../settings/create_axios.js'







const Fun__error_handler = (error) =>
{
    console.log(error)
}





const Fun__return_result__res_data = (res) =>
{
   return res.data
}






export const Fun_axios__api__get_users_check_session_staus = async (session_hash) =>   // проверка акруальности session_hash
{
    let return_result

    
    await create_axios__api(
    {
        url: 'users_check_session_staus',
        method: 'GET',
        params: 
        {
            session_hash: session_hash
        }
    })
    .then( res => 
        {  
            return_result = Fun__return_result__res_data(res)
            // return_result = res.data
        } )
    .catch( err => Fun__error_handler(err) )


    return return_result
}





export const Fun_axios__api__get_users_login = async (db_guid, login, password) =>   // авторизация пользователя
{
    let return_result

    
    await create_axios__api(
    {
        url: 'users_login',
        method: 'GET',
        params: 
        {
            db_guid: db_guid,
            login: login,
            password: password
        }
    })
    .then( res => 
        {  
            return_result = Fun__return_result__res_data(res)
            // return_result = res.data
            // return res.data
        } )
    .catch( err => Fun__error_handler(err) )


    return return_result
}





export const Fun_axios__api__put_users_password = async (session_hash, password_new) =>   // изменение пароля пользователя
{
    let return_result


    await create_axios__api(
    {
        url: 'users_password',
        method: 'PUT',
        data: 
        {
            session_hash: session_hash,
            password_new: password_new
        }
    })
    .then( res => 
        { 
            return_result = Fun__return_result__res_data(res)
            // return_result = res.data
            // return res.data
        } )
    .catch( err => Fun__error_handler(err) )


    return return_result
}





export const Fun_axios__api__get_request_list = async (session_hash) =>   // заявки упрощенные
{
    let return_result


    await create_axios__api(
    {
        url: 'request_list',
        method: 'GET',
        params: 
        {
            session_hash: session_hash
        }
    })
    .then( res => 
        {  
            return_result = Fun__return_result__res_data(res)
            // return_result = res.data
        } )
    .catch( err => Fun__error_handler(err) )


    return return_result
}





export const Fun_axios__api__get_request_info = async (session_hash, req_id) =>  // заявки полные
{
    let return_result

    
    await create_axios__api(
    {
        url: 'request_info',
        method: 'GET',
        params: 
        {
            session_hash: session_hash,
            req_id: req_id
        }
    })
    .then( res => 
        {  
            return_result = Fun__return_result__res_data(res)
            // return_result = res.data
        } )
    .catch( err => Fun__error_handler(err) )


    return return_result
}





export const Fun_axios__api__put_request_take = async (session_hash, req_id) =>   // Принять заявку к исполнению
{
    let return_result


    await create_axios__api(
    {
        url: 'request_take',
        method: 'PUT',
        data: 
        {
            session_hash: session_hash,
            req_id: req_id
        }
    })
    .then( res => 
        { 
            return_result = Fun__return_result__res_data(res)
            // return_result = res.data
            // return res.data
        } )
    .catch( err => Fun__error_handler(err) )


    return return_result
}





