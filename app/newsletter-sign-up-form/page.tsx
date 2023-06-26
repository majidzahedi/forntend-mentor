"use client"

import React, { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import Checkbox from "./components/Checkbox"

const items = [
  {
    id: "Product discovery and building what matters",
    label: "Product discovery and building what matters",
  },
  {
    id: "Measuring to ensure updates are a success",
    label: "Measuring to ensure updates are a success",
  },
  {
    id: "And much more!",
    label: "And much more!",
  },
] as const

const formSchema = z.object({
  email: z.string().email().max(50),
  items: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You should select at least one!",
  }),
})

const page = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      items: [],
    },
  })

  const [iSdialogOpen, setIsDialogOpen] = useState(false)

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    setIsDialogOpen(true)
  }

  return (
    <>
      <AlertDialog open={iSdialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={(e) => setIsDialogOpen(false)}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction onClick={(e) => setIsDialogOpen(false)}>
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Card className="bg-white p-0  h-screen sm:h-fit rounded-none w-full sm:rounded-[32px] sm:p-4 max-w-full sm:max-w-[51rem] grid grid-rows-2  sm:grid-cols-2 sm:grid-rows-none sm:gap-3 ">
        <CardHeader className="sm:p-9 sm:pt-16">
          <CardTitle className="text-[50px] ">Stay updated!</CardTitle>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col space-y-6 pt-2  text-newsletter-DarkSlateGrey"
            >
              <p className="">
                Join 60,000+ product managers receiving monthly updates on:
              </p>
              <FormField
                control={form.control}
                name="items"
                render={({ field }) => (
                  <FormItem className="flex flex-col space-y-3 text-newsletter-DarkSlateGrey">
                    {items.map((item, index) => (
                      <FormField
                        key={item.id}
                        control={form.control}
                        name="items"
                        render={({ field }) => {
                          return (
                            <FormItem key={item.id}>
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(item.id)}
                                  label={item.label}
                                  id={item.id}
                                  onCheckedChange={(checked: boolean) => {
                                    return checked
                                      ? field.onChange([
                                          ...field.value,
                                          item.id,
                                        ])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== item.id
                                          )
                                        )
                                  }}
                                />
                              </FormControl>
                            </FormItem>
                          )
                        }}
                      />
                    ))}
                    <FormMessage />
                  </FormItem>
                )}
              ></FormField>

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem
                    className="
grid w-full max-w-sm items-center gap-1.5 pt-4"
                  >
                    <FormLabel htmlFor="email" className="font-bold text-xs">
                      Email Address
                    </FormLabel>
                    <FormControl>
                      <Input
                        // type="email"
                        // id="email"
                        placeholder="email@company.com"
                        // className="rounded-lg p-6 w-full"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <button className="py-4 rounded-lg font-bold text-sm bg-newsletter-DarkSlateGrey text-white hover:bg-gradient-to-r hover:to-newsletter-Tomato hover:from-pink-600 transition-colors duration-150">
                Subscribe to monthly newsletter
              </button>
            </form>
            {/* <CardDescription className="flex flex-col space-y-6 pt-2  text-newsletter-DarkSlateGrey"> */}
            {/* </CardDescription> */}
          </Form>
        </CardHeader>
        <CardContent className="p-0 sm:p-1 -order-1 sm:order-1">
          <img
            className="h-full w-full hidden sm:block"
            src="newsletter/assets/images/illustration-sign-up-desktop.svg"
          />

          <img
            className="h-full w-[100%] origin-top sm:hidden p-0"
            src="newsletter/assets/images/illustration-sign-up-mobile.svg"
          />
        </CardContent>
      </Card>
    </>
  )
}

function name(param: Array<string>): void {
  console.log(param)
}

export default page

// Thanks for subscribing!

// A confirmation email has been sent to ash@loremcompany.com.
// Please open it and click the button inside to confirm your subscription.

// Dismiss message
