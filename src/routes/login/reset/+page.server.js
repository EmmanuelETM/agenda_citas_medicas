import { supabase } from "$lib/supabaseClient";

export const actions = {
    default: async (event) => {
        const formData = Object.fromEntries(await event.request.formData())
        const email = formData.email
        const url = new URL(event.url)

        try{
            const {data, error} = await supabase
                .auth
                .resetPasswordForEmail(email, {
                    redirectTo: `${url.origin}/reset_password`
                })
            if (data){
                console.log(data)
            }
            if(error){
                console.log(error)
                return {
                    show: true,
                    success: false
                }
            }
            
            return {
                show: true,
                success: true
            }

        }catch(error){
            console.log(error)
            return {
                show: true,
                success: false
            }
        }
    }
}