"use client";
import React from "react";
import { createClient } from "@/utils/supabase/client";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";

export default function SignOut() {
  async function logout() {
    const supabase = createClient();
    const { error } = await supabase.auth.signOut();
    window.location.reload();
  }
  return <NavigationMenuLink onClick={logout}>Sign Out</NavigationMenuLink>;
}
