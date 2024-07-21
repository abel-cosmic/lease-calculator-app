"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ViewUser = () => {
  return (
    <Card>
      <CardContent className="flex flex-col gap-4">
        <div className="w-full grid grid-cols-2 gap-10 mt-4">
          <div className="w-full flex flex-col gap-4">
            <Label>First Name</Label>
            <Input className="w-full" disabled />
            <Label>This is your first name.</Label>
          </div>
          <div className="w-full flex flex-col gap-4">
            <Label>Last Name</Label>
            <Input className="w-full" disabled />
            <Label>This is your last name.</Label>
          </div>
          <div className="w-full flex flex-col gap-4">
            <Label>Email</Label>
            <Input type="email" className="w-full" disabled />
            <Label>This is your email address.</Label>
          </div>
          <div className="w-full flex flex-col gap-4">
            <Label>Phone Number</Label>
            <Input type="number" className="w-full" disabled />
            <Label>This is your phone number.</Label>
          </div>
          <div className="w-full flex flex-col gap-4">
            <Label>Address</Label>
            <Input className="w-full" disabled />
            <Label>This is your address.</Label>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ViewUser;
