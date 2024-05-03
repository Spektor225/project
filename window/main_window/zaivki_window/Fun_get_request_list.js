import { App } from '../../../global/global_state.js'

import { Fun_axios__api__get_request_list } from '../../../function/Fun_axios.js'





export const Fun_get_request_list = async() =>
{
    const data = await Fun_axios__api__get_request_list( App.session_hash )


    return data.postdata
}





