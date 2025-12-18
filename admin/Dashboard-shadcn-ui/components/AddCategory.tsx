"use client"

import {SheetContent, SheetDescription, SheetHeader, SheetTitle} from "@/components/ui/sheet";

import { z } from "zod"
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";

const formSchema = z.object({
    name: z.string().min(1,{message:'Name is required'}),


})
const AddCategory=()=>{
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),

    })
    return(
        <div>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle className={'mb-4'}>Edit User</SheetTitle>
                    <SheetDescription asChild>
                        <Form {...form} >
                            <form className={'space-y-8'}>
                                <FormField control={form.control} name={'name'}  render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input  {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            enter Category name
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>

                                )}
                                />
                                <Button type={"submit"}>Submit</Button>
                            </form>
                        </Form>
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </div>
    )
}
export default AddCategory