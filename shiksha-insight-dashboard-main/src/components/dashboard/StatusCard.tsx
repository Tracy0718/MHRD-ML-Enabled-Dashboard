
import { ArrowUpRight, BarChart3 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface StatusCardProps {
  title: string;
  value: string;
  description?: string;
  actionLabel?: string;
  actionIcon?: React.ReactNode;
  icon?: React.ReactNode;
}

export default function StatusCard({
  title,
  value,
  description,
  actionLabel = "View details",
  actionIcon = <ArrowUpRight className="h-4 w-4 ml-1" />,
  icon = <BarChart3 className="h-5 w-5" />
}: StatusCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-base font-medium">{title}</CardTitle>
        <div className="h-8 w-8 rounded-md bg-primary/10 flex items-center justify-center">
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {description && (
          <p className="text-xs text-muted-foreground mt-1">{description}</p>
        )}
        {actionLabel && (
          <Button 
            variant="link" 
            className="p-0 h-auto text-xs text-primary mt-3 font-medium"
          >
            {actionLabel}
            {actionIcon}
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
