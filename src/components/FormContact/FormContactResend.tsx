"use client";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/FormHired/ui/form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/FormHired/ui/button";
import { Input } from "@/components/FormHired/ui/input";
import isMobilePhone from "validator/lib/isMobilePhone";
import toast from "react-hot-toast";
import { TextArea } from "../FormHired/ui/text-area";

const formSchema = z.object({
  fullName: z.string().min(1, { message: "Required" }),
  email: z.string().email(),
  phone: z.string().refine(isMobilePhone, { message: "Phone Number Invalid!" }),
  message: z.string().min(1, { message: "Required" }),
});

export default function FormContactResend() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        fullName: values.fullName,
        email: values.email,
        phone: values.phone,
        message: values.message,
      }),
    });

    if (response.ok) {
      // alert('Send Email')
      form.reset();
      toast.success("Send Success OK!");
    } else {
      // alert('Error')
      toast.error("Send Fail!!!");
    }
  }
  return (
    <main>
      <div
        className="wow fadeInUp shadow-testimonial rounded-lg bg-white px-8 py-10 dark:bg-dark-2 dark:shadow-none sm:px-10 sm:py-12 md:p-[60px] lg:p-10 lg:px-10 lg:py-12 2xl:p-[60px]"
        data-wow-delay=".2s"
      >
        <h3 className="mb-8 text-2xl font-semibold text-dark dark:text-white md:text-[28px] md:leading-[1.42]">
          {`Send us a Message`}
        </h3>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/*First Name*/}
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name*</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="John Doe"
                      autoComplete="off"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/*Email*/}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email*</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="example@yourmail.com"
                      autoComplete="off"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/*Phone*/}
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone*</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="+1234567890"
                      autoComplete="off"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/*Message*/}
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message*</FormLabel>
                  <FormControl>
                    <TextArea
                      placeholder="type your message here"
                      autoComplete="off"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              variant={"destructive"}
              type="submit"
              disabled={form.formState.isSubmitting}
              className="hover:bg-btn-hover-dark inline-flex items-center justify-center rounded-md bg-primary px-10 py-3 text-base font-medium text-white transition duration-300 ease-in-out"
            >
              Send
            </Button>
          </form>
        </Form>
      </div>
    </main>
  );
}
