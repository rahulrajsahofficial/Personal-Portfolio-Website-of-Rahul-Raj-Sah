import {
  Home,
  User,
  GraduationCap,
  BriefcaseBusiness,
  FolderKanban,
  Brain,
  Mail,
  Download,
  Phone,
  MapPin,
  Building2,
  Shield,
  TrendingUp,
  Calculator,
  Users,
  FileText,
  Award,
  Globe,
  ExternalLink,
} from "lucide-react";

export const searchData = [

/* ==========================================
   NAVIGATION
========================================== */

{
  id: 1,
  title: "Home",
  category: "Navigation",
  icon: Home,
  keywords: ["home","landing","portfolio"],
  type: "section",
  target: "#home",
},

{
  id: 2,
  title: "About",
  category: "Navigation",
  icon: User,
  keywords: ["about","profile","rahul"],
  type: "section",
  target: "#about",
},

{
  id: 3,
  title: "Education",
  category: "Navigation",
  icon: GraduationCap,
  keywords: ["education","college","bba"],
  type: "section",
  target: "#education",
},

{
  id: 4,
  title: "Experience",
  category: "Navigation",
  icon: BriefcaseBusiness,
  keywords: ["experience","career","jobs"],
  type: "section",
  target: "#experience",
},

{
  id: 5,
  title: "Projects",
  category: "Navigation",
  icon: FolderKanban,
  keywords: ["projects","portfolio","work"],
  type: "section",
  target: "#projects",
},

{
  id: 6,
  title: "Skills",
  category: "Navigation",
  icon: Brain,
  keywords: ["skills","knowledge","expertise"],
  type: "section",
  target: "#skills",
},

{
  id: 7,
  title: "Achievements & Certifications",
  category: "Navigation",
  icon: Award,
  keywords: ["certificate","achievement","training"],
  type: "section",
  target: "#certificates",
},

{
  id: 8,
  title: "Contact",
  category: "Navigation",
  icon: Mail,
  keywords: ["contact","email","phone"],
  type: "section",
  target: "#contact",
},

/* ==========================================
   QUICK ACTIONS
========================================== */

{
  id: 20,
  title: "Download Resume",
  category: "Quick Action",
  icon: Download,
  keywords: ["resume","cv","download"],
  type: "download",
},

{
  id: 21,
  title: "Email Rahul",
  category: "Quick Action",
  icon: Mail,
  keywords: ["email","gmail"],
  type: "link",
  url: "mailto:rahulrajsah32@gmail.com",
},

{
  id: 22,
  title: "WhatsApp",
  category: "Quick Action",
  icon: Phone,
  keywords: ["whatsapp","chat"],
  type: "link",
  url: "https://wa.me/9779819755300",
},

{
  id: 23,
  title: "Instagram",
  category: "Social",
  icon: Globe,
  keywords: ["instagram"],
  type: "link",
  url: "https://www.instagram.com/rahulrajsah1998",
},

{
  id: 24,
  title: "Facebook",
  category: "Social",
  icon: Globe,
  keywords: ["facebook"],
  type: "link",
  url: "https://www.facebook.com/share/1D7wuocRjH/",
},

{
  id: 25,
  title: "LinkedIn",
  category: "Social",
  icon: ExternalLink,
  keywords: ["linkedin"],
  type: "link",
  url: "https://www.linkedin.com/in/rahul-raj-sah-947b161bb",
},

{
  id: 26,
  title: "X (Twitter)",
  category: "Social",
  icon: ExternalLink,
  keywords: ["twitter","x"],
  type: "link",
  url: "https://x.com/RahulRajSah",
},

/* ==========================================
   PROFILE
========================================== */

{
  id: 40,
  title: "Current Location",
  category: "Profile",
  icon: MapPin,
  keywords: [
    "location",
    "nepal",
    "global",
    "relocation"
  ],
  type: "info",
  value: "Nepal • Open to Relocation & Global Opportunities",
},

{
  id: 41,
  title: "Business Administration Professional",
  category: "Profile",
  icon: TrendingUp,
  keywords: [
    "business administration",
    "management",
    "professional",
    "bba"
  ],
  type: "section",
  target: "#about",
},

/* ==========================================
   PROFESSIONAL EXPERIENCE
========================================== */
{
  id: 101,
  title: "Election Commission of Nepal",
  category: "Professional Experience",
  icon: Building2,
  keywords: [
    "election",
    "government",
    "nepal",
    "2017",
  ],
  type: "section",
  target: "#experience",
},

{
  id: 102,
  title: "Election Assistant",
  category: "Professional Experience",
  icon: FileText,
  keywords: [
    "assistant",
    "polling",
    "voting",
    "government",
  ],
  type: "section",
  target: "#experience",
},

{
  id: 103,
  title: "Civil Action Security Pvt. Ltd.",
  category: "Professional Experience",
  icon: Building2,
  keywords: [
    "civil action",
    "accountant",
    "finance",
    "ledger",
    "billing",
  ],
  type: "section",
  target: "#experience",
},

{
  id: 104,
  title: "Accountant",
  category: "Professional Experience",
  icon: Calculator,
  keywords: [
    "accounting",
    "finance",
    "bookkeeping",
    "cash",
    "payroll",
  ],
  type: "section",
  target: "#experience",
},

{
  id: 105,
  title: "Aakash Jyoti Construction Pvt. Ltd.",
  category: "Professional Experience",
  icon: Building2,
  keywords: [
    "construction",
    "engineering",
    "office",
    "administration",
  ],
  type: "section",
  target: "#experience",
},

{
  id: 106,
  title: "Administrative Assistant",
  category: "Professional Experience",
  icon: FileText,
  keywords: [
    "administration",
    "office",
    "documentation",
    "coordination",
  ],
  type: "section",
  target: "#experience",
},

{
  id: 107,
  title: "Crystal Time Engineering Solution Pvt. Ltd.",
  category: "Professional Experience",
  icon: Building2,
  keywords: [
    "sales",
    "marketing",
    "business development",
    "engineering",
  ],
  type: "section",
  target: "#experience",
},

{
  id: 108,
  title: "Sales Assistant",
  category: "Professional Experience",
  icon: TrendingUp,
  keywords: [
    "sales",
    "customer",
    "retail",
    "marketing",
  ],
  type: "section",
  target: "#experience",
},

{
  id: 109,
  title: "Supervisor",
  category: "Professional Experience",
  icon: Users,
  keywords: [
    "leadership",
    "supervisor",
    "team",
    "management",
  ],
  type: "section",
  target: "#experience",
},

{
  id: 110,
  title: "We One Facilities Management LLC",
  category: "Professional Experience",
  icon: Building2,
  keywords: [
    "we one",
    "uae",
    "dubai",
    "facility management",
    "world security",
    "moro hub",
  ],
  type: "section",
  target: "#experience",
},

{
  id: 111,
  title: "Receptionist / Security Officer",
  category: "Professional Experience",
  icon: Shield,
  keywords: [
    "receptionist",
    "security",
    "visitor",
    "front desk",
  ],
  type: "section",
  target: "#experience",
},

{
  id: 112,
  title: "Administration Officer",
  category: "Professional Experience",
  icon: BriefcaseBusiness,
  keywords: [
    "administration",
    "operations",
    "leadership",
    "promotion",
  ],
  type: "section",
  target: "#experience",
},

/* ==========================================
   EDUCATION
========================================== */

{
  id: 201,
  title: "Bachelor of Business Administration (BBA)",
  category: "Education",
  icon: GraduationCap,
  keywords: [
    "bba",
    "business administration",
    "management",
    "degree",
    "bachelor",
  ],
  type: "section",
  target: "#education",
},

{
  id: 202,
  title: "Jaipur National University",
  category: "Education",
  icon: GraduationCap,
  keywords: [
    "jaipur",
    "jnu",
    "university",
  ],
  type: "section",
  target: "#education",
},

{
  id: 203,
  title: "Business Studies",
  category: "Education",
  icon: GraduationCap,
  keywords: [
    "business studies",
    "commerce",
    "management",
  ],
  type: "section",
  target: "#education",
},

/* ==========================================
   CORE SKILLS
========================================== */

{
  id: 210,
  title: "Finance",
  category: "Core Skill",
  icon: Calculator,
  keywords: [
    "finance",
    "financial management",
    "budgeting",
    "cash flow",
  ],
  type: "section",
  target: "#skills",
},

{
  id: 211,
  title: "Accounting",
  category: "Core Skill",
  icon: Calculator,
  keywords: [
    "accounting",
    "bookkeeping",
    "ledger",
    "journal",
    "accounts",
  ],
  type: "section",
  target: "#skills",
},

{
  id: 212,
  title: "Business Administration",
  category: "Core Skill",
  icon: BriefcaseBusiness,
  keywords: [
    "business administration",
    "office administration",
    "management",
  ],
  type: "section",
  target: "#skills",
},

{
  id: 213,
  title: "Operations Management",
  category: "Core Skill",
  icon: Building2,
  keywords: [
    "operations",
    "coordination",
    "workflow",
  ],
  type: "section",
  target: "#skills",
},

{
  id: 214,
  title: "Leadership",
  category: "Core Skill",
  icon: Users,
  keywords: [
    "leadership",
    "team leader",
    "supervisor",
    "team management",
  ],
  type: "section",
  target: "#skills",
},

{
  id: 215,
  title: "Business Development",
  category: "Core Skill",
  icon: TrendingUp,
  keywords: [
    "business development",
    "sales",
    "marketing",
    "growth",
  ],
  type: "section",
  target: "#skills",
},

{
  id: 216,
  title: "Customer Service",
  category: "Core Skill",
  icon: Users,
  keywords: [
    "customer service",
    "guest relation",
    "customer support",
  ],
  type: "section",
  target: "#skills",
},

{
  id: 217,
  title: "Microsoft Office",
  category: "Software",
  icon: FileText,
  keywords: [
    "microsoft office",
    "excel",
    "word",
    "powerpoint",
  ],
  type: "section",
  target: "#skills",
},

/* ==========================================
   LANGUAGES
========================================== */

{
  id: 220,
  title: "English",
  category: "Language",
  icon: Users,
  keywords: [
    "english",
    "communication",
    "spoken english",
  ],
  type: "section",
  target: "#skills",
},

{
  id: 221,
  title: "Nepali",
  category: "Language",
  icon: Users,
  keywords: [
    "nepali",
    "native",
  ],
  type: "section",
  target: "#skills",
},

{
  id: 222,
  title: "Hindi",
  category: "Language",
  icon: Users,
  keywords: [
    "hindi",
    "communication",
  ],
  type: "section",
  target: "#skills",
},

/* ==========================================
   CERTIFICATIONS
========================================== */

{
  id: 230,
  title: "Professional Certifications",
  category: "Certification",
  icon: Award,
  keywords: [
    "certificate",
    "certification",
    "training",
    "course",
  ],
  type: "section",
  target: "#certificates",
},

/* ==========================================
   INTERESTS
========================================== */

{
  id: 240,
  title: "Business & Entrepreneurship",
  category: "Interest",
  icon: TrendingUp,
  keywords: [
    "business",
    "entrepreneurship",
    "startup",
  ],
  type: "section",
  target: "#about",
},

{
  id: 241,
  title: "Research & Innovation",
  category: "Interest",
  icon: Brain,
  keywords: [
    "research",
    "innovation",
    "technology",
  ],
  type: "section",
  target: "#about",
},

{
  id: 242,
  title: "Sports & Leadership",
  category: "Interest",
  icon: Users,
  keywords: [
    "sports",
    "cricket",
    "leadership",
    "teamwork",
  ],
  type: "section",
  target: "#about",
},

];