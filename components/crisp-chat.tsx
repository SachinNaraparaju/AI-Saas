"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("93468ed1-a7b4-4a5a-a55e-c6285c2d6357")
  }, []);

  return null;
}
