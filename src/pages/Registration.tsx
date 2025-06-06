
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Users, ShoppingCart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Logo from '../assets/logo.png'; // adjust the path as needed

const Registration = () => {
  const [userType, setUserType] = useState<"buyer" | "seller" | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    company: "",
    phone: "",
    address: "",
    businessLicense: "",
    description: ""
  });
  const { toast } = useToast();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Registration Submitted!",
      description: "Your account is under verification. You'll receive an email once approved.",
    });
  };

  if (!userType) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
        <div className="max-w-4xl w-full">
          <div className="text-center mb-8">
            <Link to="/" className="inline-block">
              <img src={Logo} width="500" height="300" />
              {/* <h1 className="text-3xl font-bold text-blue-600">TradeBridge</h1>
              <p className="text-sm text-gray-500">B2B Marketplace</p> */}
            </Link>
            <h2 className="mt-6 text-3xl font-bold text-gray-900">Join Mahi</h2>
            <p className="mt-2 text-lg text-gray-600">Choose your account type to get started</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card 
              className="cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              onClick={() => setUserType("buyer")}
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShoppingCart className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">I'm a Buyer</h3>
                <p className="text-gray-600 mb-6">
                  Looking to source products for your business? Find verified suppliers and request quotes.
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <p>✓ Browse verified suppliers</p>
                  <p>✓ Request bulk quotes</p>
                  <p>✓ Compare prices</p>
                  <p>✓ Secure transactions</p>
                </div>
                <Button className="mt-6 w-full">Register as Buyer</Button>
              </CardContent>
            </Card>

            <Card 
              className="cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              onClick={() => setUserType("seller")}
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">I'm a Seller</h3>
                <p className="text-gray-600 mb-6">
                  Ready to showcase your products? Connect with buyers worldwide and grow your business.
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <p>✓ List unlimited products</p>
                  <p>✓ Receive qualified leads</p>
                  <p>✓ Manage quotations</p>
                  <p>✓ Get verified status</p>
                </div>
                <Button className="mt-6 w-full">Register as Seller</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <Link to="/" className="inline-block">
            <img src={Logo} width="500" height="300" />
            {/* <h1 className="text-3xl font-bold text-blue-600">TradeBridge</h1>
            <p className="text-sm text-gray-500">B2B Marketplace</p> */}
          </Link>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            {userType === "buyer" ? "Buyer" : "Seller"} Registration
          </h2>
          <Badge className={userType === "buyer" ? "bg-blue-500" : "bg-green-500"}>
            {userType === "buyer" ? "Buyer Account" : "Seller Account"}
          </Badge>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Create Your Account</CardTitle>
            <p className="text-sm text-gray-600">
              All accounts are subject to verification before activation
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleRegister} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="password">Password *</Label>
                  <Input
                    id="password"
                    type="password"
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    placeholder="Create a password"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="confirmPassword">Confirm Password *</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                    placeholder="Confirm your password"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="company">Company Name *</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    placeholder="Enter company name"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="Enter phone number"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="address">Business Address *</Label>
                <Textarea
                  id="address"
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                  placeholder="Enter complete business address"
                  required
                />
              </div>

              <div>
                <Label htmlFor="businessLicense">Business License Number *</Label>
                <Input
                  id="businessLicense"
                  value={formData.businessLicense}
                  onChange={(e) => setFormData({...formData, businessLicense: e.target.value})}
                  placeholder="Enter business license/registration number"
                  required
                />
              </div>

              <div>
                <Label htmlFor="description">
                  {userType === "buyer" ? "Business Requirements" : "Business Description"} *
                </Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  placeholder={
                    userType === "buyer" 
                      ? "Describe what products you're looking to source..."
                      : "Describe your business, products you sell, manufacturing capabilities..."
                  }
                  rows={4}
                  required
                />
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-medium text-yellow-800 mb-2">Verification Process</h4>
                <p className="text-sm text-yellow-700">
                  Your account will be reviewed by our team within 24-48 hours. We may contact you for additional 
                  documentation to verify your business credentials.
                </p>
              </div>

              <Button type="submit" className="w-full" size="lg">
                Submit Registration
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <Link 
                  to={userType === "buyer" ? "/buyer-login" : "/seller-login"} 
                  className="text-blue-600 hover:text-blue-500 font-medium"
                >
                  Sign in here
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Registration;
