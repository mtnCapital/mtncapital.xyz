import React from 'react';
import { Layout } from '@/components/Layout';

const TokenLaunchDisclaimer = () => {
  return (
    <Layout>
      <div className="container py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-mtn-dark">
            Token Launch Disclaimer
          </h1>
          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-lg shadow-sm p-8 md:p-10 text-mtn-dark">
              <p className="font-medium mb-6">
                By purchasing $MTN tokens ("Tokens"), you acknowledge and agree that:
              </p>
              
              <ol className="list-decimal pl-6 mb-8 space-y-4">
                <li className="pl-2">
                  You are purchasing an interest in and to the Mtn DAO DAO LLC, a limited liability company organized under the laws of the Republic of the Marshall Islands (the "DAO LLC").
                </li>
                <li className="pl-2">
                  You hereby agree (i) that your membership interests in the DAO LLC are governed by the terms of the Operating Agreement of the DAO LLC located at{' '}
                  <a href="/oa" className="text-mtn-blue hover:text-mtn-blue/80 underline">
                    https://www.mtncapital.xyz/oa
                  </a>{' '}
                  (the "OA"), and (ii) that by purchasing Tokens, you agree to the terms of the OA in the same manner as if you affixed your signature thereto.
                </li>
                <li className="pl-2">
                  The purchase of Tokens: (i) does not provide you with rights of any form with respect to mtnDAO LLC, a Delaware limited liability company (the "DE LLC") or its revenues or assets, including, without limitation, any voting, distribution, redemption, liquidation, proprietary (including all forms of intellectual property) or other financial or legal rights; (ii) is not a loan to the DE LLC; and (iii) does not provide you with any ownership, equity, or other interest in the DE LLC.
                </li>
              </ol>

              <p className="mb-8 text-justify">
                By purchasing Tokens or attempting to purchase Tokens, you acknowledge and agree that the DAO LLC and the DE LLC, and their respective officers, directors, employees, consultants, advisors and / or any of its agents shall not be responsible or liable for any losses resulting directly or indirectly from (i) any act or omission of you or your agent or any error, negligence, or misconduct of yours, (ii) failure of transmission or communication facilities, or (iii) any other cause or causes beyond the DAO LLC's and DE LLC's control, including, without limitation, for reasons such as acts of God, fire, flood, strikes, work stoppages, acts of terrorism, governmental or regulatory action, delays of suppliers or subcontractors, war or civil disturbance, self-regulatory organization actions, telecommunication line or computer hardware failures and any other telecommunication failures.
              </p>

              <p className="uppercase text-justify font-medium tracking-wide">
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAWS AND RULES, THE DAO LLC AND DE LLC, AND THEIR RESPECTIVE AFFILIATES, AND CONTROLLING PERSONS, DIRECTORS, SUPERVISORS, OFFICERS, EMPLOYEES AND AGENTS WILL NOT BE RESPONSIBLE FOR ANY LOSSES EXCEPT FOR ANY LOSSES TO THE EXTENT THAT SUCH LOSSES ARISE FROM THEIR RESPECTIVE FRAUD OR WILLFUL MISCONDUCT. IN NO EVENT SHALL THE DAO LLC AND DE LLC, AND THEIR RESPECTIVE AFFILIATES, AND CONTROLLING PERSONS, DIRECTORS, SUPERVISORS, OFFICERS, EMPLOYEES AND AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, EXEMPLARY OR PUNITIVE DAMAGES, OR DAMAGES OF ANY KIND FOR LOST PROFITS OR REVENUES, TRADING LOSSES, INACCURATE DISTRIBUTIONS, LOSS OF BUSINESS OR DATA, EVEN IF ADVISED OF THE POSSIBILITY OF ANY SUCH DAMAGES AND REGARDLESS OF WHETHER SUCH LIABILITY IS ASSERTED ON THE BASIS OF CONTRACT, TORT OR OTHERWISE.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TokenLaunchDisclaimer; 