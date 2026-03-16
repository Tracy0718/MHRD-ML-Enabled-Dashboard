
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Calendar,
  ChevronDown,
  Download,
  FileCheck,
  FileText,
  Filter,
  Printer,
  PieChart,
  Search,
  Share,
} from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

// Sample report templates
const reportTemplates = [
  {
    id: 1,
    title: "Annual Performance Report",
    description: "Comprehensive analysis of all MHRD schemes and their performance metrics",
    lastGenerated: "15 Mar 2024",
    category: "Annual",
    format: "PDF, Excel",
  },
  {
    id: 2,
    title: "Quarterly Funding Analysis",
    description: "Details of fund allocation, disbursement and utilization across schemes",
    lastGenerated: "01 Apr 2024",
    category: "Quarterly",
    format: "PDF, Excel, CSV",
  },
  {
    id: 3,
    title: "Beneficiary Demographics Report",
    description: "Demographic breakdown of scheme beneficiaries by age, gender, region, etc.",
    lastGenerated: "10 Apr 2024",
    category: "Monthly",
    format: "PDF, Excel, PowerBI",
  },
  {
    id: 4,
    title: "Institution Performance Metrics",
    description: "Detailed analysis of educational institutions performance across parameters",
    lastGenerated: "05 Apr 2024",
    category: "Quarterly",
    format: "PDF, Excel",
  },
  {
    id: 5,
    title: "Scheme Outcome Assessment",
    description: "Evaluation of outcome targets vs achievements for key schemes",
    lastGenerated: "20 Mar 2024",
    category: "Bi-Annual",
    format: "PDF, Excel, PowerBI",
  },
  {
    id: 6,
    title: "Budget Utilization Report",
    description: "Analysis of budget utilization patterns across schemes and regions",
    lastGenerated: "01 Apr 2024",
    category: "Monthly",
    format: "PDF, Excel, CSV",
  }
];

// Sample scheduled reports
const scheduledReports = [
  {
    id: 1,
    title: "Monthly Performance Dashboard",
    frequency: "Monthly (1st)",
    nextGeneration: "01 May 2024",
    recipients: "Ministry Officials, State Coordinators",
    format: "PDF, Email"
  },
  {
    id: 2,
    title: "Weekly Funding Status",
    frequency: "Weekly (Monday)",
    nextGeneration: "22 Apr 2024",
    recipients: "Financial Department, Scheme Directors",
    format: "Excel, Email"
  },
  {
    id: 3,
    title: "Quarterly Comprehensive Analysis",
    frequency: "Quarterly",
    nextGeneration: "01 Jul 2024",
    recipients: "Ministry Officials, External Stakeholders",
    format: "PDF, PowerBI, Email"
  }
];

export default function Reports() {
  const isMobile = useIsMobile();

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Reports</h1>
          <p className="text-muted-foreground">
            Generate and view comprehensive reports on MHRD schemes
          </p>
        </div>

        <Tabs defaultValue="generate" className="w-full">
          <TabsList className="w-full sm:w-auto flex flex-wrap sm:flex-nowrap">
            <TabsTrigger value="generate">Generate Reports</TabsTrigger>
            <TabsTrigger value="templates">Report Templates</TabsTrigger>
            <TabsTrigger value="scheduled">Scheduled Reports</TabsTrigger>
          </TabsList>
          
          <TabsContent value="generate" className="pt-4">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">Report Generation</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 lg:grid-cols-2">
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium leading-none mb-2 block">
                        Report Type
                      </label>
                      <Select defaultValue="performance">
                        <SelectTrigger>
                          <SelectValue placeholder="Select report type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="performance">Performance Report</SelectItem>
                          <SelectItem value="funding">Funding Analysis</SelectItem>
                          <SelectItem value="beneficiary">Beneficiary Report</SelectItem>
                          <SelectItem value="institution">Institution Report</SelectItem>
                          <SelectItem value="outcome">Outcome Assessment</SelectItem>
                          <SelectItem value="budget">Budget Utilization</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium leading-none mb-2 block">
                        Time Period
                      </label>
                      <Select defaultValue="current-quarter">
                        <SelectTrigger>
                          <SelectValue placeholder="Select time period" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="current-month">Current Month</SelectItem>
                          <SelectItem value="current-quarter">Current Quarter</SelectItem>
                          <SelectItem value="current-year">Current Year</SelectItem>
                          <SelectItem value="last-month">Last Month</SelectItem>
                          <SelectItem value="last-quarter">Last Quarter</SelectItem>
                          <SelectItem value="last-year">Last Year</SelectItem>
                          <SelectItem value="custom">Custom Range</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium leading-none mb-2 block">
                        Schemes to Include
                      </label>
                      <Select defaultValue="all">
                        <SelectTrigger>
                          <SelectValue placeholder="Select schemes" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Schemes</SelectItem>
                          <SelectItem value="samagra">Samagra Shiksha</SelectItem>
                          <SelectItem value="mdm">Mid Day Meal</SelectItem>
                          <SelectItem value="rmsa">RMSA</SelectItem>
                          <SelectItem value="pmsss">PMSSS</SelectItem>
                          <SelectItem value="custom">Custom Selection</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium leading-none mb-2 block">
                        Report Format
                      </label>
                      <Select defaultValue="pdf">
                        <SelectTrigger>
                          <SelectValue placeholder="Select format" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pdf">PDF</SelectItem>
                          <SelectItem value="excel">Excel</SelectItem>
                          <SelectItem value="csv">CSV</SelectItem>
                          <SelectItem value="powerbi">PowerBI</SelectItem>
                          <SelectItem value="multiple">Multiple Formats</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="pt-2 flex justify-end gap-2 flex-wrap">
                      <Button variant="outline" className="w-full sm:w-auto">
                        <Calendar className="mr-2 h-4 w-4" />
                        Schedule
                      </Button>
                      <Button className="w-full sm:w-auto">
                        <FileCheck className="mr-2 h-4 w-4" />
                        Generate Now
                      </Button>
                    </div>
                  </div>
                  
                  <div className="bg-muted/30 rounded-lg p-6 flex flex-col items-center justify-center">
                    <PieChart className="h-16 w-16 text-primary mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Report Preview</h3>
                    <p className="text-muted-foreground text-center mb-6">
                      Select report options to generate a preview of your report here. 
                      You'll be able to customize sections before final generation.
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <Button variant="outline" size="sm">
                        <Printer className="mr-2 h-4 w-4" />
                        Print
                      </Button>
                      <Button variant="outline" size="sm">
                        <Share className="mr-2 h-4 w-4" />
                        Share
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="templates" className="pt-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
              <div className="flex gap-2">
                <div className="relative w-full sm:w-64">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search templates..."
                    className="pl-8"
                  />
                </div>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
              <Button className="w-full sm:w-auto">
                <FileText className="mr-2 h-4 w-4" />
                Create New Template
              </Button>
            </div>
            
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {reportTemplates.map((template) => (
                <Card key={template.id} className="overflow-hidden flex flex-col">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-md">{template.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pb-2 flex-1">
                    <p className="text-sm text-muted-foreground mb-4">
                      {template.description}
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Category:</span>
                        <span>{template.category}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Format:</span>
                        <span>{template.format}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Last Generated:</span>
                        <span>{template.lastGenerated}</span>
                      </div>
                    </div>
                  </CardContent>
                  <div className="bg-muted/30 p-4 flex justify-end gap-2 mt-auto">
                    <Button variant="outline" size="sm">Edit</Button>
                    <Button size="sm">Generate</Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="scheduled" className="pt-4">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <CardTitle className="text-lg">Scheduled Reports</CardTitle>
                  </div>
                  <Button className="w-full sm:w-auto">
                    <Calendar className="mr-2 h-4 w-4" />
                    Schedule New Report
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {scheduledReports.map((report) => (
                    <div key={report.id} className="border rounded-lg overflow-hidden">
                      <div className="flex items-center justify-between p-4 border-b">
                        <div>
                          <h3 className="font-medium">{report.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            Frequency: {report.frequency}
                          </p>
                        </div>
                        <Button variant="ghost" size="icon">
                          <ChevronDown className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="p-4 bg-muted/20">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                          <div>
                            <p className="font-medium">Next Generation</p>
                            <p className="text-muted-foreground">{report.nextGeneration}</p>
                          </div>
                          <div>
                            <p className="font-medium">Recipients</p>
                            <p className="text-muted-foreground">{report.recipients}</p>
                          </div>
                          <div>
                            <p className="font-medium">Format</p>
                            <p className="text-muted-foreground">{report.format}</p>
                          </div>
                        </div>
                        <div className="mt-4 flex justify-end gap-2 flex-wrap">
                          <Button variant="outline" size="sm" className="w-full sm:w-auto">Edit Schedule</Button>
                          <Button variant="outline" size="sm" className="w-full sm:w-auto">
                            <Download className="mr-2 h-3 w-3" />
                            Download Last
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
