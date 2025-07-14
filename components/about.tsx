import { Card, CardContent } from "@/components/ui/card"
import { Zap, Shield, Cpu, Users, Code, Terminal } from "lucide-react"

export default function About() {
  const features = [
    {
      icon: <Shield className="h-10 w-10 text-rust-orange" />, // 🔐
      title: "Backend Engineering",
      description:
        "Building high-performance, scalable APIs using Node.js, Go, and Rust—emphasizing clean architecture, reliability, and maintainability.",
    },
    {
      icon: <Cpu className="h-10 w-10 text-rust-light" />, // ⚙️
      title: "System Design",
      description:
        "Designing production-ready architectures with a strong foundation in microservices, modular design, and database optimization for real-world scale.",
    },
    {
      icon: <Zap className="h-10 w-10 text-rust-brown" />, // 🧠
      title: "AI Integration",
      description:
        "Integrating LLMs and tools like the Vercel AI SDK to build intuitive AI-driven experiences in SaaS products and code automation platforms.",
    },
    {
      icon: <Code className="h-10 w-10 text-rust-orange" />, // ⚡
      title: "Frontend Craftsmanship",
      description:
        "Creating responsive and visually stunning UIs with Next.js, Tailwind CSS, and React Native, optimized for both performance and accessibility.",
    },
    {
      icon: <Users className="h-10 w-10 text-rust-muted" />, // 🗃️
      title: "Database Expertise",
      description:
        "Mastering structured and unstructured data flow using PostgreSQL, Redis, and MongoDB, optimized via ORMs like SQLx and Drizzle.",
    },
    {
      icon: <Terminal className="h-10 w-10 text-rust-brown" />, // 🧩
      title: "Full-Stack Synergy",
      description:
        "Delivering seamless integration across frontend, backend, and cloud—ensuring consistent DX and lightning-fast UX with real-time capabilities.",
    },
    {
      icon: <Zap className="h-10 w-10 text-rust-orange" />, // 🚀
      title: "DevOps & Deployment",
      description:
        "Shipping fast and safely with Docker, Vercel, GCP, and CI/CD pipelines, automating every step from development to production.",
    },
    {
      icon: <Cpu className="h-10 w-10 text-rust-light" />, // 🤖
      title: "AI-Accelerated Development",
      description:
        "Leveraging AI tools and automation to boost productivity, streamline workflows, and accelerate the software development lifecycle.",
    },
  ]

  return (
    <div className="w-full bg-muted/30">
      <section id="about" className="py-20 w-full">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="space-y-12">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-mono">
                <span className="text-rust-orange">impl</span> About <span className="text-rust-orange">for</span>{" "}
                FullStackDeveloper
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-mono">
                <span className="text-rust-orange">/&#47; </span>Passionate about building scalable web applications with a
                focus on performance and user experience
              </p>
            </div>

            <div className="mx-auto max-w-3xl text-center">
              <div className="bg-card/50 p-6 rounded-lg border border-rust-orange/20 font-mono text-left">
                <div className="text-sm text-muted-foreground mb-4">
                  <span className="text-rust-orange">struct</span> <span className="text-rust-brown">Developer</span>{" "}
                  {"{"}
                </div>
                <div className="ml-4 space-y-2 text-sm">
                  <div>
                    <span className="text-rust-brown">name</span>:{" "}
                    <span className="text-green-400">&quot;Ayush Chauhan&quot;</span>,
                  </div>
                  <div>
                    <span className="text-rust-brown">specialization</span>:{" "}
                    <span className="text-green-400">&quot;Full-Stack Development&quot;</span>,
                  </div>
                  <div>
                    <span className="text-rust-brown">focus</span>:{" "}
                    <span className="text-green-400">[&quot;Backend&quot;, &quot;Frontend&quot;, &quot;Databases&quot;, &quot;APIs&quot;]</span>,
                  </div>
                  <div>
                    <span className="text-rust-brown">experience</span>:{" "}
                    <span className="text-green-400">&quot;Building and deploying full-stack web applications&quot;</span>,
                  </div>
                </div>
                <div className="text-sm text-muted-foreground mt-4">{"}"}</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {features.map((feature, index) => (
                <div key={index} className="animate-in">
                  <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-rust-orange/50 bg-card/80 backdrop-blur-sm">
                    <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                      <div className="p-3 rounded-full bg-gradient-to-br from-current/10 to-current/5 border border-current/20">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-bold font-mono">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
