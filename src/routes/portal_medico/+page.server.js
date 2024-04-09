import { global_tipo_user } from "$lib/tipo_user";

let tipo;

global_tipo_user.subscribe((value) => {
  tipo = value
})