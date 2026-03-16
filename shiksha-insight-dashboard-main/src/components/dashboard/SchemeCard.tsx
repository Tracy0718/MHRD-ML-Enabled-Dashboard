
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface SchemeCardProps {
  name: string;
  description: string;
  budget: number;
  budgetUtilized: number;
  beneficiaries: number;
  targetBeneficiaries: number;
  category: string;
}

export default function SchemeCard({
  name,
  description,
  budget,
  budgetUtilized,
  beneficiaries,
  targetBeneficiaries,
  category
}: SchemeCardProps) {
  const budgetPercentage = Math.round((budgetUtilized / budget) * 100);
  const beneficiaryPercentage = Math.round((beneficiaries / targetBeneficiaries) * 100);
  
  const formatCurrency = (amount: number) => {
    return `₹${(amount / 10000000).toFixed(2)} Cr`;
  };
  
  const formatNumber = (num: number) => {
    return num >= 10000000 
      ? `${(num / 10000000).toFixed(2)} Cr` 
      : num >= 100000 
      ? `${(num / 100000).toFixed(2)} L`
      : num.toLocaleString();
  };

  return (
    <Card className="overflow-hidden h-full">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{name}</CardTitle>
          <Badge variant="outline" className="bg-muted">{category}</Badge>
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardHeader>
      <CardContent className="pb-6">
        <div className="space-y-4">
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm font-medium">Budget Utilization</span>
              <span className="text-sm font-medium">{budgetPercentage}%</span>
            </div>
            <Progress value={budgetPercentage} className="h-2" />
            <div className="flex justify-between items-center mt-1">
              <span className="text-xs text-muted-foreground">
                {formatCurrency(budgetUtilized)}
              </span>
              <span className="text-xs text-muted-foreground">
                {formatCurrency(budget)}
              </span>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm font-medium">Beneficiary Coverage</span>
              <span className="text-sm font-medium">{beneficiaryPercentage}%</span>
            </div>
            <Progress value={beneficiaryPercentage} className="h-2" />
            <div className="flex justify-between items-center mt-1">
              <span className="text-xs text-muted-foreground">
                {formatNumber(beneficiaries)} beneficiaries
              </span>
              <span className="text-xs text-muted-foreground">
                Target: {formatNumber(targetBeneficiaries)}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
