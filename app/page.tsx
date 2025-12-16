"use client"

import { useState } from "react"
import {
  Search,
  MapPin,
  Calendar,
  Users,
  Star,
  Plane,
  Phone,
  Mail,
  Award,
  Shield,
  Clock,
  Globe,
  Menu,
  X,
  ArrowRight,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"

const featuredTrips = [
  {
    id: 1,
    title: "Red Sea Coral Paradise",
    location: "Hurghada & Sharm El-Sheikh",
    duration: "5 days",
    price: 1299,
    originalPrice: 1599,
    rating: 4.9,
    reviews: 342,
    image: "/red-sea-coral-reef-beach.jpg",
    description: "Experience world-class snorkeling and diving with vibrant coral reefs and pristine beaches",
    highlights: ["All-Inclusive Resort", "Diving Lessons", "Beach Activities", "Water Sports"],
    category: "Beach",
  },
  {
    id: 2,
    title: "Nile Cruise Luxury",
    location: "Luxor to Aswan",
    duration: "7 days",
    price: 1899,
    originalPrice: 2299,
    rating: 4.9,
    reviews: 287,
    image: "/nile-river-cruise-sunset.jpg",
    description: "Sail the legendary Nile River with expert Egyptologists and visit ancient temples",
    highlights: ["5-Star Cruise", "Expert Guides", "Temple Tours", "Gourmet Dining"],
    category: "Cultural",
  },
  {
    id: 3,
    title: "Pyramids & Cairo Heritage",
    location: "Cairo & Giza",
    duration: "4 days",
    price: 999,
    originalPrice: 1199,
    rating: 4.8,
    reviews: 451,
    image: "/pyramids-of-giza-cairo.jpg",
    description: "Discover the wonders of ancient Egypt with private tours to iconic historical sites",
    highlights: ["Private Guide", "Pyramid Tours", "Museum Access", "Camel Ride"],
    category: "Historical",
  },
  {
    id: 4,
    title: "White Desert Adventure",
    location: "New Cairo & Bahariya Oasis",
    duration: "3 days",
    price: 799,
    originalPrice: 999,
    rating: 4.7,
    reviews: 198,
    image: "/white-desert-egypt-dunes.jpg",
    description: "Experience the surreal landscape of the White Desert with desert camping and exploration",
    highlights: ["Desert Camping", "4x4 Safari", "Expert Guides", "Star Gazing"],
    category: "Adventure",
  },
  {
    id: 5,
    title: "Aswan Nubian Experience",
    location: "Aswan & Nubia",
    duration: "4 days",
    price: 899,
    originalPrice: 1099,
    rating: 4.6,
    reviews: 176,
    image: "/aswan-nubian-culture-egypt.jpg",
    description: "Immerse yourself in authentic Nubian culture with boat rides and local village visits",
    highlights: ["Felucca Sailing", "Local Villages", "Cultural Tours", "Traditional Meals"],
    category: "Cultural",
  },
  {
    id: 6,
    title: "Alexandria Coastal Escape",
    location: "Alexandria",
    duration: "3 days",
    price: 699,
    originalPrice: 899,
    rating: 4.5,
    reviews: 264,
    image: "/alexandria-egypt-mediterranean-coast.jpg",
    description: "Explore the Mediterranean charm of Alexandria with historical sites and coastal beauty",
    highlights: ["Mediterranean Sea", "Ancient Library", "Coastal Tours", "Local Cuisine"],
    category: "Beach",
  },
]

const testimonials = [
  {
    name: "Ahmed Hassan",
    location: "Cairo, Egypt",
    rating: 5,
    text: "Exceller made my family's vacation unforgettable! The Nile cruise was absolutely perfect. Their team was professional and attentive throughout. Highly recommend!",
    trip: "Nile Cruise Luxury",
  },
  {
    name: "Fatima El-Sayed",
    location: "Alexandria, Egypt",
    rating: 5,
    text: "The Red Sea trip exceeded all my expectations! Fantastic snorkeling, beautiful resort, and amazing service. Best travel company I've used.",
    trip: "Red Sea Coral Paradise",
  },
  {
    name: "Mohammed Karim",
    location: "Giza, Egypt",
    rating: 5,
    text: "The White Desert experience was one of the most memorable moments of my life. Excellent guides, great organization, and truly unforgettable memories.",
    trip: "White Desert Adventure",
  },
]

export default function ProfessionalTravelAgency() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const categories = ["All", "Beach", "Historical", "Cultural", "Adventure"]

  const filteredTrips = featuredTrips.filter((trip) => {
    const matchesSearch =
      trip.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      trip.location.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || trip.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <header className="fixed w-full top-0 z-50 bg-slate-950/50 backdrop-blur-2xl border-b border-slate-700/30 transition-all duration-300">
        <div className="container mx-auto px-4 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 group">
              <div className="bg-gradient-to-br from-blue-400 via-blue-500 to-purple-600 p-2.5 rounded-2xl shadow-2xl transform group-hover:scale-110 group-hover:shadow-blue-500/50 transition-all duration-500">
                <Plane className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-2xl font-serif font-bold bg-gradient-to-r from-blue-300 via-blue-200 to-purple-300 bg-clip-text text-transparent tracking-widest">
                  Excelor
                </span>
                <p className="text-xs text-slate-400 font-light tracking-widest uppercase">
                  Premium Travel Experiences
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-10">
              {["Destinations", "Services", "About Us", "Reviews", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "")}`}
                  className="text-sm font-light text-slate-300 hover:text-blue-300 transition-all duration-300 relative group uppercase tracking-wide"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-500"></span>
                </a>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2 text-sm font-light text-slate-300">
                <Phone className="h-4 w-4 text-blue-400" />
                <span>+20 101 503 6170</span>
              </div>
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-purple-500/50 transition-all duration-300 font-semibold text-white px-6 rounded-full">
                Book Now
              </Button>

              {/* Mobile Menu Button */}
              <button className="lg:hidden text-slate-300" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-6 pb-4 border-t border-slate-700/50 animate-in fade-in slide-in-from-top-4 duration-300">
              <nav className="flex flex-col space-y-4 mt-4">
                {["Destinations", "Services", "About Us", "Reviews", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(" ", "")}`}
                    className="text-sm font-light text-slate-300 hover:text-blue-300 transition-all duration-300 uppercase tracking-wide"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
        {/* Background cinematic elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1.5s" }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center py-32">
          <div className="max-w-5xl mx-auto">
            {/* Premium badge */}
            <div className="mb-10 animate-in fade-in slide-in-from-top-8 duration-700">
              <Badge className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-200 border border-blue-400/30 backdrop-blur-xl px-6 py-2.5 font-light tracking-wide">
                <Sparkles className="h-4 w-4 mr-2 inline" />
                Trusted by Thousands of Travelers Across Egypt
              </Badge>
            </div>

            {/* Hero headline */}
            <h1
              className="text-7xl lg:text-8xl font-serif font-bold mb-8 leading-tight text-white tracking-tight animate-in fade-in slide-in-from-bottom-8 duration-1000"
              style={{ animationDelay: "200ms" }}
            >
              Create Unforgettable Travel
              <span className="block bg-gradient-to-r from-blue-300 via-purple-300 to-blue-200 bg-clip-text text-transparent mt-4">
                Memories in Egypt
              </span>
            </h1>

            {/* Hero description */}
            <p
              className="text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light mb-12 animate-in fade-in slide-in-from-bottom-8 duration-1000"
              style={{ animationDelay: "400ms" }}
            >
              Discover Egypt's most extraordinary destinations with Exceller. We craft premium, comfortable, and
              affordable travel experiences across the country — from the Red Sea beaches to Nile cruises, desert
              adventures, and historic city tours.
            </p>

            {/* Premium search box */}
            <div
              className="bg-gradient-to-b from-slate-800/60 to-slate-900/40 backdrop-blur-2xl rounded-3xl p-10 max-w-2xl mx-auto shadow-2xl border border-slate-700/50 animate-in fade-in scale-in duration-1000"
              style={{ animationDelay: "600ms" }}
            >
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative group">
                  <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5 group-focus-within:text-blue-400 transition-colors duration-300" />
                  <Input
                    type="text"
                    placeholder="Where do you want to explore in Egypt?"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-14 bg-slate-700/30 border border-slate-600/50 text-white placeholder:text-slate-500 h-16 rounded-2xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                  />
                </div>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-10 rounded-2xl shadow-lg hover:shadow-purple-500/50 transition-all duration-300 h-16"
                >
                  Explore Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Trust indicators - premium layout */}
            <div
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 animate-in fade-in duration-1000"
              style={{ animationDelay: "800ms" }}
            >
              {[
                { icon: Award, text: "Award-Winning Service" },
                { icon: Shield, text: "Fully Insured Trips" },
                { icon: Clock, text: "24/7 Customer Support" },
                { icon: Globe, text: "150+ Local Destinations" },
              ].map((item, idx) => {
                const Icon = item.icon
                return (
                  <div key={idx} className="flex flex-col items-center space-y-3 group">
                    <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full border border-blue-400/30 group-hover:border-blue-400/60 group-hover:bg-blue-500/30 transition-all duration-300">
                      <Icon className="h-6 w-6 text-blue-300 group-hover:text-blue-200 transition-colors duration-300" />
                    </div>
                    <span className="text-sm font-light text-slate-300 text-center leading-relaxed">{item.text}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-20 py-16 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 border-b border-slate-700/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-8 py-2.5 font-semibold transition-all duration-300 uppercase tracking-wider text-sm ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-purple-500/50 hover:shadow-xl"
                    : "bg-slate-800/50 text-slate-300 border border-slate-600/50 hover:border-blue-400/50 hover:text-blue-300 hover:bg-slate-700/50"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section id="destinations" className="py-32 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-24">
            <Badge className="mb-6 bg-blue-500/20 text-blue-300 border border-blue-400/30 font-light tracking-wide uppercase px-4 py-2">
              Featured Destinations
            </Badge>
            <h2 className="text-6xl lg:text-7xl font-serif font-bold mb-8 text-white tracking-tight">
              Handpicked Travel Experiences
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
              Discover our most popular destinations, carefully selected and crafted by our travel experts to provide
              you with extraordinary experiences and lasting memories across beautiful Egypt.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredTrips.map((trip, index) => (
              <div
                key={trip.id}
                className="group animate-in fade-in slide-in-from-bottom-8 duration-700"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <Card className="overflow-hidden bg-slate-800/60 border border-slate-700/50 hover:border-blue-400/50 shadow-2xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 rounded-3xl hover:-translate-y-2">
                  <div className="relative overflow-hidden h-80">
                    <img
                      src={trip.image || "/placeholder.svg?height=400&width=400"}
                      alt={trip.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Badge overlays */}
                    <div className="absolute top-6 left-6">
                      <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg text-xs uppercase tracking-wider">
                        {trip.category}
                      </Badge>
                    </div>
                    <div className="absolute top-6 right-6">
                      <Badge className="bg-white/90 text-slate-900 font-bold shadow-lg text-xs uppercase tracking-wider">
                        Save ${trip.originalPrice - trip.price}
                      </Badge>
                    </div>

                    {/* Rating badge */}
                    <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="flex items-center space-x-2 bg-black/60 backdrop-blur-md px-4 py-2.5 rounded-full border border-white/20">
                        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        <span className="font-bold text-white">{trip.rating}</span>
                        <span className="text-sm text-slate-300">({trip.reviews})</span>
                      </div>
                    </div>
                  </div>

                  <CardHeader className="pb-4 pt-8">
                    <CardTitle className="text-2xl font-serif text-white group-hover:text-blue-300 transition-colors duration-300 leading-tight">
                      {trip.title}
                    </CardTitle>

                    <div className="flex flex-col space-y-3 text-sm text-slate-400 mt-6">
                      <div className="flex items-center space-x-3">
                        <MapPin className="h-5 w-5 text-blue-400 flex-shrink-0" />
                        <span className="font-medium">{trip.location}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Calendar className="h-5 w-5 text-blue-400 flex-shrink-0" />
                        <span className="font-medium">{trip.duration}</span>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0 pb-8">
                    <CardDescription className="mb-6 text-base leading-relaxed text-slate-400">
                      {trip.description}
                    </CardDescription>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {trip.highlights.map((highlight) => (
                        <Badge
                          key={highlight}
                          className="text-xs bg-blue-500/20 text-blue-200 border border-blue-400/30 font-medium rounded-full hover:bg-blue-500/40 transition-all duration-300"
                        >
                          {highlight}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-end justify-between pt-6 border-t border-slate-700/50">
                      <div>
                        <p className="text-xs text-slate-500 mb-1 uppercase tracking-wider">Starting From</p>
                        <div className="flex items-baseline space-x-2">
                          <span className="text-3xl font-bold text-white">${trip.price}</span>
                          <span className="text-lg text-slate-400 line-through">${trip.originalPrice}</span>
                        </div>
                      </div>
                      <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-full px-6 transition-all duration-300 shadow-lg hover:shadow-purple-500/50">
                        Book
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-24 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 border-t border-slate-700"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-in fade-in duration-700">
            <Badge className="mb-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold border-0">
              Our Services
            </Badge>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 font-serif tracking-tight text-white">
              Why Choose Excelor?
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
              We provide comprehensive and premium travel services designed to make your journey seamless, memorable,
              and worry-free from start to finish.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Expert Travel Consultants",
                description:
                  "Our certified travel experts with 10+ years of experience create personalized itineraries tailored to your interests, schedule, and budget.",
                color: "from-blue-500 to-blue-600",
              },
              {
                icon: Shield,
                title: "Complete Travel Protection",
                description:
                  "We offer full travel insurance, 24/7 emergency support, and flexible booking policies to ensure complete peace of mind.",
                color: "from-purple-500 to-purple-600",
              },
              {
                icon: Award,
                title: "Luxury Accommodations",
                description:
                  "Carefully selected 4-star and 5-star hotels, luxury resorts, and boutique stays that offer comfort, style, and exceptional service.",
                color: "from-blue-400 to-blue-500",
              },
            ].map((service, index) => {
              const Icon = service.icon
              return (
                <Card
                  key={index}
                  className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl hover:-translate-y-2 group animate-in fade-in slide-in-from-bottom-4 duration-700"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader className="pb-8 pt-12">
                    <div
                      className={`bg-gradient-to-br ${service.color} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="h-10 w-10 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-serif text-white">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pb-12">
                    <p className="text-slate-300 leading-relaxed font-light text-base">{service.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section
        id="testimonials"
        className="py-32 bg-gradient-to-b from-slate-800 to-slate-900 border-t border-slate-700/30"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-24">
            <Badge className="mb-6 bg-purple-500/20 text-purple-300 border border-purple-400/30 font-light tracking-wide uppercase px-4 py-2">
              What Our Travelers Say
            </Badge>
            <h2 className="text-6xl lg:text-7xl font-serif font-bold mb-8 text-white tracking-tight">
              Unforgettable Journeys, Real Stories
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-slate-800/60 border border-slate-700/50 hover:border-purple-400/50 shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 rounded-2xl hover:-translate-y-2 p-8 animate-in fade-in slide-in-from-bottom-8 duration-700"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center space-x-1 mb-6">
                  {Array(testimonial.rating)
                    .fill(0)
                    .map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                </div>

                <p className="text-slate-300 leading-relaxed mb-8 font-light italic">{`"${testimonial.text}"`}</p>

                <div className="pt-6 border-t border-slate-700/50">
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-slate-400">{testimonial.location}</p>
                  <p className="text-xs text-blue-400 font-medium mt-2 uppercase tracking-wider">{testimonial.trip}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-32 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 border-t border-slate-700/30"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-blue-500/20 text-blue-300 border border-blue-400/30 font-light tracking-wide uppercase px-4 py-2">
                Get in Touch
              </Badge>
              <h2 className="text-6xl lg:text-7xl font-serif font-bold mb-8 text-white tracking-tight">
                Ready for Your Next Adventure?
              </h2>
              <p className="text-lg text-slate-300 font-light">
                Contact our travel experts to plan your perfect Egyptian getaway
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-16">
              <div className="space-y-8">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full border border-blue-400/30">
                      <Phone className="h-5 w-5 text-blue-300" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 uppercase tracking-wider">Phone</p>
                      <p className="text-white font-semibold">+20 101 503 6170</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full border border-blue-400/30">
                      <Mail className="h-5 w-5 text-blue-300" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 uppercase tracking-wider">Email</p>
                      <p className="text-white font-semibold">hello@excelor.com</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full border border-blue-400/30">
                      <MapPin className="h-5 w-5 text-blue-300" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 uppercase tracking-wider">Location</p>
                      <p className="text-white font-semibold">Cairo, Egypt</p>
                    </div>
                  </div>
                </div>
              </div>

              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-white uppercase tracking-wider">Full Name</label>
                  <Input
                    type="text"
                    placeholder="Your name"
                    className="bg-slate-700/30 border border-slate-600/50 text-white placeholder:text-slate-500 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 h-12"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-white uppercase tracking-wider">Email</label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    className="bg-slate-700/30 border border-slate-600/50 text-white placeholder:text-slate-500 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 h-12"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-white uppercase tracking-wider">Message</label>
                  <Textarea
                    placeholder="Tell us about your travel dreams..."
                    className="bg-slate-700/30 border border-slate-600/50 text-white placeholder:text-slate-500 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 min-h-32 resize-none"
                  />
                </div>

                <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 uppercase tracking-wider text-sm">
                  Send Message
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 border-t border-slate-700/30 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 pb-12 border-b border-slate-700/30">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gradient-to-br from-blue-400 to-purple-600 p-2 rounded-lg">
                  <Plane className="h-5 w-5 text-white" />
                </div>
                <span className="text-lg font-serif font-bold text-white">Excelor</span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                Creating unforgettable travel experiences across Egypt.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4 uppercase tracking-wider text-sm">Company</h4>
              <ul className="space-y-3">
                {["About", "Destinations", "Services", "Contact"].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-slate-400 hover:text-blue-300 transition-colors duration-300">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4 uppercase tracking-wider text-sm">Support</h4>
              <ul className="space-y-3">
                {["Help Center", "FAQ", "Booking Policy", "Privacy"].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-slate-400 hover:text-blue-300 transition-colors duration-300">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4 uppercase tracking-wider text-sm">Connect</h4>
              <ul className="space-y-3">
                {["Facebook", "Instagram", "Twitter", "LinkedIn"].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-slate-400 hover:text-blue-300 transition-colors duration-300">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-slate-500 font-light">
              © 2025 Exceller. All rights reserved. | Travel with confidence.
            </p>
            <div className="flex space-x-6 mt-6 md:mt-0">
              {["Privacy Policy", "Terms & Conditions", "Cookie Policy"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-sm text-slate-500 hover:text-slate-300 transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
