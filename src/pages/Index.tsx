
import React from 'react';
import { Layout } from '@/components/Layout';
import { Hero } from '@/components/Hero';
import { FeaturedLinks } from '@/components/FeaturedLinks';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <FeaturedLinks />
    </Layout>
  );
};

export default Index;
