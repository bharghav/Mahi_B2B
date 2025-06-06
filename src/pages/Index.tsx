
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, ShoppingCart, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from '../assets/logo.png'; // adjust the path as needed

const Index = () => {
  const categories = [
    {
      id: 1,
      name: "Crop Production",
      description: "Grains & Cereals, Pulses & Legumes, Oilseeds, Fruits, Vegetables, Spices & Herbs and Plantation Crops",
      image: "https://images.unsplash.com/photo-1733744330650-fa7a26f7541c?w=500&h=300&fit=crop",
      productCount: "2,500+",
      color: "bg-blue-50 border-blue-200"
    },
    {
      id: 2,
      name: "Horticulture",
      description: "gardening, plant production and propagation, arboriculture, landscaping, floriculture",
      image: "https://images.unsplash.com/photo-1709364533365-5989c91bf949?w=500&h=300&fit=crop",
      productCount: "5,200+",
      color: "bg-green-50 border-green-200"
    },
    {
      id: 3,
      name: "Livestock & Animal Husbandry",
      description: "livestock farming, poultry farming, fish farming (aquaculture), and beekeeping (apiculture)",
      image: "https://images.unsplash.com/photo-1623005146739-befba36689cf?w=500&h=300&fit=crop",
      productCount: "3,800+",
      color: "bg-orange-50 border-orange-200"
    },
    // {
    //   id: 4,
    //   name: "Farm Machinery & Equipment",
    //   description: "Fabrics, clothing, and textile manufacturing supplies",
    //   image: "https://images.unsplash.com/photo-1617730873122-64508f39e003?w=500&h=300&fit=crop",
    //   productCount: "1,900+",
    //   color: "bg-purple-50 border-purple-200"
    // },
    {
      id: 5,
      name: "Agrochemicals & Inputs",
      description: "Vehicle components, accessories, and automotive supplies",
      image: "https://plus.unsplash.com/premium_photo-1726743887194-1f541e810221?w=500&h=300&fit=crop",
      productCount: "4,100+",
      color: "bg-red-50 border-red-200"
    },
    {
      id: 6,
      name: "Seeds",
      description: "Nucleus, Breeder, Foundation, and Certified seeds",
      image: "https://plus.unsplash.com/premium_photo-1705146640334-1277c28ddd1a?w=500&h=300&fit=crop",
      productCount: "2,700+",
      color: "bg-yellow-50 border-yellow-200"
    }
  ];

  const stats = [
    { icon: Users, value: "50,000+", label: "Verified Suppliers" },
    { icon: ShoppingCart, value: "1M+", label: "Products Listed" },
    { icon: TrendingUp, value: "$2.5B+", label: "Trade Volume" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-600"><img src={Logo} with="500" height="100" /></h1>
              {/* <span className="ml-2 text-sm text-gray-500">B2B Marketplace</span> */}
            </div>
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

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Connect. Trade. <span className="text-blue-600">Grow.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              The premier B2B marketplace connecting verified buyers and sellers worldwide. 
              Request quotes, compare suppliers, and scale your business with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 py-3">
                Start Sourcing
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Link to="/register">
                <Button variant="outline" size="lg" className="px-8 py-3">
                  Become a Supplier
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Browse by Category</h2>
            <p className="text-xl text-gray-600">Discover products across major industry verticals</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link key={category.id} to={`/category/${category.id}`}>
                <Card className={`${category.color} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer h-full`}>
                  <CardContent className="p-0">
                    <div className="relative">
                      <img 
                        src={category.image} 
                        alt={category.name}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-gray-700">
                        {category.productCount}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{category.name}</h3>
                      <p className="text-gray-600 mb-4">{category.description}</p>
                      <div className="flex items-center text-blue-600 font-semibold">
                        Explore Products
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
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Trading?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already using Mahi to streamline their procurement and sales processes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-8 py-3">
              Request a Quote
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-3 border-white text-white hover:bg-white hover:text-blue-600">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Mahi</h3>
              <p className="text-gray-400">Connecting businesses worldwide through trusted B2B trade.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">For Buyers</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Find Suppliers</li>
                <li>Request Quotes</li>
                <li>Compare Prices</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">For Sellers</h4>
              <ul className="space-y-2 text-gray-400">
                <li>List Products</li>
                <li>Manage Leads</li>
                <li>Get Verified</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>Terms of Service</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Mahi. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
