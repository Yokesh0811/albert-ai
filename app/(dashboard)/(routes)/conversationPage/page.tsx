"use client"

import { Heading } from "@/components/heading";
import { MessageSquare } from "lucide-react"

import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form";
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { formSchema } from "./constants"
import { Form, FormField, FormItem, FormControl } from "@/components/ui/form";
import { Button } from "@/components/ui/button";


const conversationPage = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            prompt: ""
        }
    });

    const isLoading = form.formState.isSubmitting;

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    };

    return (
        <div>
            <Heading title="Conversation" description="Our Most advanced conversation model" icon={MessageSquare} iconColor="text-violet-500" bgColor="bg-violet-500/10" />
            <div className="px-4 lg:px-8">
                <div>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="rounded-lg border w-full p-4 px-4 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2">
                            <FormField control={form.control}
                                name="prompt"
                                render={({ field }) => (
                                    <FormItem className="col-span-12 lg:col-span-10">
                                        <FormControl>
                                            <Input placeholder="Write your prompt" disabled={isLoading} {...field} />
                                        </FormControl>
                                    </FormItem>
                                )} />
                            <Button className="col-span-12 lg:col-span-2">
                                Generate
                            </Button>
                        </form>
                    </Form>
                </div>
            </div>
        </div>


    );
}

export default conversationPage;