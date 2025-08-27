import { Instagram, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react"
import { cn } from "../lib/utils"
import { useRef } from "react"
import emailjs from "emailjs-com"
import { useToast } from "../hooks/use-toast"


export const ContactSection = () => {
  const { toast } = useToast()

  // EmailJS integration for Contact Form API
  const form = useRef(null); 

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      "AyaanYousafPortfolio", // Service ID
      "MessageTemplate", // Template ID
      form.current,
      "X2PTYWqtMmNy9riG9", // Public key
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
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new opportunities, feel free to reach out!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6"> Contact Information</h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/15">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
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
                <div>
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
                <div>
                  <h4 className="font-medium"> Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Oshawa, ON, Canada
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me! </h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://linkedin.com/in/ayaanysf" target="_blank">
                  <Linkedin />
                </a>
                <a href="https://instagram.com/ayaan.ysf4" target="_blank">
                  <Instagram />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 w-lg rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2"> Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Ayaan Yousaf" 
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2"> Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="johndoe@gmail.com" 
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2"> Your Message</label>
                <textarea
                  id="message" 
                  name="message" 
                  required
                  className="w-full px-4 py-3 h-50 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Hi Ayaan, love the website! I'd love to chat about a new opportunity you may be interested in! " 
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
        </div>
      </div>
    </section>
  )
}