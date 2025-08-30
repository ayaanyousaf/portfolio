import { Linkedin, Mail, MapPin, MessageCircle, Phone, Send, User } from "lucide-react"
import { cn } from "../lib/utils"
import { useRef } from "react"
import emailjs from "emailjs-com"
import { useToast } from "../hooks/use-toast"
import { SectionFade } from "./ui/SectionFade"
import Earth from "./ui/Earth"


export const ContactSection = () => {
  const { toast } = useToast()

  // EmailJS integration for Contact Form API
  const form = useRef(null); 

  const sendEmail = (e) => {
    e.preventDefault()

    /**
     * Create a .env in your project root, then add values from your EmailJS account for these three variables:
     * - VITE_EMAILJS_SERVICE_ID=your_service_id
     * - VITE_EMAILJS_TEMPLATE_ID=your_template_id
     * - VITE_EMAILJS_PUBLIC_KEY=your_public_key
     * 
     */
    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID, // Service ID (set in .env for security)
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Template ID
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY, // Public key
    ).then(
      (result) => {
        console.log("Success: ", result.text)

        toast({
            title: "Message sent!",
            description: "Thank you for your message! I'll get back to you soon."
        });

        form.current.reset()
      },
      (error) => {
        console.error("Error: ", error.text)
        alert("Failed to send message. Try again later.")
      }
    )
  }

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <SectionFade animate="animate-fade-in-down" threshold={0.7}>
          <h2 className="font-[Poppins] text-4xl md:text-5xl font-semibold mb-4">
            Get In <span className="text-primary"> Touch</span>
          </h2>

          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, feel free to reach out!
          </p>
        </SectionFade>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <SectionFade animate="animate-fade-in-right" threshold={0.5}>
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold mb-6"> Contact Information</h3>

              <div className="space-y-6 justify-center">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/15">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex flex-col items-start">
                    <h4 className="font-medium"> Email</h4>
                    <a className="text-muted-foreground hover:text-primary transition-colors" href="mailto:ayaanyousaf@hotmail.com">
                      ayaanyousaf@hotmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/15">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex flex-col items-start">
                    <h4 className="font-medium"> Phone</h4>
                    <a className="text-muted-foreground hover:text-primary transition-colors" href="tel:+16478038285">
                      +1 (647) 803-8285
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/15">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex flex-col items-start">
                    <h4 className="font-medium"> Location</h4>
                    <a className="text-muted-foreground hover:text-primary transition-colors">
                      Oshawa, ON, Canada
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <div className="relative mx-auto w-full max-w-md sm:max-w-lg h-[18rem] md:h-[24rem]">
                {/* Earth fills this box */}
                <Earth className="absolute inset-0 w-full h-full" />
              </div>
            </div>
          </SectionFade>

          <SectionFade animate="animate-fade-in-left" threshold={0.5}>
            <div className="bg-card p-8 rounded-lg shadow-xs">
              <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

              <form ref={form} onSubmit={sendEmail} className="text-left space-y-6">
                <div>
                  <label htmlFor="name" className="flex text-sm font-medium mb-2"> <User className="mr-2" size={20}/> Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                    placeholder="Your name" 
                  />
                </div>

                <div>
                  <label htmlFor="email" className="flex text-sm font-medium mb-2"> <Mail className="mr-2" size={20} /> Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                    placeholder="Email address" 
                  />
                </div>

                <div>
                  <label htmlFor="message" className="flex text-sm font-medium mb-2"> <MessageCircle size={20} className="mr-2" /> Message</label>
                  <textarea
                    id="message" 
                    name="message" 
                    required
                    className="w-full px-4 py-3 md:h-50 h-40 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                    placeholder="Hi Ayaan, I'd love to chat about a new opportunity you may be interested in!" 
                  />
                </div>
                <button type="submit" className={cn(
                    "cosmic-button cursor-pointer w-full flex items-center justify-center gap-2",

                  )}
                >
                  Send Message
                  <Send size={16} />
                </button>
              </form>
            </div>
          </SectionFade>
        </div>
      </div>
    </section>
  )
}