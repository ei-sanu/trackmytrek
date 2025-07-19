import React from 'react';
import { FileText, CheckCircle, AlertCircle, Scale } from 'lucide-react';

export const Terms: React.FC = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-6">
            <FileText className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Terms of Service</h1>
          <p className="text-xl text-gray-300">
            Please read these terms carefully before using our platform.
          </p>
          <p className="text-sm text-gray-400 mt-2">Last updated: July 19th, 2025</p>
        </div>

        <div className="space-y-8">
          {/* Acceptance of Terms */}
          <div className="bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 bg-green-600/20 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">Acceptance of Terms</h2>
            </div>

            <div className="space-y-4 text-gray-300">
              <p>
                By accessing and using CareerGuidance ("we," "our," or "us"), you accept and agree to be bound by
                the terms and provision of this agreement.
              </p>
              <p>
                If you do not agree to abide by the above, please do not use this service.
              </p>
            </div>
          </div>

          {/* Use License */}
          <div className="bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 bg-blue-600/20 rounded-lg">
                <Scale className="w-5 h-5 text-blue-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">Use License</h2>
            </div>

            <div className="space-y-4 text-gray-300">
              <p>
                Permission is granted to temporarily download one copy of the materials on CareerGuidance's
                website for personal, non-commercial transitory viewing only.
              </p>

              <p>This is the grant of a license, not a transfer of title, and under this license you may not:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>modify or copy the materials</li>
                <li>use the materials for any commercial purpose or for any public display</li>
                <li>attempt to reverse engineer any software contained on the website</li>
                <li>remove any copyright or other proprietary notations from the materials</li>
              </ul>

              <p>
                This license shall automatically terminate if you violate any of these restrictions and may be
                terminated by us at any time. Upon terminating your viewing of these materials or upon the
                termination of this license, you must destroy any downloaded materials in your possession.
              </p>
            </div>
          </div>

          {/* User Accounts */}
          <div className="bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">User Accounts</h2>
            <div className="space-y-4 text-gray-300">
              <p>When you create an account with us, you must provide information that is accurate, complete, and current at all times.</p>

              <p>You are responsible for safeguarding the password and for maintaining the security of your account.</p>

              <p>You agree not to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Use another user's account without permission</li>
                <li>Create false identities or impersonate others</li>
                <li>Share your account credentials with others</li>
                <li>Use the platform for any illegal or unauthorized purpose</li>
              </ul>
            </div>
          </div>

          {/* Platform Usage */}
          <div className="bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Platform Usage</h2>
            <div className="space-y-4 text-gray-300">
              <p>Our platform provides career guidance, skill assessments, and project ideas. By using our services, you agree to:</p>

              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Use the platform only for lawful purposes</li>
                <li>Respect the intellectual property rights of others</li>
                <li>Not attempt to interfere with the platform's operation</li>
                <li>Not use automated systems to access the platform</li>
                <li>Provide honest and accurate information in assessments</li>
              </ul>
            </div>
          </div>

          {/* Disclaimers */}
          <div className="bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 bg-yellow-600/20 rounded-lg">
                <AlertCircle className="w-5 h-5 text-yellow-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">Disclaimers</h2>
            </div>

            <div className="space-y-4 text-gray-300">
              <p>
                The materials on CareerGuidance's website are provided on an 'as is' basis. CareerGuidance makes
                no warranties, expressed or implied, and hereby disclaims and negates all other warranties including
                without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose,
                or non-infringement of intellectual property or other violation of rights.
              </p>

              <p>
                Further, CareerGuidance does not warrant or make any representations concerning the accuracy, likely
                results, or reliability of the use of the materials on its website or otherwise relating to such materials
                or on any sites linked to this site.
              </p>
            </div>
          </div>

          {/* Limitations */}
          <div className="bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Limitations</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                In no event shall CareerGuidance or its suppliers be liable for any damages (including, without limitation,
                damages for loss of data or profit, or due to business interruption) arising out of the use or inability to
                use the materials on CareerGuidance's website, even if CareerGuidance or an authorized representative has
                been notified orally or in writing of the possibility of such damage.
              </p>

              <p>
                Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for
                consequential or incidental damages, these limitations may not apply to you.
              </p>
            </div>
          </div>

          {/* Termination */}
          <div className="bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Termination</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                We may terminate or suspend your account and bar access to the platform immediately, without prior notice
                or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not
                limited to a breach of the Terms.
              </p>

              <p>
                If you wish to terminate your account, you may simply discontinue using the platform or contact us to
                delete your account.
              </p>
            </div>
          </div>

          {/* Governing Law */}
          <div className="bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Governing Law</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction
                in which CareerGuidance operates, and you irrevocably submit to the exclusive jurisdiction of the courts
                in that state or location.
              </p>
            </div>
          </div>

          {/* Changes to Terms */}
          <div className="bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Changes to Terms</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision
                is material, we will provide at least 30 days notice prior to any new terms taking effect.
              </p>

              <p>
                What constitutes a material change will be determined at our sole discretion. By continuing to access or
                use our platform after any revisions become effective, you agree to be bound by the revised terms.
              </p>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};
