import React from 'react';
import { Layout } from '@/components/Layout';
import { Link } from 'react-router-dom';

const Resources = () => {
  return (
    <Layout>
      <div className="container py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-12 text-mtn-dark">
            Governance Resources
          </h1>
          
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-6 text-mtn-dark">
                Requests for Proposal (RFP)
              </h2>
              <div className="prose prose-lg max-w-none">
                <ul className="list-none p-0 space-y-4">
                  <li>
                    <Link 
                      to="/resources/idle-capital-rfp" 
                      className="text-mtn-blue hover:text-mtn-purple transition-colors flex items-center"
                    >
                      Idle Capital Allocation Strategy
                      <svg className="w-5 h-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 text-mtn-dark">
                Templates
              </h2>
              <div className="prose prose-lg max-w-none">
                <ul className="list-none p-0 space-y-4">
                  <li>
                    <Link 
                      to="/resources/investment-proposal-template" 
                      className="text-mtn-blue hover:text-mtn-purple transition-colors flex items-center"
                    >
                      Investment Proposal Template
                      <svg className="w-5 h-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 text-mtn-dark">
                Proposals
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-mtn-blue">
                  Coming soon...
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Resources; 