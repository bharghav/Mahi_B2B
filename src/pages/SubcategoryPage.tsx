
import { useParams, Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Star, MapPin } from "lucide-react";
import Logo from "../assets/logo.png";

const SubcategoryPage = () => {
  const { subcategoryId } = useParams();
  
  const subcategoryData: Record<string, any> = {
    "11": {
      name: "Manufacturing Machinery",
      categoryName: "Industrial Equipment",
      description: "High-quality manufacturing equipment for various industrial applications",
      products: [
        {
          id: 111,
          name: "CNC Milling Machine - 3 Axis Vertical",
          supplier: "Precision Tech Industries",
          location: "Shanghai, China",
          rating: 4.8,
          reviews: 127,
          minOrder: "1 Unit",
          priceRange: "$15,000 - $25,000",
          image: "https://images.unsplash.com/photo-1565087890171-5aa4ec73ac97?w=400&h=300&fit=crop",
          verified: true,
          features: ["High Precision", "CE Certified", "24/7 Support"]
        },
        {
          id: 112,
          name: "Industrial Lathe Machine 400mm",
          supplier: "MetalCraft Solutions",
          location: "Mumbai, India",
          rating: 4.6,
          reviews: 89,
          minOrder: "1 Unit",
          priceRange: "$8,000 - $12,000",
          image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=400&h=300&fit=crop",
          verified: true,
          features: ["Cast Iron Bed", "Digital Display", "Variable Speed"]
        },
        {
          id: 113,
          name: "Hydraulic Press 100 Ton",
          supplier: "PowerPress Corp",
          location: "Detroit, USA",
          rating: 4.9,
          reviews: 156,
          minOrder: "1 Unit",
          priceRange: "$35,000 - $45,000",
          image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop",
          verified: true,
          features: ["Touch Screen Control", "Safety Guards", "Energy Efficient"]
        },
        {
          id: 114,
          name: "Automated Assembly Line System",
          supplier: "AutoTech Manufacturing",
          location: "Guangzhou, China",
          rating: 4.7,
          reviews: 78,
          minOrder: "1 System",
          priceRange: "$150,000 - $300,000",
          image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop",
          verified: true,
          features: ["Fully Automated", "PLC Control", "Custom Design"]
        },
        {
          id: 115,
          name: "Industrial 3D Printer - Metal",
          supplier: "NextGen Additive",
          location: "Berlin, Germany",
          rating: 4.8,
          reviews: 92,
          minOrder: "1 Unit",
          priceRange: "$80,000 - $120,000",
          image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
          verified: true,
          features: ["Metal Printing", "High Resolution", "Multi-Material"]
        },
        {
          id: 116,
          name: "Packaging Machine - Automatic",
          supplier: "PackTech Solutions",
          location: "Milan, Italy",
          rating: 4.5,
          reviews: 134,
          minOrder: "1 Unit",
          priceRange: "$25,000 - $40,000",
          image: "https://images.unsplash.com/photo-1565087890171-5aa4ec73ac97?w=400&h=300&fit=crop",
          verified: true,
          features: ["High Speed", "Multi-Format", "Easy Maintenance"]
        }
      ]
    }
  };

  const subcategory = subcategoryData[subcategoryId || ""];

  if (!subcategory) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Subcategory Not Found</h1>
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
              <img src={Logo} width="500" height="300" />
              {/* <h1 className="text-2xl font-bold text-blue-600">TradeBridge</h1>
              <span className="ml-2 text-sm text-gray-500">B2B Marketplace</span> */}
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
            <Link to="/category/1" className="hover:text-blue-600">{subcategory.categoryName}</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{subcategory.name}</span>
          </div>
        </div>
      </div>

      {/* Subcategory Header */}
      <section className="bg-white py-8 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Link to="/category/1">
              <Button variant="outline" size="sm" className="mr-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to {subcategory.categoryName}
              </Button>
            </Link>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{subcategory.name}</h1>
          <p className="text-lg text-gray-600">{subcategory.description}</p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Available Products</h2>
            <p className="text-gray-600">{subcategory.products.length} products found</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subcategory.products.map((product: any) => (
              <Link key={product.id} to={`/product/${product.id}`}>
                <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer h-full">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      {product.verified && (
                        <Badge className="absolute top-3 left-3 bg-green-500">
                          Verified Supplier
                        </Badge>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
                      
                      <div className="flex items-center mb-2">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="ml-1 text-sm font-medium text-gray-700">{product.rating}</span>
                          <span className="ml-1 text-sm text-gray-500">({product.reviews})</span>
                        </div>
                      </div>

                      <div className="text-sm text-gray-600 mb-2">{product.supplier}</div>
                      
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <MapPin className="h-4 w-4 mr-1" />
                        {product.location}
                      </div>

                      <div className="mb-3">
                        <div className="text-sm text-gray-600">Price Range:</div>
                        <div className="text-lg font-bold text-blue-600">{product.priceRange}</div>
                        <div className="text-sm text-gray-500">Min. Order: {product.minOrder}</div>
                      </div>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {product.features.slice(0, 2).map((feature: string, index: number) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>

                      <Button className="w-full">
                        Request Quote
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SubcategoryPage;
