
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, Users, ShoppingCart, DollarSign, Bell, Eye, CheckCircle, Clock } from "lucide-react";

const SellerDashboard = () => {
  const [stats] = useState({
    totalLeads: 156,
    activeQuotes: 23,
    totalRevenue: 2450000,
    conversionRate: 18.5
  });

  const [leads] = useState([
    {
      id: 1,
      buyerName: "Tech Manufacturing Corp",
      product: "CNC Milling Machine",
      quantity: "5 units",
      budget: "$75,000 - $125,000",
      status: "pending",
      date: "2024-01-15",
      urgent: true
    },
    {
      id: 2,
      buyerName: "Industrial Solutions Ltd",
      product: "Hydraulic Press",
      quantity: "2 units",
      budget: "$70,000 - $90,000",
      status: "quoted",
      date: "2024-01-14",
      urgent: false
    },
    {
      id: 3,
      buyerName: "Precision Parts Inc",
      product: "3D Printer - Metal",
      quantity: "1 unit",
      budget: "$80,000 - $120,000",
      status: "converted",
      date: "2024-01-13",
      urgent: false
    }
  ]);

  const chartData = [
    { month: 'Jan', leads: 45, conversions: 8 },
    { month: 'Feb', leads: 52, conversions: 12 },
    { month: 'Mar', leads: 38, conversions: 7 },
    { month: 'Apr', leads: 61, conversions: 15 },
    { month: 'May', leads: 55, conversions: 11 },
    { month: 'Jun', leads: 67, conversions: 18 }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'quoted': return 'bg-blue-100 text-blue-800';
      case 'converted': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending': return <Clock className="h-4 w-4" />;
      case 'quoted': return <Eye className="h-4 w-4" />;
      case 'converted': return <CheckCircle className="h-4 w-4" />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Seller Dashboard</h1>
              <p className="text-sm text-gray-600">Precision Tech Industries</p>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="relative">
                <Bell className="h-4 w-4 mr-2" />
                Notifications
                <Badge className="absolute -top-2 -right-2 bg-red-500 text-white">3</Badge>
              </Button>
              <Button>Account Settings</Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Leads</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.totalLeads}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-green-100 rounded-lg">
                  <ShoppingCart className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Active Quotes</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.activeQuotes}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-yellow-100 rounded-lg">
                  <DollarSign className="h-6 w-6 text-yellow-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                  <p className="text-2xl font-bold text-gray-900">${stats.totalRevenue.toLocaleString()}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-purple-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Conversion Rate</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.conversionRate}%</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="leads" className="space-y-6">
          <TabsList>
            <TabsTrigger value="leads">Leads Management</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="products">Product Management</TabsTrigger>
          </TabsList>

          <TabsContent value="leads">
            <Card>
              <CardHeader>
                <CardTitle>Recent Leads</CardTitle>
                <p className="text-sm text-gray-600">Manage incoming quote requests from buyers</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {leads.map((lead) => (
                    <div key={lead.id} className="border rounded-lg p-4 hover:bg-gray-50">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-semibold text-gray-900">{lead.buyerName}</h3>
                            {lead.urgent && (
                              <Badge className="bg-red-100 text-red-800">Urgent</Badge>
                            )}
                            <Badge className={getStatusColor(lead.status)}>
                              <div className="flex items-center space-x-1">
                                {getStatusIcon(lead.status)}
                                <span className="capitalize">{lead.status}</span>
                              </div>
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600 mb-1">Product: {lead.product}</p>
                          <p className="text-sm text-gray-600 mb-1">Quantity: {lead.quantity}</p>
                          <p className="text-sm text-gray-600 mb-2">Budget: {lead.budget}</p>
                          <p className="text-xs text-gray-500">Received: {lead.date}</p>
                        </div>
                        <div className="flex space-x-2">
                          {lead.status === 'pending' && (
                            <Button size="sm">Send Quote</Button>
                          )}
                          {lead.status === 'quoted' && (
                            <Button size="sm" variant="outline">Update Quote</Button>
                          )}
                          <Button size="sm" variant="outline">View Details</Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Leads & Conversions</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="leads" fill="#3b82f6" />
                      <Bar dataKey="conversions" fill="#10b981" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Performance Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm font-medium">Response Time</span>
                      <span className="text-sm text-green-600">2.4 hours avg</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm font-medium">Quote Acceptance Rate</span>
                      <span className="text-sm text-green-600">73%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm font-medium">Customer Satisfaction</span>
                      <span className="text-sm text-green-600">4.8/5.0</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm font-medium">Repeat Customers</span>
                      <span className="text-sm text-green-600">34%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="products">
            <Card>
              <CardHeader>
                <CardTitle>Product Management</CardTitle>
                <Button>Add New Product</Button>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Product management interface would go here...</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default SellerDashboard;
