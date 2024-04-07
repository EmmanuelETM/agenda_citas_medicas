import { supabase } from "$lib/supabaseClient";
import bcrypt from "bcrypt"


export const returnAllUsers = async () => {
    try {
        const { data, error } = await supabase.from('user').select('*');
        if (error) {
            throw error;
        }
        return data;
    } catch (error) {
        console.error('Error al obtener usuarios:', error.message);
        throw error;
    }
};


export const registerUser = async (nombre, apellidos, fecha_nacimiento, email, password, tipo_user) => {
    try {
        const { data, error } = await supabase.from('user').insert(nombre, apellidos, fecha_nacimiento, email, password, tipo_user);
        if (error) {
            throw error;
        }
        return data;
    } catch (error) {
        console.error('Error al registrar usuario:', error.message);
        throw error;
    }
};


export const returnEmailsList = async () => {
    try {
        const { data: user, error } = await supabase.from('user').select('email');
        if (error) {
            throw error;
        }
        const emailList = users.map(user => user.email);
        return emailList;
    } catch (error) {
        console.error('Error al obtener la lista de correos electrónicos:', error.message);
        throw error;
    }
};

export const findUserbyId = async (id) => {
    try{
        const {data: user, error} = await supabase.from('user').select().eq('user_id', id)
        if(error){
            throw error;
        }
        return data;
    }catch(error){
        console.error("Error al buscar user por id: ", error.message);
        throw error;
    }
}




