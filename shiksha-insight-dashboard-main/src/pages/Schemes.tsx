
import DashboardLayout from "@/components/layout/DashboardLayout";
import SchemeCard from "@/components/dashboard/SchemeCard";
import { schemes } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Search, Filter, SlidersHorizontal } from "lucide-react";
import { useState } from "react";

export default function Schemes() {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredSchemes = schemes.filter((scheme) => {
    // Search filter
    const matchesSearch = searchQuery === "" || 
      scheme.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      scheme.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Category filter
    const matchesCategory = categoryFilter === "all" || 
      scheme.category === categoryFilter;
    
    // Status filter
    const matchesStatus = statusFilter === "all" || 
      scheme.status === statusFilter;
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

  // Extract unique categories and statuses for filter options
  const categories = Array.from(new Set(schemes.map((scheme) => scheme.category)));
  const statuses = Array.from(new Set(schemes.map((scheme) => scheme.status)));

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">MHRD Schemes</h1>
          <p className="text-muted-foreground">
            Comprehensive list of all active and past schemes under MHRD
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex w-full max-w-sm items-center space-x-2">
            <div className="relative flex-1">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search schemes..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>{category}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="h-4 w-4 text-muted-foreground" />
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  {statuses.map((status) => (
                    <SelectItem key={status} value={status}>{status}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => {
                setSearchQuery("");
                setCategoryFilter("all");
                setStatusFilter("all");
              }}
            >
              Reset filters
            </Button>
          </div>
        </div>

        {/* Schemes Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredSchemes.map((scheme) => (
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
          
          {filteredSchemes.length === 0 && (
            <div className="col-span-full py-8 text-center">
              <p className="text-muted-foreground">No schemes found matching your filters.</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setSearchQuery("");
                  setCategoryFilter("all");
                  setStatusFilter("all");
                }}
              >
                Clear filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}
