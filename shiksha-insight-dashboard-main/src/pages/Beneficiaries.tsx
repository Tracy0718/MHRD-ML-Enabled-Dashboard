
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ArrowUpDown,
  Download,
  Filter,
  Search,
  Users,
  PieChart,
  Map,
} from "lucide-react";
import BarChart from "@/components/charts/BarChart";
import DonutChart from "@/components/charts/DonutChart";

// Sample data for beneficiaries
const beneficiariesData = [
  { id: 1, name: "Rahul Sharma", age: 15, gender: "Male", district: "Delhi", scheme: "Samagra Shiksha", benefitAmount: 2500, status: "Active" },
  { id: 2, name: "Priya Patel", age: 14, gender: "Female", district: "Mumbai", scheme: "Mid Day Meal", benefitAmount: 1800, status: "Active" },
  { id: 3, name: "Amit Kumar", age: 16, gender: "Male", district: "Kolkata", scheme: "RMSA", benefitAmount: 3000, status: "Active" },
  { id: 4, name: "Neha Singh", age: 13, gender: "Female", district: "Chennai", scheme: "Samagra Shiksha", benefitAmount: 2500, status: "Inactive" },
  { id: 5, name: "Vijay Reddy", age: 15, gender: "Male", district: "Hyderabad", scheme: "Mid Day Meal", benefitAmount: 1800, status: "Active" },
  { id: 6, name: "Aisha Khan", age: 14, gender: "Female", district: "Bangalore", scheme: "RMSA", benefitAmount: 3000, status: "Active" },
  { id: 7, name: "Ravi Gupta", age: 16, gender: "Male", district: "Ahmedabad", scheme: "Samagra Shiksha", benefitAmount: 2500, status: "Inactive" },
  { id: 8, name: "Meera Joshi", age: 15, gender: "Female", district: "Pune", scheme: "Mid Day Meal", benefitAmount: 1800, status: "Active" },
];

// Data for demographic charts
const genderDistribution = [
  { name: "Male", value: 48, color: "#1A73E8" },
  { name: "Female", value: 52, color: "#D14747" },
];

const ageDistribution = [
  { year: "10-12", count: 1250 },
  { year: "13-15", count: 2850 },
  { year: "16-18", count: 1950 },
];

const schemeDistribution = [
  { name: "Samagra Shiksha", value: 45, color: "#34A853" },
  { name: "Mid Day Meal", value: 30, color: "#FBBC05" },
  { name: "RMSA", value: 15, color: "#D14747" },
  { name: "Other Schemes", value: 10, color: "#1A73E8" },
];

export default function Beneficiaries() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Beneficiaries</h1>
          <p className="text-muted-foreground">
            Analysis of scheme beneficiaries across different demographics
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex gap-2">
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search beneficiaries..."
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
          <TabsList className="w-full sm:w-auto">
            <TabsTrigger value="list">Beneficiary List</TabsTrigger>
            <TabsTrigger value="demographics">Demographics</TabsTrigger>
            <TabsTrigger value="geographic">Geographic Distribution</TabsTrigger>
          </TabsList>
          
          <TabsContent value="list" className="pt-4">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">Beneficiary Records</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="overflow-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Age</TableHead>
                      <TableHead>Gender</TableHead>
                      <TableHead className="hidden md:table-cell">District</TableHead>
                      <TableHead className="hidden sm:table-cell">Scheme</TableHead>
                      <TableHead>
                        <div className="flex items-center">
                          Benefit
                          <ArrowUpDown className="ml-1 h-3 w-3" />
                        </div>
                      </TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {beneficiariesData.map((beneficiary) => (
                      <TableRow key={beneficiary.id}>
                        <TableCell>{beneficiary.name}</TableCell>
                        <TableCell>{beneficiary.age}</TableCell>
                        <TableCell>{beneficiary.gender}</TableCell>
                        <TableCell className="hidden md:table-cell">{beneficiary.district}</TableCell>
                        <TableCell className="hidden sm:table-cell">{beneficiary.scheme}</TableCell>
                        <TableCell>₹{beneficiary.benefitAmount}</TableCell>
                        <TableCell>
                          <Badge variant={beneficiary.status === "Active" ? "default" : "outline"}>
                            {beneficiary.status}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="demographics" className="pt-4">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Gender Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <DonutChart
                    data={genderDistribution}
                    height={250}
                    description="Beneficiary gender ratio"
                    valueFormatter={(value) => `${value}%`}
                    title="Gender Distribution"
                  />
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Age Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={ageDistribution}
                    xAxisDataKey="year"
                    bars={[
                      { dataKey: "count", name: "Beneficiaries", color: "#1A73E8" }
                    ]}
                    height={250}
                    description="Beneficiaries by age group"
                    title="Age Distribution"
                  />
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Scheme Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <DonutChart
                    data={schemeDistribution}
                    height={250}
                    description="Beneficiaries by scheme"
                    valueFormatter={(value) => `${value}%`}
                    title="Scheme Distribution"
                  />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="geographic" className="pt-4">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <Map className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">Geographic Distribution</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="h-96 flex items-center justify-center">
                <div className="text-center">
                  <PieChart className="h-10 w-10 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Interactive Map View</h3>
                  <p className="text-muted-foreground max-w-md">
                    This section will feature an interactive map of India showing 
                    the distribution of beneficiaries across states and districts with 
                    drill-down capability.
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
