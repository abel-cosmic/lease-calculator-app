import { Headset, Home, Package, ShoppingCart, Users } from "lucide-react";

const sidebarItems = [
  {
    href: "/dashboard",
    label: "Dashboard",
    icon: Home,
  },
  {
    href: "/dashboard/users",
    label: "User",
    icon: Users,
  },
  {
    href: "/dashboard/lease",
    label: "Lease",
    icon: ShoppingCart,
  },
  {
    href: "/dashboard/manage",
    label: "Manage",
    icon: Package,
    active: true,
  },
  {
    href: "/dashboard/support",
    label: "Support",
    icon: Headset,
  },
];

export default sidebarItems;
