"use client";
import Link from "next/link";
import { Bell, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import sidebarItems from "@/util/objects/side-bar";
import Image from "next/image";
import logo from "/public/logo-blue.png";
import darklogo from "/public/logo-white.png";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";

export function Sidebar() {
  const { theme } = useTheme();
  const pathname = usePathname();
  const currentLogo = theme === "dark" ? darklogo : logo;

  return (
    <div className="hidden border-r max-w-xs bg-muted/40 md:block">
      <div className="flex h-full max-h-[90vh] flex-col gap-2">
        <div className="flex h-14 gap-4 items-center border-b px-4 py-10 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Image src={currentLogo} alt="Logo" width={60} height={60} />
            <h1 className="text-sm font-bold">Lease Calculator</h1>
          </Link>
          <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
        </div>
        <div className="flex  flex-col justify-between items-start h-full pt-4">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4 w-full">
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
                  <Link
                    key={index}
                    href={item.href}
                    className={`flex items-center gap-3 rounded-lg px-3 py-4 transition-all ${
                      isActive
                        ? "dark:bg-muted dark:text-primary bg-primary text-background"
                        : "text-muted-foreground hover:text-primary"
                    }`}
                  >
                    <IconComponent className="h-4 w-4" />
                    {item.label}
                    {item.badge && (
                      <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                        {item.badge}
                      </Badge>
                    )}
                  </Link>
                );
              }
            )}
          </nav>
          <div className="grid items-start px-2s text-sm font-medium lg:px-4 w-full">
            <Link
              href="/dashboard/setting"
              className={`flex items-center gap-3 rounded-lg px-3 py-4 transition-all ${
                pathname === "/dashboard/setting"
                  ? "dark:bg-muted dark:text-primary bg-primary text-background"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              <Settings className="h-4 w-4" />
              Settings
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
