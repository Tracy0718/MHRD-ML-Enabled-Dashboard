
import DashboardLayout from "@/components/layout/DashboardLayout";
import MetricCard from "@/components/dashboard/MetricCard";
import SchemeCard from "@/components/dashboard/SchemeCard";
import StatusCard from "@/components/dashboard/StatusCard";
import DataTable from "@/components/dashboard/DataTable";
import BarChart from "@/components/charts/BarChart";
import LineChart from "@/components/charts/LineChart";
import DonutChart from "@/components/charts/DonutChart";
import { 
  schemes, 
  overviewMetrics, 
  trendsData, 
  regionalData, 
  recentAnnouncementsData 
} from "@/data/mockData";
import { 
  ArrowUpRight, 
  CalendarDays, 
  ArrowUp, 
  ArrowDown, 
  Info 
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Prepare data for charts
const budgetData = trendsData.budgetAllocation.map(item => ({
  year: item.year,
  budget: item.education,
  percentage: item.percentage
}));

const enrollmentData = trendsData.enrollment.map(item => ({
  year: item.year,
  primary: item.primary,
  secondary: item.secondary,
  higher: item.higher
}));

const dropoutData = trendsData.dropoutRates.map(item => ({
  year: item.year,
  primary: item.primary,
  secondary: item.secondary,
  higher: item.higher
}));

// Create donut chart data for budget distribution
const budgetDistributionData = [
  { name: "School Education", value: 68, color: "#1A73E8" },
  { name: "Higher Education", value: 18, color: "#34A853" },
  { name: "Skill Development", value: 9, color: "#FBBC05" },
  { name: "Research & Innovation", value: 5, color: "#D14747" }
];

// State performance data for table
const statePerformanceData = regionalData.statePerformance.slice(0, 5);

// Recent announcements for table
const recentAnnouncements = recentAnnouncementsData.slice(0, 4);

export default function Index() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">
              Summary of all MHRD initiatives and schemes
            </p>
          </div>
          <div className="flex items-center gap-2">
            <StatusCard
              title="Last Updated"
              value="Today, 11:30 AM"
              icon={<CalendarDays className="h-5 w-5 text-primary" />}
              description="Data is updated in real-time"
              actionLabel="View update history"
            />
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {overviewMetrics.map((metric) => (
            <MetricCard
              key={metric.id}
              title={metric.title}
              value={metric.value}
              change={metric.change}
              trend={metric.trend as any}
              icon={metric.icon as any}
              format={metric.title.includes("Budget") ? "percentage" : 
                     metric.title.includes("Beneficiaries") ? "compact" : 
                     metric.title.includes("Score") ? "number" : 
                     "number"}
            />
          ))}
        </div>

        {/* Main Dashboard Content */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Budget Allocation Trends */}
          <BarChart
            title="Budget Allocation Trends"
            data={budgetData}
            xAxisDataKey="year"
            bars={[
              { dataKey: "budget", name: "Education Budget (₹)", color: "#1A73E8" }
            ]}
            height={250}
            description="Annual education budget allocation (2019-2024)"
            tooltipFormatter={(value, name) => `₹${(value / 10000000).toFixed(2)} Cr`}
          />

          {/* Enrollment Rates */}
          <LineChart
            title="Enrollment Rates"
            data={enrollmentData}
            xAxisDataKey="year"
            lines={[
              { dataKey: "primary", name: "Primary (%)", color: "#34A853" },
              { dataKey: "secondary", name: "Secondary (%)", color: "#1A73E8" },
              { dataKey: "higher", name: "Higher (%)", color: "#FBBC05" }
            ]}
            height={250}
            description="Education enrollment rates by level (2019-2024)"
            tooltipFormatter={(value, name) => `${value.toFixed(1)}%`}
          />

          {/* Dropout Rates */}
          <LineChart
            title="Dropout Rates"
            data={dropoutData}
            xAxisDataKey="year"
            lines={[
              { dataKey: "primary", name: "Primary (%)", color: "#34A853" },
              { dataKey: "secondary", name: "Secondary (%)", color: "#D14747" },
              { dataKey: "higher", name: "Higher (%)", color: "#FBBC05" }
            ]}
            height={250}
            description="Education dropout rates by level (2019-2024)"
            tooltipFormatter={(value, name) => `${value.toFixed(1)}%`}
          />
        </div>

        {/* Tabs for Scheme Overview and Regional Performance */}
        <Tabs defaultValue="schemes" className="w-full">
          <TabsList>
            <TabsTrigger value="schemes">Scheme Overview</TabsTrigger>
            <TabsTrigger value="regional">Regional Performance</TabsTrigger>
            <TabsTrigger value="announcements">Recent Announcements</TabsTrigger>
          </TabsList>
          
          {/* Schemes Tab Content */}
          <TabsContent value="schemes" className="pt-4">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {schemes.slice(0, 3).map((scheme) => (
                <SchemeCard
                  key={scheme.id}
                  name={scheme.name}
                  description={scheme.description}
                  budget={scheme.budget}
                  budgetUtilized={scheme.budgetUtilized}
                  beneficiaries={scheme.beneficiaries}
                  targetBeneficiaries={scheme.targetBeneficiaries}
                  category={scheme.category}
                />
              ))}
            </div>
            <div className="mt-4 flex justify-end">
              <a href="/schemes" className="flex items-center text-sm font-medium text-primary">
                View all schemes <ArrowUpRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </TabsContent>
          
          {/* Regional Performance Tab Content */}
          <TabsContent value="regional" className="pt-4">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <DataTable
                title="Top Performing States"
                description="States with the highest education quality index"
                data={statePerformanceData}
                columns={[
                  { key: "state", title: "State" },
                  { key: "literacyRate", title: "Literacy Rate (%)" },
                  { 
                    key: "qualityIndex", 
                    title: "Quality Index", 
                    render: (row) => (
                      <div className="flex items-center gap-1">
                        <span>{row.qualityIndex}/100</span>
                        {row.qualityIndex >= 75 && <ArrowUp className="h-4 w-4 text-mhrd-green" />}
                        {row.qualityIndex < 60 && <ArrowDown className="h-4 w-4 text-mhrd-red" />}
                      </div>
                    )
                  }
                ]}
              />
              <DonutChart
                title="Budget Distribution by Sector"
                data={budgetDistributionData}
                height={300}
                description="Current budget allocation across education sectors"
                valueFormatter={(value) => `${value}%`}
              />
            </div>
          </TabsContent>
          
          {/* Announcements Tab Content */}
          <TabsContent value="announcements" className="pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Recent MHRD Announcements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentAnnouncements.map((announcement) => (
                    <div 
                      key={announcement.id} 
                      className="flex flex-col space-y-2 border-b pb-4 last:border-0 last:pb-0"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold">{announcement.title}</h3>
                        <Badge variant="outline">{announcement.category}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{announcement.description}</p>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <CalendarDays className="mr-1 h-3 w-3" />
                        {new Date(announcement.date).toLocaleDateString()}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        {/* ML Insights Section */}
        <div className="mt-4">
          <Card className="border-mhrd-blue-200 bg-gradient-to-br from-blue-50 to-transparent">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <Info className="h-5 w-5 text-mhrd-blue" />
                <CardTitle className="text-lg text-mhrd-blue-700">ML-Powered Insights</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col space-y-3">
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-mhrd-yellow flex items-center justify-center mt-0.5">
                    <ArrowUpRight className="h-3 w-3 text-black" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">Dropout Rate Prediction</h4>
                    <p className="text-sm text-muted-foreground">
                      ML models predict a 1.8% decrease in secondary education dropout rates by 2025 
                      if current intervention strategies continue.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-mhrd-red flex items-center justify-center mt-0.5">
                    <ArrowDown className="h-3 w-3 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">Anomaly Detection</h4>
                    <p className="text-sm text-muted-foreground">
                      Anomaly detected: Budget utilization in North Eastern states is 23% below expected levels
                      for Samagra Shiksha Abhiyan scheme.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-mhrd-green flex items-center justify-center mt-0.5">
                    <ArrowUpRight className="h-3 w-3 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">Enrollment Forecast</h4>
                    <p className="text-sm text-muted-foreground">
                      Higher education enrollment is projected to grow by 2.3% annually over the next three years,
                      exceeding the target by 0.8%.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
