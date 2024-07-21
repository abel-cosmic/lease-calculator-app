import { ModeToggle } from "@/components/custom/toogle/theme";
import { Input } from "@/components/ui/input";
import { SidebarSheet } from "@/layout/nav/sheet";
import { Search } from "lucide-react";

const TopNav = () => {
  return (
    <div className="max-md:fixed md:sticky top-0 right-0   py-4 left-0 z-50 w-full bg-white bg-opacity-30 backdrop-blur-md border-b border-gray-200 dark:bg-gray-900 dark:bg-opacity-30 dark:border-gray-700">
      <div className="relative flex items-center justify-between md:justify-end w-full px-4 py-2 md:px-8">
        {/* Sidebar Sheet */}
        <div className="md:hidden ">
          <SidebarSheet />
        </div>

        {/* Search Bar */}
        <div className="relative flex-1 mx-4 md:mx-0 md:w-max md:max-w-[384px]">
          <Input
            type="search"
            placeholder="Search..."
            className="w-full rounded-lg bg-background pl-8"
          />
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        </div>

        {/* Mode Toggle */}
        <div className="md:hidden ">
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default TopNav;
