import React from 'react';
import { Layout } from '@/components/Layout';

const IdleCapitalRFP = () => {
  return (
    <Layout>
      <div className="container py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-mtn-dark">
            Request for Proposal (RFP) - Idle Capital Allocation Strategy for mtnCapital DAO
          </h1>
          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-lg shadow-sm p-8 md:p-10 text-mtn-dark">
              <section className="mb-8">
                <h2 className="text-xl font-bold mb-4">Overview:</h2>
                <p>
                  mtnCapital is an investment DAO focused on the Solana ecosystem. We have recently completed a capital raise in USDC and now hold a portion of idle capital in our treasury. To prevent this capital from stagnating or losing value due to inflation, we are issuing this RFP to identify the best strategies for deploying this idle capital in a way that generates additional value for the DAO.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-bold mb-4">Objective:</h2>
                <p>
                  The goal of this RFP is to identify viable, low-risk, and value-generating strategies for utilizing the idle USDC capital in the treasury. We seek in-depth proposals that demonstrate a clear understanding of market conditions, risk management, and how to generate returns during the interim period between major capital investments.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-bold mb-4">Proposal Requirements:</h2>
                <p className="mb-4">
                  We invite proposals that detail specific strategies and mechanisms for deploying the idle USDC capital. Your proposal should cover, but is not limited to, the following:
                </p>

                <div className="space-y-6">
                  <section>
                    <h3 className="text-lg font-semibold mb-3">1. Capital Deployment Strategy:</h3>
                    <div className="pl-6">
                      <h4 className="font-semibold mb-2">a. Primary Strategy:</h4>
                      <p className="mb-2">Please outline your recommended strategy for the deployment of the idle capital. This could include (but is not limited to):</p>
                      <ul className="list-disc pl-6 mb-4">
                        <li>Depositing the USDC into a Solana-based lending/borrowing protocol to earn interest.</li>
                        <li>Converting USDC into assets like Bitcoin or other tokens to generate value through price appreciation.</li>
                        <li>Utilizing a combination of methods to balance risk and return.</li>
                      </ul>

                      <h4 className="font-semibold mb-2">b. Rationale:</h4>
                      <p>Explain why this strategy is optimal for the DAO, considering both risk management and the goal of maximizing returns.</p>
                    </div>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold mb-3">2. Risk Assessment and Mitigation:</h3>
                    <div className="pl-6">
                      <h4 className="font-semibold mb-2">a. Market Risk:</h4>
                      <p className="mb-4">What potential market risks are involved in your proposed strategy? How will these risks be mitigated?</p>

                      <h4 className="font-semibold mb-2">b. Protocol Risk:</h4>
                      <p className="mb-4">If utilizing third-party protocols, what are the risks related to smart contract vulnerabilities, counterparty risks, or platform failures? How will these be addressed?</p>

                      <h4 className="font-semibold mb-2">c. Inflation and Liquidity:</h4>
                      <p>How will your strategy protect the capital from losing value due to inflation or lack of liquidity?</p>
                    </div>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold mb-3">3. Expected Return on Investment (ROI):</h3>
                    <div className="pl-6">
                      <p className="mb-4"><span className="font-semibold">a.</span> Provide estimated returns based on your proposed strategy. What are the expected short-term and long-term yields, and how do they compare to traditional savings or other investment vehicles?</p>
                      <p><span className="font-semibold">b.</span> If applicable, provide data or past performance metrics from similar strategies or protocols.</p>
                    </div>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold mb-3">4. Liquidity and Exit Strategy:</h3>
                    <div className="pl-6">
                      <p className="mb-4"><span className="font-semibold">a.</span> How will liquidity be managed? Will the capital be easily accessible if the DAO needs to make a new investment quickly?</p>
                      <p><span className="font-semibold">b.</span> What is your exit strategy if the capital is needed for new investments, and how quickly can funds be liquidated?</p>
                    </div>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold mb-3">5. Implementation Timeline:</h3>
                    <div className="pl-6">
                      <p className="mb-4"><span className="font-semibold">a.</span> Provide a timeline for the implementation of your proposed strategy, including any integration steps with external protocols or platforms.</p>
                      <p><span className="font-semibold">b.</span> Include any necessary actions the DAO needs to take, such as governance approval or technical integrations.</p>
                    </div>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold mb-3">6. Governance and Reporting:</h3>
                    <div className="pl-6">
                      <p className="mb-4"><span className="font-semibold">a.</span> How will the DAO be kept informed of the progress and performance of the capital deployment?</p>
                      <p><span className="font-semibold">b.</span> What kind of reporting and transparency will be provided, and how frequently will updates be given to ensure the DAO has full visibility?</p>
                    </div>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold mb-3">7. Team and Expertise:</h3>
                    <div className="pl-6">
                      <p><span className="font-semibold">a.</span> Provide background information on your team or expertise, demonstrating your ability to manage the proposed strategy effectively.</p>
                    </div>
                  </section>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-bold mb-4">Submission Instructions:</h2>
                <ul className="list-disc pl-6 mb-4">
                  <li>Submit your detailed proposal to [Insert Submission Platform/Email].</li>
                  <li>The DAO will review all proposals and open them up for discussion before initiating market on final decision</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-bold mb-4">Suggested Evaluation Criteria:</h2>
                <p className="mb-4">Proposals will be evaluated by the community based on the following prior to governance decision market:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Feasibility and scalability of the strategy.</li>
                  <li>Alignment with mtnCapital's goals of value generation and risk management.</li>
                  <li>Transparency and clarity of the proposed plan.</li>
                  <li>Proven experience or data backing the proposed strategy.</li>
                </ul>
              </section>

              <p className="mt-8">
                We look forward to receiving your proposals and thank you for your time and effort in helping mtnCapital achieve its mission.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IdleCapitalRFP; 