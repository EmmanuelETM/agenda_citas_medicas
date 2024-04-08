import { supabase } from "$lib/supabaseClient";


export async function load() {
  const { data: data, error } = await supabase
.from("user")
  .select('*');

  if (error) {
    console.error(error)
    return {
      status: 500,
      body: {
        error: 'Failed to load users data',
      },
    }
  }

  return {
    users: data ?? [],
  };
}