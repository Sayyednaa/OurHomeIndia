/**
 * OurHomeIndia - Properties Dataset
 * Scope: Premium & Verified Residential and Commercial Properties Across Delhi NCR & India
 * contact@ourhomeindia.com
 */

const PROPERTIES_DATA = [
  {
    id: "prop-101",
    title: "Luxury 3 BHK Builder Floor with Terrace Lounge",
    tagline: "Spacious independent floor with dedicated stilt parking & modular kitchen",
    purpose: "buy",
    propertyType: "Builder Floor",
    price: 8500000,
    priceDisplay: "₹85 Lakhs",
    pricePerSqFt: "₹5,480/sq.ft",
    locality: "South Delhi / Sarita Vihar Link",
    city: "New Delhi",
    address: "Block C, Near Kalindi Enclave, South Delhi, New Delhi 110044",
    bedrooms: 3,
    bathrooms: 3,
    balconies: 2,
    areaSqFt: 1550,
    furnishing: "Semi-Furnished",
    parking: "1 Covered Car Parking",
    floor: "2nd of 4 Floors",
    facing: "North-East",
    constructionStatus: "Ready to Move",
    ageOfProperty: "Brand New (0-1 Years)",
    isFeatured: true,
    isVerified: true,
    badge: "Verified Listing",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "An elegant 3 BHK designer builder floor offering the ideal balance of tranquility and prime metropolitan connectivity. Featuring high-ceiling living areas, Italian vitrified tiles, false ceiling with LED ambient lights, and a German-fitted modular kitchen with chimney. The home enjoys ample natural sunlight from its North-East facing balcony and private terrace lounge access.",
    amenities: [
      "24x7 Water Supply",
      "Covered Stilt Parking",
      "Automatic Passenger Lift",
      "Modular Kitchen with Chimney",
      "Spacious Private Balconies",
      "Gated Security & CCTV",
      "Close to Delhi Metro Station",
      "Clear Freehold Registry"
    ],
    agent: {
      name: "Mohit Verma",
      role: "Senior Property Advisor",
      phone: "+91 98100 45678",
      email: "contact@ourhomeindia.com"
    }
  },
  {
    id: "prop-102",
    title: "Premium 2 BHK High-Rise Apartment with City Views",
    tagline: "Modern gated community flat near commercial and IT hubs",
    purpose: "rent",
    propertyType: "Apartment",
    price: 24000,
    priceDisplay: "₹24,000 / month",
    securityDeposit: "₹48,000 (2 Months)",
    locality: "Noida Expressway / Sector 137",
    city: "Noida (NCR)",
    address: "Tower 4, Green View Heights, Sector 137, Noida 201305",
    bedrooms: 2,
    bathrooms: 2,
    balconies: 2,
    areaSqFt: 1100,
    furnishing: "Semi-Furnished",
    parking: "1 Reserved Basement Parking",
    floor: "8th of 22 Floors",
    facing: "East (Park Facing)",
    constructionStatus: "Ready to Move",
    ageOfProperty: "2 Years",
    isFeatured: true,
    isVerified: true,
    badge: "Hot Rental",
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Sun-drenched, well-ventilated 2-bedroom rental home in a secure high-rise residential complex. Enjoy clubhouse access, swimming pool, gymnasium, 24/7 power backup, and immediate metro station accessibility.",
    amenities: [
      "Clubhouse & Gym",
      "Swimming Pool & Tennis Court",
      "100% Power Backup",
      "24/7 Multi-Tier Security",
      "High-speed Elevators",
      "Children's Play Area"
    ],
    agent: {
      name: "Sunil Sharma",
      role: "Leasing Specialist",
      phone: "+91 98111 87654",
      email: "contact@ourhomeindia.com"
    }
  },
  {
    id: "prop-103",
    title: "Exclusive 4 BHK Luxury Duplex Villa / Kothi",
    tagline: "Freehold corner plot villa with private landscaped garden & rooftop deck",
    purpose: "buy",
    propertyType: "Independent House",
    price: 24500000,
    priceDisplay: "₹2.45 Crore",
    pricePerSqFt: "₹7,650/sq.ft",
    locality: "Greater Kailash Enclave",
    city: "New Delhi",
    address: "Plot 18, Block E, Near Ring Road, New Delhi 110048",
    bedrooms: 4,
    bathrooms: 5,
    balconies: 3,
    areaSqFt: 3200,
    furnishing: "Unfurnished",
    parking: "2 Dedicated Covered Car Parkings",
    floor: "Ground + 2 Floors",
    facing: "North-East (Corner)",
    constructionStatus: "Ready to Move",
    ageOfProperty: "New Construction",
    isFeatured: true,
    isVerified: true,
    badge: "Exclusive Villa",
    images: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "An extraordinary freehold luxury villa crafted for elevated living. Features double-height living foyer, imported marble flooring, expansive en-suite bedrooms with walk-in closets, private lawn, and a rooftop entertainment lounge with panoramic skyline views.",
    amenities: [
      "Freehold Title & Clear Registry",
      "Private Landscaped Lawn",
      "Dual Covered Garage",
      "Rooftop Gazebo Lounge",
      "Solar Water Heating System",
      "Smart Home Automation Ready",
      "Proximity to Top International Schools"
    ],
    agent: {
      name: "Mohit Verma",
      role: "Senior Property Advisor",
      phone: "+91 98100 45678",
      email: "contact@ourhomeindia.com"
    }
  },
  {
    id: "prop-104",
    title: "Prime Commercial Showroom / Retail Shop",
    tagline: "High footfall commercial frontage on main arterial avenue",
    purpose: "buy",
    propertyType: "Commercial",
    price: 9500000,
    priceDisplay: "₹95 Lakhs",
    pricePerSqFt: "₹15,830/sq.ft",
    locality: "Okhla Phase-2 / Mathura Road",
    city: "New Delhi",
    address: "Commercial Arcade, Main Mathura Road, New Delhi 110020",
    bedrooms: 0,
    bathrooms: 1,
    balconies: 0,
    areaSqFt: 600,
    furnishing: "Unfurnished",
    parking: "Front Visitor Parking",
    floor: "Ground Floor",
    facing: "Main Boulevard Facing",
    constructionStatus: "Ready to Move",
    ageOfProperty: "1 Year",
    isFeatured: true,
    isVerified: true,
    badge: "High ROI Commercial",
    images: [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "High-yield ground floor commercial retail showroom boasting maximum visibility, wide glass frontage, dedicated commercial three-phase electrical supply, and constant vehicular & pedestrian traffic. Perfect for bank branches, jewelry showrooms, lifestyle retail, or health clinics.",
    amenities: [
      "Heavy Pedestrian & Car Footfall",
      "Sanctioned Commercial Electric Load",
      "Full Glass Double Frontage",
      "Fire Safety Certified",
      "Immediate High Rental Yield Potential"
    ],
    agent: {
      name: "Rajesh Rawat",
      role: "Commercial Property Lead",
      phone: "+91 98105 12345",
      email: "contact@ourhomeindia.com"
    }
  },
  {
    id: "prop-105",
    title: "Modern 1 BHK Studio Apartment for Rent",
    tagline: "Fully furnished cozy studio flat close to Metro & Cyber City",
    purpose: "rent",
    propertyType: "Apartment",
    price: 18000,
    priceDisplay: "₹18,000 / month",
    securityDeposit: "₹36,000",
    locality: "DLF Phase 3 / Cyber City",
    city: "Gurugram (NCR)",
    address: "Block U, Near Moulsari Avenue Metro, Gurugram 122002",
    bedrooms: 1,
    bathrooms: 1,
    balconies: 1,
    areaSqFt: 580,
    furnishing: "Furnished",
    parking: "Dedicated Two-Wheeler & Visitor Spot",
    floor: "3rd of 5 Floors",
    facing: "North",
    constructionStatus: "Ready to Move",
    ageOfProperty: "1 Year",
    isFeatured: false,
    isVerified: true,
    badge: "Executive Studio",
    images: [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Fully-furnished studio apartment equipped with split air conditioner, queen-size bed with mattress, refrigerator, microwave, modular kitchenette, geyser, and high-speed fiber internet. Walkable distance to metro and major IT corporate centers.",
    amenities: [
      "Furnished with AC, Bed & Appliances",
      "High-speed Fiber WiFi Connection",
      "24/7 Security Guard & CCTV",
      "Lift & Power Backup",
      "Walking Distance to Metro"
    ],
    agent: {
      name: "Sunil Sharma",
      role: "Leasing Specialist",
      phone: "+91 98111 87654",
      email: "contact@ourhomeindia.com"
    }
  },
  {
    id: "prop-106",
    title: "Affordable 2 BHK Builder Floor with Bank Loan Approval",
    tagline: "Quality family home with lift & stilt parking with up to 80% loan assistance",
    purpose: "buy",
    price: 3600000,
    priceDisplay: "₹36 Lakhs",
    pricePerSqFt: "₹4,235/sq.ft",
    propertyType: "Builder Floor",
    locality: "Jaitpur Extension / South Delhi Enclave",
    city: "New Delhi",
    address: "Block B, Jaitpur Extn, South Delhi, New Delhi 110044",
    bedrooms: 2,
    bathrooms: 2,
    balconies: 1,
    areaSqFt: 850,
    furnishing: "Semi-Furnished",
    parking: "1 Reserved Car Parking",
    floor: "3rd of 5 Floors",
    facing: "North",
    constructionStatus: "Ready to Move",
    ageOfProperty: "Under 1 Year",
    isFeatured: true,
    isVerified: true,
    badge: "High Value",
    images: [
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "An attractively priced 2 BHK builder floor loaded with lift facility, dedicated car parking on ground level, false ceiling with fancy light fixtures, designer wall paint, and modular cabinetry. Eligible for home loan facilitation with nationalized & private banks through OurHomeIndia advisory.",
    amenities: [
      "Automatic Lift",
      "Stilt Car Parking",
      "Bank Loan Pre-Approved",
      "Semi-Modular Kitchen",
      "Separate Electric & Water Meters",
      "Peaceful Residential Locality"
    ],
    agent: {
      name: "Mohit Verma",
      role: "Senior Property Advisor",
      phone: "+91 98100 45678",
      email: "contact@ourhomeindia.com"
    }
  },
  {
    id: "prop-107",
    title: "Spacious 3 BHK Full Floor Apartment for Rent",
    tagline: "Large family home with natural cross-ventilation and attached bathrooms",
    purpose: "rent",
    propertyType: "Builder Floor",
    price: 32000,
    priceDisplay: "₹32,000 / month",
    securityDeposit: "₹64,000",
    locality: "Jasola Vihar / Apollo Belt",
    city: "New Delhi",
    address: "Pocket 2, Jasola Vihar, Near Metro Station, New Delhi 110025",
    bedrooms: 3,
    bathrooms: 3,
    balconies: 2,
    areaSqFt: 1600,
    furnishing: "Semi-Furnished",
    parking: "1 Reserved Car + Bike Parking",
    floor: "1st of 4 Floors",
    facing: "East Facing",
    constructionStatus: "Ready to Move",
    ageOfProperty: "2 Years",
    isFeatured: false,
    isVerified: true,
    badge: "Family Preferred",
    images: [
      "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Generously sized 3 BHK rental home tailored for joint families or corporate executives seeking extra space and quietude. Features three expansive bedrooms with 3 en-suite washrooms, large dining-cum-drawing hall, wide balconies with morning sunlight, and dedicated security guard.",
    amenities: [
      "Stilt Parking Included",
      "24-Hour Guard on Duty",
      "Near Parks & Play Area",
      "Vitrified Tile Flooring",
      "Separate Utility Area"
    ],
    agent: {
      name: "Sunil Sharma",
      role: "Leasing Specialist",
      phone: "+91 98111 87654",
      email: "contact@ourhomeindia.com"
    }
  },
  {
    id: "prop-108",
    title: "Grade-A Commercial Office Floor Space",
    tagline: "Open-plan corporate hall on 1st floor with great business visibility",
    purpose: "rent",
    propertyType: "Commercial",
    price: 65000,
    priceDisplay: "₹65,000 / month",
    securityDeposit: "₹1,30,000",
    locality: "Sector 62 / IT Corporate Park",
    city: "Noida (NCR)",
    address: "1st Floor, Corporate Hub Towers, Sector 62, Noida 201309",
    bedrooms: 0,
    bathrooms: 2,
    balconies: 1,
    areaSqFt: 1800,
    furnishing: "Unfurnished",
    parking: "Ample Basement & Visitor Parking",
    floor: "1st of 6 Floors",
    facing: "North-East",
    constructionStatus: "Ready to Move",
    ageOfProperty: "3 Years",
    isFeatured: false,
    isVerified: true,
    badge: "Commercial Space",
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Modern column-free corporate floor ideal for IT branch office, consulting firm, diagnostic center, or software agency. Includes separate washrooms, wet pantry space, central air conditioning provision, and prominent exterior branding signage.",
    amenities: [
      "Prominent Facade for Signage",
      "Pantry & Dual Restrooms",
      "High Electrical Load Sanctioned",
      "Metro Station Feeder Stop Right in Front",
      "Fire Safety Certified"
    ],
    agent: {
      name: "Rajesh Rawat",
      role: "Commercial Property Lead",
      phone: "+91 98105 12345",
      email: "contact@ourhomeindia.com"
    }
  }
];

// Helper functions for easy querying
function getAllProperties() {
  return PROPERTIES_DATA;
}

function getPropertyById(id) {
  return PROPERTIES_DATA.find(p => p.id === id) || PROPERTIES_DATA[0];
}

function getFeaturedProperties() {
  return PROPERTIES_DATA.filter(p => p.isFeatured);
}

function getBuyProperties() {
  return PROPERTIES_DATA.filter(p => p.purpose === "buy");
}

function getRentProperties() {
  return PROPERTIES_DATA.filter(p => p.purpose === "rent");
}
