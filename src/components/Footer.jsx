import { track } from "@vercel/analytics";
import { ArrowUp } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="grid grid-cols-3 py-12 px-4 relative mt-12 pt-8 justify-center items-center">
      <div className="justify-self-center col-2">
        <div className="flex self-center space-x-4 items-center mb-4 justify-center">
          <a href="https://linkedin.com/in/ayaanysf" target="_blank" onClick={() => track("LinkedIn clicked in footer")}>
            <Linkedin size={30} className="hover:text-linkedin card-hover" />
          </a>
          <a href="https://instagram.com/ayaan.ysf4" target="_blank" onClick={() => track("Instagram clicked in footer")}>
            <Instagram size={30} className="hover:text-red-400 card-hover" />
          </a>
        </div>
        <p className="text-xs md:text-sm text-muted-foreground opacity-80">
          © {new Date().getFullYear()} AyaanYousaf.ca.
        </p>
      </div>
      <a
        href="#home"
        className="col-3 justify-self-center ml-10 p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};