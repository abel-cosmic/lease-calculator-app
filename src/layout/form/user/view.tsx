"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ViewUser = () => {
  return (
    <div className=" w-full gap-6 flex flex-col mt-4">
      <Label>First Name</Label>
      <Input placeholder="John" className="w-full" />
      <Label>This is your first name.</Label>
      <Label>Last Name</Label>
      <Input placeholder="Doe" className="w-full" />
      <Label>This is your last name.</Label>

      <Label>Email</Label>
      <Input
        placeholder="john.doe@example.com"
        type="email"
        className="w-full"
      />
      <Label>This is your email address.</Label>
      <Label>Phone Number</Label>
      <Input placeholder="123-456-7890" type="number" className="w-full" />
      <Label>This is your phone number.</Label>
      <Label>Address</Label>
      <Input placeholder="123 Main St" />
      <Label>This is your address.</Label>
      <Button type="submit" className="w-full">
        Submit
      </Button>
    </div>
  );
};
export default ViewUser;
