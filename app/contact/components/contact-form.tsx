"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Send } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(1, "Name is required").max(30),
  email: z.string().min(1, "Email is required").email("Invalid email"),
  text: z.string().min(1, "Email is required"),
});

const ContactForm = () => {
  const formData = useRef<HTMLFormElement | null>(null);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      text: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    if (formData.current) {
      emailjs.sendForm(
        "service_fhecj1k",
        "template_1cmvbia",
        formData.current,
        "2RQPJPO7gaSXYJygh"
      );
      toast.success("Message has been sent");
      form.reset();
    }
  };

  return (
    <Form {...form}>
      <form
        ref={formData}
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full md:w-[360px]"
      >
        <div className="relative h-16 mb-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className=" absolute top-[-0.5rem] left-5 text-sm p-1 z-30 text-dark bg-light dark:text-light dark:bg-dark">
                Name / Company
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Insert your name or company"
                    {...field}
                    className="absolute top-0 left-0 right-0 w-full h-full outline-none text-dark rounded-xl border p-6 border-yellow bg-light dark:text-light dark:bg-dark dark:border-yellow"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="relative h-16 mb-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className=" absolute top-[-0.5rem] left-5 text-sm p-1 z-30 text-dark bg-light dark:text-light dark:bg-dark">
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Insert your email"
                    {...field}
                    className="absolute top-0 left-0 right-0 w-full h-full outline-none text-dark rounded-xl border p-6 bg-light border-yellow dark:text-light dark:bg-dark dark:border-yellow"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="relative h-[11rem] mb-8 ">
          <FormField
            control={form.control}
            name="text"
            render={({ field }) => (
              <FormItem>
                <FormLabel className=" absolute top-[-0.5rem] left-5 text-sm p-1 z-30 text-dark bg-light dark:text-light dark:bg-dark">
                  Message
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Write your message here"
                    {...field}
                    className="absolute top-0 left-0 right-0 w-full h-full text-dark outline-none rounded-xl border p-6 resize-none bg-light border-yellow dark:text-light dark:bg-dark dark:border-yellow"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button
          type="submit"
          className="flex flex-row items-center rounded-lg bg-dark text-light py-6 px-10 text-xl font-semibold border hover:border-dark hover:bg-yellow hover:text-dark dark:bg-light dark:text-dark dark:hover:dark:border-light dark:hover:bg-yellow dark:hover:text-dark transition-all duration-300"
        >
          Send <Send className="ml-2 text-2xl" />
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
