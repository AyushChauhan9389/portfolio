import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Code, Chrome, Settings } from "lucide-react"
import Link from "next/link"

export default function OpenSource() {
  const contributions = [
    {
      title: "DynamoDB Dashboard",
      description:
        "A web-based dashboard for visualizing and managing DynamoDB tables, with features for querying, filtering, and data manipulation.",
      tags: ["Vue.js", "DynamoDB", "AWS", "Developer Tools"],
      link: "https://github.com/kritish-dhaubanjar/dynamodb-dashboard",
      icon: <Code className="h-8 w-8 text-neon-cyan" />,
      iconBg: "bg-neon-cyan/10",
      borderColor: "border-neon-cyan/30",
      hoverColor: "hover:border-neon-cyan/50 hover:shadow-neon-cyan/20",
    },
    {
      title: "Dev Auth Chrome Extension",
      description:
        "A Chrome extension to update authentication tokens for testing applications with different user roles on local development environments.",
      tags: ["JavaScript", "Chrome Extension", "Authentication", "Developer Tools"],
      link: "https://github.com/kritish-dhaubanjar/dev-auth-chrome-extension",
      icon: <Chrome className="h-8 w-8 text-neon-purple" />,
      iconBg: "bg-neon-purple/10",
      borderColor: "border-neon-purple/30",
      hoverColor: "hover:border-neon-purple/50 hover:shadow-neon-purple/20",
    },
    {
      title: "Nginxconfig.io by DigitalOcean",
      description:
        "Contributed to DigitalOcean's open-source NGINX configuration generator, which helps users create optimized NGINX server configurations.",
      tags: ["NGINX", "JavaScript", "DevOps", "Configuration"],
      link: "https://github.com/digitalocean/nginxconfig.io/commits?author=maskeynihal",
      icon: <Settings className="h-8 w-8 text-neon-pink" />,
      iconBg: "bg-neon-pink/10",
      borderColor: "border-neon-pink/30",
      hoverColor: "hover:border-neon-pink/50 hover:shadow-neon-pink/20",
    },
  ]

  return (
    <div id="open-source">
      <div className="space-y-12">
        <div className="space-y-4 text-center">
          <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">Open Source Contributions</h3>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed">
            Projects I&apos;ve contributed to in the open source community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {contributions.map((contribution, index) => (
            <div key={index}>
              <Card
                className={`h-full flex flex-col bg-card/80 backdrop-blur-sm border ${contribution.borderColor} ${contribution.hoverColor} transition-all duration-300 hover:shadow-lg`}
              >
                <CardContent className="p-6 flex-1 flex flex-col">
                  <div
                    className={`${contribution.iconBg} p-3 rounded-full mb-4 w-fit border ${contribution.borderColor}`}
                  >
                    {contribution.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-foreground">{contribution.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">{contribution.description}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {contribution.tags.map((tag, i) => (
                      <span key={i} className="text-xs bg-secondary/50 px-2 py-1 rounded-full border border-border/30">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className={`w-full ${contribution.borderColor} hover:bg-current/10 bg-transparent transition-all duration-300`}
                  >
                    <Link href={contribution.link} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> View on GitHub
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
