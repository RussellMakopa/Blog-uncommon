import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/navigation";
import Subscribe from "./components/subscribe";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: "Uncommon.org | Technology Education & Employment for All",
  description:
    "Providing technology education and employment opportunities for everyone. Help unemployed young adults launch their careers in the technology industry. Donate today!",
  keywords:
    "Technology education, employment opportunities, technology industry, low-income communities, innovation hubs, workforce development, technology bootcamp, youth coding, mentorship, sustainability, business model, web development, education funding, hub sponsorship, community engagement, kids coding, tech career, computer drive, donation, laptops, Zimbabwe, coding lessons, primary students, secondary students, access to education, access to employment, career development, skill building, coding skills, design skills, marketing skills, technology skills, programming, software development, graphic design, UX/UI design, digital marketing, coding programs, technology workshops, career opportunities, job placement, professional development, industry partnerships, technology companies, nonprofit organization, social impact, community empowerment, digital literacy, digital divide, educational equity, technology resources, tech industry, coding education, coding bootcamp, technology skills training, underprivileged youth, economic empowerment, tech workforce, digital skills, innovative education, lifelong learning, computer science, STEM education, technology solutions, community development, volunteer opportunities, corporate social responsibility, technology innovation, economic growth, equal opportunities, inclusive education, inclusive employment, diversity in tech, youth empowerment, social justice, social change, nonprofit sector, impact-driven organization, education access, career support, skill-based training, job readiness, technology for good, digital transformation, closing the opportunity gap, technology empowerment, social entrepreneurship, community building, talent development, tech mentoring, professional networking, coding community, industry experts, technology sector, technology impact, educational programs, employment initiatives, social mobility, career advancement, technology outreach, education initiatives, technology partnerships, technology training, tech for social good, lifelong skills, digital economy, coding education, youth development, community engagement, technology for all, digital inclusion, youth empowerment, career pathways, economic development, access to technology, uncommon services, unique services, innovative approach, transformative education, life-changing opportunities, cutting-edge technology, experiential learning, real-world projects, hands-on training, personalized mentorship, customized curriculum, future-ready skills, disruptive education model, industry-aligned programs, practical experience, emerging technologies, collaborative learning, job-focused training, unconventional learning, tech-driven solutions, advanced coding techniques, breakthrough innovation, creative problem-solving, flexible learning options, inclusive learning environment, social impact initiatives, technology advocacy, diverse talent pipeline, digital skills gap, industry demand, technology partnerships, global reach, scalable impact, holistic support, technology for empowerment",
  openGraph: {
    title: "",
    description: "",
  },
};

export const revalidate = 30;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-primary">
        <Navigation />{children}
        <Subscribe />
        <Footer />
      </body>
    </html>
  );
}
