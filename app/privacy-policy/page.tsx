import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="my-40 bg-white text-black min-h-screen p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-sm md:text-base">
          Welcome to Songa! We are committed to protecting your privacy and ensuring the security of your personal
          information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you use
          our ride-sharing services. By using our app, you agree to the terms outlined in this policy.
        </p>

        <p className="text-sm md:text-base mt-4">
          <strong>1. Information We Collect</strong>
          <br />
          We may collect the following types of information when you use our app:
          <ul>
            <li>Personal Information: This includes your name, email address, phone number, and payment information.</li>
            <li>Location Information: We collect your location data to provide ride-sharing services, including pickup and
              drop-off locations.</li>
            <li>Usage Information: We may gather data about how you interact with our app, such as the routes you take and
              the times you use our services.</li>
          </ul>
        </p>

        <p className="text-sm md:text-base mt-4">
          <strong>2. How We Use Your Information</strong>
          <br />
          We use your information for the following purposes:
          <ul>
            <li>To provide you with ride-sharing services and facilitate transactions.</li>
            <li>To improve our services, including app functionality and user experience.</li>
            <li>To send you notifications, updates, and promotional offers.</li>
            <li>To ensure the safety and security of our users and drivers.</li>
            <li>To comply with legal requirements and resolve disputes.</li>
          </ul>
        </p>

        <p className="text-sm md:text-base mt-4">
          <strong>3. Information Sharing</strong>
          <br />
          We may share your information with the following entities:
          <ul>
            <li>Drivers: Your name, location, and ride details are shared with drivers to fulfill ride requests.</li>
            <li>Payment Processors: We share payment information with third-party payment processors for transaction
              processing.</li>
            <li>Legal Requirements: We may disclose information in response to legal requests or to protect our rights,
              privacy, safety, or property.</li>
          </ul>
        </p>

        <p className="text-sm md:text-base mt-4">
          <strong>4. Secure Data Handling Procedures</strong>
          <br />
          We take data privacy and security seriously. Here&aquos;s how we handle your data:
          <ul>
            <li>We use industry-standard encryption to protect your personal and sensitive information during transmission.</li>
            <li>Access to your data is restricted to authorized personnel who require it for app operation and support.</li>
            <li>We regularly update and maintain our security measures to safeguard your data.</li>
          </ul>
        </p>

        <p className="text-sm md:text-base mt-4">
          <strong>5. Developer’s Data Retention and Deletion Policy</strong>
          <br />
          We retain your personal and sensitive data only for as long as necessary to provide our services and meet
          legal and regulatory requirements. When you delete your account, we will securely delete or anonymize your data
          in accordance with our data retention policy. If you have any questions about data retention or wish to request
          data deletion, please contact us at{" "}
          <a href="mailto:info@songa.app" className="underline text-green-500">
            info@songa.app
          </a>
          .
        </p>

        <p className="text-sm md:text-base mt-4">
          <strong>6. Changes to this Privacy Policy</strong>
          <br />
          We may update this Privacy Policy to reflect changes in our practices or legal requirements. Any updates will
          be posted on our app, and your continued use of our services constitutes your acceptance of these changes.
        </p>

        <p className="text-sm md:text-base mt-4">
          <strong>7. Contact Us</strong>
          <br />
          If you have questions or concerns about this Privacy Policy, our data practices, or wish to exercise your data
          rights, please contact us at{" "}
          <a href="mailto:info@songa.app" className="underline text-green-500">
            info@songa.app
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
