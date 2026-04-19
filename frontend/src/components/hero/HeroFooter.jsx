function Footer() {
  return (
    <footer className="bg-[var(--bg-light)] border-t border-[var(--bg-primary)]/10">
      <div
        className="
          max-w-7xl mx-auto
          px-4 sm:px-6 md:px-0
          py-6 sm:py-8
          flex flex-col md:flex-row
          items-center justify-between
          gap-4
        "
      >

        {/* Left */}
        <p className="text-xs sm:text-sm text-[var(--bg-primary)]/70 text-center md:text-left">
          © ASCEND 2025 · Educational trading simulation for Indian markets
        </p>

        {/* Right */}
        <p className="text-[10px] sm:text-xs text-[var(--bg-primary)]/60 text-center md:text-right max-w-xl">
          Market investments are subject to market risks. This platform is for
          educational purposes only and does not involve real money trading or
          financial advice.
        </p>

      </div>
    </footer>
  );
}

export default Footer;
