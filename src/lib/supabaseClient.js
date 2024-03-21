import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://dvjcddgwvjyriuevaaxz.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR2amNkZGd3dmp5cml1ZXZhYXh6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA5OTE0MzcsImV4cCI6MjAyNjU2NzQzN30.Gdj_8l8f_IfLekCz416-IMybAk1kmQ4MhNQoSXzrtbg')