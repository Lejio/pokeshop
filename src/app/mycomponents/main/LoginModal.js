'use client'
import { FaDiscord } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import { Button } from "@/components/ui/button"
  import { createClient } from "@/lib/supabase-client"

  export default function LoginModal() {

    async function signInWithDiscord() {
        const supabase = createClient()
        const { data, error } = await supabase.auth.signInWithOAuth({
          provider: 'discord',
          options: {
            redirectTo: 'http://localhost:3000/auth/callback'
          }
        })
      }


    async function signInWithGoogle() {
      const supabase = createClient()
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: 'http://localhost:3000/auth/callback'
        }
      })
    }
    return (
      <AlertDialog>

        <AlertDialogTrigger asChild>
          <Button variant="outline">Login</Button>
        </AlertDialogTrigger>

        <AlertDialogContent>

          <AlertDialogHeader>
            <AlertDialogTitle className=" text-2xl" >Login Now</AlertDialogTitle>
            <AlertDialogDescription>
              Please sign in to your account using the following methods.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <Button variant="outline" onClick={signInWithGoogle}> <FaGoogle size={20}/>Google</Button>
          <Button variant="outline" onClick={signInWithDiscord}> <FaDiscord size={25}/>Discord</Button>

          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
          </AlertDialogFooter>

        </AlertDialogContent>

      </AlertDialog>
    )
  }
  
//https://dbgturazgrndhmdnbynp.supabase.co/auth/v1/callback