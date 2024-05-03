
import { Fun_axios__api__get_users_login } from '../../function/Fun_axios.js'






export const Fun_authorization = async (login, password, db_guid) =>
{
    const api_result = await Fun_axios__api__get_users_login(db_guid, login, password)


    if(api_result.postdata[0].err === 0)
    {
        return {is_active: true, session_hash: api_result.postdata[0].session_hash, user_name: api_result.postdata[0].username}
    }
    else
    {
        return {errtext: api_result.postdata[0].errtext}
    }

}
