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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
const fileSchema = z.object({
  filename: z.string(),
  content: z.any(), // zod doesn't works well with instanceof(File) or FileList
});

const INBOUND_CTA_TYPE_LABELS = [{

}]

const formSchema = z.object({
  firstName: z.string().min(1, { message: "Required" }),
  lastName: z.string().min(1, { message: "Required" }),
  email: z.string().email(),
  phone: z.string().refine(isMobilePhone, { message: "Phone Number Invalid!" }),
  attachments: z.array(fileSchema),
  iam: z.string().min(1, { message: "Required" }),
  workPlace: z.string().min(1, { message: "Required" }),
  taxStatus: z.string().min(1, { message: "Required" }),
});

export default function Home() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      attachments: undefined,
      iam:"",
      workPlace:"",
      taxStatus: ""
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {    
    const response = await fetch("/api/resend", {
      method: "POST",
      body: JSON.stringify({
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        phone: values.phone,
        attachments: values.attachments,
        iam: values.iam,
        workPlace: values.workPlace,
        taxStatus: values.taxStatus
      }),
    });

    if (response.ok) {
      // alert('Send Email')
      form.reset()
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
          {`Let's Get Started`}
        </h3>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/*First Name*/}
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name*</FormLabel>
                  <FormControl>
                    <Input placeholder="John" autoComplete="off" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/*Last Name*/}
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name*</FormLabel>
                  <FormControl>
                    <Input placeholder="Doe" autoComplete="off" {...field} />
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
                      placeholder="example@domain.com"
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

            {/* Resumen or CV */}
            <FormField
              control={form.control}
              name="attachments"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Resume or CV</FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      onChange={(e) => {
                        const files = e.target.files;
                        if (files) {
                          Promise.all(
                            Array.from(files).map(async (file) => ({
                              filename: file.name,
                              content: Buffer.from(
                                await file.arrayBuffer(),
                              ).toString("base64"),
                            })),
                          ).then((filesArray) => {
                            field.onChange(filesArray);
                          });
                        }
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

          {/* I am */}    
          <FormField
            control={form.control}
            name="iam"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel>I am*</FormLabel>
                <FormControl>
                  <Select
                    key={field.value}
                    value={field.value}
                    defaultValue={field.value}
                    onValueChange={field.onChange}
                  >
                    <SelectTrigger
                      ref={field.ref}
                      aria-invalid={fieldState['invalid']}
                    >
                      <SelectValue placeholder={'Please select one'} />
                    </SelectTrigger>
                    <SelectContent>
                    <SelectItem value="Employed and looking">Employed and looking</SelectItem>
                    <SelectItem value="On the market and looking">On the market and looking</SelectItem>
                    
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

           {/* Workplace preference */}    
           <FormField
            control={form.control}
            name="workPlace"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel>Workplace preference*</FormLabel>
                <FormControl>
                  <Select
                    key={field.value}
                    value={field.value}
                    defaultValue={field.value}
                    onValueChange={field.onChange}
                  >
                    <SelectTrigger
                      ref={field.ref}
                      aria-invalid={fieldState['invalid']}
                    >
                      <SelectValue placeholder={'Please select one'} />
                    </SelectTrigger>
                    <SelectContent>
                    <SelectItem value="Hybrid">Hybrid</SelectItem>
                    <SelectItem value="On-site">On-site</SelectItem>
                    <SelectItem value="Remote">Remote</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Tax Status */}    
          <FormField
            control={form.control}
            name="taxStatus"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel>Tax Status*</FormLabel>
                <FormControl>
                  <Select
                    key={field.value}
                    value={field.value}
                    defaultValue={field.value}
                    onValueChange={field.onChange}
                  >
                    <SelectTrigger
                      ref={field.ref}
                      aria-invalid={fieldState['invalid']}
                    >
                      <SelectValue placeholder={'Please select one'} />
                    </SelectTrigger>
                    <SelectContent>
                    <SelectItem value="W2">W2</SelectItem>
                    <SelectItem value="Independent contractor">Independent contractor</SelectItem>
              
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
    

            <Button variant={"destructive"} type="submit">
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </main>
  );
}
