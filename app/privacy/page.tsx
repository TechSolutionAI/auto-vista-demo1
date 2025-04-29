"use client"

import { useState, useEffect } from "react"

export default function PrivacyPolicyPage() {
  const [mounted, setMounted] = useState(false)

  // Only render content after mounting to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  // Show a minimal UI while loading to avoid hydration issues
  if (!mounted) {
    return (
      <div className="container py-8">
        <div className="h-8 w-3/4 bg-muted rounded mb-6"></div>
        <div className="h-4 w-full bg-muted rounded"></div>
      </div>
    )
  }

  return (
    <div className="container py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">PRIVACY POLICY OF NORTHWEST MOTORS INC</h1>

        <div className="prose prose-slate dark:prose-invert max-w-none">
          <h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>
          <p className="mb-4">
            Use of this website acknowledges your consent to this Privacy Policy for Northwest Motors Inc and Dealer Car
            Search. Protecting your private information is our priority and we are committed to safeguarding your
            privacy online. This Privacy Policy explains what personal information we may collect about you through our
            website, when we collect it, how we may use it, who we may disclose it to, and is intended to help you
            understand the terms and conditions surrounding the collection and use of your data.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Personal Information We Collect</h3>
          <p className="mb-4">
            Our primary goal in collecting your personal information is to enable us to personalize your interactions
            and experiences with our website.
          </p>

          <p className="mb-4">
            We may collect information that identifies, relates to, describes, references, is capable of being
            associated with, or could reasonably be linked, directly or indirectly, to you ("Personal Information"). In
            particular, our website has collected the following categories of Personal Information within the last
            twelve (12) months:
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border p-3 text-left">Categories of Personal Information</th>
                  <th className="border border-border p-3 text-left">Types of Personal Information Collected</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border p-3 align-top">A. Identifiers</td>
                  <td className="border border-border p-3">
                    Name, telephone number, postal address, e-mail address, social security number, date of birth,
                    account name, IP address, visitor ID, or other information you voluntarily provide to initiate a
                    purchase transaction or to opt in to receiving future communications from us.
                  </td>
                </tr>
                <tr>
                  <td className="border border-border p-3 align-top">
                    B. Personal information that identifies, relates to, describes, or is capable of being associated
                    with, a particular individual, including, but not limited to, his or her name, signature, social
                    security number, physical characteristics or description, address, telephone number, passport
                    number, driver's license or state identification card number, insurance policy number, education,
                    employment, employment history, bank account number, credit card number, debit card number, or any
                    other financial information.
                  </td>
                  <td className="border border-border p-3">
                    Name, address, telephone number, physical address, zip code, email address, company name, credit
                    card number, income, or other financial information you may provide to obtain a quote or complete a
                    purchase transaction.
                  </td>
                </tr>
                <tr>
                  <td className="border border-border p-3 align-top">C. Commercial information</td>
                  <td className="border border-border p-3">
                    Housing information, products or services purchased, and purchasing and consuming histories or
                    tendencies.
                  </td>
                </tr>
                <tr>
                  <td className="border border-border p-3 align-top">D. Internet or other similar network activity</td>
                  <td className="border border-border p-3">
                    Type and version of browser, service provider, device identification information, any search engine
                    or other referring site you may have used to locate our website, and information regarding your
                    interaction with the website, application, or advertisements.
                  </td>
                </tr>
                <tr>
                  <td className="border border-border p-3 align-top">E. Geolocation data.</td>
                  <td className="border border-border p-3">
                    Signals from your device that allow us to determine your location, with reasonable precision.
                  </td>
                </tr>
                <tr>
                  <td className="border border-border p-3 align-top">
                    F. Professional or employment-related information.
                  </td>
                  <td className="border border-border p-3">
                    Occupation, name of employer, employment status, employment history, or business email address.
                  </td>
                </tr>
                <tr>
                  <td className="border border-border p-3 align-top">
                    G. Inferences drawn from other Personal Information.
                  </td>
                  <td className="border border-border p-3">
                    Information regarding your interaction with the website, application, or advertisements; browsing
                    history
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold mt-6 mb-3">How Your Personal Information Is Collected</h3>
          <p className="mb-4">
            We collect Personal Information that you voluntarily give or have given through some other direct contact
            from you. When you access our website, we may also passively or automatically collect additional Personal
            Information and non-personally identifiable data regarding the means you use to access our website and the
            content you view when you use our website, for example, via cookies on our website and/or device
            fingerprinting.
          </p>

          <h4 className="text-lg font-semibold mt-4 mb-2">Requests for Unit Quotes</h4>
          <p className="mb-4">
            If you request a unit price quote, you may be asked to provide Personal Information such as your name,
            address, telephone number, zip code, email address and other transactional information related to the
            desired unit purchase. Your Personal Information may be used to contact you with the requested quote or to
            request additional information. While not required, you may voluntarily provide financial information so
            that a determination can be made regarding units that meet the parameters of your requested unit quote or
            your pre-qualification for financing, if interested.
          </p>

          <h4 className="text-lg font-semibold mt-4 mb-2">Monthly Payment Calculations</h4>
          <p className="mb-4">
            If you use the digital retailing tool to calculate your estimated monthly payment, you are not required to
            provide Personal Information unless you decide to contact the dealer to obtain additional information about
            the unit you are interested in. If you decide to contact the dealer, you will be asked to provide your name,
            email address, shipping address and phone number. Your Personal Information will be used to contact you
            regarding your inquiry.
          </p>

          <h4 className="text-lg font-semibold mt-4 mb-2">Log Files</h4>
          <p className="mb-4">
            We use IP addresses to analyze trends, administer the site, track user's movement, and gather broad
            demographic and geographic information for aggregate use. IP addresses are only linked to Personal
            Information if you submit a form requesting additional information.
          </p>

          <h4 className="text-lg font-semibold mt-4 mb-2">Surveys and Contests</h4>
          <p className="mb-4">
            From time to time, this website may offer contests or request information from you via surveys to conduct
            research about your opinion of current services or of potential new services that may be offered.
            Participation in these surveys or contests is completely voluntary and you are not obligated to disclose the
            Personal Information requested such as your name, email address, mailing address, or demographic information
            (i.e., age, zip code). If you elect to participate in a contest, the contact information provided will only
            be used to notify the winners and award prizes. Survey information will only be used for purposes of
            monitoring or improving the use and satisfaction of this website.
          </p>

          <h4 className="text-lg font-semibold mt-4 mb-2">YouTube</h4>
          <p className="mb-4">
            Our website may access or use YouTube API Services. By using these services, you agree to be bound by
            YouTube's Terms of Service and the Google Privacy Policy. Use of YouTube's API Services through our website
            may result in the creation and storage of a token allowing the upload of videos for our users. Users will
            log into Google API's using the OAuth 2.0 protocol. After logging in, the user may grant permission for us
            to access Authorized Data in the form of a token that permits us access to the user's video feed for the
            purpose of posting user videos. Users can revoke access to their Authorized Data via the Google security
            settings page. Users may contact privacy@leadventure.com with any questions or concerns about our privacy
            practices.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">
            Information We Collect Through Automatic Data Collection Technologies
          </h3>
          <p className="mb-4">
            As you navigate through and interact with our website, we may use automatic data collection technologies to
            collect certain information about your equipment, browsing actions, and patterns, including:
          </p>

          <ul className="list-disc pl-6 mb-4">
            <li>
              Details of your visits to our website, including traffic data, location data, logs, and other
              communication data and the resources that you access and use on the website.
            </li>
            <li>
              Store information about your preferences, allowing us to customize our website according to your
              individual interests.
            </li>
            <li>Speed up your searches.</li>
            <li>Recognize you when you return to our website.</li>
          </ul>

          <p className="mb-4">The technologies we use for this automatic data collection may include:</p>

          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>Cookies (or browser cookies).</strong> Our website may use "cookies" to help you personalize your
              online experience. A cookie is a text file that is placed on your hard disk by a web page server. Cookies
              cannot be used to run programs or deliver viruses to your computer. Cookies are uniquely assigned to you
              and can only be read by a web server in the domain that issued the cookie to you.
            </li>
            <li>
              <strong>Web Beacons.</strong> Pages of our website and our emails may contain small electronic files known
              as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit us, for
              example, to count users who have visited those pages or opened an email and for other related website
              statistics (for example, recording the popularity of certain website content and verifying system and
              server integrity).
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Use of Your Personal Information</h3>
          <p className="mb-4">
            We may use or disclose the Personal Information we collect for one or more of the following business
            purposes:
          </p>

          <ul className="list-disc pl-6 mb-4">
            <li>
              to operate our website and deliver the products and/or services you have requested, and for marketing
              purposes. If you do not provide Personal Information we ask for, it may delay or prevent us from providing
              products and/or services to you.
            </li>
            <li>
              for more than one legitimate interest depending on the specific purpose for which we are using your
              Personal Information. For example, if you complete an online purchase, we may collect your information to
              perform our contract with you, but we may also maintain your Personal Information after your transaction
              is complete so that we can quickly and easily respond to any questions about your order. As a result, our
              collection and processing of your Personal Information is based upon your consent, our need to perform a
              contract, our obligations under law, and/or our legitimate interest in conducting our business. A
              legitimate interest is when we have a business or commercial reason to use your information, so long as
              this is not overridden by your own rights and interests.
            </li>
            <li>
              to help diagnose problems with our server, administer the website, conduct attribution reporting,
              personalize user experiences (including advertising or certain targeted features, such as showcasing
              previously viewed units), and compile broad statistical data.
            </li>
            <li>
              to share data with trusted partners or advertisers to help perform statistical analysis, to perform ad
              measurement services on our behalf, send you email or postal mail, provide customer support, to arrange
              for deliveries, or for marketing purposes. All such third parties are prohibited from using your Personal
              Information except to provide these services to us, and they are required to maintain the confidentiality
              of your information.
            </li>
            <li>
              may share Personal Information with third parties or allow them to collect Personal Information from our
              website or services if those third parties are authorized service providers or business partners who have
              agreed to our contractual limitations as to their retention, use, and disclosure of such Personal
              Information.
            </li>
            <li>
              to share lead data or analytics with original equipment manufacturers with whom we partner. This data may
              be shared with original equipment manufacturers so they can perform statistical analysis and measure
              dealer performance.
            </li>
            <li>to create, maintain, customize, and secure your account with us.</li>
            <li>to inform you of other products or services available from us or our affiliates.</li>
            <li>
              to contact you via surveys to conduct research about your opinion of current services or of potential new
              services that may be offered.
            </li>
            <li>to assist you in locating a unit or dealer near you.</li>
            <li>
              to respond to you regarding the reason you contacted us, or future marketing. Unless you ask us not to, we
              may contact you via phone or email in the future to tell you about specials, new products or services,
              changes to this Privacy Policy, or to send you website and service announcement updates which contain
              important information about the service. We may also communicate with you to provide requested services
              and in regard to issues relating to their account via e-mail or phone.
            </li>
            <li>
              certain navigational information about where you go on our website, in order to determine what services or
              products are the most popular. This data is used to deliver customized content and advertising within our
              website to customers whose behavior indicates that they are interested in a particular subject area. Such
              information is gathered by us in the aggregate and will not be associated with a specific individual
              except in connection with specific services and operations such as attribution reporting and maintenance
              of customer accounts.
            </li>
            <li>
              to respond to law enforcement requests and as required by applicable law, court order, or governmental
              regulations.
            </li>
            <li>
              As described to you when collecting your Personal Information or as otherwise set forth in the CCPA or
              CPRA
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">
            Third-Party Use of Cookies and Other Tracking Technologies
          </h3>
          <p className="mb-4">
            Some content or applications, including advertisements, on the website are served by third-parties,
            including advertisers, ad networks and servers, content providers, and application providers. These third
            parties may use cookies alone or in conjunction with web beacons or other tracking technologies to collect
            information about you when you use our website. The information they collect may be associated with your
            Personal Information or they may collect information, including Personal Information, about your online
            activities over time and across different websites and other online services. They may use this information
            to provide you with interest-based (behavioral) advertising or other targeted content.
          </p>

          <p className="mb-4">
            We do not control these third parties' tracking technologies or how they may be used. If you have any
            questions about an advertisement or other targeted content, you should contact the responsible provider
            directly. For information about how you can opt out of receiving targeted advertising from many providers,
            see the How to Exercise Your Rights and Contact Information section below.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Who We Share Your Personal Information With</h3>
          <p className="mb-4">
            We do not sell, rent or lease our customer lists to third parties. We may share your Personal Information
            with:
          </p>

          <ul className="list-disc pl-6 mb-4">
            <li>Our affiliates;</li>
            <li>Service providers we use to help deliver our services to you, such as payment service providers;</li>
            <li>
              to share data with trusted partners or advertisers to help perform statistical analysis, send you email or
              postal mail, provide customer support, to arrange for deliveries, or for marketing purposes. All such
              third parties are prohibited from using your Personal Information except to provide these services to us,
              and they are required to maintain the confidentiality of your information.
            </li>
            <li>
              Other third parties we use to help us run our business, such as marketing agencies and data aggregators;
            </li>
            <li>
              Third parties approved by you, including social media sites you choose to link your account to or
              third-party payment providers;
            </li>
          </ul>

          <p className="mb-4">
            In the preceding twelve (12) months, we've disclosed the following categories of Personal Information for a
            business purpose:
          </p>

          <ul className="list-disc pl-6 mb-4">
            <li>Category A: Identifiers.</li>
            <li>
              Category B: Personal information that identifies, relates to, describes, or is capable of being associated
              with, a particular individual.
            </li>
            <li>Category C: Commercial information.</li>
            <li>Category D: Internet or other similar network activity.</li>
            <li>Category E: Geolocation data.</li>
            <li>Category F: Professional or employment-related information.</li>
            <li>Category G: Inferences drawn from other Personal Information.</li>
          </ul>

          <p className="mb-4">
            If we are required to do so by law, or in the good faith belief that such action is necessary, we will
            disclose your Personal Information, without notice, to: (a) conform to the edicts of the law or comply with
            legal process served on our company or the website; (b) protect and defend the rights or property of our
            company; and (c) act under exigent circumstances to protect the personal safety of users of our website, or
            the public.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Data Retention</h3>
          <p className="mb-4">
            We retain Personal Information we collect from you for the period of time that is necessary to fulfill the
            purposes outlined in this Privacy Policy (for example, to provide you with a service you have requested or
            to comply with applicable legal, tax or accounting requirements), unless a longer retention period is
            required or permitted by law.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Access to Third Party Websites</h3>
          <p className="mb-4">
            This website may contain links to other sites. Please be aware that we are not responsible for the privacy
            practices of such other sites. We encourage our users to read the privacy statements of every website that
            collects personally identifiable information. This privacy statement applies solely to information collected
            by this website.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Security</h3>
          <p className="mb-4">
            We take precautions to protect your information. When you submit sensitive information via our website, your
            information is protected both online and offline. Whenever we collect sensitive information, that
            information is encrypted and transmitted to us in a secure way. We do not collect sensitive Personal
            Information in online forms you may voluntarily complete to indicate your interest in a unit or service. The
            computers and servers in which we store Personal Information are kept in a secure environment.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Children Under Sixteen</h3>
          <p className="mb-4">
            We believe that it is especially important to protect children's privacy online. We do not knowingly collect
            Personal Information from children under the age of sixteen, regardless of the source. Nor do we share with
            any third party for any purpose whatsoever Personal Information from website visitors younger than sixteen
            years of age. If you are under the age of sixteen, you must ask your parent or guardian for permission to
            use this website.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Your Rights</h3>
          <p className="mb-4">
            You may have certain rights relating to your personal information, subject to local data protection laws.
            Depending on applicable state or federal laws these rights may include the right to:
          </p>

          <ul className="list-disc pl-6 mb-4">
            <li>Access your personal information held by us;</li>
            <li>Learn more about how we process your personal information;</li>
            <li>Have us correct inaccurate personal information;</li>
            <li>Erase or delete your personal information;</li>
            <li>Restrict our processing of your personal information;</li>
            <li>Receive the personal information you provided to us;</li>
            <li>Transfer your personal information to another controller, to the extent possible;</li>
            <li>Object to any processing of your personal information;</li>
            <li>Opt out of certain disclosures of your personal information to third parties;</li>
            <li>
              If you're under the age of 16, or such other applicable age of consent for privacy purposes in relevant
              individual jurisdictions, opt in to certain disclosures of your personal information to third parties;
            </li>
            <li>Not be discriminated against for exercising your rights described in this Section;</li>
            <li>
              Not be subject to a decision based solely on automated processing (including profiling) that produces
              legal effects concerning you or similarly significantly affects you; and
            </li>
            <li>
              Withdraw your consent at any time (to the extent we base processing on consent), without affecting the
              lawfulness of the processing based on such consent before its withdrawal.
            </li>
          </ul>

          <p className="mb-4">
            For Oregon Residents, at our option, we may provide you with a list of specific third parties, other than
            natural persons, to which we have disclosed personal data.
          </p>

          <p className="mb-4">
            Where we process your personal information for direct marketing or targeted advertising purposes, you can
            exercise your right to opt-out at any time to such processing without having to provide any specific reason
            for such objection.
          </p>

          <p className="mb-4">
            To exercise your rights, please see the information in the "How to Contact Us" Section below. Your personal
            information may be processed in responding to these rights. We try to respond to all legitimate requests
            within one month unless otherwise required by law, and will contact you if we need additional information
            from you in order to honor your request or verify your identity. Occasionally it may take us longer than a
            month, taking into account the complexity and number of requests we receive.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Opt-Out & Unsubscribe</h3>
          <p className="mb-4">
            We respect your privacy and give you an opportunity to opt-out of receiving announcements of certain
            information at any time. Users may opt-out of receiving marketing communications from us by contacting us
            via email at privacy@leadventure.com or call us toll-free at 888-263-7201. Users may also unsubscribe from
            newsletters by using the unsubscribe link at the bottom of the newsletter. Universal Opt-Out Mechanisms will
            be honored to opt you out of the collection of your Personal Information for targeted advertising purposes.
            Alternatively, if you wish to opt-out of the use of your Personal Information for targeted advertising
            purposes, you may update your preferences by visiting the "Your Privacy Choices" link in the website footer.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">SMS Texting Services</h3>
          <p className="mb-4">
            By providing your phone number, you consent to receive SMS messages from us. The information you consent to
            share in relation to our SMS texting service may be used to send you text notifications, conversational
            texts related to your inquiry, marketing messages, and requests for reviews. No mobile information will be
            shared with third parties or affiliates for marketing or promotional purposes. Information sharing to
            subcontractors in support services (e.g., customer service) is permitted. Message frequency varies per user.
            Message and data rates may apply. Text HELP for help. Text STOP to unsubscribe. Carriers are not liable for
            delayed or undelivered messages.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Accessing this Website</h3>
          <p className="mb-4">
            This website is hosted on servers located in the United States. As such, your connection will be through and
            to servers located in the United States. Any Personal Information you provide during your visit will be
            processed and maintained on our web servers and other internal systems located within the United States. By
            using this website, you consent to the collection and use of your anonymous data, Personal Information,
            and/or form submissions for the purposes of analytics and/or advertising.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Updates to this Privacy Policy</h3>
          <p className="mb-4">
            We reserve the right to change and update this Privacy Policy. These changes will be made when appropriate,
            and in a timely manner. We encourage you to examine our Privacy Policy from time to time to ensure you are
            aware of any changes we may have made. Your continued use of our website following an update to the Privacy
            Policy indicates your agreement to the same.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">How to Exercise Your Rights and Contact Information</h3>
          <p className="mb-4">
            If your Personal Information changes (i.e., email address, mailing address), or if you no longer desire to
            receive information from us, we will endeavor to correct, update, or remove your Personal Information from
            our records. If you have any questions or comments about this Privacy Policy, the ways in which we collect
            and use your information described above, your choices and rights regarding such use, or wish to appeal a
            decision, please do not hesitate to contact us at privacy@leadventure.com.
          </p>

          <ul className="list-disc pl-6 mb-4">
            <li>If you contact us directly via email, please include the name of the dealership in your email.</li>
            <li>
              We may require that you provide us with certain information in order to verify your identity. We may ask
              you to provide:
              <ul className="list-disc pl-6 mt-2">
                <li>Enough information to identify you (e.g. your full name, email address and phone number)</li>
                <li>
                  A description of what right you want to exercise and the information to which your request relates.
                </li>
              </ul>
            </li>
            <li>
              You may also opt out of receiving promotional communications at any time by using the "unsubscribe" link
              in emails or "STOP" number in texts.
            </li>
            <li>
              To opt-out of the use of your Personal Information for targeted advertising purposes, you may update your
              preferences by visiting the "Your Privacy Choices" link in the website footer.
            </li>
            <li>
              If you wish to exercise your rights under applicable privacy laws, please contact us at
              privacy@leadventure.com or call 888-263-7201.
            </li>
          </ul>

          <p className="mb-4">
            If we're not able to verify your identity or verify that the person making the request is the person about
            whom we collected the information, we are not obligated to make a data access or data portability
            disclosure.
          </p>

          <p className="mb-4">
            Any Personal Information we collect from you to verify your identity in connection with your request will be
            used solely for the purposes of verification.
          </p>

          <p className="mb-4">
            To further assist you in exercising your rights regarding the collection and use of your Personal
            Information:
          </p>

          <ul className="list-disc pl-6 mb-4">
            <li>
              You can find out how to manage or delete the information Meta collects by visiting: Meta Privacy Policy -
              Privacy Center | Manage your privacy on Facebook, Instagram and Messenger
            </li>
            <li>You can opt out of Google user-based advertising functions by visiting: Ad Settings (google.com)</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Privacy Notice for California Residents</h3>
          <p className="mb-4">
            This section applies solely to all visitors, users, and others who reside in the State of California and is
            provided compliance with the California Consumer Privacy Act, as amended by the California Privacy Rights
            Act ("CCPA"). Any terms defined in the CCPA have the same meaning when used in this Notice.
          </p>

          <p className="mb-4">
            Under the CCPA, we are required to disclose whether we sell Personal Information. We do not sell Personal
            Information, but we may share Personal Information with third parties or allow them to collect Personal
            Information from our website or services if those third parties are authorized service providers or business
            partners who have agreed to our contractual limitations as to their retention, use, and disclosure of such
            Personal Information, or if you direct us to disclose your Personal Information to third parties.
          </p>

          <p className="mb-4">California law grants you the right to know:</p>

          <ul className="list-disc pl-6 mb-4">
            <li>The categories of Personal Information we have collected about you;</li>
            <li>The categories of sources from which the Personal Information is collected;</li>
            <li>Our business or commercial purpose for collecting Personal Information;</li>
            <li>The categories of third parties with whom we share Personal Information, if any; and</li>
            <li>The specific pieces of Personal Information we have collected about you.</li>
          </ul>

          <p className="mb-4">Please note that we are not required to:</p>

          <ul className="list-disc pl-6 mb-4">
            <li>
              Retain any Personal Information about you that was collected for a single one-time transaction if, in the
              ordinary course of business, that information about you is not retained;
            </li>
            <li>
              Reidentify or otherwise link any data that, in the ordinary course of business, is not maintained in a
              manner that would be considered Personal Information; or
            </li>
            <li>Provide the Personal Information to you more than twice in a 12-month period.</li>
          </ul>

          <p className="mb-4">
            In connection with any Personal Information, we may share, or disclose to a third party for a business
            purpose, you have the right to know the categories of Personal information that we:
          </p>

          <ul className="list-disc pl-6 mb-4">
            <li>
              sold or shared and the categories of the third parties we may have sold or shared Personal Information to;
              and/or
            </li>
            <li>
              disclosed about you for a business purpose and the categories of third parties with whom your persona
              information may have been shared.
            </li>
          </ul>

          <p className="mb-4">
            Under CCPA and certain other privacy and data protection laws, as applicable, you have the right to opt-out
            of the sale or sharing of your Personal Information and the right to opt-out of the use or disclosure of
            your sensitive Personal Information. If you exercise your right to opt-out, we will refrain from selling or
            sharing your Personal Information or disclosing your sensitive Personal Information, unless you subsequently
            provide express authorization for the sale, sharing, or disclosure of your Personal Information. To opt-out
            of the disclosure of your Personal Information, please contact us at privacy@leadventure.com or call
            888-263-7201.
          </p>

          <p className="mb-4">
            Subject to certain exceptions set out below, on receipt of a verifiable request from you, we will:
          </p>

          <ul className="list-disc pl-6 mb-4">
            <li>Delete your Personal Information from our records; and</li>
            <li>Direct any service providers to delete your Personal Information from their records.</li>
          </ul>

          <p className="mb-4">Please note that we may not delete your Personal Information if it is necessary to:</p>

          <ul className="list-disc pl-6 mb-4">
            <li>
              Complete the transaction for which the Personal Information was collected, provide a good or service
              requested by you, or reasonably anticipated within the context of our ongoing business relationship with
              you, or otherwise perform a contract between you and us;
            </li>
            <li>
              Detect security incidents, protect against malicious, deceptive, fraudulent, or illegal activity; or
              prosecute those responsible for that activity;
            </li>
            <li>Debug to identify and repair errors that impair existing intended functionality;</li>
            <li>
              Exercise free speech, ensure the right of another consumer to exercise his or her right of free speech, or
              exercise another right provided for by law;
            </li>
            <li>Comply with the California Electronic Communications Privacy Act;</li>
            <li>
              Enable solely internal uses that are reasonably aligned with your expectations based on your relationship
              with us;
            </li>
            <li>Comply with an existing legal obligation; or</li>
            <li>
              Otherwise use your Personal Information, internally, in a lawful manner that is compatible with the
              context in which you provided the information.
            </li>
          </ul>

          <p className="mb-4">
            You have the right to not be discriminated against by us because you exercised any of your rights under the
            CCPA. As a result, we will not deny you goods or services for exercising these rights, charge a different
            price for goods or services for exercising these rights, provide a different level or quality of goods or
            services for exercising these rights, or even suggest you'll receive a different price or a different level
            or quality of goods or services for exercising these rights.
          </p>

          <p className="mb-4">
            For more information or to exercise your rights, please contact us by using the information in the "How to
            Exercise Your Rights and Contact Information" section above.
          </p>

          <p className="mb-4">Last Updated: April 14, 2025</p>
        </div>
      </div>
    </div>
  )
}
