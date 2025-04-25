import React from 'react';
import { AppHeader } from '@/components/app-header'; // Updated import to named import
import { NavFooter } from '@/components/nav-footer'; // Updated import to named import
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Home: React.FC = () => {
  return (
    <>
      <AppHeader />
      <div className="container mx-auto py-12 px-4">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Rate Anything. Discover Everything.</h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            yRate is a social-first platform where you can rate products, brands, services, and experiences. Share your honest feedback, explore reviews from others, and find the best alternatives.
          </p>
          <Button size="lg">Get Started</Button>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Share Your Voice</CardTitle>
              </CardHeader>
              <CardContent>
                Share structured ratings and detailed reviews with text and media.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Discover & Explore</CardTitle>
              </CardHeader>
              <CardContent>
                Find honest reviews, compare items side-by-side, and discover new alternatives.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Build Your Reputation</CardTitle>
              </CardHeader>
              <CardContent>
                Follow other reviewers, engage with content, and build your profile.
              </CardContent>
            </Card>
            {/* Add more feature cards here if needed */}
          </div>
        </section>

        {/* AI Integration Section */}
        <section className="bg-gray-100 py-16 mb-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Powered by AI</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              yRate leverages core AI integration for enhanced review analysis, summarization, personalized recommendations, and more, providing deeper insights for both users and businesses.
            </p>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Rating?</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Join yRate today and become part of a community that values honest feedback and discovery.
          </p>
          <Button size="lg">Sign Up Now</Button>
        </section>
      </div>
      <NavFooter
        items={[
          { title: 'Privacy Policy', href: '#' },
          { title: 'Terms of Service', href: '#' },
        ]}
      />
    </>
  );
};

export default Home;
