"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import sidebarItems from "@/util/objects/side-bar";
import { Menu, Settings } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from "/public/logo-blue.png";
import darklogo from "/public/logo-white.png";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";

export function SidebarSheet() {
  const { theme } = useTheme();
  const pathname = usePathname();
  const currentLogo = theme === "dark" ? darklogo : logo;
  return (
    <div className=" md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon">
            <Menu className={`h-[1.2rem] w-[1.2rem] transition-all`} />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </SheetTrigger>
        <SheetContent
          className="w-64 flex flex-col justify-between"
          side={"left"}
        >
          <div className="flex flex-col gap-4 py-8">
            <SheetHeader className="flex flex-row gap-2  items-center justify-center border-b  py-4">
              <Link
                href="/dashboard"
                className="flex items-end justify-centers font-semibold"
              >
                <Image src={currentLogo} alt="Logo" width={60} height={60} />
                <div className="text-sm">Lease Calculator</div>
              </Link>
            </SheetHeader>
            {sidebarItems.map(
              (
                item: {
                  href: string;
                  label: string;
                  icon: any;
                  badge?: number;
                },
                index
              ) => {
                const IconComponent = item.icon;
                const isActive = pathname === item.href;
                return (
                  <SheetClose asChild key={index}>
                    <Link
                      href={item.href}
                      className={`flex items-center gap-3 p-2 rounded-lg  transition-all ease-linear ${
                        isActive
                          ? "dark:bg-muted dark:text-primary bg-primary text-background"
                          : "text-muted-foreground hover:text-primary"
                      }`}
                    >
                      <IconComponent className="h-4 w-4" />
                      <span>{item.label}</span>
                      {item.badge && (
                        <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                          {item.badge}
                        </Badge>
                      )}
                    </Link>
                  </SheetClose>
                );
              }
            )}
          </div>
          <div className="grid items-start px-2s text-sm font-medium lg:px-4 w-full">
            <SheetClose asChild>
              <Link
                href="/dashboard/setting"
                className={`flex items-center gap-3 rounded-lg px-3 py-4 transition-all ease-linear ${
                  pathname === "/dashboard/setting"
                    ? "dark:bg-muted dark:text-primary bg-primary text-background"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                <Settings className="h-4 w-4" />
                Settings
              </Link>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
