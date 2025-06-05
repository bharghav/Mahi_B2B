
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Bell, Package, FileText, ShoppingCart } from "lucide-react";

const BuyerDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Mock data for demonstration
  const dashboardStats = {
    totalQuoteRequests: 24,
    pendingQuotes: 8,
    acceptedQuotes: 12,
    totalPurchases: 145000
  };

  const recentQuotes = [
    {
      id: "Q001",
      product: "Industrial Steel Pipes",
      supplier: "MetalWorks Ltd",
      quantity: "500 units",
      requestDate: "2024-06-03",
      status: "pending",
      amount: null
    },
    {
      id: "Q002", 
      product: "Electronic Components",
      supplier: "TechSupply Co",
      quantity: "1000 units",
      requestDate: "2024-06-02",
      status: "received",
      amount: "$15,000"
    },
    {
      id: "Q003",
      product: "Safety Equipment",
      supplier: "SafetyFirst Inc",
      quantity: "200 units", 
      requestDate: "2024-06-01",
      status: "accepted",
      amount: "$8,500"
    }
  ];

  const purchaseHistory = [
    {
      id: "P001",
      product: "Office Furniture",
      supplier: "FurnitureWorld",
      quantity: "50 sets",
      purchaseDate: "2024-05-28",
      amount: "$25,000",
      status: "delivered"
    },
    {
      id: "P002",
      product: "Laptops",
      supplier: "TechGear Ltd",
      quantity: "20 units",
      purchaseDate: "2024-05-25",
      amount: "$30,000",
      status: "in-transit"
    }
  ];

  const notifications = [
    {
      id: 1,
      message: "New quote received from MetalWorks Ltd for Industrial Steel Pipes",
      time: "2 hours ago",
      type: "quote",
      unread: true
    },
    {
      id: 2,
      message: "Your order P001 has been delivered successfully",
      time: "1 day ago", 
      type: "delivery",
      unread: true
    },
    {
      id: 3,
      message: "Quote Q003 has been accepted and payment is due",
      time: "2 days ago",
      type: "payment",
      unread: false
    }
  ];

  const getStatusBadge = (status: string) => {
    const statusColors = {
      pending: "bg-yellow-100 text-yellow-800",
      received: "bg-blue-100 text-blue-800", 
      accepted: "bg-green-100 text-green-800",
      rejected: "bg-red-100 text-red-800",
      delivered: "bg-green-100 text-green-800",
      "in-transit": "bg-blue-100 text-blue-800"
    };
    
    return (
      <Badge className={statusColors[status as keyof typeof statusColors] || "bg-gray-100 text-gray-800"}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <Link to="/" className="text-2xl font-bold text-blue-600">
                TradeBridge
              </Link>
              <span className="text-gray-500">|</span>
              <h1 className="text-xl font-semibold text-gray-900">Buyer Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Bell className="h-4 w-4 mr-2" />
                Notifications ({notifications.filter(n => n.unread).length})
              </Button>
              <Button variant="outline" size="sm">
                Profile
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="quotes">Quote Requests</TabsTrigger>
            <TabsTrigger value="purchases">Purchase History</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Quote Requests</CardTitle>
                  <FileText className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{dashboardStats.totalQuoteRequests}</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Pending Quotes</CardTitle>
                  <Package className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{dashboardStats.pendingQuotes}</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Accepted Quotes</CardTitle>
                  <ShoppingCart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{dashboardStats.acceptedQuotes}</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Purchases</CardTitle>
                  <Package className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">${dashboardStats.totalPurchases.toLocaleString()}</div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Quote Requests</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentQuotes.slice(0, 3).map((quote) => (
                      <div key={quote.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">{quote.product}</p>
                          <p className="text-sm text-gray-500">{quote.supplier}</p>
                        </div>
                        {getStatusBadge(quote.status)}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Notifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {notifications.slice(0, 3).map((notification) => (
                      <div key={notification.id} className="flex items-start space-x-3 p-3 border rounded-lg">
                        <Bell className="h-4 w-4 mt-1 text-blue-500" />
                        <div className="flex-1">
                          <p className={`text-sm ${notification.unread ? 'font-medium' : ''}`}>
                            {notification.message}
                          </p>
                          <p className="text-xs text-gray-500">{notification.time}</p>
                        </div>
                        {notification.unread && (
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Quote Requests Tab */}
          <TabsContent value="quotes">
            <Card>
              <CardHeader>
                <CardTitle>Quote Requests Management</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Quote ID</TableHead>
                      <TableHead>Product</TableHead>
                      <TableHead>Supplier</TableHead>
                      <TableHead>Quantity</TableHead>
                      <TableHead>Request Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentQuotes.map((quote) => (
                      <TableRow key={quote.id}>
                        <TableCell className="font-medium">{quote.id}</TableCell>
                        <TableCell>{quote.product}</TableCell>
                        <TableCell>{quote.supplier}</TableCell>
                        <TableCell>{quote.quantity}</TableCell>
                        <TableCell>{quote.requestDate}</TableCell>
                        <TableCell>{getStatusBadge(quote.status)}</TableCell>
                        <TableCell>{quote.amount || "-"}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">View</Button>
                            {quote.status === "received" && (
                              <Button size="sm">Accept</Button>
                            )}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Purchase History Tab */}
          <TabsContent value="purchases">
            <Card>
              <CardHeader>
                <CardTitle>Purchase History</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Order ID</TableHead>
                      <TableHead>Product</TableHead>
                      <TableHead>Supplier</TableHead>
                      <TableHead>Quantity</TableHead>
                      <TableHead>Purchase Date</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {purchaseHistory.map((purchase) => (
                      <TableRow key={purchase.id}>
                        <TableCell className="font-medium">{purchase.id}</TableCell>
                        <TableCell>{purchase.product}</TableCell>
                        <TableCell>{purchase.supplier}</TableCell>
                        <TableCell>{purchase.quantity}</TableCell>
                        <TableCell>{purchase.purchaseDate}</TableCell>
                        <TableCell>{purchase.amount}</TableCell>
                        <TableCell>{getStatusBadge(purchase.status)}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">View Details</Button>
                            <Button size="sm" variant="outline">Download Invoice</Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Notifications Tab */}
          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle>All Notifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {notifications.map((notification) => (
                    <div key={notification.id} className="flex items-start space-x-3 p-4 border rounded-lg hover:bg-gray-50">
                      <Bell className="h-5 w-5 mt-1 text-blue-500" />
                      <div className="flex-1">
                        <p className={`${notification.unread ? 'font-medium' : ''}`}>
                          {notification.message}
                        </p>
                        <p className="text-sm text-gray-500 mt-1">{notification.time}</p>
                        <div className="flex items-center space-x-2 mt-2">
                          <Badge variant="outline">{notification.type}</Badge>
                          {notification.unread && (
                            <Button size="sm" variant="outline">Mark as Read</Button>
                          )}
                        </div>
                      </div>
                      {notification.unread && (
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default BuyerDashboard;
