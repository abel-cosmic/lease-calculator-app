import { Home, Package, ShoppingCart, Users } from "lucide-react";

const sidebarItems = [
  {
    href: "/dashboard",
    label: "Dashboard",
    icon: Home,
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
    icon: Users,
  },
];

export default sidebarItems;
