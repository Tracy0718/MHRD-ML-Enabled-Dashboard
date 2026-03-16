
import DashboardLayout from "@/components/layout/DashboardLayout";
import DataTable from "@/components/dashboard/DataTable";
import { anomalies } from "@/data/mockData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  AlertTriangle,
  ArrowUpRight,
  Eye,
  Filter,
  Search,
  SlidersHorizontal
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

export default function Anomalies() {
  const [searchQuery, setSearchQuery] = useState("");
  const [schemeFilter, setSchemeFilter] = useState("all");
  const [severityFilter, setSeverityFilter] = useState("all");

  const filteredAnomalies = anomalies.filter((anomaly) => {
    // Search filter
    const matchesSearch = searchQuery === "" || 
      anomaly.scheme.toLowerCase().includes(searchQuery.toLowerCase()) ||
      anomaly.region.toLowerCase().includes(searchQuery.toLowerCase()) ||
      anomaly.details.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Scheme filter
    const matchesScheme = schemeFilter === "all" || 
      anomaly.scheme === schemeFilter;
    
    // Severity filter
    const matchesSeverity = severityFilter === "all" || 
      anomaly.severity === severityFilter;
    
    return matchesSearch && matchesScheme && matchesSeverity;
  });

  // Extract unique schemes and severities for filter options
  const schemes = Array.from(new Set(anomalies.map((anomaly) => anomaly.scheme)));
  const severities = Array.from(new Set(anomalies.map((anomaly) => anomaly.severity)));

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Anomaly Detection</h1>
          <p className="text-muted-foreground">
            ML-detected anomalies and outliers in scheme performance
          </p>
        </div>

        {/* ML Anomaly Detection Info Card */}
        <Card className="bg-gradient-to-br from-mhrd-yellow-light to-transparent">
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-mhrd-yellow" />
              <CardTitle className="text-lg">About Anomaly Detection</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="font-semibold">Detection Mechanism</h3>
                <p className="mt-1 text-sm">
                  Our system employs multiple machine learning techniques to detect anomalies:
                </p>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>• Statistical outlier detection with Z-scores and IQR</li>
                  <li>• Isolation Forest for identifying rare instances</li>
                  <li>• Time series decomposition to find seasonal anomalies</li>
                  <li>• One-class SVM for novelty detection</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold">Anomaly Classification</h3>
                <p className="mt-1 text-sm">
                  Detected anomalies are classified by severity:
                </p>
                <ul className="mt-2 space-y-1 text-sm">
                  <li className="flex items-center gap-1">
                    <Badge variant="outline" className="bg-mhrd-red-light text-mhrd-red">High</Badge>
                    <span>Requires immediate attention</span>
                  </li>
                  <li className="flex items-center gap-1">
                    <Badge variant="outline" className="bg-mhrd-yellow-light text-mhrd-yellow">Medium</Badge>
                    <span>Needs monitoring and investigation</span>
                  </li>
                  <li className="flex items-center gap-1">
                    <Badge variant="outline" className="bg-mhrd-green-light text-mhrd-green">Low</Badge>
                    <span>Minor deviation worth noting</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Filters */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex w-full max-w-sm items-center space-x-2">
            <div className="relative flex-1">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search anomalies..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <Select value={schemeFilter} onValueChange={setSchemeFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Scheme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Schemes</SelectItem>
                  {schemes.map((scheme) => (
                    <SelectItem key={scheme} value={scheme}>{scheme}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="h-4 w-4 text-muted-foreground" />
              <Select value={severityFilter} onValueChange={setSeverityFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Severity" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Severities</SelectItem>
                  {severities.map((severity) => (
                    <SelectItem key={severity} value={severity}>{severity}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => {
                setSearchQuery("");
                setSchemeFilter("all");
                setSeverityFilter("all");
              }}
            >
              Reset filters
            </Button>
          </div>
        </div>

        {/* Anomalies Table */}
        <DataTable
          title="Detected Anomalies"
          description="ML-detected irregularities requiring attention"
          data={filteredAnomalies}
          columns={[
            { key: "scheme", title: "Scheme" },
            { key: "indicator", title: "Indicator" },
            { key: "region", title: "Region" },
            { 
              key: "expected", 
              title: "Expected", 
              render: (row) => `${row.expected}%`
            },
            { 
              key: "actual", 
              title: "Actual", 
              render: (row) => `${row.actual}%`
            },
            { 
              key: "severity", 
              title: "Severity", 
              render: (row) => (
                <Badge 
                  variant="outline" 
                  className={
                    row.severity === "High" 
                      ? "bg-mhrd-red-light text-mhrd-red" 
                      : row.severity === "Medium" 
                      ? "bg-mhrd-yellow-light text-mhrd-yellow" 
                      : "bg-mhrd-green-light text-mhrd-green"
                  }
                >
                  {row.severity}
                </Badge>
              )
            },
            { 
              key: "actions", 
              title: "Actions", 
              render: () => (
                <Button size="sm" variant="ghost" className="flex gap-1">
                  <Eye className="h-4 w-4" />
                  <span>Details</span>
                </Button>
              )
            }
          ]}
        />
        
        {/* Recommended Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Recommended Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">For High Severity Anomalies</h3>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>• Immediate review of implementation in affected regions</li>
                  <li>• Field visit by monitoring team within 7 days</li>
                  <li>• Detailed report submission to scheme director</li>
                  <li>• Review of resource allocation and utilization</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold">For Medium Severity Anomalies</h3>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>• Request clarification from implementing agencies</li>
                  <li>• Enhance monitoring frequency in affected regions</li>
                  <li>• Comparative analysis with similar regions</li>
                </ul>
              </div>
              
              <div>
                <div className="flex justify-end">
                  <Button className="flex items-center gap-1">
                    Generate Detailed Report
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
