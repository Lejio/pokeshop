'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import { createClient } from '@/utils/supabase/client'

export default function SignOut() {
  async function logout() {

      const supabase = createClient()
      const { error } = await supabase.auth.signOut()
      window.location.reload()
  }
  return (
    <Button variant="outline" onClick={logout}>Sign Out</Button>
  )
}
