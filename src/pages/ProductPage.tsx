
import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Star, MapPin, Shield, Award } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ProductPage = () => {
  const { productId } = useParams();
  const { toast } = useToast();
  const [quantity, setQuantity] = useState("");
  const [requirements, setRequirements] = useState("");
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    company: "",
    phone: ""
  });

  const productData: Record<string, any> = {
    "111": {
      name: "CNC Milling Machine - 3 Axis Vertical",
      supplier: {
        name: "Precision Tech Industries",
        location: "Shanghai, China",
        rating: 4.8,
        reviews: 127,
        verified: true,
        yearEstablished: 2010,
        employees: "500-1000",
        id: "supplier-1"
      },
      minOrder: "1 Unit",
      priceRange: "$15,000 - $25,000",
      images: [
        "https://images.unsplash.com/photo-1565087890171-5aa4ec73ac97?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&h=600&fit=crop"
      ],
      features: ["High Precision", "CE Certified", "24/7 Support", "2 Year Warranty"],
      specifications: {
        "Working Table Size": "1200mm x 600mm",
        "Spindle Speed": "8,000 RPM",
        "Power": "15 KW",
        "Repeatability": "±0.005mm",
        "Tool Capacity": "24 Tools",
        "Weight": "4,500 kg"
      },
      description: "Professional grade CNC milling machine designed for precision manufacturing. Suitable for aerospace, automotive, and general machining applications. Features advanced control system with user-friendly interface.",
      certifications: ["CE Certified", "ISO 9001", "RoHS Compliant"],
      leadTime: "30-45 days",
      paymentTerms: "30% deposit, 70% before shipment"
    }
  };

  const product = productData[productId || ""];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <Link to="/">
            <Button>Return Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleQuoteRequest = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Quote Request Submitted!",
      description: "Your quote request has been sent to the supplier. They will contact you within 24 hours.",
    });
    
    // Reset form
    setQuantity("");
    setRequirements("");
    setContactInfo({ name: "", email: "", company: "", phone: "" });
  };

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

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <span>/</span>
            <Link to="/category/1" className="hover:text-blue-600">Industrial Equipment</Link>
            <span>/</span>
            <Link to="/subcategory/11" className="hover:text-blue-600">Manufacturing Machinery</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center mb-6">
          <Link to="/subcategory/11">
            <Button variant="outline" size="sm" className="mr-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Products
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Product Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Product Images */}
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <img 
                    src={product.images[0]} 
                    alt={product.name}
                    className="w-full h-96 object-cover rounded-lg"
                  />
                  <div className="grid grid-cols-3 gap-4">
                    {product.images.slice(1).map((image: string, index: number) => (
                      <img 
                        key={index}
                        src={image} 
                        alt={`${product.name} ${index + 2}`}
                        className="w-full h-24 object-cover rounded-lg cursor-pointer hover:opacity-80"
                      />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Product Info */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">{product.name}</CardTitle>
                <div className="flex flex-wrap gap-2">
                  {product.features.map((feature: string, index: number) => (
                    <Badge key={index} variant="secondary">{feature}</Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Product Description</h3>
                    <p className="text-gray-700">{product.description}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Technical Specifications</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {Object.entries(product.specifications).map(([key, value]) => (
                        <div key={key} className="border-b pb-2">
                          <div className="text-sm text-gray-600">{key}</div>
                          <div className="font-medium">{value as string}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">Certifications</h3>
                    <div className="flex flex-wrap gap-2">
                      {product.certifications.map((cert: string, index: number) => (
                        <Badge key={index} className="bg-green-100 text-green-800">
                          <Award className="h-3 w-3 mr-1" />
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Supplier Info & Quote Form */}
          <div className="space-y-6">
            {/* Supplier Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-green-600" />
                  Supplier Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <Link to={`/seller/${product.supplier.id}`}>
                      <h3 className="font-bold text-lg hover:text-blue-600 cursor-pointer">{product.supplier.name}</h3>
                    </Link>
                    {product.supplier.verified && (
                      <Badge className="bg-green-500 mt-1">Verified Supplier</Badge>
                    )}
                  </div>
                  
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                    <span className="font-medium">{product.supplier.rating}</span>
                    <span className="text-gray-500 ml-1">({product.supplier.reviews} reviews)</span>
                  </div>

                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    {product.supplier.location}
                  </div>

                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="text-gray-600">Established:</span>
                      <span className="ml-2 font-medium">{product.supplier.yearEstablished}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Employees:</span>
                      <span className="ml-2 font-medium">{product.supplier.employees}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pricing & Terms */}
            <Card>
              <CardHeader>
                <CardTitle>Pricing & Terms</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-600">Price Range</div>
                    <div className="text-2xl font-bold text-blue-600">{product.priceRange}</div>
                    <div className="text-sm text-gray-500">Per unit</div>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Min. Order:</span>
                      <span className="font-medium">{product.minOrder}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Lead Time:</span>
                      <span className="font-medium">{product.leadTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Payment:</span>
                      <span className="font-medium">{product.paymentTerms}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quote Request Form */}
            <Card>
              <CardHeader>
                <CardTitle>Request a Quote</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleQuoteRequest} className="space-y-4">
                  <div>
                    <Label htmlFor="quantity">Required Quantity</Label>
                    <Input
                      id="quantity"
                      placeholder="e.g., 5 units"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="requirements">Special Requirements</Label>
                    <Textarea
                      id="requirements"
                      placeholder="Describe any specific requirements, customizations, or questions..."
                      value={requirements}
                      onChange={(e) => setRequirements(e.target.value)}
                      rows={3}
                    />
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium">Contact Information</h4>
                    <Input
                      placeholder="Your Name"
                      value={contactInfo.name}
                      onChange={(e) => setContactInfo({...contactInfo, name: e.target.value})}
                      required
                    />
                    <Input
                      placeholder="Email Address"
                      type="email"
                      value={contactInfo.email}
                      onChange={(e) => setContactInfo({...contactInfo, email: e.target.value})}
                      required
                    />
                    <Input
                      placeholder="Company Name"
                      value={contactInfo.company}
                      onChange={(e) => setContactInfo({...contactInfo, company: e.target.value})}
                      required
                    />
                    <Input
                      placeholder="Phone Number"
                      value={contactInfo.phone}
                      onChange={(e) => setContactInfo({...contactInfo, phone: e.target.value})}
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Send Quote Request
                  </Button>
                  
                  <p className="text-xs text-gray-500 text-center">
                    By submitting, you agree to share your contact information with the supplier
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
