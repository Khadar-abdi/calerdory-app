"use client";

import { EventSchema } from "@/Schema/formschema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import {
  FormItemDescription,
  FormItemError,
  FormItemLabel,
  FormItemWrapper,
} from "./FormElements";

export default function EventFrom() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<z.infer<typeof EventSchema>>({
    resolver: zodResolver(EventSchema),
    defaultValues: {
      isActive: true,
      durationInMinutes: 30,
    },
  });

  function onSubmit(values: z.infer<typeof EventSchema>) {
    console.log(values);
  }

  return (
    <form
      className="flex flex-col w-full gap-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* event */}
      <FormItemWrapper>
        <FormItemLabel> Event Name</FormItemLabel>
        <Input
          {...register("name")}
          className="w-full md:w-full lg:w-1/2 "
          placeholder=" Event Name"
        />
        <FormItemDescription>
          The name user will see when booking the event
        </FormItemDescription>
        {errors.name && (
          <FormItemError>
            {errors?.name?.message || "This field is required"}
          </FormItemError>
        )}
      </FormItemWrapper>

      {/* duration in minutes */}
      <FormItemWrapper>
        <FormItemLabel>Duration</FormItemLabel>
        <Input
          {...register("durationInMinutes")}
          type="number"
          className=" w-full md:w-full lg:w-1/2 "
          placeholder=" durationInMinutes"
        />
        <FormItemDescription>in minutes</FormItemDescription>
        {errors.durationInMinutes && (
          <FormItemError>
            {errors?.durationInMinutes?.message || "This field is required"}
          </FormItemError>
        )}
      </FormItemWrapper>

      {/* form item description */}
      <FormItemWrapper>
        <FormItemLabel> Event Description</FormItemLabel>
        <Textarea
          {...register("description")}
          className=" w-full md:w-full lg:w-1/2 resize-none "
          placeholder=" Event Description"
        />
        <FormItemDescription>Description of the event</FormItemDescription>
        {errors.description && (
          <FormItemError>
            {errors?.description?.message || "This field is required"}
          </FormItemError>
        )}
      </FormItemWrapper>

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
  );
}
