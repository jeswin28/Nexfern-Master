import React from 'react';
import { 
  Globe, 
  Search, 
  MessageCircle, 
  Star, 
  Users, 
  Target, 
  TrendingUp, 
  AlertCircle,
  CheckCircle,
  ArrowRight,
  Mail,
  Linkedin,
  Github,
  FileText,
  MapPin,
  Clock,
  Heart,
  Zap,
  Smartphone,
  Database,
  Cloud,
  Shield
} from 'lucide-react';

function App() {
  // Mobile Frame Component (inline)
  const MobileFrame = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <div className={`relative mx-auto ${className}`}>
      <div className="relative w-64 h-[540px] bg-gray-900 rounded-[2.5rem] p-2 shadow-xl">
        <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-xl z-10"></div>
          <div className="w-full h-full overflow-hidden">
            {children}
          </div>
        </div>
      </div>
    </div>
  );

  // University Card Component (inline)
  const UniversityCard = ({ name, location, rating, students, className = "" }: {
    name: string;
    location: string;
    rating: number;
    students: string;
    className?: string;
  }) => (
    <div className={`bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden ${className}`}>
      <div className="h-32 bg-gradient-to-r from-emerald-100 to-teal-100 flex items-center justify-center">
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
          <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">{name.charAt(0)}</span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 text-sm mb-1 truncate">{name}</h3>
        <div className="flex items-center text-xs text-gray-500 mb-2">
          <MapPin className="w-3 h-3 mr-1" />
          <span className="truncate">{location}</span>
        </div>
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center">
            <Star className="w-3 h-3 text-yellow-400 mr-1" />
            <span className="text-gray-600">{rating}</span>
          </div>
          <div className="flex items-center text-gray-500">
            <Users className="w-3 h-3 mr-1" />
            <span>{students}</span>
          </div>
        </div>
      </div>
    </div>
  );

  // Chat Message Component (inline)
  const ChatMessage = ({ message, sender, isOwn = false }: {
    message: string;
    sender: string;
    isOwn?: boolean;
  }) => (
    <div className={`flex items-start space-x-2 mb-3 ${isOwn ? 'flex-row-reverse space-x-reverse' : ''}`}>
      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 flex items-center justify-center flex-shrink-0">
        <span className="text-xs font-medium text-white">{sender.charAt(0)}</span>
      </div>
      <div className={`max-w-[80%] ${isOwn ? 'text-right' : ''}`}>
        <div className={`inline-block px-3 py-2 rounded-2xl text-sm ${
          isOwn 
            ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-br-md' 
            : 'bg-gray-100 text-gray-900 rounded-bl-md'
        }`}>
          {message}
        </div>
        <div className="text-xs text-gray-500 mt-1">{sender}</div>
      </div>
    </div>
  );

  // Tech Stack Component (inline)
  const TechStack = () => {
    const techItems = [
      { name: 'Flutter', icon: Smartphone, color: 'bg-emerald-100 text-emerald-600 border-emerald-200' },
      { name: 'Firebase Auth', icon: Shield, color: 'bg-blue-100 text-blue-600 border-blue-200' },
      { name: 'Firestore', icon: Database, color: 'bg-teal-100 text-teal-600 border-teal-200' },
      { name: 'Realtime DB', icon: Zap, color: 'bg-green-100 text-green-600 border-green-200' },
      { name: 'Cloud Storage', icon: Cloud, color: 'bg-slate-100 text-slate-600 border-slate-200' },
      { name: 'Communities', icon: Users, color: 'bg-blue-100 text-blue-600 border-blue-200' },
    ];

    return (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {techItems.map((item, index) => (
          <div key={index} className={`flex items-center space-x-3 p-4 bg-white rounded-xl shadow-sm border ${item.color}`}>
            <div className={`w-10 h-10 rounded-lg ${item.color.replace('border-', 'bg-').replace('text-', 'text-')} flex items-center justify-center`}>
              <item.icon className="w-5 h-5" />
            </div>
            <span className="font-medium text-gray-900 text-sm">{item.name}</span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50 py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 border border-emerald-300 rounded-full"></div>
          <div className="absolute top-40 right-20 w-20 h-20 border border-teal-300 rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-green-300 rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 bg-clip-text text-transparent mb-6 leading-tight">
              Connecting Dreams
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-4 max-w-4xl mx-auto leading-relaxed">
              Bridging Indian Students to Global Education
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A research-driven mobile app designed to guide Indian students in discovering 
              and engaging with foreign universities based on interest, compatibility, and goals.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            {/* Homepage Mockup */}
            <MobileFrame>
              <div className="p-6 h-full bg-gradient-to-b from-emerald-50 to-white">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-lg font-bold text-gray-900">Good morning, Riya!</h2>
                    <p className="text-sm text-gray-500">Explore your dream universities</p>
                  </div>
                  <div className="w-10 h-10 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">R</span>
                  </div>
                </div>
                
                <div className="bg-white rounded-2xl p-4 mb-6 shadow-sm border border-emerald-100">
                  <div className="flex items-center space-x-3">
                    <Search className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-400 text-sm">Search universities, courses...</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <UniversityCard 
                    name="MIT" 
                    location="Cambridge, USA" 
                    rating={4.9} 
                    students="11k" 
                  />
                  <UniversityCard 
                    name="Oxford" 
                    location="Oxford, UK" 
                    rating={4.8} 
                    students="24k" 
                  />
                </div>
              </div>
            </MobileFrame>

            {/* University Detail Mockup */}
            <MobileFrame>
              <div className="h-full bg-white">
                <div className="h-48 bg-gradient-to-r from-emerald-500 to-teal-500 relative">
                  <div className="absolute bottom-6 left-6 text-white">
                    <h2 className="text-2xl font-bold">Stanford University</h2>
                    <p className="text-emerald-100">California, USA</p>
                  </div>
                </div>
                
                <div className="p-6 space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Star className="w-5 h-5 text-yellow-400" />
                        <span className="font-semibold">4.9</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-5 h-5 text-gray-400" />
                        <span className="text-gray-600">17k students</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-4 border border-emerald-100">
                    <h3 className="font-semibold text-gray-900 mb-2">Popular Programs</h3>
                    <div className="space-y-2">
                      <div className="text-sm text-gray-600">• Computer Science</div>
                      <div className="text-sm text-gray-600">• Engineering</div>
                      <div className="text-sm text-gray-600">• Business</div>
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-3 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:from-emerald-600 hover:to-teal-600 transition-all">
                    <MessageCircle className="w-5 h-5" />
                    <span>Join Community</span>
                  </button>
                </div>
              </div>
            </MobileFrame>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-6">Project Overview</h2>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-red-100">
                <h3 className="text-xl font-bold text-red-600 mb-4 flex items-center">
                  <AlertCircle className="w-6 h-6 mr-2" />
                  Problem
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Indian students face information overload and lack of personalized guidance 
                  when exploring foreign universities. Existing platforms are fragmented and 
                  don't provide community-driven insights.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-emerald-100">
                <h3 className="text-xl font-bold text-emerald-600 mb-4 flex items-center">
                  <CheckCircle className="w-6 h-6 mr-2" />
                  Solution
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  A unified platform combining university exploration with peer communities, 
                  providing personalized recommendations and real-time student interactions 
                  for informed decision-making.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-8">Tech Stack</h3>
            <TechStack />
          </div>
        </div>
      </section>

      {/* Key Screens Showcase */}
<section className="py-20 px-6">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent text-center mb-16">
      Key Screens Showcase
    </h2>

    <div className="grid md:grid-cols-3 gap-8">
      {/* Auth & Onboarding */}
      <div className="flex flex-col items-center text-center space-y-4">
        <MobileFrame className="mb-0">
          <div className="h-full bg-gradient-to-br from-emerald-500 to-teal-500 flex flex-col items-center justify-center text-white p-6 text-center">
            <Globe className="w-16 h-16 mb-6" />
            <h3 className="text-xl font-bold mb-2">Welcome to</h3>
            <h2 className="text-2xl font-bold mb-6">Connecting Dreams</h2>
            <div className="w-full space-y-3">
              <button className="w-full bg-white text-emerald-600 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors">
                Get Started
              </button>
              <button className="w-full border border-white py-3 rounded-xl hover:bg-white hover:bg-opacity-10 transition-colors">
                Sign In
              </button>
            </div>
          </div>
        </MobileFrame>
        <h4 className="font-semibold text-gray-900">Auth & Onboarding</h4>
      </div>

      {/* Search & Filter */}
      <div className="flex flex-col items-center text-center space-y-4">
        <MobileFrame className="mb-0">
          <div className="h-full bg-white p-6">
            <div className="mb-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Find Universities</h2>
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-3 flex items-center border border-emerald-100">
                <Search className="w-5 h-5 text-emerald-400 mr-3" />
                <span className="text-gray-500 text-sm">Computer Science</span>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex space-x-2">
                <div className="bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-600 px-3 py-1 rounded-full text-xs border border-emerald-200">USA</div>
                <div className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs">UK</div>
                <div className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs">Canada</div>
              </div>
            </div>

            <div className="text-left text-sm text-gray-600">
              <div className="font-semibold mb-2">Found 24 universities</div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Stanford University</span>
                  <span>4.9 ⭐</span>
                </div>
                <div className="flex justify-between">
                  <span>MIT</span>
                  <span>4.8 ⭐</span>
                </div>
              </div>
            </div>
          </div>
        </MobileFrame>
        <h4 className="font-semibold text-gray-900">Search & Filter</h4>
      </div>

      {/* Communities */}
      <div className="flex flex-col items-center text-center space-y-4">
        <MobileFrame className="mb-0">
          <div className="h-full bg-white p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-gray-900">Communities</h2>
              <div className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">3</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-4 border border-emerald-100">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-gray-900 text-sm">Stanford CS</h3>
                  <span className="text-xs text-gray-500">12 online</span>
                </div>
                <ChatMessage message="Anyone applied for Fall 2024?" sender="Arjun" />
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-4 border border-blue-100">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-gray-900 text-sm">MIT Engineering</h3>
                  <span className="text-xs text-gray-500">8 online</span>
                </div>
                <ChatMessage message="TOEFL score requirements?" sender="Priya" />
              </div>
            </div>
          </div>
        </MobileFrame>
        <h4 className="font-semibold text-gray-900">Communities</h4>
      </div>
    </div>
  </div>
</section>


      {/* Design Philosophy */}
      <section className="py-20 px-6 bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent text-center mb-12">
            Design Philosophy & Background
          </h2>
          
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-emerald-100">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed mb-6">
                The inspiration for Connecting Dreams came from my own experience as an international 
                student and witnessing friends struggle with fragmented information across multiple 
                platforms. The emotional weight of choosing the right university – a decision that 
                shapes careers and lives – deserved a more thoughtful, human-centered approach.
              </p>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                Our design philosophy centers on <strong>empathy-driven simplicity</strong>. Every 
                interaction was crafted to reduce cognitive load while providing comprehensive information. 
                We believe that technology should feel invisible, allowing students to focus on their 
                dreams rather than learning complex interfaces.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                Accessibility and inclusivity were paramount. Considering students from diverse 
                socio-economic backgrounds and varying levels of digital literacy, we ensured the 
                app works seamlessly on budget smartphones with limited data connectivity – a reality 
                for many Indian students.
              </p>
            </div>
            
            <div className="mt-8 p-6 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl border border-emerald-100">
              <h3 className="font-bold text-emerald-900 mb-3 flex items-center">
                <Heart className="w-5 h-5 mr-2" />
                Core Principle
              </h3>
              <p className="text-emerald-800 italic">
                "Every student deserves personalized guidance and peer support in their journey 
                toward global education – regardless of their background or resources."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* User Research */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent text-center mb-16">
            User Research & Insights
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Key Findings</h3>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-red-50 to-red-100 border-l-4 border-red-400 p-6 rounded-r-xl">
                  <h4 className="font-semibold text-red-900 mb-2">Information Overload</h4>
                  <p className="text-red-800">
                    "I spent hours browsing different websites and still felt confused about requirements"
                  </p>
                  <span className="text-red-600 text-sm">— Rahul, Engineering Aspirant</span>
                </div>
                
                <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 border-l-4 border-yellow-400 p-6 rounded-r-xl">
                  <h4 className="font-semibold text-yellow-900 mb-2">Deadline Confusion</h4>
                  <p className="text-yellow-800">
                    "I almost missed my application deadline because information was scattered"
                  </p>
                  <span className="text-yellow-600 text-sm">— Sneha, Business Student</span>
                </div>
                
                <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 border-l-4 border-emerald-400 p-6 rounded-r-xl">
                  <h4 className="font-semibold text-emerald-900 mb-2">Peer Advice Needed</h4>
                  <p className="text-emerald-800">
                    "I wanted to talk to someone who actually went through this process"
                  </p>
                  <span className="text-emerald-600 text-sm">— Kavya, Medical Aspirant</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">User Needs Analysis</h3>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Clear Information</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full" style={{width: '92%'}}></div>
                      </div>
                      <span className="text-sm text-gray-600">92%</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Peer Connections</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-gradient-to-r from-teal-500 to-blue-500 h-2 rounded-full" style={{width: '87%'}}></div>
                      </div>
                      <span className="text-sm text-gray-600">87%</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Deadline Tracking</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full" style={{width: '84%'}}></div>
                      </div>
                      <span className="text-sm text-gray-600">84%</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Cost Transparency</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full" style={{width: '78%'}}></div>
                      </div>
                      <span className="text-sm text-gray-600">78%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SWOT Analysis */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent text-center mb-16">
            SWOT Analysis & Competitive Landscape
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-emerald-100">
              <h3 className="text-xl font-bold text-emerald-600 mb-6 flex items-center">
                <TrendingUp className="w-6 h-6 mr-2" />
                Strengths
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                  Clean, intuitive UX designed for mobile-first experience
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                  Real-time community features for peer interaction
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                  Personalized recommendations based on user preferences
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-red-100">
              <h3 className="text-xl font-bold text-red-600 mb-6 flex items-center">
                <AlertCircle className="w-6 h-6 mr-2" />
                Weaknesses
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0">•</span>
                  Limited university database in initial version
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0">•</span>
                  Dependency on user-generated content for communities
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0">•</span>
                  Initial lack of established partnerships with universities
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-blue-100">
              <h3 className="text-xl font-bold text-blue-600 mb-6 flex items-center">
                <Target className="w-6 h-6 mr-2" />
                Opportunities
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0">+</span>
                  Growing demand for international education
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0">+</span>
                  Potential for mentor integration and expert guidance
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0">+</span>
                  Expansion to other markets (Southeast Asia, Africa)
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-yellow-100">
              <h3 className="text-xl font-bold text-yellow-600 mb-6 flex items-center">
                <AlertCircle className="w-6 h-6 mr-2" />
                Threats
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-5 h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0">⚠</span>
                  Established competitors with market presence
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0">⚠</span>
                  Data privacy concerns and regulatory changes
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0">⚠</span>
                  Economic factors affecting international education
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Competitive Analysis</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Feature</th>
                    <th className="text-center py-3 px-4 font-semibold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Connecting Dreams</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-600">Yocket</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-600">Leverage Edu</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4">Real-time Communities</td>
                    <td className="text-center py-3 px-4">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mx-auto" />
                    </td>
                    <td className="text-center py-3 px-4">
                      <span className="text-yellow-500">Partial</span>
                    </td>
                    <td className="text-center py-3 px-4">
                      <span className="text-red-500">✕</span>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4">Mobile-first Design</td>
                    <td className="text-center py-3 px-4">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mx-auto" />
                    </td>
                    <td className="text-center py-3 px-4">
                      <span className="text-yellow-500">Partial</span>
                    </td>
                    <td className="text-center py-3 px-4">
                      <span className="text-yellow-500">Partial</span>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4">Personalized Recommendations</td>
                    <td className="text-center py-3 px-4">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mx-auto" />
                    </td>
                    <td className="text-center py-3 px-4">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mx-auto" />
                    </td>
                    <td className="text-center py-3 px-4">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mx-auto" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Persona Deep Dive */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent text-center mb-16">
            User Persona Deep Dive
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-100">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
                  R
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Riya Sharma</h3>
                  <p className="text-emerald-600">18 • B.Tech Aspirant • Jaipur</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <Target className="w-4 h-4 mr-2" />
                    Goals
                  </h4>
                  <ul className="text-sm space-y-1 ml-6">
                    <li>• Study Computer Science at a top US university</li>
                    <li>• Connect with seniors who went through the process</li>
                    <li>• Understand scholarship opportunities</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-2" />
                    Frustrations
                  </h4>
                  <ul className="text-sm space-y-1 ml-6">
                    <li>• Information scattered across multiple websites</li>
                    <li>• Conflicting advice from different sources</li>
                    <li>• No direct connection to current students</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <Smartphone className="w-4 h-4 mr-2" />
                    Tech Usage
                  </h4>
                  <p className="text-sm ml-6">
                    Uses Android phone, limited data plan, prefers mobile apps over websites
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 border border-blue-100">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
                  A
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Arjun Patel</h3>
                  <p className="text-blue-600">20 • MBA Aspirant • Mumbai</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <Target className="w-4 h-4 mr-2" />
                    Goals
                  </h4>
                  <ul className="text-sm space-y-1 ml-6">
                    <li>• Compare MBA programs across countries</li>
                    <li>• Understand ROI and career prospects</li>
                    <li>• Network with alumni and current students</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-2" />
                    Frustrations
                  </h4>
                  <ul className="text-sm space-y-1 ml-6">
                    <li>• Difficulty comparing programs objectively</li>
                    <li>• Limited access to real student experiences</li>
                    <li>• Complex application requirements</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <Heart className="w-4 h-4 mr-2" />
                    Favorite Features
                  </h4>
                  <ul className="text-sm space-y-1 ml-6">
                    <li>• University comparison tool</li>
                    <li>• Alumni mentorship matching</li>
                    <li>• Real-time admission updates</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Usability Testing */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent text-center mb-16">
            Usability Testing & Improvements
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-emerald-100">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                <Clock className="w-5 h-5 mr-2 text-emerald-500" />
                Testing Methods
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 5-second tests for first impressions</li>
                <li>• Task-based user flows</li>
                <li>• A/B testing for key features</li>
                <li>• Remote usability sessions</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-red-100">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                <AlertCircle className="w-5 h-5 mr-2 text-red-500" />
                Key Issues Found
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Confusion in community join flow</li>
                <li>• Missing back button in deep screens</li>
                <li>• Unclear filter options</li>
                <li>• Information hierarchy issues</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-emerald-100">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-emerald-500" />
                Improvements Made
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Simplified onboarding process</li>
                <li>• Added contextual help tooltips</li>
                <li>• Improved navigation patterns</li>
                <li>• Enhanced visual feedback</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-8 text-center">Before & After: Community Join Flow</h3>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h4 className="font-semibold text-red-600 mb-4 text-center">Before (Confusing)</h4>
                <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-xl p-6 border border-red-200">
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg shadow-sm">
                      <p className="text-sm text-gray-600">Join Stanford Community?</p>
                      <div className="flex space-x-2 mt-2">
                        <button className="text-xs bg-gray-200 px-2 py-1 rounded">Yes</button>
                        <button className="text-xs bg-gray-200 px-2 py-1 rounded">No</button>
                      </div>
                    </div>
                    <p className="text-xs text-red-600">❌ Users unsure what "join" means</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-emerald-600 mb-4 text-center">After (Clear)</h4>
                <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-xl p-6 border border-emerald-200">
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg shadow-sm">
                      <h5 className="text-sm font-semibold text-gray-900">Stanford CS Community</h5>
                      <p className="text-xs text-gray-600 mb-2">Connect with 200+ students & alumni</p>
                      <button className="text-xs bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-3 py-1 rounded-full">
                        Join Discussion
                      </button>
                    </div>
                    <p className="text-xs text-emerald-600">✅ Clear value proposition</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     {/* Final UI Highlights */}
<section className="py-20 px-6">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent text-center mb-16">
      Final UI Highlights
    </h2>

    <div className="grid md:grid-cols-3 gap-12">
      {/* Card 1 */}
      <div className="flex flex-col items-center text-center space-y-4">
        <MobileFrame className="mb-0">
          <div className="h-full bg-gradient-to-b from-emerald-50 to-white p-6 text-center">
            <div className="mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Discover Universities</h3>
              <p className="text-sm text-gray-500">Personalized recommendations</p>
            </div>
            <div className="space-y-4">
              <UniversityCard name="Harvard" location="Cambridge, USA" rating={4.9} students="23k" />
              <UniversityCard name="Cambridge" location="Cambridge, UK" rating={4.8} students="19k" />
            </div>
            <div className="mt-6">
              <button className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-2 rounded-xl text-sm font-semibold hover:from-emerald-600 hover:to-teal-600 transition-all">
                View More
              </button>
            </div>
          </div>
        </MobileFrame>
        <h4 className="text-xl font-bold text-gray-900">Discover Universities</h4>
        <p className="text-gray-600 max-w-xs">Smart recommendations based on your preferences and goals</p>
      </div>

      {/* Card 2 */}
      <div className="flex flex-col items-center text-center space-y-4">
        <MobileFrame className="mb-0">
          <div className="h-full bg-white p-6 text-center">
            <div className="mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Engage in Communities</h3>
              <p className="text-sm text-gray-500">Real conversations, real insights</p>
            </div>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-4 text-left border border-emerald-100">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-gray-900 text-sm">MIT Engineering</h4>
                  <span className="text-xs bg-gradient-to-r from-emerald-400 to-teal-500 text-white px-2 py-1 rounded-full">Live</span>
                </div>
                <ChatMessage message="Just got my admit! Happy to help with questions 🎉" sender="Amit" />
                <ChatMessage message="Congratulations! What was your GPA?" sender="Riya" isOwn />
              </div>
            </div>
          </div>
        </MobileFrame>
        <h4 className="text-xl font-bold text-gray-900">Engage in Communities</h4>
        <p className="text-gray-600 max-w-xs">Connect with peers and get answers from those who've been there</p>
      </div>

      {/* Card 3 */}
      <div className="flex flex-col items-center text-center space-y-4">
        <MobileFrame className="mb-0">
          <div className="h-full bg-gradient-to-b from-emerald-50 to-white p-6 text-center">
            <div className="mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Track Your Journey</h3>
              <p className="text-sm text-gray-500">Stay organized and on track</p>
            </div>
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-left">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-gray-900">Application Progress</span>
                  <span className="text-xs text-emerald-600">3/5 completed</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-400 h-2 rounded-full" style={{ width: '60%' }}></div>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center text-emerald-600">
                    <CheckCircle className="w-3 h-3 mr-2" />
                    Personal Statement
                  </div>
                  <div className="flex items-center text-emerald-600">
                    <CheckCircle className="w-3 h-3 mr-2" />
                    Transcripts
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Clock className="w-3 h-3 mr-2" />
                    Letters of Recommendation
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MobileFrame>
        <h4 className="text-xl font-bold text-gray-900">Track Your Journey</h4>
        <p className="text-gray-600 max-w-xs">Never miss a deadline with smart progress tracking</p>
      </div>
    </div>
  </div>
</section>


      {/* Impact & Learnings */}
      <section className="py-20 px-6 bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent text-center mb-12">
            Impact & Learnings
          </h2>
          
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-emerald-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Zap className="w-7 h-7 mr-3 text-emerald-500" />
              Connecting Dreams taught me...
            </h3>
            
            <div className="prose prose-lg max-w-none space-y-6">
              <p className="text-gray-600 leading-relaxed">
                <strong>The power of empathy-driven design.</strong> Every pixel, every interaction was 
                shaped by real student struggles. I learned that great UX isn't about following trends—it\'s 
                about deeply understanding your users' emotional and practical needs.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                <strong>Community beats content.</strong> Initially, I focused on creating comprehensive 
                university databases. But user feedback revealed that peer connections and real experiences 
                were far more valuable than static information. This pivotal insight shifted our entire approach.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                <strong>Constraints breed creativity.</strong> Designing for budget smartphones and limited 
                data forced us to prioritize ruthlessly. These constraints led to cleaner, more focused designs 
                that benefited all users, not just those with limitations.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                <strong>Accessibility is a design superpower.</strong> Making the app work for users with 
                different abilities, devices, and connectivity improved the experience for everyone. Inclusive 
                design principles became the foundation of all our decisions.
              </p>
            </div>
            
            <div className="mt-8 p-6 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl border border-emerald-100">
              <p className="text-gray-800 italic text-lg font-medium">
                "Connecting Dreams reminded me that behind every design decision is a human story. 
                As designers, we're not just creating interfaces—we're shaping dreams and futures."
              </p>
            </div>
          </div>
        </div>
      </section>

    
    </div>
  );
}

export default App;