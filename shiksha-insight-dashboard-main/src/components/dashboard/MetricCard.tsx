
import { cn } from "@/lib/utils";
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ListChecks, Users, Wallet, TrendingUp, Building, GraduationCap, BookOpen, Award
} from "lucide-react";

const iconMap = {
  ListChecks: ListChecks,
  Users: Users,
  Wallet: Wallet,
  TrendingUp: TrendingUp,
  Building: Building,
  GraduationCap: GraduationCap,
  BookOpen: BookOpen,
  Award: Award,
};

type IconName = keyof typeof iconMap;

interface MetricCardProps {
  title: string;
  value: number;
  change?: number;
  trend?: "up" | "down" | "neutral";
  icon?: IconName;
  format?: "number" | "percentage" | "currency" | "compact";
}

export default function MetricCard({ 
  title, 
  value, 
  change, 
  trend = "neutral", 
  icon, 
  format = "number" 
}: MetricCardProps) {
  const formatValue = (val: number) => {
    if (format === "percentage") {
      return `${val.toFixed(1)}%`;
    } else if (format === "currency") {
      return `₹${(val / 10000000).toFixed(2)} Cr`;
    } else if (format === "compact") {
      return val >= 10000000 
        ? `${(val / 10000000).toFixed(2)} Cr` 
        : val >= 100000 
        ? `${(val / 100000).toFixed(2)} L`
        : val.toLocaleString();
    } else {
      return val.toLocaleString();
    }
  };

  const IconComponent = icon ? iconMap[icon] : undefined;

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <h3 className="text-2xl font-bold mt-1">{formatValue(value)}</h3>
            
            {change !== undefined && (
              <div className="flex items-center mt-1">
                {trend === "up" ? (
                  <ArrowUpIcon className="h-4 w-4 text-mhrd-green mr-1" />
                ) : trend === "down" ? (
                  <ArrowDownIcon className="h-4 w-4 text-mhrd-red mr-1" />
                ) : null}
                
                <span 
                  className={cn(
                    "text-xs font-medium",
                    trend === "up" ? "text-mhrd-green" : 
                    trend === "down" ? "text-mhrd-red" : 
                    "text-muted-foreground"
                  )}
                >
                  {change > 0 ? "+" : ""}{change}%
                </span>
              </div>
            )}
          </div>
          
          {IconComponent && (
            <div className="h-10 w-10 rounded bg-primary/10 flex items-center justify-center">
              <IconComponent className="h-5 w-5 text-primary" />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
