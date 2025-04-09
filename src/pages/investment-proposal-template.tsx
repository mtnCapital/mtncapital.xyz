import React from 'react';
import { Layout } from '@/components/Layout';

const InvestmentProposalTemplate = () => {
  return (
    <Layout>
      <div className="container py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-mtn-dark">
            Investment Proposal Template
          </h1>
          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-lg shadow-sm p-8 md:p-10 text-mtn-dark">
              <p className="mb-8">
                Investment proposals should be crafted similar to an investment memo. The proposal creator should think of themselves as an analyst/associate pitching an investment to a PM (portfolio manager) or GP (general partner) of a fund.
              </p>

              <p className="mb-8">
                When crafting proposals for mtnCapital, keep it simple and focused. Avoid overcomplicating things, often, the best theses and risks are straightforward. Proposals should be clear and digestible, with a max length of 2-3 pages (excluding images, diagrams, tables). Anything longer risks muddling the key points. Staying concise forces clarity and helps the DAO make better decisions.
              </p>

              <p className="mb-8">
                This suggested structure provides a comprehensive view of the opportunity and ensures that DAO participants have all the necessary information to evaluate the investment thoroughly.
              </p>

              <p className="mb-8">
                General structure and points will shift and may not be applicable depending on private round, OTC, or liquid investment proposal.
              </p>

              <div className="space-y-8">
                <section>
                  <h2 className="text-xl font-bold mb-4">1. Executive Summary:</h2>
                  <ul className="list-disc pl-6 space-y-4">
                    <li>
                      <strong>Brief Overview:</strong> A concise description of the investment opportunity, including the company or asset being considered, the size of the investment, and the primary thesis behind the opportunity.
                    </li>
                    <li>
                      <strong>Investment Rationale:</strong> Why is this investment being proposed? What is the expected upside or strategic benefit?
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-bold mb-4">2. Investment Thesis:</h2>
                  <ul className="list-disc pl-6 space-y-4">
                    <li>
                      <strong>Core Thesis:</strong> What makes this opportunity compelling? Why does mtnCapital believe this investment will provide value or returns? This is the heart of the memo.
                    </li>
                    <li>
                      <strong>Differentiation:</strong> What makes the company or asset stand out from competitors? Why is it uniquely positioned to succeed in its market?
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-bold mb-4">3. Market Opportunity:</h2>
                  <ul className="list-disc pl-6 space-y-4">
                    <li>
                      <strong>Market Size and Growth:</strong> Data on the target market's current size and projected growth. Is this a growing industry? What are the drivers of growth?
                    </li>
                    <li>
                      <strong>Market Trends:</strong> Relevant trends, such as consumer behavior shifts, regulatory changes, or technological advancements that impact the market.
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-bold mb-4">4. Company Overview:</h2>
                  <ul className="list-disc pl-6 space-y-4">
                    <li>
                      <strong>Company Background:</strong> A summary of the company's history, business model, and mission.
                    </li>
                    <li>
                      <strong>Product/Service:</strong> What is the product or service the company provides? What problem does it solve for customers?
                    </li>
                    <li>
                      <strong>Competitive Landscape:</strong> Overview of competitors and the company's position relative to them. How does the company differentiate itself?
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-bold mb-4">5. Financials:</h2>
                  <ul className="list-disc pl-6 space-y-4">
                    <li>
                      <strong>Revenue and Profitability:</strong> Historical financial performance, including revenue, profit margins, and key financial metrics.
                    </li>
                    <li>
                      <strong>Projections:</strong> Financial forecasts for the next 3-5 years. What does growth look like, and what are the assumptions behind the projections?
                    </li>
                    <li>
                      <strong>Valuation:</strong> Current valuation of the company and the basis for it. If applicable, include the valuation multiple or method used to calculate it.
                    </li>
                    <li>
                      <strong>Capital Structure:</strong> Information about the company's debt and equity/tokeny, and any upcoming funding rounds.
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-bold mb-4">6. Risks and Mitigants:</h2>
                  <ul className="list-disc pl-6 space-y-4">
                    <li>
                      <strong>Key Risks:</strong> What are the primary risks associated with this investment? This could include market risk, operational risk, competition, regulatory risk, etc.
                    </li>
                    <li>
                      <strong>Mitigation Strategies:</strong> How will these risks be managed or mitigated? What is the strategy for dealing with these risks?
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-bold mb-4">7. Exit Strategy:</h2>
                  <ul className="list-disc pl-6 space-y-4">
                    <li>
                      <strong>Exit Options:</strong> What are the potential exit strategies? IPO, acquisition, secondary market sales, etc.?
                    </li>
                    <li>
                      <strong>Exit Timeline:</strong> When do you expect mtnCapital to realize a return on the investment? What is the time horizon for the exit?
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-bold mb-4">8. Investment Terms:</h2>
                  <ul className="list-disc pl-6 space-y-4">
                    <li>
                      <strong>Investment Size:</strong> How much capital is being requested, and how will it be allocated?
                    </li>
                    <li>
                      <strong>Ownership Structure:</strong> How much equity or stake is mtnCapital expected to receive for the investment?
                    </li>
                    <li>
                      <strong>Governance Rights (if applicable):</strong> Will mtnCapital have a board seat, voting rights, or other governance-related rights?
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-bold mb-4">9. Team and Management:</h2>
                  <ul className="list-disc pl-6 space-y-4">
                    <li>
                      <strong>Management Team:</strong> Who are the key members of the company's team? What are their backgrounds and relevant experience?
                    </li>
                    <li>
                      <strong>Team Strengths and Weaknesses:</strong> What are the strengths and weaknesses of the management team, and how does it impact the investment case?
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-bold mb-4">10. Alignment with Firm Strategy:</h2>
                  <ul className="list-disc pl-6 space-y-4">
                    <li>
                      <strong>Strategic Fit:</strong> How does this investment align with mtnCapital's overall investment strategy or goals? Does it fit within mtnCapital's thesis or portfolio strategy?
                    </li>
                    <li>
                      <strong>Value Added:</strong> What value can mtnCapital add to this investment beyond capital? For example, operational expertise, strategic connections, or industry experience.
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-bold mb-4">11. Conclusion and Recommendation:</h2>
                  <ul className="list-disc pl-6 space-y-4">
                    <li>
                      <strong>Summary of the Case:</strong> A summary of why this investment is attractive, based on the thesis, opportunity, and financials.
                    </li>
                    <li>
                      <strong>Recommendation:</strong> Whether to proceed with the investment or not, based on the analysis provided.
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-bold mb-4">Optional (if relevant):</h2>
                  <ul className="list-disc pl-6 space-y-4">
                    <li>
                      <strong>Due Diligence:</strong> Details about the due diligence conducted (e.g., legal, market, audits).
                    </li>
                    <li>
                      <strong>Comparison to Similar Investments:</strong> If relevant, comparison to other investments in the same sector or industry to highlight why this opportunity stands out.
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default InvestmentProposalTemplate; 