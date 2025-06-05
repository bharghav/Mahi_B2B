
import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Star, MapPin, Shield, Award, Calendar, Users } from "lucide-react";

const SellerProfile = () => {
  const { sellerId } = useParams();

  const sellerData: Record<string, any> = {
    "supplier-1": {
      name: "Precision Tech Industries",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=200&fit=crop",
      coverImage: "https://images.unsplash.com/photo-1565087890171-5aa4ec73ac97?w=1200&h=400&fit=crop",
      location: "Shanghai, China",
      rating: 4.8,
      reviews: 127,
      verified: true,
      yearEstablished: 2010,
      employees: "500-1000",
      description: "Leading manufacturer of precision machinery and industrial equipment with over 14 years of experience. We specialize in CNC machines, industrial automation, and custom manufacturing solutions.",
      certifications: ["ISO 9001:2015", "CE Certified", "RoHS Compliant"],
      businessLicense: "91310000MA1FL5E73X",
      responseTime: "2 hours average",
      exportCountries: 45,
      products: [
        {
          id: 111,
          name: "CNC Milling Machine - 3 Axis Vertical",
          image: "https://images.unsplash.com/photo-1565087890171-5aa4ec73ac97?w=400&h=300&fit=crop",
          priceRange: "$15,000 - $25,000",
          minOrder: "1 Unit"
        },
        {
          id: 117,
          name: "CNC Lathe Machine - High Precision",
          image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=400&h=300&fit=crop",
          priceRange: "$12,000 - $18,000",
          minOrder: "1 Unit"
        },
        {
          id: 118,
          name: "Industrial Grinding Machine",
          image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop",
          priceRange: "$8,000 - $15,000",
          minOrder: "1 Unit"
        },
        {
          id: 119,
          name: "Automated Assembly System",
          image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop",
          priceRange: "$50,000 - $150,000",
          minOrder: "1 System"
        }
      ]
    }
  };

  const seller = sellerData[sellerId || ""];

  if (!seller) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Seller Not Found</h1>
          <Link to="/">
            <Button>Return Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-600">TradeBridge</h1>
              <span className="ml-2 text-sm text-gray-500">B2B Marketplace</span>
            </Link>
            <div className="flex space-x-4">
              <Link to="/seller-login">
                <Button variant="outline">Seller Login</Button>
              </Link>
              <Link to="/buyer-login">
                <Button variant="outline">Buyer Login</Button>
              </Link>
              <Link to="/register">
                <Button>Join Now</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <Button variant="outline" size="sm" onClick={() => window.history.back()}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
        </div>

        {/* Company Cover & Profile */}
        <Card className="mb-8">
          <div className="relative">
            <img 
              src={seller.coverImage} 
              alt="Company cover"
              className="w-full h-64 object-cover rounded-t-lg"
            />
            <div className="absolute bottom-4 left-4">
              <div className="flex items-center space-x-4">
                <img 
                  src={seller.logo} 
                  alt={seller.name}
                  className="w-20 h-20 rounded-lg bg-white p-2"
                />
                <div className="text-white">
                  <h1 className="text-3xl font-bold mb-2">{seller.name}</h1>
                  <div className="flex items-center space-x-4">
                    {seller.verified && (
                      <Badge className="bg-green-500">
                        <Shield className="h-3 w-3 mr-1" />
                        Verified Supplier
                      </Badge>
                    )}
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                      <span className="font-medium">{seller.rating}</span>
                      <span className="ml-1">({seller.reviews} reviews)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Company Info */}
          <div className="lg:col-span-1 space-y-6">
            {/* Company Details */}
            <Card>
              <CardHeader>
                <CardTitle>Company Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-4 w-4 mr-2" />
                  {seller.location}
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Established:</span>
                    <span className="font-medium">{seller.yearEstablished}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Employees:</span>
                    <span className="font-medium">{seller.employees}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Response Time:</span>
                    <span className="font-medium text-green-600">{seller.responseTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Export Countries:</span>
                    <span className="font-medium">{seller.exportCountries}+</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card>
              <CardHeader>
                <CardTitle>Certifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {seller.certifications.map((cert: string, index: number) => (
                    <Badge key={index} variant="outline" className="w-full justify-start">
                      <Award className="h-3 w-3 mr-2" />
                      {cert}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Supplier</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full">Send Inquiry</Button>
                <Button variant="outline" className="w-full">Request Callback</Button>
                <Button variant="outline" className="w-full">View Contact Details</Button>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Products & Description */}
          <div className="lg:col-span-2 space-y-6">
            {/* Company Description */}
            <Card>
              <CardHeader>
                <CardTitle>About {seller.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">{seller.description}</p>
              </CardContent>
            </Card>

            {/* Products */}
            <Card>
              <CardHeader>
                <CardTitle>Our Products</CardTitle>
                <p className="text-sm text-gray-600">{seller.products.length} products available</p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {seller.products.map((product: any) => (
                    <Link key={product.id} to={`/product/${product.id}`}>
                      <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                        <CardContent className="p-0">
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-full h-40 object-cover rounded-t-lg"
                          />
                          <div className="p-4">
                            <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                              {product.name}
                            </h3>
                            <div className="space-y-1">
                              <div className="text-lg font-bold text-blue-600">
                                {product.priceRange}
                              </div>
                              <div className="text-sm text-gray-500">
                                Min. Order: {product.minOrder}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerProfile;
