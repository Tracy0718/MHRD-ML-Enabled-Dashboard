
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, TooltipProps } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent';

interface BarChartProps {
  title: string;
  data: any[];
  xAxisDataKey: string;
  bars: {
    dataKey: string;
    name: string;
    color: string;
  }[];
  height?: number;
  description?: string;
  yAxisLabel?: string;
  tooltipFormatter?: (value: number, name: string) => string;
}

export default function BarChart({
  title,
  data,
  xAxisDataKey,
  bars,
  height = 300,
  description,
  yAxisLabel,
  tooltipFormatter
}: BarChartProps) {
  const formatYAxis = (value: number): string => {
    if (value >= 1000000000) {
      return `${(value / 1000000000).toFixed(1)}B`;
    } else if (value >= 1000000) {
      return `${(value / 1000000).toFixed(1)}M`;
    } else if (value >= 1000) {
      return `${(value / 1000).toFixed(1)}K`;
    }
    return value.toString();
  };

  const defaultFormatter = (value: number, name: string) => {
    return [`${value}`, name];
  };

  const customTooltip = ({ active, payload, label }: TooltipProps<ValueType, NameType>) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-background border rounded-md shadow-sm p-2 text-sm">
          <p className="font-medium">{label}</p>
          <div className="mt-1">
            {payload.map((entry, index) => (
              <div key={index} className="flex items-center gap-2">
                <div 
                  className="h-2 w-2 rounded-full" 
                  style={{ backgroundColor: entry.color }} 
                />
                <span>
                  {entry.name}: {
                    tooltipFormatter 
                      ? tooltipFormatter(entry.value as number, entry.name as string)
                      : entry.value
                  }
                </span>
              </div>
            ))}
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <p className="text-sm text-muted-foreground">{description}</p>}
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={height}>
          <RechartsBarChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey={xAxisDataKey} />
            <YAxis 
              tickFormatter={formatYAxis} 
              label={yAxisLabel ? { 
                value: yAxisLabel, 
                angle: -90, 
                position: 'insideLeft' 
              } : undefined} 
            />
            <Tooltip content={customTooltip} />
            <Legend />
            {bars.map((bar, index) => (
              <Bar 
                key={index} 
                dataKey={bar.dataKey} 
                name={bar.name} 
                fill={bar.color} 
                radius={[4, 4, 0, 0]}
              />
            ))}
          </RechartsBarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
