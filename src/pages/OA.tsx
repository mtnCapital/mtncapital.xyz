
import React from 'react';
import { Layout } from '@/components/Layout';
import { FileText, Download } from 'lucide-react';

const OA = () => {
  return (
    <Layout>
      <div className="container py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-mtn-dark">
            Operating Agreement
          </h1>
          <div className="bg-white border border-mtn-light rounded-lg overflow-hidden shadow-sm">
            <div className="p-8 flex flex-col items-center justify-center text-center">
              <FileText className="h-16 w-16 text-mtn-blue mb-4" />
              <h2 className="text-xl font-medium text-mtn-dark mb-2">
                mtnCapital Operating Agreement
              </h2>
              <p className="text-mtn-blue mb-6">
                This document contains the official operating agreement for mtnCapital.
              </p>
              <div className="flex items-center justify-center p-4 bg-mtn-light rounded-md w-full">
                <p className="text-sm text-mtn-blue">
                  <span className="font-medium">Placeholder for PDF file:</span> mtnCapital_OA.pdf
                </p>
              </div>
              <p className="mt-6 text-sm text-mtn-blue">
                To download this document, please click the button below.
              </p>
              <button 
                className="mt-4 inline-flex items-center px-4 py-2 rounded-md bg-mtn-darkpurple text-white hover:bg-mtn-purple transition-colors"
                onClick={() => alert("This is a placeholder. The actual PDF file would be downloaded in the production version.")}
              >
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OA;
