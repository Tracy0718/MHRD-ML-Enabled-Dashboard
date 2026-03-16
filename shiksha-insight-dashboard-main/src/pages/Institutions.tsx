
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BarChart from "@/components/charts/BarChart";
import LineChart from "@/components/charts/LineChart";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import {
  Search,
  Filter,
  Download,
  School,
  TrendingUp,
  Map as MapIcon
} from "lucide-react";

const institutionsData = [
  { id: 1, name: "Delhi Public School", type: "Secondary", district: "Delhi", state: "Delhi", rating: 4.8, enrollment: 1250, fundingReceived: 10500000 },
  { id: 2, name: "Kendriya Vidyalaya", type: "Secondary", district: "Mumbai", state: "Maharashtra", rating: 4.5, enrollment: 980, fundingReceived: 8500000 },
  { id: 3, name: "St. Xavier's College", type: "Higher", district: "Kolkata", state: "West Bengal", rating: 4.7, enrollment: 1500, fundingReceived: 12500000 },
  { id: 4, name: "Government High School", type: "Secondary", district: "Chennai", state: "Tamil Nadu", rating: 3.9, enrollment: 650, fundingReceived: 5500000 },
  { id: 5, name: "Navodaya Vidyalaya", type: "Secondary", district: "Hyderabad", state: "Telangana", rating: 4.3, enrollment: 850, fundingReceived: 7500000 },
  { id: 6, name: "Central University", type: "Higher", district: "Bangalore", state: "Karnataka", rating: 4.6, enrollment: 2500, fundingReceived: 18500000 },
  { id: 7, name: "IIT Mumbai", type: "Higher", district: "Mumbai", state: "Maharashtra", rating: 4.9, enrollment: 1800, fundingReceived: 25000000 },
  { id: 8, name: "Primary Municipal School", type: "Primary", district: "Pune", state: "Maharashtra", rating: 3.7, enrollment: 450, fundingReceived: 3500000 },
];

const institutionTypeData = [
  { category: "Primary", count: 2450 },
  { category: "Secondary", count: 1850 },
  { category: "Higher", count: 950 },
];

const institutionGrowthData = [
  { year: 2020, primary: 65, secondary: 72, higher: 58 },
  { year: 2021, primary: 68, secondary: 74, higher: 61 },
  { year: 2022, primary: 70, secondary: 75, higher: 63 },
  { year: 2023, primary: 72, secondary: 78, higher: 65 },
  { year: 2024, primary: 75, secondary: 80, higher: 69 },
];

export default function Institutions() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Educational Institutions</h1>
          <p className="text-muted-foreground">
            Monitor and analyze educational institutions across India
          </p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <div className="relative w-64">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search institutions..."
                className="pl-8"
              />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export Data
          </Button>
        </div>

        <Tabs defaultValue="list" className="w-full">
          <TabsList>
            <TabsTrigger value="list">Institution List</TabsTrigger>
            <TabsTrigger value="statistics">Statistics</TabsTrigger>
            <TabsTrigger value="geographic">Geographic Distribution</TabsTrigger>
          </TabsList>
          
          <TabsContent value="list" className="pt-4">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <School className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">Institution Records</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>District</TableHead>
                      <TableHead>State</TableHead>
                      <TableHead>Rating</TableHead>
                      <TableHead>Enrollment</TableHead>
                      <TableHead>Funding (₹)</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {institutionsData.map((institution) => (
                      <TableRow key={institution.id}>
                        <TableCell className="font-medium">{institution.name}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className={
                            institution.type === "Primary" ? "bg-green-50 text-green-700 border-green-200" :
                            institution.type === "Secondary" ? "bg-blue-50 text-blue-700 border-blue-200" :
                            "bg-purple-50 text-purple-700 border-purple-200"
                          }>
                            {institution.type}
                          </Badge>
                        </TableCell>
                        <TableCell>{institution.district}</TableCell>
                        <TableCell>{institution.state}</TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            {institution.rating}
                            <TrendingUp className="ml-1 h-3 w-3 text-green-500" />
                          </div>
                        </TableCell>
                        <TableCell>{institution.enrollment}</TableCell>
                        <TableCell>₹{(institution.fundingReceived / 1000000).toFixed(2)}M</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="statistics" className="pt-4">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Institution Types</CardTitle>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={institutionTypeData}
                    xAxisDataKey="category"
                    bars={[
                      { dataKey: "count", name: "Institutions", color: "#1A73E8" }
                    ]}
                    height={250}
                    description="Distribution by institution type"
                    title="Institution Types"
                  />
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Historical Growth</CardTitle>
                </CardHeader>
                <CardContent>
                  <LineChart
                    data={institutionGrowthData}
                    xAxisDataKey="year"
                    lines={[
                      { dataKey: "primary", name: "Primary", color: "#34A853" },
                      { dataKey: "secondary", name: "Secondary", color: "#FBBC05" },
                      { dataKey: "higher", name: "Higher", color: "#D14747" }
                    ]}
                    height={250}
                    description="5-year growth trend by education level"
                    tooltipFormatter={(value) => [`${value} institutions`, "Institutions"]}
                    title="Historical Growth"
                  />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="geographic" className="pt-4">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <MapIcon className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">Geographic Distribution</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="h-96 flex items-center justify-center">
                <div className="text-center">
                  <MapIcon className="h-10 w-10 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Interactive Institution Map</h3>
                  <p className="text-muted-foreground max-w-md">
                    This section will feature an interactive map of India showing 
                    the distribution of educational institutions across states with 
                    detailed metrics and analytics on hover.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
