export const availableLocales = ["en", "de"] as const;

export const defaultLang = "de";

export const ui = {
  en: {
    "nav.home": "Home",
    "nav.platform": "Platform",
    "nav.technology": "Technology",
    "nav.aboutus": "About Us",
    "nav.contact": "Contact",
    "seo.desc":
      "Tree-D is a service to simulate forest dynamics and quantify ecosystem services.",
    "seo.title": "Tree-D - The Forest Simulation Platform",
    "nav.login": "Login",
    "nav.register": "Register",
    "nav.register_contact": "Contact us",
    "footer.directlinks": "Direct Links",
    "footer.imprint": "Imprint",
    "institution": "Helmholtz Centre for Environmental Research GmbH – UFZ",
    "address.street": "Permoserstraße 15",
    "address.city": "04318 Leipzig",
    "address.country": "Germany",
    "representation.heading": "Represented by the management",
    "representation.science": "Scientific Managing Director: Prof. Dr. Katrin Böhning-Gaese",
    "representation.administration": "Administrative Managing Director: Dr. Sabine König",
    "representation.register": "Registration Court: AG Leipzig, HRB 4703",
    "representation.tax_id": "Value added tax identification number: DE 141507065",
    "representation.supervisory_board": "Chair of the Supervisory Board: MinR Dr. Wolf Junker",
    "content_representation.heading": "Responsibility for the content of the website",
    "content_representation.names": "Dr. Samuel Fischer, Dr. Gunnar Dreßler",
    "content_representation.department": "Department of Ecological Modelling",
    "email": "E-mail:",
    "contact.email_address": "samuel.fischer@ufz.de",
    "copyright.rights_reserved": "All rights reserved.",
  },
  de: {
    "nav.home": "Home",
    "nav.platform": "Plattform",
    "nav.technology": "Technologie",
    "nav.aboutus": "Über uns",
    "nav.contact": "Kontakt",
    "seo.desc":
      "Tree-D liefert detaillierte Berechnungen der Leistungen Ihres Waldes und verständliche Prognosen — interaktiv, datenbasiert und in Echtzeit.",
    "seo.title": "Tree-D – Die Waldsimulationsplattform",
    "nav.login": "Anmelden",
    "nav.register": "Registrieren",
    "nav.register_contact": "Kontaktieren Sie uns",
    "footer.directlinks": "Direkte Links",
    "footer.imprint": "Impressum",
    "institution": "Helmholtz-Zentrum für Umweltforschung GmbH – UFZ",
    "address.street": "Permoserstraße 15",
    "address.city": "04318 Leipzig",
    "address.country": "Deutschland",
    "representation.heading": "Vertreten durch die Geschäftsführung",
    "representation.science": "Wissenschaftliche Geschäftsführerin: Prof. Dr. Katrin Böhning-Gaese",
    "representation.administration": "Administrative Geschäftsführerin: Dr. Sabine König",
    "representation.register": "Handelsregister: AG Leipzig, HRB 4703",
    "representation.tax_id": "Umsatzsteuer-Identifikationsnummer: DE 141507065",
    "representation.supervisory_board": "Aufsichtsratsvorsitzender: MinR Dr. Wolf Junker",
    "content_representation.heading": "Inhaltliche Verantwortung für die Internetpräsenz",
    "content_representation.names": "Dr. Samuel Fischer, Dr. Gunnar Dreßler",
    "content_representation.department": "Department Ökologische Systemanalyse",
    "email": "E-Mail:",
    "contact.email_address": "samuel.fischer@ufz.de",
    "copyright.rights_reserved": "Alle Rechte vorbehalten.",
  },
} as const;

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}
