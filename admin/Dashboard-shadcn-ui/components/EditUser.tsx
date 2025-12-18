"use client"

import {SheetContent, SheetDescription, SheetHeader, SheetTitle} from "@/components/ui/sheet";

import { z } from "zod"
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {Button} from "@/components/ui/button";

const formSchema = z.object({
    fullName: z.string().min(2,{message:'username Must Be at Least 2 chars'}).max(50),
    email: z.string().email({message:'invalid email address'}),
    phone: z.string().min(10,{message:'phone number'}).max(15),
    address:z.string().min(2),
    city:z.string().min(2),

})
const EditUser=()=>{
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: "Masoomeh Rezaei",
            email: 'masy@gmail.com',
            phone: '09106765667',
            address: 'Iran, Tehran',
            city: 'Tehran'
        },
    })
    return(
        <div>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle className={'mb-4'}>Edit User</SheetTitle>
                    <SheetDescription asChild>
                        <Form {...form} >
                            <form className={'space-y-8'}>
                                <FormField control={form.control} name={'fullName'}  render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>full Name</FormLabel>
                                        <FormControl>
                                            <Input  {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            This is your public display name.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>

                                )}
                                /> <FormField control={form.control} name={'email'}  render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>email</FormLabel>
                                        <FormControl>
                                            <Input  {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            Only Admin can see your email
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>

                                )}
                                /> <FormField control={form.control} name={'phone'}  render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>phone</FormLabel>
                                        <FormControl>
                                            <Input  {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            Only Admin can see your phone
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>

                                )}
                                /> <FormField control={form.control} name={'address'}  render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>address</FormLabel>
                                        <FormControl>
                                            <Input  {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            This is your public address
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>

                                )}
                                /><FormField control={form.control} name={'city'}  render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>city</FormLabel>
                                        <FormControl>
                                            <Input  {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            This is your public city
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
export default EditUser