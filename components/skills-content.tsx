import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function SkillsContent() {
  const skillCategories = [
    {
      category: "Languages",
      skills: [
        "C++", "Rust", "Go", "TypeScript", "Java", "JavaScript", "Python", "HTML/CSS"
      ],
      borderColor: "border-t-rust-orange",
      iconBg: "bg-rust-orange/10",
    },
    {
      category: "Frameworks",
      skills: [
        "Actix-web", "Axum", "Next.js", "Vue.js", "React", "React Native", "Express", "Node.js", "Spring Boot"
      ],
      borderColor: "border-t-rust-brown",
      iconBg: "bg-rust-brown/10",
    },
    {
      category: "Databases",
      skills: [
        "PostgreSQL", "Redis", "MongoDB", "MySQL / MariaDB", "SQL Server", "Qdrant", "Pinecone"
      ],
      borderColor: "border-t-rust-light",
      iconBg: "bg-rust-light/10",
    },
    {
      category: "Tools & Platforms",
      skills: [
        "Linux", "Git/GitHub", "Jenkins", "Docker", "Vercel", "Heroku", "AWS", "Azure", "GCP", "DigitalOcean", "Postman"
      ],
      borderColor: "border-t-rust-muted",
      iconBg: "bg-rust-muted/10",
    },
  ]

  return (
    <div>
      <div className="space-y-4 text-center">
        <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl font-mono">
          <span className="text-rust-orange">use</span> skills::{"{*}"};
        </h3>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed font-mono">
          <span className="text-rust-orange">/&#47; </span>Comprehensive expertise in the Rust ecosystem
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-card">
            <Card
              className={`h-full border-t-4 ${category.borderColor} bg-card/80 backdrop-blur-sm hover:shadow-lg hover:shadow-current/20 transition-all duration-300`}
            >
              <CardContent className="p-6">
                <div
                  className={`w-12 h-12 ${category.iconBg} rounded-lg flex items-center justify-center mb-4 border border-current/20`}
                >
                  <div className="w-6 h-6 bg-current rounded opacity-60"></div>
                </div>
                <h3 className="text-xl font-bold mb-4 font-mono">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="text-xs bg-secondary/50 hover:bg-secondary/70 transition-colors font-mono"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}
