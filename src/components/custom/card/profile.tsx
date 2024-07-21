import { CalendarDays } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const UserProfileHoverCard = ({
  username,
  joinedDate,
}: {
  username: string;
  joinedDate: string;
}) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">
          <Avatar>
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className="space-y-1 flex flex-col">
            <h4 className="text-sm font-semibold">{username}</h4>
            <div className="flex items-center pt-2">
              <CalendarDays className="mr-2 h-4 w-4 opacity-70" />
              <span className="text-xs text-muted-foreground">
                Joined {joinedDate}
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};
export default UserProfileHoverCard;
