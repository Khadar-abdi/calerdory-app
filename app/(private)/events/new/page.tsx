import EventFrom from "@/components/forms/EventFrom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { auth } from "@clerk/nextjs/server";

const page = async () => {
  const { userId, redirectToSignIn } = await auth();
  if (!userId) redirectToSignIn();
  return (
    <div className="">
      <Card className="m-4 p-3     ">
        <CardHeader>
          <CardTitle>New Event</CardTitle>
          <CardDescription> Create a new event</CardDescription>
        </CardHeader>
        <CardContent>
          {/* <FormEvent /> */}

          {/* this is my form i have created without using shadcn form */}
          <EventFrom />
        </CardContent>
      </Card>
    </div>
  );
};

export default page;
