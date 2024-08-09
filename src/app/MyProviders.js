'use client'

import React from "react";
import { NextUIProvider } from "@nextui-org/system";

export default function MyProviders({ children }) {


  return (
      <NextUIProvider>
      {children}
      </NextUIProvider>
  );
}
