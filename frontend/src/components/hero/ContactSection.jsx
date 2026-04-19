import {
  Mail,
  Instagram,
  Linkedin,
  Twitter
} from "lucide-react";

function ContactSection() {
  return (
    <section className="bg-[var(--bg-light)] py-16 sm:py-20 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">

        {/* Heading */}
        <h3 className="text-2xl sm:text-3xl font-medium text-[var(--bg-primary)]">
          Stay Connected with ASCEND
        </h3>

        {/* Subtext */}
        <p className="mt-3 text-xs sm:text-sm text-[var(--bg-primary)]/70">
          Questions, feedback, or ideas? We’d love to hear from you.
        </p>

        {/* Email */}
        <div className="mt-6 sm:mt-8 flex items-center justify-center gap-3 text-[var(--bg-primary)]">
          <Mail size={18} className="opacity-80" />
          <span className="text-sm font-medium break-all sm:break-normal">
            contact@ascend.app
          </span>
        </div>

        {/* Social icons */}
        <div className="mt-6 sm:mt-8 flex justify-center gap-5 sm:gap-6">
          <Instagram
            size={20}
            className="text-[var(--bg-primary)]/70 hover:text-[var(--bg-primary)] transition"
          />
          <Twitter
            size={20}
            className="text-[var(--bg-primary)]/70 hover:text-[var(--bg-primary)] transition"
          />
          <Linkedin
            size={20}
            className="text-[var(--bg-primary)]/70 hover:text-[var(--bg-primary)] transition"
          />
        </div>

      </div>
    </section>
  );
}

export default ContactSection;
