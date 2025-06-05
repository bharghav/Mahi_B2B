import { useParams, Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";

const CategoryPage = () => {
  const { categoryId } = useParams();
  
  const categoryData: Record<string, any> = {
    "1": {
      name: "Industrial Equipment",
      description: "Heavy machinery, tools, and manufacturing equipment for industrial applications",
      subcategories: [
        {
          id: 11,
          name: "Manufacturing Machinery",
          image: "https://images.unsplash.com/photo-1565087890171-5aa4ec73ac97?w=400&h=250&fit=crop",
          productCount: 850
        },
        {
          id: 12,
          name: "Construction Equipment",
          image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=250&fit=crop",
          productCount: 620
        },
        {
          id: 13,
          name: "Material Handling",
          image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=250&fit=crop",
          productCount: 430
        },
        {
          id: 14,
          name: "Power Tools",
          image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=400&h=250&fit=crop",
          productCount: 320
        },
        {
          id: 15,
          name: "Safety Equipment",
          image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop",
          productCount: 280
        },
        {
          id: 16,
          name: "Testing & Measurement",
          image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop",
          productCount: 190
        }
      ]
    }
  };

  const category = categoryData[categoryId || ""];

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Category Not Found</h1>
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

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{category.name}</span>
          </div>
        </div>
      </div>

      {/* Category Header */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Link to="/">
              <Button variant="outline" size="sm" className="mr-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Categories
              </Button>
            </Link>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{category.name}</h1>
          <p className="text-xl text-gray-600 max-w-3xl">{category.description}</p>
        </div>
      </section>

      {/* Subcategories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse Subcategories</h2>
            <p className="text-lg text-gray-600">Find specific products within {category.name.toLowerCase()}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {category.subcategories.map((subcategory: any) => (
              <Link key={subcategory.id} to={`/subcategory/${subcategory.id}`}>
                <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer h-full">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img 
                        src={subcategory.image} 
                        alt={subcategory.name}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-gray-700">
                        {subcategory.productCount} products
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{subcategory.name}</h3>
                      <div className="flex items-center text-blue-600 font-semibold">
                        View Products
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Can't Find What You're Looking For?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Post a buying request and let verified suppliers reach out to you with their best offers.
          </p>
          <Button size="lg" variant="secondary" className="px-8 py-3">
            Post Buying Request
          </Button>
        </div>
      </section>
    </div>
  );
};

export default CategoryPage;
