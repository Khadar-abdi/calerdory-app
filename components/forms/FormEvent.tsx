"use client";
import { EventSchema } from "@/Schema/formschema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Switch } from "../ui/switch";
import { Textarea } from "../ui/textarea";

const FormEvent = () => {
  const form = useForm<z.infer<typeof EventSchema>>({
    resolver: zodResolver(EventSchema),
    defaultValues: {
      isActive: true,
      durationInMinutes: 30,
    },
  });

  function onSubmit(values: z.infer<typeof EventSchema>) {
    console.log(values);
    console.log("is called");
    // createEvent(values)
  }
  function showErrors() {
    console.log("there is an error ");
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit, showErrors)}
        className="flex flex-col gap-4"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel> Event Name</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="w-full md:w-full lg:w-1/2 "
                  placeholder=" Event Name"
                />
              </FormControl>
              <FormDescription className="text-xs text-slate-500">
                The name user will see when booking the event
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="durationInMinutes"
          render={({ field }) => (
            <FormItem>
              <FormLabel> duration</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  value={field.value ?? ""}
                  type="number"
                  className=" w-full md:w-full lg:w-1/2 "
                  placeholder=" durationInMinutes"
                />
              </FormControl>
              <FormDescription className="text-xs text-slate-500">
                in minutes
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel> Event Description</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  value={field.value ?? ""}
                  className=" w-full md:w-full lg:w-1/2 "
                  placeholder=" Event Description"
                />
              </FormControl>
              <FormDescription className="text-xs text-slate-500">
                Description of the event
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="isActive"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormDescription className="text-xs text-slate-500">
                Inactive events will not be displayed in the schedule
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-row gap-2 justify-end">
          <Button
            type="button"
            asChild
            className="bg-slate-100 text-slate-700 hover:bg-slate-200 px-4 py-2 rounded-lg"
          >
            <Link href={"/events"}>Cancel</Link>
          </Button>
          <Button
            type="submit"
            className="bg-slate-700 text-white px-4 py-2 rounded-lg"
          >
            Save
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default FormEvent;
