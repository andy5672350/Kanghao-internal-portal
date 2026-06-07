/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Share2, Package, FileSearch, Truck, Menu, X, LayoutDashboard, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const apps = [
  {
    id: 'b2b-social',
    name: 'B2B社媒营销大师',
    url: 'https://b2-b-social-master.vercel.app/',
    icon: Share2,
    description: '社交媒体自动化与营销工具'
  },
  {
    id: 'pack-box',
    name: '纸箱设计',
    url: 'https://pack-box-studio-koho.vercel.app/',
    icon: Package,
    description: '在线快速生成包材与纸箱设计'
  },
  {
    id: 'draft-compare',
    name: '设计稿校稿',
    url: 'https://draft-compare-v2.vercel.app/',
    icon: FileSearch,
    description: '智能扫描比对设计稿差异'
  },
  {
    id: 'load-expert',
    name: '出口装柜统计-康豪2.0',
    url: 'https://loadexpert.vercel.app/',
    icon: Truck,
    description: '最优集装箱装柜计算与模拟'
  }
];

export default function App() {
  const [activeApp, setActiveApp] = useState<string>(apps[0].id);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen w-full bg-neutral-50 overflow-hidden font-sans text-neutral-900">
      
      {/* Sidebar - Desktop */}
      <motion.aside 
        initial={{ width: 280 }}
        animate={{ width: isSidebarOpen ? 280 : 0 }}
        className="hidden md:flex flex-col bg-white border-r border-neutral-200 h-full flex-shrink-0 z-20 overflow-hidden space-y-4"
      >
        <div className="h-16 flex items-center px-6 border-b border-neutral-100 flex-shrink-0 min-w-[280px]">
          <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center mr-3 shadow-md">
            <LayoutDashboard className="w-4 h-4 text-white" />
          </div>
          <div>
            <h1 className="font-bold text-[15px] tracking-tight leading-tight text-neutral-900">康豪进出口贸易</h1>
            <p className="text-[10px] uppercase font-medium tracking-wider text-neutral-500">内部工具台</p>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto px-4 py-2 space-y-1 min-w-[280px]">
          <div className="mb-4 mt-2 px-2">
            <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">业务应用</p>
          </div>
          {apps.map((app) => {
            const Icon = app.icon;
            const isActive = activeApp === app.id;
            return (
              <button
                key={app.id}
                onClick={() => setActiveApp(app.id)}
                className={`w-full flex items-center px-3 py-3 rounded-xl transition-all duration-200 group relative ${
                  isActive 
                    ? 'bg-blue-50 text-blue-700 shadow-sm' 
                    : 'text-neutral-600 hover:bg-neutral-100/80 hover:text-neutral-900'
                }`}
              >
                {isActive && (
                  <motion.div 
                    layoutId="activeTab" 
                    className="absolute left-0 bottom-0 top-0 w-1 bg-blue-600 rounded-r-full"
                  />
                )}
                <div className={`p-2 rounded-lg mr-3 shadow-sm transition-colors ${isActive ? 'bg-blue-600 text-white' : 'bg-white border border-neutral-200 group-hover:border-neutral-300'}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className={`text-sm font-medium leading-none ${isActive ? 'text-blue-900' : ''}`}>{app.name}</p>
                  <p className="text-[11px] text-neutral-400 mt-1 line-clamp-1 group-hover:text-neutral-500">{app.description}</p>
                </div>
              </button>
            );
          })}
        </nav>

        <div className="p-4 border-t border-neutral-100 min-w-[280px]">
          <div className="bg-neutral-50 rounded-xl p-4 border border-neutral-200 flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-neutral-100 flex items-center justify-center mb-2">
              <span className="text-sm font-bold text-neutral-700">KH</span>
            </div>
            <p className="text-xs font-medium text-neutral-900">Kanghao internal portal</p>
            <p className="text-[10px] text-neutral-500 mt-0.5">Secure workspace version 2.1</p>
          </div>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full bg-white relative min-w-0">
        
        {/* Header */}
        <header className="h-16 flex items-center justify-between px-4 sm:px-6 border-b border-neutral-200 bg-white shadow-sm z-10 flex-shrink-0">
          <div className="flex items-center">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 mr-3 rounded-lg text-neutral-500 hover:bg-neutral-100 transition-colors hidden md:block"
              title="切换侧边栏"
            >
              <Menu className="w-5 h-5" />
            </button>
            
            {/* Mobile Sidebar Toggle */}
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 mr-3 rounded-lg text-neutral-500 hover:bg-neutral-100 transition-colors md:hidden"
            >
              <Menu className="w-5 h-5" />
            </button>

            <div className="flex flex-col">
              <h2 className="text-lg font-bold text-neutral-800 tracking-tight flex items-center">
                {apps.find(a => a.id === activeApp)?.name}
                <span className="ml-2 px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-[10px] font-bold uppercase tracking-widest flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-1 animate-pulse"></span>
                  Online
                </span>
              </h2>
            </div>
          </div>

          <div className="flex items-center space-x-3 text-sm">
            <a 
              href={apps.find(a => a.id === activeApp)?.url} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center text-neutral-500 hover:text-blue-600 transition-colors bg-neutral-50 hover:bg-blue-50 px-3 py-1.5 rounded-md font-medium border border-neutral-200 hover:border-blue-200"
            >
              <span className="hidden sm:inline mr-1.5">独立窗口打开</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </header>

        {/* Mobile Sidebar Overlay */}
        <AnimatePresence>
          {isSidebarOpen && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSidebarOpen(false)}
              className="fixed inset-0 bg-neutral-900/50 z-30 md:hidden backdrop-blur-sm"
            />
          )}
        </AnimatePresence>

        {/* Mobile Sidebar Content */}
        <AnimatePresence>
          {isSidebarOpen && (
            <motion.aside 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
              className="fixed inset-y-0 left-0 w-[280px] bg-white shadow-2xl z-40 md:hidden flex flex-col"
            >
              <div className="h-16 flex items-center justify-between px-6 border-b border-neutral-100">
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center mr-3 shadow-md">
                    <LayoutDashboard className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h1 className="font-bold text-[15px] tracking-tight leading-tight">康豪小工具</h1>
                    <p className="text-[10px] uppercase font-medium tracking-wider text-neutral-500">内部系统</p>
                  </div>
                </div>
                <button 
                  onClick={() => setIsSidebarOpen(false)}
                  className="p-2 -mr-2 rounded-lg text-neutral-500 hover:bg-neutral-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto px-4 py-4 space-y-2">
                {apps.map((app) => {
                  const Icon = app.icon;
                  const isActive = activeApp === app.id;
                  return (
                    <button
                      key={app.id}
                      onClick={() => {
                        setActiveApp(app.id);
                        setIsSidebarOpen(false);
                      }}
                      className={`w-full flex items-center px-3 py-3 rounded-xl transition-all duration-200 group relative ${
                        isActive 
                          ? 'bg-blue-50 text-blue-700 shadow-sm border border-blue-100' 
                          : 'text-neutral-600 hover:bg-neutral-50 border border-transparent'
                      }`}
                    >
                      <div className={`p-2 rounded-lg mr-3 shadow-sm transition-colors ${isActive ? 'bg-blue-600 text-white' : 'bg-white border border-neutral-200'}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="text-left">
                        <p className={`text-sm font-medium leading-none ${isActive ? 'text-blue-900' : ''}`}>{app.name}</p>
                        <p className="text-[11px] text-neutral-400 mt-1 line-clamp-1">{app.description}</p>
                      </div>
                    </button>
                  );
                })}
              </nav>
            </motion.aside>
          )}
        </AnimatePresence>

        {/* Iframes Container */}
        <div className="flex-1 bg-neutral-100 relative w-full h-full">
          {apps.map((app) => (
            <iframe
              key={app.id}
              src={app.url}
              className={`absolute inset-0 w-full h-full border-none transition-opacity duration-300 ${
                activeApp === app.id ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
              title={app.name}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ))}
        </div>
      </main>
    </div>
  );
}

