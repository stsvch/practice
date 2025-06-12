import React from 'react';
import FeaturesSection from '../components/Home/FeaturesSection';
import QuickLinks from '../components/Home/QuickLinks';
import CTASection from '../components/Home/CTASection';
import IntroductionSection from '../components/Home/IntroductionSection';
import ProcessSection from '../components/Home/ProcessSection';
import Hero from '../components/Home/Hero';
const Home = () => (
  <main>
    <IntroductionSection />
    <Hero/>
    <ProcessSection />
    <FeaturesSection />
    <QuickLinks />
    <CTASection />
  </main>
);

export default Home;
