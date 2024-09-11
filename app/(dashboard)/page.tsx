'use client'

import { Button } from "@/components/ui/button"
import { useNewAccount } from "@/features/accounts/hooks/use-new-account"
import { useActionState } from "react"


export default function Home() {
  const { onOpen } = useNewAccount() 
  return (
    <div>
      <Button onClick={onOpen}> New Account</Button>  
    </div>
  )
}
