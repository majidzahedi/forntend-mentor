import React from "react"
import { Metadata } from "next"

import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/lablel"

const page = () => {
  const labels = [
    "Product discovery and building what matters",
    "Measuring to ensure updates are a success",
    "And much more!",
  ]
  return (
    <Card className="bg-white w-full rounded-[32px] p-4 sm:max-w-[51rem] grid grid-cols-2 gap-3 ">
      <CardHeader className="p-9 pt-16">
        <CardTitle className="text-[50px] ">Stay updated!</CardTitle>
        <CardDescription className="flex flex-col space-y-6 pt-2  text-newsletter-DarkSlateGrey">
          <p className="">
            Join 60,000+ product managers receiving monthly updates on:
          </p>

          <div className="flex flex-col space-y-3 text-newsletter-DarkSlateGrey">
            {labels.map((label, index) => (
              <CheckboxDemo label={label} key={index} id={index.toString()} />
            ))}
          </div>

          <div className="grid w-full max-w-sm items-center gap-1.5 pt-4">
            <Label htmlFor="email" className="font-bold text-xs">
              Email Address
            </Label>
            <Input
              type="email"
              id="email"
              placeholder="email@company.com"
              className="rounded-lg p-6 w-full"
            />
          </div>

          <button className="py-4 rounded-lg font-bold text-sm bg-newsletter-DarkSlateGrey text-white hover:bg-gradient-to-r hover:to-newsletter-Tomato hover:from-pink-600 transition-colors duration-150">
            Subscribe to monthly newsletter
          </button>
        </CardDescription>
      </CardHeader>
      <CardContent className="p-1">
        <img
          className="h-full w-full"
          src="newsletter/assets/images/illustration-sign-up-desktop.svg"
        />
      </CardContent>
    </Card>
  )
}

interface CheckboxProp {
  id: string
  label: string
}

function CheckboxDemo(prop: CheckboxProp) {
  const { id, label } = prop
  return (
    <div className="flex items-center space-x-2">
      <input
        type="checkbox"
        className="rounded-full w-5 h-5 checked:bg-newsletter-Tomato hover:ring-newsletter-Tomato focus:ring-newsletter-Tomato checked:focus:bg-newsletter-Tomato hover:bg-newsletter-Tomato checked:hover:bg-newsletter-Tomato"
        id={id}
      />
      <Label
        htmlFor={id}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </Label>
    </div>
  )
}

export default page

// Stay updated!

// Join 60,000+ product managers receiving monthly updates on:

// Product discovery and building what matters
// Measuring to ensure updates are a success
// And much more!

// Email address
// email@company.com

// Subscribe to monthly newsletter

// Thanks for subscribing!

// A confirmation email has been sent to ash@loremcompany.com.
// Please open it and click the button inside to confirm your subscription.

// Dismiss message
