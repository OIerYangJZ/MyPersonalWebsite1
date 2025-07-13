import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Mail, 
  Code, 
  User, 
  Briefcase, 
  MessageCircle,
  ExternalLink,
  ChevronDown,
  Terminal,
  Laptop,
  Brain,
  Globe,
  Star,
  Award,
  Zap,
  Heart,
  Coffee,
  BookOpen,
  Target,
  Rocket,
  Menu,
  X
} from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const skills = [
    { name: 'JavaScript', level: 90, icon: <Code className="w-5 h-5" />, color: 'from-yellow-400 to-orange-500' },
    { name: 'React', level: 85, icon: <Terminal className="w-5 h-5" />, color: 'from-blue-400 to-cyan-500' },
    { name: 'TypeScript', level: 80, icon: <Laptop className="w-5 h-5" />, color: 'from-blue-500 to-indigo-600' },
    { name: 'Node.js', level: 75, icon: <Globe className="w-5 h-5" />, color: 'from-green-400 to-emerald-500' },
    { name: 'Python', level: 70, icon: <Brain className="w-5 h-5" />, color: 'from-purple-400 to-pink-500' },
    { name: 'HTML/CSS', level: 95, icon: <Code className="w-5 h-5" />, color: 'from-red-400 to-pink-500' }
  ];

  const projects = [
    {
      title: 'E-commerce Platform',
      description: '基于React和Node.js构建的现代化电商平台，具备用户认证、购物车和支付集成功能。',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#',
      status: '已完成',
      featured: true
    },
    {
      title: 'Task Management App',
      description: '协作式任务管理应用，支持实时更新、团队协作功能和直观的用户界面。',
      technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
      link: '#',
      status: '开发中',
      featured: true
    },
    {
      title: 'Weather Dashboard',
      description: '响应式天气仪表板，显示多个地点的当前天气状况和预报信息。',
      technologies: ['JavaScript', 'Weather API', 'Chart.js', 'CSS3'],
      link: '#',
      status: '已完成',
      featured: false
    },
    {
      title: 'Personal Blog',
      description: '个人技术博客系统，支持Markdown编辑、标签分类和评论功能。',
      technologies: ['Next.js', 'MDX', 'Prisma', 'PostgreSQL'],
      link: '#',
      status: '规划中',
      featured: false
    }
  ];

  const achievements = [
    { icon: <Award className="w-6 h-6" />, title: '编程竞赛', description: '多次参与编程竞赛并获得优异成绩' },
    { icon: <Star className="w-6 h-6" />, title: '开源贡献', description: '积极参与开源项目，贡献代码' },
    { icon: <Rocket className="w-6 h-6" />, title: '项目经验', description: '独立完成多个全栈项目开发' },
    { icon: <BookOpen className="w-6 h-6" />, title: '持续学习', description: '保持对新技术的学习热情' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">杨</span>
              </div>
              <div>
                <span className="text-white font-bold text-lg">杨锦泽</span>
                <p className="text-slate-400 text-xs">Young Developer</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['hero', 'about', 'skills', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-all duration-300 capitalize relative ${
                    activeSection === section
                      ? 'text-purple-400'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {section === 'hero' ? '首页' : 
                   section === 'about' ? '关于' :
                   section === 'skills' ? '技能' :
                   section === 'projects' ? '项目' : '联系'}
                  {activeSection === section && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white p-2"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-700/50">
            <div className="px-4 py-4 space-y-2">
              {['hero', 'about', 'skills', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors"
                >
                  {section === 'hero' ? '首页' : 
                   section === 'about' ? '关于' :
                   section === 'skills' ? '技能' :
                   section === 'projects' ? '项目' : '联系'}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative">
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Avatar */}
            <div className="mb-8 flex justify-center">
              <div className="relative group">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-purple-500/30 shadow-2xl group-hover:border-purple-500/60 transition-all duration-500">
                  <img 
                    src="/微信图片_20250711210312_4.jpg"
                    alt="杨锦泽头像"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-slate-900 flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <div className="inline-flex items-center space-x-2 bg-slate-800/30 backdrop-blur-sm border border-slate-600/30 rounded-full px-4 py-2 mb-6">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-slate-300 text-sm">Available for opportunities</span>
              </div>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                杨锦泽
              </span>
              <span className="block text-2xl md:text-4xl font-light text-slate-300 mt-4">
                Yang Jinze
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-4 max-w-2xl mx-auto">
              18岁 · 热爱编程的青年开发者
            </p>
            <p className="text-lg text-slate-400 mb-12 max-w-xl mx-auto">
              用代码创造无限可能，让技术改变世界
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button
                onClick={() => scrollToSection('projects')}
                className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
              >
                <span className="flex items-center space-x-2">
                  <span>查看作品</span>
                  <Rocket className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border-2 border-slate-400 text-slate-300 px-8 py-4 rounded-full font-medium hover:bg-slate-800 hover:text-white hover:border-white transition-all duration-300 backdrop-blur-sm"
              >
                联系合作
              </button>
            </div>

            <div className="flex justify-center space-x-6">
              <a href="#" className="text-slate-400 hover:text-purple-400 transition-colors transform hover:scale-110">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-purple-400 transition-colors transform hover:scale-110">
                <Mail className="w-6 h-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-purple-400 transition-colors transform hover:scale-110">
                <MessageCircle className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-slate-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-800/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">关于我</h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              一个充满激情的18岁开发者，用代码书写青春，用技术创造未来
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 order-2 lg:order-1">
              <div className="flex items-start space-x-4 group">
                <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <User className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">个人信息</h3>
                  <p className="text-slate-300">年龄：18岁</p>
                  <p className="text-slate-400 text-sm">充满活力的年轻开发者</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 group">
                <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Heart className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">兴趣爱好</h3>
                  <p className="text-slate-300">编程、技术创新</p>
                  <p className="text-slate-400 text-sm">热爱探索新技术和解决问题</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 group">
                <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">专业方向</h3>
                  <p className="text-slate-300">前端开发、全栈开发</p>
                  <p className="text-slate-400 text-sm">专注于现代Web技术栈</p>
                </div>
              </div>

              {/* Achievements */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {achievements.map((achievement, index) => (
                  <div key={achievement.title} className="bg-slate-700/30 rounded-xl p-4 backdrop-blur-sm border border-slate-600/30 hover:border-purple-500/50 transition-all duration-300">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                        {achievement.icon}
                      </div>
                      <h4 className="text-white font-medium text-sm">{achievement.title}</h4>
                    </div>
                    <p className="text-slate-400 text-xs">{achievement.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-slate-700/20 rounded-3xl p-8 backdrop-blur-sm border border-slate-600/30 hover:border-purple-500/30 transition-all duration-500 order-1 lg:order-2">
              {/* Profile Image */}
              <div className="flex justify-center mb-8">
                <div className="relative group">
                  <div className="w-48 h-48 rounded-3xl overflow-hidden border-4 border-purple-500/20 shadow-2xl group-hover:border-purple-500/40 transition-all duration-500">
                    <img 
                      src="/微信图片_20250711210312_4.jpg"
                      alt="杨锦泽"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent rounded-3xl"></div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 mb-6">
                <Coffee className="w-6 h-6 text-purple-400" />
                <h3 className="text-2xl font-bold text-white">我的故事</h3>
              </div>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  我是一名18岁的青年开发者，从初中开始接触编程就被代码的魅力深深吸引。
                  <span className="text-purple-400 font-medium">每一行代码都是创造的开始</span>。
                </p>
                <p>
                  我热衷于学习新技术，不断挑战自己，希望通过编程创造有价值的产品，解决实际问题。
                  在这个快速发展的技术世界里，我始终保持着<span className="text-pink-400 font-medium">学习的热情</span>。
                </p>
                <p>
                  我相信技术能够改变世界，也希望能够在这个充满无限可能的领域里贡献自己的力量，
                  <span className="text-blue-400 font-medium">用代码书写属于我们这一代的未来</span>。
                </p>
              </div>
              
              <div className="mt-6 flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-2 text-purple-400">
                  <Zap className="w-4 h-4" />
                  <span>快速学习</span>
                </div>
                <div className="flex items-center space-x-2 text-pink-400">
                  <Heart className="w-4 h-4" />
                  <span>热爱创新</span>
                </div>
                <div className="flex items-center space-x-2 text-blue-400">
                  <Target className="w-4 h-4" />
                  <span>目标导向</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">技能专长</h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              掌握现代Web开发技术栈，持续学习和提升技术能力
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div key={skill.name} className="group bg-slate-800/20 rounded-3xl p-6 backdrop-blur-sm border border-slate-600/30 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${skill.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                      {skill.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                      <p className="text-slate-400 text-sm">熟练程度</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-purple-400">{skill.level}</span>
                    <span className="text-purple-400">%</span>
                  </div>
                </div>
                <div className="w-full bg-slate-700/50 rounded-full h-3 overflow-hidden">
                  <div 
                    className={`bg-gradient-to-r ${skill.color} h-3 rounded-full transition-all duration-1000 ease-out relative`}
                    style={{ width: `${skill.level}%` }}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-800/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">我的项目</h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              精心打造的项目作品，展示技术实力和创新思维
            </p>
          </div>
          
          {/* Featured Projects */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <Star className="w-6 h-6 text-yellow-400 mr-2" />
              精选项目
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.filter(project => project.featured).map((project, index) => (
                <div key={project.title} className="group bg-slate-700/20 rounded-3xl p-8 backdrop-blur-sm border border-slate-600/30 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h4 className="text-2xl font-bold text-white mb-2">{project.title}</h4>
                      <div className="flex items-center space-x-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          project.status === '已完成' ? 'bg-green-500/20 text-green-300 border border-green-500/30' :
                          project.status === '开发中' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' :
                          'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                    </div>
                    <ExternalLink className="w-6 h-6 text-slate-400 group-hover:text-purple-400 transition-colors group-hover:scale-110" />
                  </div>
                  
                  <p className="text-slate-300 mb-6 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="bg-purple-500/10 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/20 hover:border-purple-500/40 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white py-3 rounded-xl border border-purple-500/30 hover:from-purple-500/30 hover:to-pink-500/30 hover:border-purple-500/50 transition-all duration-300 group-hover:transform group-hover:scale-105">
                    查看详情
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Other Projects */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <Code className="w-6 h-6 text-blue-400 mr-2" />
              其他项目
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.filter(project => !project.featured).map((project, index) => (
                <div key={project.title} className="group bg-slate-700/10 rounded-2xl p-6 backdrop-blur-sm border border-slate-600/20 hover:border-purple-500/30 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-bold text-white">{project.title}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      project.status === '已完成' ? 'bg-green-500/20 text-green-300' :
                      project.status === '开发中' ? 'bg-blue-500/20 text-blue-300' :
                      'bg-yellow-500/20 text-yellow-300'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="text-slate-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="bg-slate-600/30 text-slate-300 px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button className="text-purple-400 hover:text-purple-300 text-sm font-medium flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
                    <span>了解更多</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">联系我</h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              有合作想法或者想要交流技术？我很乐意与你沟通！
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800/20 rounded-3xl p-8 backdrop-blur-sm border border-slate-600/30">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                <MessageCircle className="w-6 h-6 text-purple-400 mr-2" />
                联系方式
              </h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 group hover:transform hover:scale-105 transition-transform">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-slate-300 font-medium">邮箱</p>
                    <p className="text-white">yangjinze@example.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 group hover:transform hover:scale-105 transition-transform">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <Github className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-slate-300 font-medium">GitHub</p>
                    <p className="text-white">github.com/yangjinze</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 group hover:transform hover:scale-105 transition-transform">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-slate-300 font-medium">微信</p>
                    <p className="text-white">yangjinze18</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-slate-700/20 rounded-2xl border border-slate-600/20">
                <p className="text-slate-300 text-sm leading-relaxed">
                  <span className="text-purple-400 font-medium">💡 提示：</span>
                  我通常在24小时内回复邮件，欢迎与我讨论技术问题、项目合作或者任何有趣的想法！
                </p>
              </div>
            </div>
            
            <div className="bg-slate-800/20 rounded-3xl p-8 backdrop-blur-sm border border-slate-600/30">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                <Mail className="w-6 h-6 text-blue-400 mr-2" />
                发送消息
              </h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-2">您的姓名</label>
                  <input
                    type="text"
                    placeholder="请输入您的姓名"
                    className="w-full bg-slate-700/30 border border-slate-600/50 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-2">您的邮箱</label>
                  <input
                    type="email"
                    placeholder="请输入您的邮箱地址"
                    className="w-full bg-slate-700/30 border border-slate-600/50 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-2">消息内容</label>
                  <textarea
                    placeholder="请输入您想说的话..."
                    rows={4}
                    className="w-full bg-slate-700/30 border border-slate-600/50 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 rounded-xl font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 flex items-center justify-center space-x-2"
                >
                  <span>发送消息</span>
                  <Rocket className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900/50 border-t border-slate-700/50 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-purple-500/30">
                <img 
                  src="/微信图片_20250711210312_4.jpg"
                  alt="杨锦泽"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-white font-bold text-lg">杨锦泽</span>
            </div>
            <p className="text-slate-400 mb-4">© 2024 杨锦泽 (Yang Jinze). 保留所有权利.</p>
            <p className="text-slate-500 text-sm flex items-center justify-center space-x-2">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400 animate-pulse" />
              <span>and React</span>
            </p>
            <div className="flex justify-center space-x-6 mt-6">
              <a href="#" className="text-slate-400 hover:text-purple-400 transition-colors transform hover:scale-110">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-purple-400 transition-colors transform hover:scale-110">
                <Mail className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-purple-400 transition-colors transform hover:scale-110">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;