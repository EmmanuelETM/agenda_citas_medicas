import { supabaseClient } from "$lib/supabaseClient";


export async function load() {
  const { data: data, error } = await supabaseClient
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