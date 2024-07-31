import React from 'react';
import Hero from './mycomponents/main/Hero';
import { createClient } from '@/utils/supabase/server';

export default async function Home() {

  // const supabase = createClient();
  // const { data, error } = await supabase.auth.getUser();
  // console.log(data.user.user_metadata.full_name)

  return (
    <main>
      <Hero />
    </main>
  );
}
