// import { Card, CardContent } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { ExternalLink, BookOpen } from "lucide-react"
// import Link from "next/link"

// export default function Blog() {
//   return (
//     <section id="blog" className="py-20">
//       <div className="container px-4 md:px-6 mx-auto">
//         <div className="space-y-12">
//           <div className="space-y-4 text-center">
//             <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Blog</h2>
//             <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
//               Thoughts, tutorials, and insights on Rust and systems programming
//             </p>
//           </div>

//           <div className="flex flex-col items-center">
//             <Card className="w-full max-w-2xl bg-card/80 backdrop-blur-sm border border-rust-orange/30 hover:border-rust-orange/50 transition-all duration-300 hover:shadow-lg hover:shadow-rust-orange/20">
//               <CardContent className="p-6 text-center">
//                 <div className="flex justify-center mb-4">
//                   <div className="bg-gradient-to-br from-rust-orange/20 to-rust-brown/10 p-4 rounded-full border border-rust-orange/30">
//                     <BookOpen className="h-12 w-12 text-rust-orange" />
//                   </div>
//                 </div>
//                 <h3 className="text-xl font-bold mb-4 text-foreground">Visit My Rust Blog</h3>
//                 <p className="text-muted-foreground mb-6 font-mono">
//                   <span className="text-rust-orange">fn</span> explore_blog() {"{"}
//                   <br />
//                   &nbsp;&nbsp;
//                   <span className="text-muted-foreground">
//                     // Deep dives into Rust, systems programming, and performance optimization
//                   </span>
//                   <br />
//                   {"}"}
//                 </p>
//                 <Button
//                   asChild
//                   className="bg-gradient-to-r from-rust-orange/80 to-rust-brown/80 hover:from-rust-orange hover:to-rust-brown transition-all duration-300 shadow-md hover:shadow-lg border border-rust-orange/30"
//                 >
//                   <Link href="https://nihalmaskey.hashnode.dev" target="_blank" rel="noopener noreferrer">
//                     <ExternalLink className="mr-2 h-4 w-4" /> Visit Blog
//                   </Link>
//                 </Button>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
