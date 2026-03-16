
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import {
  BellRing,
  Globe,
  Lock,
  Eye,
  EyeOff,
  Save,
  Shield,
  User,
  Users,
  Cpu,
  Database,
  Settings as SettingsIcon,
  X,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Settings() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
          <p className="text-muted-foreground">
            Manage application preferences and user settings
          </p>
        </div>

        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="appearance">Appearance</TabsTrigger>
            <TabsTrigger value="ai">AI & ML</TabsTrigger>
          </TabsList>
          
          <TabsContent value="profile" className="pt-6">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <User className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">Profile Information</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center gap-6">
                    <Avatar className="h-24 w-24">
                      <AvatarImage src="/placeholder.svg" alt="Profile" />
                      <AvatarFallback>AD</AvatarFallback>
                    </Avatar>
                    <div className="space-y-2">
                      <h3 className="font-semibold">Profile Photo</h3>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">Upload New</Button>
                        <Button variant="outline" size="sm" className="text-muted-foreground">
                          <X className="mr-1 h-3 w-3" />
                          Remove
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">First Name</label>
                        <Input defaultValue="Admin" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Last Name</label>
                        <Input defaultValue="User" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email Address</label>
                      <Input defaultValue="admin@mhrd.gov.in" />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Job Title</label>
                      <Input defaultValue="System Administrator" />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Department</label>
                      <Select defaultValue="it">
                        <SelectTrigger>
                          <SelectValue placeholder="Select department" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="it">Information Technology</SelectItem>
                          <SelectItem value="admin">Administration</SelectItem>
                          <SelectItem value="finance">Finance</SelectItem>
                          <SelectItem value="policy">Policy & Planning</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="pt-4 flex justify-end gap-2">
                      <Button variant="outline">Cancel</Button>
                      <Button>
                        <Save className="mr-2 h-4 w-4" />
                        Save Changes
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="account" className="pt-6">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <Lock className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">Account Security</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold">Change Password</h3>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Current Password</label>
                        <div className="relative">
                          <Input type="password" defaultValue="********" />
                          <button className="absolute right-2 top-2">
                            <Eye className="h-4 w-4 text-muted-foreground" />
                          </button>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium">New Password</label>
                        <div className="relative">
                          <Input type="password" />
                          <button className="absolute right-2 top-2">
                            <EyeOff className="h-4 w-4 text-muted-foreground" />
                          </button>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Confirm New Password</label>
                        <div className="relative">
                          <Input type="password" />
                          <button className="absolute right-2 top-2">
                            <EyeOff className="h-4 w-4 text-muted-foreground" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t pt-6 space-y-4">
                    <h3 className="font-semibold">Two-Factor Authentication</h3>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Enable Two-Factor Authentication</p>
                        <p className="text-sm text-muted-foreground">
                          Add an extra layer of security to your account
                        </p>
                      </div>
                      <Switch defaultChecked={true} />
                    </div>
                  </div>
                  
                  <div className="border-t pt-6 space-y-4">
                    <h3 className="font-semibold">Login Sessions</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">Current Session</p>
                          <p className="text-sm text-muted-foreground">
                            New Delhi, India • Chrome on Windows
                          </p>
                        </div>
                        <Badge>Active Now</Badge>
                      </div>
                      
                      <div className="flex justify-between items-center p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">Mobile Device</p>
                          <p className="text-sm text-muted-foreground">
                            New Delhi, India • MHRD App on Android
                          </p>
                        </div>
                        <Button variant="outline" size="sm">Logout</Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4 flex justify-end gap-2">
                    <Button variant="outline">Cancel</Button>
                    <Button>
                      <Save className="mr-2 h-4 w-4" />
                      Save Changes
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="notifications" className="pt-6">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <BellRing className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">Notification Preferences</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold">System Notifications</h3>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">Anomaly Alerts</p>
                          <p className="text-sm text-muted-foreground">
                            Get notified when anomalies are detected in data
                          </p>
                        </div>
                        <Switch defaultChecked={true} />
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">Budget Utilization Updates</p>
                          <p className="text-sm text-muted-foreground">
                            Receive updates on scheme budget utilization
                          </p>
                        </div>
                        <Switch defaultChecked={true} />
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">New Reports</p>
                          <p className="text-sm text-muted-foreground">
                            Be notified when new reports are generated
                          </p>
                        </div>
                        <Switch defaultChecked={true} />
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">System Maintenance</p>
                          <p className="text-sm text-muted-foreground">
                            Get alerts about system maintenance and downtime
                          </p>
                        </div>
                        <Switch defaultChecked={false} />
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t pt-6 space-y-4">
                    <h3 className="font-semibold">Notification Channels</h3>
                    
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Email Address</label>
                          <Input defaultValue="admin@mhrd.gov.in" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Mobile Number</label>
                          <Input defaultValue="+91 98765 43210" />
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">Email Notifications</p>
                          <p className="text-sm text-muted-foreground">
                            Send notifications to my email
                          </p>
                        </div>
                        <Switch defaultChecked={true} />
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">SMS Notifications</p>
                          <p className="text-sm text-muted-foreground">
                            Send critical alerts via SMS
                          </p>
                        </div>
                        <Switch defaultChecked={false} />
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">In-App Notifications</p>
                          <p className="text-sm text-muted-foreground">
                            Show notifications within the dashboard
                          </p>
                        </div>
                        <Switch defaultChecked={true} />
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4 flex justify-end gap-2">
                    <Button variant="outline">Reset to Default</Button>
                    <Button>
                      <Save className="mr-2 h-4 w-4" />
                      Save Preferences
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="appearance" className="pt-6">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">Interface Settings</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold">Language & Region</h3>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Language</label>
                        <Select defaultValue="english">
                          <SelectTrigger>
                            <SelectValue placeholder="Select language" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="english">English</SelectItem>
                            <SelectItem value="hindi">Hindi</SelectItem>
                            <SelectItem value="tamil">Tamil</SelectItem>
                            <SelectItem value="telugu">Telugu</SelectItem>
                            <SelectItem value="bengali">Bengali</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Time Zone</label>
                        <Select defaultValue="ist">
                          <SelectTrigger>
                            <SelectValue placeholder="Select time zone" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ist">Indian Standard Time (IST)</SelectItem>
                            <SelectItem value="utc">UTC</SelectItem>
                            <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
                            <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t pt-6 space-y-4">
                    <h3 className="font-semibold">Appearance</h3>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Theme</label>
                        <Select defaultValue="light">
                          <SelectTrigger>
                            <SelectValue placeholder="Select theme" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="light">Light</SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="system">System Default</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between mb-1">
                          <label className="text-sm font-medium">Density</label>
                          <span className="text-sm text-muted-foreground">Compact</span>
                        </div>
                        <Slider defaultValue={[75]} max={100} step={25} />
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">Enable Animations</p>
                          <p className="text-sm text-muted-foreground">
                            Show animations throughout the interface
                          </p>
                        </div>
                        <Switch defaultChecked={true} />
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t pt-6 space-y-4">
                    <h3 className="font-semibold">Dashboard Layout</h3>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Default Page</label>
                        <Select defaultValue="dashboard">
                          <SelectTrigger>
                            <SelectValue placeholder="Select default page" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="dashboard">Dashboard</SelectItem>
                            <SelectItem value="schemes">Schemes</SelectItem>
                            <SelectItem value="analytics">Analytics</SelectItem>
                            <SelectItem value="reports">Reports</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">Collapse Sidebar by Default</p>
                          <p className="text-sm text-muted-foreground">
                            Start with a collapsed sidebar for more space
                          </p>
                        </div>
                        <Switch defaultChecked={false} />
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4 flex justify-end gap-2">
                    <Button variant="outline">Reset to Default</Button>
                    <Button>
                      <Save className="mr-2 h-4 w-4" />
                      Save Preferences
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="ai" className="pt-6">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <Cpu className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">AI & Machine Learning Settings</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold">ML Model Configuration</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">Enable Predictions</p>
                          <p className="text-sm text-muted-foreground">
                            Show ML-powered predictions in dashboards
                          </p>
                        </div>
                        <Switch defaultChecked={true} />
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">Anomaly Detection</p>
                          <p className="text-sm text-muted-foreground">
                            Identify unusual patterns in scheme data
                          </p>
                        </div>
                        <Switch defaultChecked={true} />
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">Auto-Generate Insights</p>
                          <p className="text-sm text-muted-foreground">
                            Generate insights from dashboard data automatically
                          </p>
                        </div>
                        <Switch defaultChecked={true} />
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t pt-6 space-y-4">
                    <h3 className="font-semibold">Prediction Settings</h3>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Prediction Horizon</label>
                        <Select defaultValue="6m">
                          <SelectTrigger>
                            <SelectValue placeholder="Select prediction horizon" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="3m">3 Months</SelectItem>
                            <SelectItem value="6m">6 Months</SelectItem>
                            <SelectItem value="1y">1 Year</SelectItem>
                            <SelectItem value="2y">2 Years</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between mb-1">
                          <label className="text-sm font-medium">Confidence Threshold</label>
                          <span className="text-sm text-muted-foreground">75%</span>
                        </div>
                        <Slider defaultValue={[75]} max={100} step={5} />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Model Update Frequency</label>
                        <Select defaultValue="weekly">
                          <SelectTrigger>
                            <SelectValue placeholder="Select update frequency" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="daily">Daily</SelectItem>
                            <SelectItem value="weekly">Weekly</SelectItem>
                            <SelectItem value="monthly">Monthly</SelectItem>
                            <SelectItem value="quarterly">Quarterly</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t pt-6 space-y-4">
                    <h3 className="font-semibold">Data Management</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">Use Historical Data</p>
                          <p className="text-sm text-muted-foreground">
                            Leverage historical data for model training
                          </p>
                        </div>
                        <Switch defaultChecked={true} />
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">Data Anonymization</p>
                          <p className="text-sm text-muted-foreground">
                            Anonymize sensitive data in ML processing
                          </p>
                        </div>
                        <Switch defaultChecked={true} />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Data Retention Period</label>
                        <Select defaultValue="5y">
                          <SelectTrigger>
                            <SelectValue placeholder="Select data retention" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1y">1 Year</SelectItem>
                            <SelectItem value="3y">3 Years</SelectItem>
                            <SelectItem value="5y">5 Years</SelectItem>
                            <SelectItem value="10y">10 Years</SelectItem>
                            <SelectItem value="indefinite">Indefinite</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4 flex justify-end gap-2">
                    <Button variant="outline">
                      <Database className="mr-2 h-4 w-4" />
                      Retrain Models
                    </Button>
                    <Button>
                      <Save className="mr-2 h-4 w-4" />
                      Save Settings
                    </Button>
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
