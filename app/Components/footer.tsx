import { Facebook, Linkedin, Instagram, X, Mail, Phone } from "lucide-react";
import Image from "next/image";
import logo from "@/app/assets/log.png";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#1a083b] text-white">
      {/* Gradient wash */}
      {/* <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(88,28,135,0.35),rgba(15,7,30,0.9),rgba(5,4,15,1))]" /> */}

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 sm:gap-10 md:gap-14 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 text-xl font-semibold">
                {/* ⬤ */}
                <Image src={logo} alt="Logo" width={24} height={24} />
              <p className="font-semibold">Object<span className="font-normal">Spread</span></p>
            </div>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
              Empowering independent researchers with the skills, mentorship,
              and opportunities to create meaningful, publishable work.
            </p>

            <div className="mt-6 flex gap-3">
              {[
                { Icon: Facebook },
                { Icon: Linkedin },
                { Icon: X },
                { Icon: Instagram },
              ].map(({ Icon }, i) => (
                <div
                  key={i}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20 cursor-pointer"
                >
                  <Icon size={18} />
                </div>
              ))}
            </div>
          </div>

          {/* Quicklinks */}
          <div>
            <h4 className="mb-4 text-sm sm:text-base font-medium">
              Quicklinks
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="cursor-pointer hover:text-white transition">
                About
              </li>
              <li className="cursor-pointer hover:text-white transition">
                Publications
              </li>
              <li className="cursor-pointer hover:text-white transition">
                Join the Community
              </li>
              <li className="cursor-pointer hover:text-white transition">
                Contact
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="mb-4 text-sm sm:text-base font-medium">Programs</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="cursor-pointer hover:text-white transition">
                Research Cohorts
              </li>
              <li className="cursor-pointer hover:text-white transition">
                Mentorship Program
              </li>
              <li className="cursor-pointer hover:text-white transition">
                Publishing Support
              </li>
              <li className="cursor-pointer hover:text-white transition">
                Funding Opportunities
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm sm:text-base font-medium">
              Contact us
            </h4>
            <div className="space-y-4 text-sm text-white/70">
              <div className="flex items-center gap-3">
                <Mail size={18} />
                <span className="break-all">objectspread@email.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} />
                +2348012345678
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 border-t border-white/10 pt-6 text-center text-xs text-white/50">
          © 2025 ObjectSpread. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
