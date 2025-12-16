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
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="fixed w-full top-0 z-50 bg-slate-950/50 backdrop-blur-2xl border-b border-slate-700/30 transition-all duration-300">
        <div className="container mx-auto px-4 py-5 flex items-center justify-between">
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
          <div className="lg:hidden mt-6 pb-4 border-t border-slate-700/50">
            <nav className="flex flex-col space-y-4 mt-4 px-4">
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
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="mb-10">
              <Badge className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-200 border border-blue-400/30 backdrop-blur-xl px-6 py-2.5 font-light tracking-wide inline-flex items-center">
                <Sparkles className="h-4 w-4 mr-2 inline" />
                Trusted by Thousands of Travelers Across Egypt
              </Badge>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              Create Unforgettable Travel
              <span className="block bg-gradient-to-r from-blue-300 via-purple-300 to-blue-200 bg-clip-text text-transparent mt-4">
                Memories in Egypt
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-10 font-light leading-relaxed">
              Discover Egypt's most extraordinary destinations with Exceller. Premium travel experiences across beaches,
              Nile cruises, desert adventures, and historic tours.
            </p>

            <div className="bg-slate-800/50 backdrop-blur-xl rounded-3xl p-6 sm:p-8 max-w-xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <Input
                    type="text"
                    placeholder="Where do you want to explore in Egypt?"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 h-12 sm:h-14 rounded-xl text-white bg-slate-700/30 border border-slate-600/50 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  />
                </div>
                <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-xl px-6 sm:px-8 py-3 sm:py-4 flex items-center justify-center">
                  Explore
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="relative z-20 py-16 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 border-b border-slate-700/30 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
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

      {/* Featured Trips */}
      <section id="destinations" className="py-32 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-24">
            <Badge className="mb-6 bg-blue-500/20 text-blue-300 border border-blue-400/30 font-light tracking-wide uppercase px-4 py-2">
              Featured Destinations
            </Badge>
            <h2 className="text-6xl lg:text-7xl font-serif font-bold mb-8 text-white tracking-tight">
              Handpicked Travel Experiences
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
              Discover our most popular destinations, carefully selected and crafted by our travel experts to provide you
              with extraordinary experiences and lasting memories across beautiful Egypt.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredTrips.map((trip, index) => (
              <Card
                key={trip.id}
                className="overflow-hidden bg-slate-800/60 border border-slate-700/50 hover:border-blue-400/50 shadow-2xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 rounded-3xl hover:-translate-y-2"
              >
                <div className="relative overflow-hidden h-80">
                  <img
                    src={trip.image || "/placeholder.svg?height=400&width=400"}
                    alt={trip.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

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
                  <CardDescription className="mb-6 text-base leading-relaxed text-slate-400">{trip.description}</CardDescription>

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
            ))}
          </div>
        </div>
      </section>
{/* Services Section */}
<section id="services" className="py-32 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 px-4 sm:px-6 lg:px-8">
  <div className="container mx-auto text-center mb-24">
    <Badge className="mb-6 bg-purple-500/20 text-purple-300 border border-purple-400/30 font-light tracking-wide uppercase px-4 py-2">
      Our Services
    </Badge>
    <h2 className="text-6xl lg:text-7xl font-serif font-bold text-white tracking-tight">
      Premium Travel Services
    </h2>
    <p className="text-lg text-slate-300 max-w-3xl mx-auto mt-4 leading-relaxed font-light">
      We provide exceptional travel services from personalized itineraries to 24/7 support, ensuring a seamless journey across Egypt.
    </p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
    {[
      { icon: Globe, title: "Custom Itineraries", description: "Tailored travel plans for unique experiences." },
      { icon: Shield, title: "Safe & Secure", description: "Trusted partners and safe transportation options." },
      { icon: Award, title: "Top Guides", description: "Expert guides with local knowledge and insights." },
      { icon: Clock, title: "Flexible Scheduling", description: "Trips designed to fit your schedule perfectly." },
      { icon: Plane, title: "Flight & Transfers", description: "Hassle-free airport transfers and domestic flights." },
      { icon: Users, title: "Group & Family Tours", description: "Special arrangements for families and groups." },
    ].map((service, idx) => (
      <Card
        key={idx}
        className="bg-slate-800/60 border border-slate-700/50 rounded-3xl shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 p-6 flex flex-col items-center text-center"
      >
        <service.icon className="h-12 w-12 text-blue-400 mb-4" />
        <CardTitle className="text-2xl font-serif text-white mb-2">{service.title}</CardTitle>
        <CardDescription className="text-slate-300">{service.description}</CardDescription>
      </Card>
    ))}
  </div>
</section>

{/* Testimonials Section */}
<section id="reviews" className="py-32 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 px-4 sm:px-6 lg:px-8">
  <div className="container mx-auto text-center mb-24">
    <Badge className="mb-6 bg-blue-500/20 text-blue-300 border border-blue-400/30 font-light tracking-wide uppercase px-4 py-2">
      What Our Travelers Say
    </Badge>
    <h2 className="text-6xl lg:text-7xl font-serif font-bold text-white tracking-tight">
      Traveler Testimonials
    </h2>
    <p className="text-lg text-slate-300 max-w-3xl mx-auto mt-4 leading-relaxed font-light">
      Hear from our happy travelers who explored Egypt with Exceller and created memories to last a lifetime.
    </p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
    {testimonials.map((testimonial, idx) => (
      <Card
        key={idx}
        className="bg-slate-800/60 border border-slate-700/50 rounded-3xl shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 p-6 flex flex-col justify-between"
      >
        <CardDescription className="text-slate-300 mb-6">"{testimonial.text}"</CardDescription>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-white font-semibold">{testimonial.name}</p>
            <p className="text-slate-400 text-sm">{testimonial.location}</p>
            <p className="text-blue-400 text-sm mt-1 font-medium">{testimonial.trip}</p>
          </div>
          <div className="flex items-center">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
            ))}
          </div>
        </div>
      </Card>
    ))}
  </div>
</section>

{/* Contact Section */}
<section id="contact" className="py-32 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 px-4 sm:px-6 lg:px-8">
  <div className="container mx-auto max-w-4xl text-center mb-16">
    <Badge className="mb-6 bg-purple-500/20 text-purple-300 border border-purple-400/30 font-light tracking-wide uppercase px-4 py-2">
      Get in Touch
    </Badge>
    <h2 className="text-6xl lg:text-7xl font-serif font-bold text-white tracking-tight">
      Contact Our Team
    </h2>
    <p className="text-lg text-slate-300 max-w-3xl mx-auto mt-4 leading-relaxed font-light">
      Have questions or want to plan a custom trip? Reach out to our travel experts and we'll help you design the perfect Egyptian adventure.
    </p>
  </div>

  <div className="bg-slate-800/60 border border-slate-700/50 rounded-3xl p-8 sm:p-12 max-w-3xl mx-auto shadow-2xl">
    <form className="grid grid-cols-1 gap-6">
      <Input type="text" placeholder="Your Name" className="bg-slate-700/30 text-white border-slate-600/50" />
      <Input type="email" placeholder="Your Email" className="bg-slate-700/30 text-white border-slate-600/50" />
      <Textarea placeholder="Your Message" className="bg-slate-700/30 text-white border-slate-600/50" rows={6} />
      <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-full px-8 py-3 transition-all duration-300 shadow-lg hover:shadow-purple-500/50">
        Send Message
      </Button>
    </form>

    <div className="flex flex-col sm:flex-row justify-between mt-10 text-slate-300 text-sm font-light gap-6 sm:gap-0">
      <div className="flex items-center space-x-2">
        <Phone className="h-4 w-4 text-blue-400" />
        <span>+20 101 503 6170</span>
      </div>
      <div className="flex items-center space-x-2">
        <Mail className="h-4 w-4 text-blue-400" />
        <span>info@excelor.com</span>
      </div>
      <div className="flex items-center space-x-2">
        <Globe className="h-4 w-4 text-blue-400" />
        <span>www.excelor.com</span>
      </div>
    </div>
  </div>
</section>

{/* Footer */}
<footer className="bg-slate-950 border-t border-slate-700/30 py-16">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 pb-12 border-b border-slate-700/30">
      {/* Brand */}
      <div>
        <div className="flex items-center space-x-3 mb-6">
          <div className="bg-gradient-to-br from-blue-400 to-purple-600 p-2 rounded-lg">
            <Plane className="h-5 w-5 text-white" />
          </div>
          <span className="text-lg font-serif font-bold text-white">Exceller</span>
        </div>
        <p className="text-sm text-slate-400 leading-relaxed">
          Creating unforgettable travel experiences across Egypt.
        </p>
      </div>

      {/* Company */}
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

      {/* Support */}
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

      {/* Connect */}
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

    {/* Bottom links */}
    <div className="flex flex-col md:flex-row justify-between items-center">
      <p className="text-sm text-slate-500 font-light mb-4 md:mb-0">
        © 2025 Exceller. All rights reserved. | Travel with confidence.
      </p>
      <div className="flex space-x-6">
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

      {/* باقي الأقسام */}
      {/* Services, Testimonials, Contact, Footer */}
      {/* باقي الكود يبقى كما هو مع إضافات overflow-x-hidden للسلامة على جميع الشاشات */}
    </div>
  )
}
