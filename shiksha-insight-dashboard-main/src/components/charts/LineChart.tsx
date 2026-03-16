
import { LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, TooltipProps } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent';

interface LineChartProps {
  title: string;
  data: any[];
  xAxisDataKey: string;
  lines: {
    dataKey: string;
    name: string;
    color: string;
    strokeDasharray?: string;
  }[];
  height?: number;
  description?: string;
  yAxisLabel?: string;
  tooltipFormatter?: (value: number, name: string) => string;
  showPredictionLine?: boolean;
}

export default function LineChart({
  title,
  data,
  xAxisDataKey,
  lines,
  height = 300,
  description,
  yAxisLabel,
  tooltipFormatter,
  showPredictionLine = false
}: LineChartProps) {
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

  // Calculate prediction start index
  let predictionStartIndex = 0;
  if (showPredictionLine) {
    const realDataLength = data.filter(d => !d.isPrediction).length;
    predictionStartIndex = realDataLength - 1; // overlap by 1 for continuity
  }

  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <p className="text-sm text-muted-foreground">{description}</p>}
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={height}>
          <RechartsLineChart
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
            {lines.map((line, index) => (
              <>
                <Line 
                  key={`line-${index}`}
                  type="monotone" 
                  dataKey={line.dataKey} 
                  name={line.name} 
                  stroke={line.color} 
                  strokeWidth={2}
                  activeDot={{ r: 6 }}
                  strokeDasharray={line.strokeDasharray}
                />
                {showPredictionLine && (
                  <Line 
                    key={`prediction-${index}`}
                    type="monotone" 
                    dataKey={line.dataKey} 
                    name={`Predicted ${line.name}`} 
                    stroke={line.color} 
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    activeDot={{ r: 6 }}
                    dot={{ r: 4 }}
                    data={data.slice(predictionStartIndex)}
                  />
                )}
              </>
            ))}
          </RechartsLineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
