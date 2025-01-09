export const siteData = {
  company: {
    name: "Khata Dekho",
    tagline: "We register 10% of all Indian companies",
    description: "A FREE Business Accounting Software built for Indian small businesses",
    contact: {
      phone: "+91-7503060190",
      email: "info@khatadekho.com",
      timing: "10 am - 7 pm"
    }
  },
  navigation: {
    mainMenu: [
      {
        title: "Accounting Software",
        link: "/accounting-software",
      },
      {
        title: "Business Setup",
        link: "/business-setup",
        submenu: [
          {
            title: "Business Registration",
            items: [
              { title: "Private Limited Company", link: "/business-setup/private-limited" },
              { title: "Limited Liability Partnership", link: "/business-setup/llp" },
              { title: "One Person Company", link: "/business-setup/opc" },
              { title: "Sole Proprietorship", link: "/business-setup/sole-proprietorship" },
              { title: "Producer Company", link: "/business-setup/producer-company" },
              { title: "Partnership Firm", link: "/business-setup/partnership" },
              { title: "Startup India Registration", link: "/business-setup/startup" },
              { title: "Section 8 Company", link: "/business-setup/section-8" }
            ]
          },
          {
            title: "Change Company Name",
            items: [
              { title: "Change Company Name", link: "/business-setup/change-name" }
            ]
          },
          {
            title: "Design Registration",
            items: [
              { title: "Logo Design", link: "/business-setup/logo-design" },
              { title: "Design Registration", link: "/business-setup/design-registration" }
            ]
          }
        ]
      },
      {
        title: "Tax & Compliances",
        link: "/tax-compliances",
        submenu: [
          {
            title: "Licenses & Registrations",
            items: [
              { title: "Digital Signature Certificate", link: "/licenses/dsc" },
              { title: "Apeda RCMC", link: "/licenses/apeda-rcmc" },
              { title: "FIEO Registration", link: "/licenses/fieo" },
              { title: "IEC [Import/Export Code]", link: "/licenses/iec" },
              { title: "FSSAI License", link: "/licenses/fssai" },
              { title: "FSSAI License Renewal", link: "/licenses/fssai-renewal" },
              { title: "FSSAI Annual Return", link: "/licenses/fssai-return" },
              { title: "Legal Metrology", link: "/licenses/legal-metrology" },
              { title: "ISO Certification", link: "/licenses/iso" },
              { title: "BIS Registration", link: "/licenses/bis" },
              { title: "Udyam Registration", link: "/licenses/udyam" },
              { title: "MSME Registration", link: "/licenses/msme" },
              { title: "ESI Registration", link: "/licenses/esi" }
            ]
          }
        ]
      },
      {
        title: "Investments",
        link: "/investments"
      },
      {
        title: "Insurances",
        link: "/insurances"
      },
      {
        title: "Loans",
        link: "/loans"
      }
    ]
  },
  features: [
    {
      title: "Easy-to-Use Dashboard",
      description: "Complete the entire process and chat with us from your dashboard!",
      icon: "LayoutDashboard"
    },
    {
      title: "Quick Support",
      description: "All your queries answered within 24 hours",
      icon: "Clock"
    },
    {
      title: "Professional Services at Affordable Prices",
      description: "Usually, \"professional\" equals \"expensive,\" but not at Khatadekho!",
      icon: "Wallet"
    }
  ],
  services: [
    {
      title: "Trademark",
      icon: "Trademark",
      link: "/services/trademark"
    },
    {
      title: "ISO Registration",
      icon: "FileCheck",
      link: "/services/iso-registration"
    },
    {
      title: "Income Tax Return",
      icon: "Receipt",
      link: "/services/income-tax-return"
    },
    {
      title: "GST Return Filing",
      icon: "FileText",
      link: "/services/gst-return"
    }
  ],
  process: [
    {
      id: "01",
      title: "24X7 Invoicing Support",
      description: "GST Invoicing"
    },
    {
      id: "02",
      title: "Receivable & Payable",
      description: "Reports"
    },
    {
      id: "03",
      title: "Business",
      description: "Reports"
    },
    {
      id: "04",
      title: "Inventory Management",
      description: "backup"
    },
    {
      id: "05",
      title: "Payroll Management",
      description: "Reports"
    }
  ],
  footer: {
    importantLinks: [
      { title: "Home", link: "/" },
      { title: "About Us", link: "/about" },
      { title: "Contact Us", link: "/contact" },
      { title: "Privacy & Policy", link: "/privacy" },
      { title: "Refund & Cancellation", link: "/refund" }
    ],
    services: [
      { title: "Company Registration", link: "/services/company-registration" },
      { title: "GST Registration", link: "/services/gst-registration" },
      { title: "ITR Return", link: "/services/itr-return" },
      { title: "Trademark Registration", link: "/services/trademark" },
      { title: "Compliance", link: "/services/compliance" }
    ],
    support: [
      { title: "Latest News", link: "/news" },
      { title: "Terms & Condition", link: "/terms" },
      { title: "Blog", link: "/blog" },
      { title: "Career", link: "/career" },
      { title: "Help Center", link: "/help" }
    ],
    socialLinks: [
      { platform: "Facebook", link: "#", icon: "Facebook" },
      { platform: "LinkedIn", link: "#", icon: "Linkedin" },
      { platform: "Instagram", link: "#", icon: "Instagram" },
      { platform: "YouTube", link: "#", icon: "Youtube" },
      { platform: "Twitter", link: "#", icon: "Twitter" }
    ]
  }
}

