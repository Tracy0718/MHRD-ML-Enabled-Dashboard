
import { cn } from "@/lib/utils";
import { 
  BarChart3, LayoutDashboard, LineChart, PieChart, School, 
  Settings, ShieldAlert, Users, ListChecks, HelpCircle, LogOut,
  FileText
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const sidebarItems = [
  {
    title: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
    submenu: false,
  },
  {
    title: "Schemes",
    href: "/schemes",
    icon: ListChecks,
    submenu: false,
  },
  {
    title: "Analytics",
    href: "/analytics",
    icon: BarChart3,
    submenu: false,
  },
  {
    title: "Predictions",
    href: "/predictions",
    icon: LineChart,
    submenu: false,
  },
  {
    title: "Anomalies",
    href: "/anomalies",
    icon: ShieldAlert,
    submenu: false,
  },
  {
    title: "Beneficiaries",
    href: "/beneficiaries",
    icon: Users,
    submenu: false,
  },
  {
    title: "Institutions",
    href: "/institutions",
    icon: School,
    submenu: false,
  },
  {
    title: "Reports",
    href: "/reports",
    icon: PieChart,
    submenu: false,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
    submenu: false,
  },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <div className="h-screen w-64 fixed left-0 top-0 bg-sidebar border-r border-sidebar-border flex flex-col">
      <div className="p-4 border-b border-sidebar-border flex items-center space-x-2">
        <School className="h-8 w-8 text-primary" />
        <div>
          <h1 className="font-bold text-lg text-sidebar-foreground">Shiksha Insight</h1>
          <p className="text-xs text-muted-foreground">MHRD Dashboard</p>
        </div>
      </div>
      
      <div className="flex-1 py-4 overflow-y-auto">
        <nav className="px-2 space-y-1">
          {sidebarItems.map((item) => {
            const isActive = location.pathname === item.href;
            
            return (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  isActive 
                    ? "bg-sidebar-accent text-sidebar-accent-foreground" 
                    : "text-sidebar-foreground hover:bg-sidebar-accent/50"
                )}
              >
                <item.icon className="mr-2 h-4 w-4" />
                {item.title}
              </Link>
            );
          })}
        </nav>
      </div>
      
      <div className="p-4 border-t border-sidebar-border">
        <div className="space-y-3">
          <Link
            to="/help"
            className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-sidebar-foreground hover:bg-sidebar-accent/50 transition-colors"
          >
            <HelpCircle className="mr-2 h-4 w-4" />
            Help & Support
          </Link>
          <button className="w-full flex items-center px-3 py-2 text-sm font-medium rounded-md text-sidebar-foreground hover:bg-sidebar-accent/50 transition-colors">
            <LogOut className="mr-2 h-4 w-4" />
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}
