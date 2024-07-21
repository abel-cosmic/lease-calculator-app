import { Home, LineChart, Package, ShoppingCart, Users } from "lucide-react";

const sidebarItems = [
  {
    href: "/dashboard",
    label: "Dashboard",
    icon: Home,
  },
  {
    href: "/dashboard/lease",
    label: "Orders",
    icon: ShoppingCart,
    // badge: 6,
  },
  {
    href: "/dashboard/manage",
    label: "Products",
    icon: Package,
    active: true,
  },
  {
    href: "/dashboard/support",
    label: "Customers",
    icon: Users,
  },
  {
    href: "/dashboard/setting",
    label: "Analytics",
    icon: LineChart,
  },
];
export default sidebarItems;
