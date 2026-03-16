
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import {
  BookOpen,
  HelpCircle,
  Mail,
  MessageCircle,
  Phone,
  Search,
  Video,
  FileText,
  GraduationCap,
  Cpu,
  Shield
} from "lucide-react";

// FAQ data
const faqItems = [
  {
    question: "How do I interpret the ML-powered predictions?",
    answer: "ML-powered predictions are generated using historical data and advanced machine learning algorithms. They provide forecasts for key metrics such as enrollment rates, dropout rates, and budget utilization. These predictions are displayed with confidence intervals and should be used as guidance for decision-making, not as definitive outcomes. For detailed methodology, visit the Documentation section."
  },
  {
    question: "Can I export dashboard data to external formats?",
    answer: "Yes, most data visualizations and reports in the dashboard can be exported to various formats including PDF, Excel, CSV, and PowerBI. Look for the export or download button near each visualization or use the Reports section to generate comprehensive exportable reports."
  },
  {
    question: "How often is the dashboard data updated?",
    answer: "The dashboard data is updated in real-time for most metrics. Some aggregated analytics may have a refresh cycle of up to 24 hours. The last update timestamp is visible at the top of the Dashboard page. Historical data and ML models are refreshed on a weekly basis or when significant new data becomes available."
  },
  {
    question: "How do I set up automatic report generation?",
    answer: "Navigate to the Reports section and select the 'Scheduled Reports' tab. Click on 'Schedule New Report', choose your report template, configure the frequency (daily, weekly, monthly), select recipients, and choose delivery methods (email, download). Once configured, reports will be automatically generated and distributed according to your schedule."
  },
  {
    question: "What should I do if I notice anomalies in the data?",
    answer: "The system automatically flags potential anomalies in the Anomalies section. If you notice additional anomalies, you can report them by clicking on the specific data point and selecting 'Flag as Anomaly'. Include a brief description of why you believe it's anomalous. The data team will investigate and respond to your flag within 48 hours."
  },
  {
    question: "How can I customize my dashboard view?",
    answer: "Go to Settings > Appearance to customize your dashboard experience. You can adjust the layout, select your preferred theme (light/dark), set display density, choose your default landing page, and configure which metrics appear on your personal dashboard. These settings are user-specific and will be preserved across sessions."
  }
];

// Documentation categories
const documentationCategories = [
  {
    id: "getting-started",
    title: "Getting Started",
    icon: <BookOpen className="h-4 w-4" />,
    documents: [
      { id: 1, title: "Dashboard Overview", type: "Guide" },
      { id: 2, title: "Navigation Basics", type: "Tutorial" },
      { id: 3, title: "User Roles and Permissions", type: "Reference" }
    ]
  },
  {
    id: "data-analysis",
    title: "Data Analysis",
    icon: <FileText className="h-4 w-4" />,
    documents: [
      { id: 4, title: "Understanding Analytics Metrics", type: "Guide" },
      { id: 5, title: "Generating Custom Reports", type: "Tutorial" },
      { id: 6, title: "Data Export Options", type: "Reference" }
    ]
  },
  {
    id: "ml-features",
    title: "ML Features",
    icon: <Cpu className="h-4 w-4" />,
    documents: [
      { id: 7, title: "Prediction Models Explained", type: "Guide" },
      { id: 8, title: "Interpreting Anomaly Alerts", type: "Tutorial" },
      { id: 9, title: "ML Model Accuracy Metrics", type: "Reference" }
    ]
  },
  {
    id: "administration",
    title: "Administration",
    icon: <Shield className="h-4 w-4" />,
    documents: [
      { id: 10, title: "User Management", type: "Guide" },
      { id: 11, title: "System Configuration", type: "Tutorial" },
      { id: 12, title: "Security Best Practices", type: "Reference" }
    ]
  }
];



export default function Help() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Help & Support</h1>
          <p className="text-muted-foreground">
            Documentation and assistance for using the MHRD dashboard
          </p>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Search for help topics, guides, and documentation..."
            className="pl-10 h-12 text-base"
          />
        </div>

        <Tabs defaultValue="faq" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="faq">Frequently Asked Questions</TabsTrigger>
            <TabsTrigger value="documentation">Documentation</TabsTrigger>
            <TabsTrigger value="training">Training Resources</TabsTrigger>
            <TabsTrigger value="contact">Contact Support</TabsTrigger>
          </TabsList>
          
          <TabsContent value="faq" className="pt-6">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <HelpCircle className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">Frequently Asked Questions</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <Accordion type="single" collapsible className="w-full">
                  {faqItems.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left font-medium">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
                
                <div className="mt-6 text-center">
                  <p className="text-muted-foreground mb-2">Can't find what you're looking for?</p>
                  <Button>
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Contact Support
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="documentation" className="pt-6">
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
              {documentationCategories.map(category => (
                <Card key={category.id}>
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      {category.icon}
                      <CardTitle className="text-lg">{category.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {category.documents.map(doc => (
                        <li key={doc.id} className="flex justify-between items-center border-b pb-2 last:border-0 last:pb-0">
                          <div className="flex items-center gap-2">
                            <FileText className="h-4 w-4 text-muted-foreground" />
                            <span>{doc.title}</span>
                          </div>
                          <span className="text-xs bg-muted px-2 py-1 rounded">
                            {doc.type}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <Button variant="link" className="mt-2 p-0">
                      View all {category.title.toLowerCase()} docs...
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="training" className="pt-6">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">Training Resources</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
                    <div className="border rounded-lg overflow-hidden">
                      <div className="aspect-video bg-muted flex items-center justify-center">
                        <Video className="h-10 w-10 text-muted-foreground" />
                      </div>
                      <div className="p-4">
                        <h3 className="font-medium mb-1">Dashboard Basics</h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          Learn the fundamentals of navigating and using the MHRD dashboard
                        </p>
                        <div className="flex justify-between text-xs">
                          <span>Duration: 12 min</span>
                          <span>Beginner</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border rounded-lg overflow-hidden">
                      <div className="aspect-video bg-muted flex items-center justify-center">
                        <Video className="h-10 w-10 text-muted-foreground" />
                      </div>
                      <div className="p-4">
                        <h3 className="font-medium mb-1">Advanced Analytics</h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          Master the analytics features and custom reporting tools
                        </p>
                        <div className="flex justify-between text-xs">
                          <span>Duration: 25 min</span>
                          <span>Intermediate</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border rounded-lg overflow-hidden">
                      <div className="aspect-video bg-muted flex items-center justify-center">
                        <Video className="h-10 w-10 text-muted-foreground" />
                      </div>
                      <div className="p-4">
                        <h3 className="font-medium mb-1">ML Prediction Models</h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          Understand and leverage machine learning predictions
                        </p>
                        <div className="flex justify-between text-xs">
                          <span>Duration: 18 min</span>
                          <span>Advanced</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t pt-6">
                    <h3 className="font-semibold mb-4">Upcoming Training Webinars</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-4 border rounded-lg">
                        <div>
                          <h4 className="font-medium">Dashboard 2.0 Features Overview</h4>
                          <p className="text-sm text-muted-foreground">April 25, 2025 • 11:00 AM IST</p>
                        </div>
                        <Button>Register</Button>
                      </div>
                      
                      <div className="flex justify-between items-center p-4 border rounded-lg">
                        <div>
                          <h4 className="font-medium">Advanced Report Generation</h4>
                          <p className="text-sm text-muted-foreground">May 10, 2025 • 2:00 PM IST</p>
                        </div>
                        <Button>Register</Button>
                      </div>
                      
                      <div className="flex justify-between items-center p-4 border rounded-lg">
                        <div>
                          <h4 className="font-medium">Machine Learning for Education Policy</h4>
                          <p className="text-sm text-muted-foreground">May 18, 2025 • 10:00 AM IST</p>
                        </div>
                        <Button>Register</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="contact" className="pt-6">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">Contact Support Team</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h3 className="font-semibold mb-4">Submit a Support Request</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Subject</label>
                        <Input placeholder="Brief description of your issue" />
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium mb-2 block">Category</label>
                        <Select defaultValue="technical">
                          <SelectTrigger>
                            <SelectValue placeholder="Select issue category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="technical">Technical Issue</SelectItem>
                            <SelectItem value="data">Data Question</SelectItem>
                            <SelectItem value="account">Account Management</SelectItem>
                            <SelectItem value="feature">Feature Request</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium mb-2 block">Priority</label>
                        <Select defaultValue="medium">
                          <SelectTrigger>
                            <SelectValue placeholder="Select priority level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="low">Low</SelectItem>
                            <SelectItem value="medium">Medium</SelectItem>
                            <SelectItem value="high">High</SelectItem>
                            <SelectItem value="critical">Critical</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium mb-2 block">Description</label>
                        <textarea 
                          className="w-full border rounded-md p-2 min-h-[120px] focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="Please provide detailed information about your issue or question"
                        />
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium mb-2 block">Attachments (Optional)</label>
                        <div className="border-dashed border-2 rounded-md p-4 text-center cursor-pointer hover:bg-muted/30">
                          <p className="text-sm text-muted-foreground">
                            Drop files here or click to upload
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">
                            Supports PNG, JPG, PDF up to 10MB
                          </p>
                        </div>
                      </div>
                      
                      <Button className="w-full">Submit Support Request</Button>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold mb-4">Contact Information</h3>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <Phone className="h-5 w-5 text-primary mt-0.5" />
                          <div>
                            <p className="font-medium">Technical Support Helpdesk</p>
                            <p className="text-muted-foreground">+91-11-2345-6789</p>
                            <p className="text-xs text-muted-foreground">
                              Available: Mon-Fri, 9:00 AM - 6:00 PM IST
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <Mail className="h-5 w-5 text-primary mt-0.5" />
                          <div>
                            <p className="font-medium">Email Support</p>
                            <p className="text-muted-foreground">support@mhrd-dashboard.gov.in</p>
                            <p className="text-xs text-muted-foreground">
                              Response time: Within 24 hours
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border-t pt-6">
                      <h3 className="font-semibold mb-4">FAQ & Self-Help Resources</h3>
                      <div className="space-y-3">
                        <Button variant="link" className="p-0 h-auto flex items-center gap-2 text-primary">
                          <BookOpen className="h-4 w-4" />
                          <span>View User Manual</span>
                        </Button>
                        <Button variant="link" className="p-0 h-auto flex items-center gap-2 text-primary">
                          <FileText className="h-4 w-4" />
                          <span>Technical Documentation</span>
                        </Button>
                        <Button variant="link" className="p-0 h-auto flex items-center gap-2 text-primary">
                          <Video className="h-4 w-4" />
                          <span>Video Tutorials</span>
                        </Button>
                      </div>
                    </div>
                    
                    <div className="bg-muted/30 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Support Response Times</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Critical Issues:</span>
                          <span>Within 2 hours</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">High Priority:</span>
                          <span>4-8 hours</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Medium Priority:</span>
                          <span>24 hours</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Low Priority:</span>
                          <span>48 hours</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}

