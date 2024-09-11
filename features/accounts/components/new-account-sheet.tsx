import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { useNewAccount } from "../hooks/use-new-account"
import { AccountForm } from "./account-form"
import { insertAccountSchema } from "@/db/schema";
import { z } from "zod";
import { useCreateAccount } from "../api/use-create-account";


const formSchema = insertAccountSchema.pick({
  name: true
})

type FormValues = z.input<typeof formSchema>;


export const NewAccountSheet = () => {
  const {isOpen, onClose} = useNewAccount()

  const mutation = useCreateAccount()

  const onSubmit = (values: FormValues) => {
    mutation.mutate(values, {
      onSuccess: () => {
        onClose()
      }
    })
  }

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>New Account</SheetTitle>
          <SheetDescription>Create a new account to track your transactions</SheetDescription>
        </SheetHeader>
        <div className="bg-red-300"> Hello </div>
        <AccountForm 
          onSubmit={onSubmit}
          disabled={mutation.isPending}
          defaultValues={{ name:''}}
        />
      </SheetContent>
    </Sheet>
  )
}