import { supabase } from "$lib/supabaseClient";

const {error} = await supabase.from('procedimiento').insert({nombre: "sepso"});

if (error){
    console.log(error);
}