import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Send } from "lucide-react"

export default function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-rust-orange" />,
      title: "Email",
      value: "ayush.chauhan.main@gmail.com",
      link: "mailto:ayush.chauhan.main@gmail.com",
      bgColor: "bg-rust-orange/10",
      borderColor: "border-rust-orange/20",
    },
    {
      icon: <MapPin className="h-6 w-6 text-rust-brown" />,
      title: "Location",
      value: "Manesar, Haryana, India",
      link: "https://maps.google.com/?q=Manesar,Haryana,India",
      bgColor: "bg-rust-brown/10",
      borderColor: "border-rust-brown/20",
    },
    {
      icon: <Phone className="h-6 w-6 text-rust-light" />,
      title: "Phone",
      value: "+91 9389777424",
      link: "tel:+919389777424",
      bgColor: "bg-rust-light/10",
      borderColor: "border-rust-light/20",
    },
  ]

  return (
    <div className="w-full bg-muted/30">
      <section id="contact" className="py-20">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="space-y-12">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-mono">
                <span className="text-rust-orange">fn</span> contact() -&gt;{" "}
                <span className="text-rust-brown">Result</span>&lt;(), Error&gt;
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-mono">
                <span className="text-rust-orange">/&#47; </span>Let&apos;s build something amazing together!
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
              <div className="lg:col-span-2">
                <Card className="bg-card/80 backdrop-blur-sm border border-rust-orange/30 hover:border-rust-orange/50 transition-all duration-300 hover:shadow-lg hover:shadow-rust-orange/20">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="bg-gradient-to-br from-rust-orange/20 to-rust-brown/10 p-2 rounded-full border border-rust-orange/30">
                        <Send className="h-5 w-5 text-rust-orange" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground font-mono">
                        <span className="text-rust-orange">let</span> message = Message::new();
                      </h3>
                    </div>
                    <form action="https://formspree.io/f/xanoenzo" method="POST" className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-4">
                          <label htmlFor="name" className="text-sm font-medium font-mono">
                            <span className="text-rust-orange">let</span> name: String
                          </label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="Your name"
                            required
                            className="bg-background/50 border-border/50 focus:border-rust-orange/50 transition-colors font-mono"
                          />
                        </div>
                        <div className="flex flex-col gap-4">
                          <label htmlFor="email" className="text-sm font-medium font-mono">
                            <span className="text-rust-orange">let</span> email: String
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Your email"
                            required
                            className="bg-background/50 border-border/50 focus:border-rust-orange/50 transition-colors font-mono"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-4">
                        <label htmlFor="subject" className="text-sm font-medium font-mono">
                          <span className="text-rust-orange">let</span> subject: String
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          placeholder="Subject of your message"
                          required
                          className="bg-background/50 border-border/50 focus:border-rust-orange/50 transition-colors font-mono"
                        />
                      </div>
                      <div className="flex flex-col gap-4">
                        <label htmlFor="message" className="text-sm font-medium font-mono">
                          <span className="text-rust-orange">let</span> content: String
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Your message"
                          className="min-h-[150px] bg-background/50 border-border/50 focus:border-rust-orange/50 transition-colors font-mono"
                          required
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-rust-orange/80 to-rust-brown/80 hover:from-rust-orange hover:to-rust-brown transition-all duration-300 shadow-md hover:shadow-lg border border-rust-orange/30 font-mono"
                      >
                        <Send className="mr-2 h-4 w-4" />
                        message.send().await?
                      </Button>
                      <noscript>
                        <p className="text-sm text-center text-muted-foreground mt-2 font-mono">
                          <span className="text-rust-orange">/&#47; </span>Please enable JavaScript or email directly
                        </p>
                      </noscript>
                    </form>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    className={`overflow-hidden bg-card/80 backdrop-blur-sm border ${info.borderColor} hover:border-opacity-70 transition-all duration-300 hover:shadow-lg hover:shadow-current/20`}
                  >
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className={`${info.bgColor} p-3 rounded-full mt-1 border ${info.borderColor}`}>
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground font-mono">{info.title}</h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-muted-foreground hover:text-primary transition-colors font-mono"
                            target={info.title === "Location" ? "_blank" : undefined}
                            rel={info.title === "Location" ? "noopener noreferrer" : undefined}
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground font-mono">{info.value}</p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}

                <Card className="bg-card/80 backdrop-blur-sm border border-rust-muted/30 hover:border-rust-muted/50 transition-all duration-300 hover:shadow-lg hover:shadow-rust-muted/20">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-gradient-to-br from-rust-muted/20 to-rust-orange/10 p-2 rounded-full border border-rust-muted/30">
                        <div className="w-4 h-4 bg-rust-muted rounded opacity-60"></div>
                      </div>
                      <h3 className="font-medium text-foreground font-mono">
                        <span className="text-rust-orange">use</span> social::platforms;
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 font-mono">
                      <span className="text-rust-orange">/&#47; </span>Find me on these platforms
                    </p>
                    <div className="flex gap-4">
                      <Button
                        variant="outline"
                        size="icon"
                        className="border-rust-orange/30 hover:border-rust-orange hover:bg-rust-orange/10 bg-transparent transition-all duration-300"
                        asChild
                      >
                        <a href="https://github.com/AyushChauhan9389" target="_blank" rel="noopener noreferrer">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-5 w-5 text-rust-orange"
                          >
                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                            <path d="M9 18c-4.51 2-5-2-7-2"></path>
                          </svg>
                          <span className="sr-only">GitHub</span>
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="border-rust-brown/30 hover:border-rust-brown hover:bg-rust-brown/10 bg-transparent transition-all duration-300"
                        asChild
                      >
                        <a href="https://www.linkedin.com/in/ayush-c93/" target="_blank" rel="noopener noreferrer">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-5 w-5 text-rust-brown"
                          >
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect width="4" height="12" x="2" y="9"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                          </svg>
                          <span className="sr-only">LinkedIn</span>
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="border-rust-light/30 hover:border-rust-light hover:bg-rust-light/10 bg-transparent transition-all duration-300"
                        asChild
                      >
                        <a href="mailto:ayush.chauhan.main@gmail.com">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-5 w-5 text-rust-light"
                          >
                            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                          </svg>
                          <span className="sr-only">Email</span>
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
