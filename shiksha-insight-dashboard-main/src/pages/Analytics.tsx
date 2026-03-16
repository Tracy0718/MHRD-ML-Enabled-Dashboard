
import DashboardLayout from "@/components/layout/DashboardLayout";
import { trendsData, regionalData } from "@/data/mockData";
import BarChart from "@/components/charts/BarChart";
import LineChart from "@/components/charts/LineChart";
import DonutChart from "@/components/charts/DonutChart";
import DataTable from "@/components/dashboard/DataTable";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  MapPin, 
  ArrowUp, 
  ArrowDown, 
  BarChart3, 
  LineChart as LineChartIcon,
  PieChart
} from "lucide-react";

export default function Analytics() {
  // Format data for charts
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

  const budgetData = trendsData.budgetAllocation.map(item => ({
    year: item.year,
    budget: item.education,
    percentage: item.percentage
  }));

  const infrastructureData = trendsData.infrastructureIndex.map(item => ({
    year: item.year,
    schools: item.schools,
    colleges: item.colleges
  }));

  // Donut chart data for zones
  const zoneDistributionData = regionalData.zoneWisePerformance.map(zone => ({
    name: zone.zone,
    value: zone.enrollmentRate,
    color: 
      zone.zone === "South" ? "#1A73E8" :
      zone.zone === "West" ? "#34A853" :
      zone.zone === "North" ? "#FBBC05" :
      zone.zone === "East" ? "#D14747" :
      zone.zone === "Central" ? "#9334E6" :
      "#00A3A1"
  }));

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Analytics</h1>
          <p className="text-muted-foreground">
            Comprehensive analysis of educational metrics across India
          </p>
        </div>

        {/* Education Metrics Tabs */}
        <Tabs defaultValue="enrollment" className="w-full">
          <TabsList>
            <TabsTrigger value="enrollment" className="flex items-center gap-1">
              <LineChartIcon className="h-4 w-4" />
              <span>Enrollment</span>
            </TabsTrigger>
            <TabsTrigger value="dropout" className="flex items-center gap-1">
              <BarChart3 className="h-4 w-4" />
              <span>Dropout Rates</span>
            </TabsTrigger>
            <TabsTrigger value="budget" className="flex items-center gap-1">
              <LineChartIcon className="h-4 w-4" />
              <span>Budget</span>
            </TabsTrigger>
            <TabsTrigger value="infrastructure" className="flex items-center gap-1">
              <PieChart className="h-4 w-4" />
              <span>Infrastructure</span>
            </TabsTrigger>
          </TabsList>

          {/* Enrollment Tab */}
          <TabsContent value="enrollment" className="pt-4">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <LineChart
                title="Enrollment Rates by Education Level"
                data={enrollmentData}
                xAxisDataKey="year"
                lines={[
                  { dataKey: "primary", name: "Primary (%)", color: "#34A853" },
                  { dataKey: "secondary", name: "Secondary (%)", color: "#1A73E8" },
                  { dataKey: "higher", name: "Higher (%)", color: "#FBBC05" }
                ]}
                height={350}
                description="Year-wise enrollment rates across education levels"
                tooltipFormatter={(value, name) => `${value.toFixed(1)}%`}
              />
              
              <Card>
                <CardHeader>
                  <CardTitle>Enrollment Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold flex items-center gap-1">
                        <ArrowUp className="h-4 w-4 text-mhrd-green" />
                        Key Observations
                      </h3>
                      <ul className="mt-2 space-y-1 text-sm">
                        <li>• Primary education enrollment shows steady growth at 1.2% annually</li>
                        <li>• Secondary education enrollment growing at 2.3% annually</li>
                        <li>• Higher education shows the highest growth rate of 3.8% annually</li>
                        <li>• Gender parity improving across all education levels</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold flex items-center gap-1">
                        <MapPin className="h-4 w-4 text-mhrd-blue" />
                        Regional Insights
                      </h3>
                      <ul className="mt-2 space-y-1 text-sm">
                        <li>• Southern states consistently maintain 95%+ primary enrollment</li>
                        <li>• North Eastern states show significant improvement in secondary enrollment</li>
                        <li>• Urban-rural enrollment gap reduced by 4% in the last 3 years</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold flex items-center gap-1">
                        <ArrowDown className="h-4 w-4 text-mhrd-red" />
                        Areas for Improvement
                      </h3>
                      <ul className="mt-2 space-y-1 text-sm">
                        <li>• Aspirational districts still 12% below national average in secondary enrollment</li>
                        <li>• Tribal area enrollment needs focused intervention</li>
                        <li>• Transition rate from secondary to higher education remains suboptimal</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Dropout Tab */}
          <TabsContent value="dropout" className="pt-4">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <BarChart
                title="Dropout Rates by Education Level"
                data={dropoutData}
                xAxisDataKey="year"
                bars={[
                  { dataKey: "primary", name: "Primary (%)", color: "#34A853" },
                  { dataKey: "secondary", name: "Secondary (%)", color: "#D14747" },
                  { dataKey: "higher", name: "Higher (%)", color: "#FBBC05" }
                ]}
                height={350}
                description="Year-wise dropout rates across education levels"
                tooltipFormatter={(value, name) => `${value.toFixed(1)}%`}
              />
              
              <Card>
                <CardHeader>
                  <CardTitle>Dropout Rate Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold flex items-center gap-1">
                        <ArrowDown className="h-4 w-4 text-mhrd-green" />
                        Key Observations
                      </h3>
                      <ul className="mt-2 space-y-1 text-sm">
                        <li>• Primary education dropout rates decreased by 1.6% over 5 years</li>
                        <li>• Secondary education continues to have highest dropout rates</li>
                        <li>• All education levels show consistent improvement year-over-year</li>
                        <li>• Gender gap in dropout rates decreased across all levels</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold flex items-center gap-1">
                        <MapPin className="h-4 w-4 text-mhrd-blue" />
                        Regional Insights
                      </h3>
                      <ul className="mt-2 space-y-1 text-sm">
                        <li>• Central and Eastern zones have highest secondary dropout rates</li>
                        <li>• States with mid-day meal scheme improvements show 3.2% lower dropout</li>
                        <li>• Aspirational districts showing 2.1% annual improvement in retention</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold flex items-center gap-1">
                        <ArrowUp className="h-4 w-4 text-mhrd-red" />
                        Areas for Concern
                      </h3>
                      <ul className="mt-2 space-y-1 text-sm">
                        <li>• Transition from class 8 to 9 remains a critical dropout point</li>
                        <li>• Girl child dropout in certain states still above national average</li>
                        <li>• Economic factors remain primary driver for higher education dropout</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Budget Tab */}
          <TabsContent value="budget" className="pt-4">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <LineChart
                title="Education Budget Allocation"
                data={budgetData}
                xAxisDataKey="year"
                lines={[
                  { dataKey: "budget", name: "Budget (₹)", color: "#1A73E8" }
                ]}
                height={350}
                description="Annual education budget allocation (2019-2024)"
                tooltipFormatter={(value, name) => `₹${(value / 10000000).toFixed(2)} Cr`}
              />
              
              <BarChart
                title="Education Budget as % of GDP"
                data={budgetData}
                xAxisDataKey="year"
                bars={[
                  { dataKey: "percentage", name: "% of GDP", color: "#00A3A1" }
                ]}
                height={350}
                description="Education budget as percentage of GDP"
                tooltipFormatter={(value, name) => `${value.toFixed(1)}%`}
              />
            </div>
          </TabsContent>

          {/* Infrastructure Tab */}
          <TabsContent value="infrastructure" className="pt-4">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <LineChart
                title="Infrastructure Quality Index"
                data={infrastructureData}
                xAxisDataKey="year"
                lines={[
                  { dataKey: "schools", name: "Schools", color: "#34A853" },
                  { dataKey: "colleges", name: "Colleges", color: "#1A73E8" }
                ]}
                height={350}
                description="Quality index for educational infrastructure (0-100 scale)"
                tooltipFormatter={(value, name) => `${value.toFixed(1)}/100`}
              />
              
              <DonutChart
                title="Zone-wise Enrollment Rates"
                data={zoneDistributionData}
                height={350}
                description="Current enrollment rates across different zones"
                valueFormatter={(value) => `${value.toFixed(1)}%`}
              />
            </div>
          </TabsContent>
        </Tabs>
        
        {/* State Performance Table */}
        <DataTable
          title="State-wise Performance"
          description="Comparative analysis of educational metrics across states"
          data={regionalData.statePerformance}
          columns={[
            { key: "state", title: "State" },
            { key: "literacyRate", title: "Literacy Rate (%)" },
            { key: "gpi", title: "Gender Parity Index" },
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
      </div>
    </DashboardLayout>
  );
}
