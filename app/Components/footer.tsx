import { Facebook, Linkedin, Instagram, X, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#1a083b] text-white">
      {/* Gradient wash */}
      {/* <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(88,28,135,0.35),rgba(15,7,30,0.9),rgba(5,4,15,1))]" /> */}

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-14 md:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 text-xl font-semibold">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-violet-500/20">
                ⬤
              </span>
              ObjectSpread
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
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
                >
                  <Icon size={16} />
                </div>
              ))}
            </div>
          </div>

          {/* Quicklinks */}
          <div>
            <h4 className="mb-4 text-sm font-medium">Quicklinks</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li>About</li>
              <li>Publications</li>
              <li>Join the Community</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="mb-4 text-sm font-medium">Programs</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li>Research Cohorts</li>
              <li>Mentorship Program</li>
              <li>Publishing Support</li>
              <li>Funding Opportunities</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-medium">Contact us</h4>
            <div className="space-y-4 text-sm text-white/70">
              <div className="flex items-center gap-3">
                <Mail size={16} />
                objectspread@email.com
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} />
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
