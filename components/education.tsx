import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Award } from "lucide-react"

export default function Education() {
  const achievements = [
    "Created UniSphere (in-house college app)",
    "Technova - ChronoQuest Winner",
    "SIH – Internal Clearance '23 & '24",
  ]

  return (
    <section id="education" className="py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-mono">
              <span className="text-rust-orange">struct</span> Education {"{"}
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-mono">
              <span className="text-rust-orange">/&#47; </span>Academic foundation and achievements in systems programming
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {/* Current Education */}
            <Card className="overflow-hidden bg-card/80 backdrop-blur-sm border border-rust-orange/30 hover:border-rust-orange/50 transition-all duration-300 hover:shadow-lg hover:shadow-rust-orange/20 py-0">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-rust-orange/10 to-rust-brown/10 p-6 flex items-center gap-4 border-b border-rust-orange/20">
                  <div className="bg-gradient-to-br from-rust-orange/20 to-rust-brown/10 p-3 rounded-full border border-rust-orange/30">
                    <GraduationCap className="h-8 w-8 text-rust-orange" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground font-mono">B.Tech Computer Science</h3>
                    <p className="text-rust-brown font-mono">BML Munjal University</p>
                    <p className="text-sm text-muted-foreground font-mono">Sept 2022 – Present</p>
                    <p className="text-xs text-muted-foreground font-mono mt-1">
                      <span className="text-rust-orange">/&#47; </span>Specialization: Systems Programming & Rust
                      Development
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Previous Education */}
            <Card className="overflow-hidden bg-card/80 backdrop-blur-sm border border-rust-brown/30 hover:border-rust-brown/50 transition-all duration-300 hover:shadow-lg hover:shadow-rust-brown/20 py-0">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-rust-brown/10 to-rust-light/10 p-6 flex items-center gap-4 border-b border-rust-brown/20">
                  <div className="bg-gradient-to-br from-rust-brown/20 to-rust-light/10 p-3 rounded-full border border-rust-brown/30">
                    <GraduationCap className="h-8 w-8 text-rust-brown" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground font-mono">Pre-University (12th)</h3>
                    <p className="text-rust-light font-mono">St. Jerome&apos;s College</p>
                    <p className="text-sm text-muted-foreground font-mono">2021 – 2022 | Bangalore</p>
                    <p className="text-xs text-muted-foreground font-mono mt-1">
                      <span className="text-rust-orange">/&#47; </span>Focus: Mathematics & Computer Science
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="overflow-hidden bg-card/80 backdrop-blur-sm border border-rust-muted/30 hover:border-rust-muted/50 transition-all duration-300 hover:shadow-lg hover:shadow-rust-muted/20 py-0">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-rust-muted/10 to-rust-orange/10 p-6 border-b border-rust-muted/20">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-gradient-to-br from-rust-muted/20 to-rust-orange/10 p-3 rounded-full border border-rust-muted/30">
                      <Award className="h-8 w-8 text-rust-muted" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground font-mono">
                        <span className="text-rust-orange">enum</span> Achievements
                      </h3>
                      <p className="text-rust-muted font-mono">Recognition in Rust ecosystem</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-rust-muted flex-shrink-0 shadow-sm shadow-rust-muted"></span>
                        <span className="text-sm text-muted-foreground font-mono">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
