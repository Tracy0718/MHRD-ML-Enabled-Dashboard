
import DashboardLayout from "@/components/layout/DashboardLayout";
import { trendsData, predictedValues } from "@/data/mockData";
import LineChart from "@/components/charts/LineChart";
import BarChart from "@/components/charts/BarChart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  TrendingUp, 
  AlertTriangle, 
  Lightbulb,
  Brain
} from "lucide-react";

export default function Predictions() {
  // Combine historical and predicted data
  const combinedEnrollmentData = [
    ...trendsData.enrollment.map(item => ({
      ...item,
      isPrediction: false
    })),
    ...predictedValues.enrollment.map(item => ({
      ...item,
      isPrediction: true
    }))
  ];

  const combinedDropoutData = [
    ...trendsData.dropoutRates.map(item => ({
      ...item,
      isPrediction: false
    })),
    ...predictedValues.dropoutRates.map(item => ({
      ...item,
      isPrediction: true
    }))
  ];

  const combinedBudgetData = [
    ...trendsData.budgetAllocation.map(item => ({
      year: item.year,
      budget: item.education,
      percentage: item.percentage,
      isPrediction: false
    })),
    ...predictedValues.budgetRequirement.map(item => ({
      year: item.year,
      budget: item.education,
      percentage: item.percentage,
      isPrediction: true
    }))
  ];

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">ML Predictions</h1>
          <p className="text-muted-foreground">
            Machine learning-based predictions for educational metrics
          </p>
        </div>

        {/* ML Model Info Card */}
        <Card className="bg-gradient-to-br from-mhrd-blue-50 to-transparent border-mhrd-blue-100">
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2">
              <Brain className="h-5 w-5 text-mhrd-blue" />
              <CardTitle className="text-lg">Model Information</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-3">
              <div>
                <h3 className="font-semibold">Models Used</h3>
                <ul className="mt-1 space-y-1 text-sm">
                  <li className="flex items-center gap-1">
                    <Badge variant="outline">ARIMA</Badge>
                    <span className="text-muted-foreground">Time series forecasting</span>
                  </li>
                  <li className="flex items-center gap-1">
                    <Badge variant="outline">Random Forest</Badge>
                    <span className="text-muted-foreground">Classification & regression</span>
                  </li>
                  <li className="flex items-center gap-1">
                    <Badge variant="outline">XGBoost</Badge>
                    <span className="text-muted-foreground">Gradient boosting</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold">Data Sources</h3>
                <ul className="mt-1 space-y-1 text-sm">
                  <li>• Historical MHRD scheme data (2019-2024)</li>
                  <li>• Census and demographic information</li>
                  <li>• Economic indicators from Ministry of Finance</li>
                  <li>• School/college registration data</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold">Accuracy Metrics</h3>
                <ul className="mt-1 space-y-1 text-sm">
                  <li>• MAPE: 3.2% for enrollment predictions</li>
                  <li>• R²: 0.92 for dropout predictions</li>
                  <li>• MAE: 0.85% for budget projections</li>
                  <li>• Last updated: April 10, 2025</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Prediction Tabs */}
        <Tabs defaultValue="enrollment" className="w-full">
          <TabsList>
            <TabsTrigger value="enrollment">Enrollment Predictions</TabsTrigger>
            <TabsTrigger value="dropout">Dropout Predictions</TabsTrigger>
            <TabsTrigger value="budget">Budget Projections</TabsTrigger>
          </TabsList>

          {/* Enrollment Predictions Tab */}
          <TabsContent value="enrollment" className="pt-4">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <LineChart
                title="Enrollment Rate Projections"
                data={combinedEnrollmentData}
                xAxisDataKey="year"
                lines={[
                  { dataKey: "primary", name: "Primary", color: "#34A853" },
                  { dataKey: "secondary", name: "Secondary", color: "#1A73E8" },
                  { dataKey: "higher", name: "Higher", color: "#FBBC05" }
                ]}
                height={400}
                description="ML-based projections for enrollment rates (2025-2027)"
                tooltipFormatter={(value, name) => `${value.toFixed(1)}%`}
                showPredictionLine={true}
              />
              
              <Card>
                <CardHeader>
                  <CardTitle>Enrollment Predictions Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold flex items-center gap-1">
                        <TrendingUp className="h-4 w-4 text-mhrd-green" />
                        Key Projections
                      </h3>
                      <ul className="mt-2 space-y-1 text-sm">
                        <li>• Primary education enrollment projected to reach 95.8% by 2027</li>
                        <li>• Secondary education expected to grow at 2.1% annually</li>
                        <li>• Higher education enrollment acceleration with 4.3% annual growth</li>
                        <li>• Gender parity projected to reach 0.98 by 2027</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold flex items-center gap-1">
                        <Lightbulb className="h-4 w-4 text-mhrd-blue" />
                        Recommendations
                      </h3>
                      <ul className="mt-2 space-y-1 text-sm">
                        <li>• Intensify secondary education transition programs</li>
                        <li>• Increase scholarship allocation for higher education by 15%</li>
                        <li>• Focus on aspirational districts with targeted enrollment drives</li>
                        <li>• Strengthen distance learning infrastructure for remote areas</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold flex items-center gap-1">
                        <AlertTriangle className="h-4 w-4 text-mhrd-yellow" />
                        Risk Factors
                      </h3>
                      <ul className="mt-2 space-y-1 text-sm">
                        <li>• Economic downturns may impact secondary enrollment projections</li>
                        <li>• Rural infrastructure limitations could slow growth in remote areas</li>
                        <li>• Teacher availability constraints in certain regions</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Dropout Predictions Tab */}
          <TabsContent value="dropout" className="pt-4">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <LineChart
                title="Dropout Rate Projections"
                data={combinedDropoutData}
                xAxisDataKey="year"
                lines={[
                  { dataKey: "primary", name: "Primary", color: "#34A853" },
                  { dataKey: "secondary", name: "Secondary", color: "#D14747" },
                  { dataKey: "higher", name: "Higher", color: "#FBBC05" }
                ]}
                height={400}
                description="ML-based projections for dropout rates (2025-2027)"
                tooltipFormatter={(value, name) => `${value.toFixed(1)}%`}
                showPredictionLine={true}
              />
              
              <Card>
                <CardHeader>
                  <CardTitle>Dropout Predictions Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold flex items-center gap-1">
                        <TrendingUp className="h-4 w-4 text-mhrd-green" />
                        Key Projections
                      </h3>
                      <ul className="mt-2 space-y-1 text-sm">
                        <li>• Primary dropout rates projected to decrease to 2.3% by 2027</li>
                        <li>• Secondary dropout rates expected to improve by 0.5% annually</li>
                        <li>• Higher education retention expected to strengthen</li>
                        <li>• Gender gap in dropout rates projected to narrow further</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold flex items-center gap-1">
                        <Lightbulb className="h-4 w-4 text-mhrd-blue" />
                        Recommendations
                      </h3>
                      <ul className="mt-2 space-y-1 text-sm">
                        <li>• Strengthen early warning systems for at-risk students</li>
                        <li>• Enhance secondary school mid-day meal program coverage</li>
                        <li>• Implement targeted interventions in high-dropout districts</li>
                        <li>• Expand vocational integration in secondary education</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold flex items-center gap-1">
                        <AlertTriangle className="h-4 w-4 text-mhrd-yellow" />
                        Risk Factors
                      </h3>
                      <ul className="mt-2 space-y-1 text-sm">
                        <li>• Economic pressures may increase dropout risks in certain regions</li>
                        <li>• Migration patterns could impact continuous education</li>
                        <li>• Quality perception issues in government schools</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Budget Projections Tab */}
          <TabsContent value="budget" className="pt-4">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <BarChart
                title="Education Budget Projections"
                data={combinedBudgetData}
                xAxisDataKey="year"
                bars={[
                  { dataKey: "budget", name: "Budget (₹)", color: "#1A73E8" }
                ]}
                height={400}
                description="ML-based projections for education budget (2025-2027)"
                tooltipFormatter={(value, name) => `₹${(value / 10000000).toFixed(2)} Cr`}
              />
              
              <Card>
                <CardHeader>
                  <CardTitle>Budget Projections Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold flex items-center gap-1">
                        <TrendingUp className="h-4 w-4 text-mhrd-green" />
                        Key Projections
                      </h3>
                      <ul className="mt-2 space-y-1 text-sm">
                        <li>• Education budget projected to reach ₹1.28 lakh crore by 2027</li>
                        <li>• Percentage of GDP allocated to education to reach 4.3% by 2027</li>
                        <li>• School education to maintain ~68% share of total education budget</li>
                        <li>• Higher education budget share projected to increase to 21%</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold flex items-center gap-1">
                        <Lightbulb className="h-4 w-4 text-mhrd-blue" />
                        Recommendations
                      </h3>
                      <ul className="mt-2 space-y-1 text-sm">
                        <li>• Increase capital expenditure allocation for infrastructure</li>
                        <li>• Enhance budget utilization monitoring mechanisms</li>
                        <li>• Implement outcome-based budgeting for key schemes</li>
                        <li>• Allocate additional resources to digital education infrastructure</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold flex items-center gap-1">
                        <AlertTriangle className="h-4 w-4 text-mhrd-yellow" />
                        Risk Factors
                      </h3>
                      <ul className="mt-2 space-y-1 text-sm">
                        <li>• Fiscal constraints may limit actual budget allocations</li>
                        <li>• Budget utilization efficiency issues in certain states</li>
                        <li>• Competing priorities from other developmental sectors</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-6">
              <LineChart
                title="Education Budget as % of GDP Projections"
                data={combinedBudgetData}
                xAxisDataKey="year"
                lines={[
                  { dataKey: "percentage", name: "% of GDP", color: "#00A3A1" }
                ]}
                height={300}
                description="ML-based projections for education budget as percentage of GDP"
                tooltipFormatter={(value, name) => `${value.toFixed(1)}%`}
                showPredictionLine={true}
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
