import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CommitteePage from './pages/CommitteePage';
import HistoryPage from './pages/HistoryPage';
import JuniorsPage from './pages/JuniorsPage';
import SponsorsPage from './pages/SponsorsPage';
import StatisticsPage from './pages/StatisticsPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const getRouteFromHash = () => {
    const hash = window.location.hash.replace('#/', '').replace('#', '');
    if (!hash) return 'home';
    const validRoutes = ['home', 'committee', 'history', 'juniors', 'sponsors', 'statistics', 'contact'];
    return validRoutes.includes(hash) ? hash : 'home';
  };

  const [currentRoute, setCurrentRoute] = useState(getRouteFromHash());

  useEffect(() => {
    const handleHashChange = () => {
      const newRoute = getRouteFromHash();
      setCurrentRoute(newRoute);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (route) => {
    setCurrentRoute(route);
    window.location.hash = route === 'home' ? '' : `#/${route}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentRoute) {
      case 'committee':
        return <CommitteePage />;
      case 'history':
        return <HistoryPage />;
      case 'juniors':
        return <JuniorsPage />;
      case 'sponsors':
        return <SponsorsPage />;
      case 'statistics':
        return <StatisticsPage />;
      case 'contact':
        return <ContactPage />;
      case 'home':
      default:
        return <HomePage onNavigate={navigate} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-leedy-navy text-slate-100 selection:bg-leedy-gold selection:text-leedy-navy-dark">
      <Navbar currentRoute={currentRoute} setCurrentRoute={navigate} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer setCurrentRoute={navigate} />
    </div>
  );
}

