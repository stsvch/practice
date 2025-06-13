import React from 'react';
import FeaturesSection from '../components/Home/FeaturesSection';
import QuickLinks from '../components/Home/QuickLinks';
import CTASection from '../components/Home/CTASection';
import IntroductionSection from '../components/Home/IntroductionSection';
import ProcessSection from '../components/Home/ProcessSection';
import Hero from '../components/Home/Hero';
import InspirationSection from '../components/Home/InspirationSection';
import PrototypeSection from '../components/Home/PrototypeSection';
const Home = () => (
  <main>
    <IntroductionSection />
    <Hero/>
    <ProcessSection />
    <InspirationSection />
    <PrototypeSection />
    <FeaturesSection />
    <QuickLinks />
    <CTASection />
  </main>
);

export default Home;
