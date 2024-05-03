import { names_AsyncStorage } from '../../settings/app.js'

import { Fun__get__AsyncStorage } from '../../function/Fun_async_storage.js'
import { Fun_axios__api__get_users_check_session_staus } from '../../function/Fun_axios.js'





export const Fun_checked_session_check = async () =>
{
    const session_hash = await Fun__get__AsyncStorage(names_AsyncStorage.session_hash)


    if(session_hash !== null)
    {
        const checked_session_staus = await Fun_axios__api__get_users_check_session_staus(session_hash)

        if(checked_session_staus.is_active)
        {
            return true
        }
        else
        {
            return false
        }
    }
    else
    {
        return false
    }


}









