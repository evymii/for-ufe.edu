import {
  BarChart3,
  LayoutDashboard,
  Settings,
  UserCircle,
  Users,
  Wrench,
} from "lucide-react";

import { routes } from "@/config/routes";

export interface NavItem {
  href: string;
  label: string;
  icon: typeof LayoutDashboard;
}

export const userNav: NavItem[] = [
  { href: routes.user.dashboard, label: "Dashboard", icon: LayoutDashboard },
  { href: routes.user.profile, label: "Profile", icon: UserCircle },
  { href: routes.user.settings, label: "Settings", icon: Settings },
];

export const adminNav: NavItem[] = [
  { href: routes.admin.dashboard, label: "Dashboard", icon: BarChart3 },
  { href: routes.admin.users, label: "Users", icon: Users },
  { href: routes.admin.settings, label: "Settings", icon: Wrench },
];
