
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ProgressCircleProps {
  title: string;
  value: number;
  maxValue?: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
  backgroundColor?: string;
  description?: string;
  valueFormatter?: (value: number) => string;
}

export default function ProgressCircle({
  title,
  value,
  maxValue = 100,
  size = 120,
  strokeWidth = 10,
  color = "hsl(var(--primary))",
  backgroundColor = "hsl(var(--muted))",
  description,
  valueFormatter
}: ProgressCircleProps) {
  const percentage = (value / maxValue) * 100;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const dash = (percentage * circumference) / 100;

  const formatValue = (val: number) => {
    if (valueFormatter) {
      return valueFormatter(val);
    }
    
    if (val >= 1000000000) {
      return `${(val / 1000000000).toFixed(1)}B`;
    } else if (val >= 1000000) {
      return `${(val / 1000000).toFixed(1)}M`;
    } else if (val >= 1000) {
      return `${(val / 1000).toFixed(1)}K`;
    }
    return val.toString();
  };

  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <p className="text-sm text-muted-foreground">{description}</p>}
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center">
        <div className="relative" style={{ width: size, height: size }}>
          <svg width={size} height={size}>
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke={backgroundColor}
              strokeWidth={strokeWidth}
            />
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke={color}
              strokeWidth={strokeWidth}
              strokeDasharray={circumference}
              strokeDashoffset={circumference - dash}
              strokeLinecap="round"
              transform={`rotate(-90 ${size / 2} ${size / 2})`}
              style={{
                transition: "stroke-dashoffset 0.5s ease-in-out",
              }}
            />
            <text
              x="50%"
              y="50%"
              dy=".3em"
              textAnchor="middle"
              fontSize="18"
              fontWeight="bold"
              fill="currentColor"
            >
              {formatValue(value)}
            </text>
          </svg>
        </div>
        <div className="mt-4 text-sm text-center text-muted-foreground">
          {percentage.toFixed(0)}% of target
        </div>
      </CardContent>
    </Card>
  );
}
