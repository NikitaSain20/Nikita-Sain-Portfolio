// "use client";

// import Image from "next/image";
// import { Card, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Github, ExternalLink } from "lucide-react";

// export default function Projects() {
//   return (
//     <section id="projects" className="py-20 px-4 lg:px-8 ">
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl lg:text-5xl font-bold mb-6 animate-slide-up">
//             My <span className="gradient-text">Projects</span>
//           </h2>
//           <div className="w-20 h-2 bg-gradient-to-r from-transparent via-current to-transparent mx-auto mb-8 opacity-50"></div>
//           <p className="text-gray-400 text-lg max-w-2xl mx-auto">
//             Real-world applications built with modern technologies
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           <Card className="glass-effect rounded-2xl overflow-hidden border-white/10 group">
//             <div className="relative">
//               <Image
//                 src="/dial-a-meal-project.png"
//                 alt="Dial a Meal"
//                 width={400}
//                 height={200}
//                 className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
//               />
//               <div className="absolute top-4 right-4">
//                 <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
//                   Completed
//                 </Badge>
//               </div>
//             </div>
//             <CardContent className="p-6">
//               <h3 className="text-xl font-bold mb-2">Dial a Meal</h3>
//               <p className="text-gray-400 mb-4 text-sm">
//                 A user-friendly web application offering customizable tiffin
//                 service plans (daily, weekly, monthly). Users can personalize
//                 their meal plans through a responsive UI.
//               </p>
//               <div className="flex flex-wrap gap-2 mb-4">
//                 <Badge
//                   variant="outline"
//                   className="text-xs border-blue-500/30 gradient-text"
//                 >
//                   React.js
//                 </Badge>
//                 <Badge
//                   variant="outline"
//                   className="text-xs border-blue-500/30 gradient-text"
//                 >
//                   Firebase
//                 </Badge>
//                 <Badge
//                   variant="outline"
//                   className="text-xs border-blue-500/30 gradient-text"
//                 >
//                   Tailwind CSS
//                 </Badge>
//               </div>
//               <div className="flex gap-3">
//                 <Button
//                   size="sm"
//                   variant="outline"
//                   className="btn-outline bg-transparent"
//                   onClick={() =>
//                     window.open(
//                       "https://github.com/NikitaSain20/Dial-A-Meal-React-Firebase",
//                       "_blank"
//                     )
//                   }
//                 >
//                   <Github className="mr-2 h-4 w-4" />
//                   Code
//                 </Button>
//                 <Button
//                   size="sm"
//                   className="btn-primary"
//                   onClick={() =>
//                     window.open(
//                       "https://dial-a-meal-react-firebase.vercel.app/",
//                       "_blank"
//                     )
//                   }
//                 >
//                   <ExternalLink className="mr-2 h-4 w-4" />
//                   Demo
//                 </Button>
//               </div>
//             </CardContent>
//           </Card>

//           <Card className="glass-effect rounded-2xl overflow-hidden border-white/10 group">
//             <div className="relative">
//               <Image
//                 src="/gofood-project.png"
//                 alt="GoFood"
//                 width={400}
//                 height={200}
//                 className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
//               />
//               <div className="absolute top-4 right-4">
//                 <Badge className="bg-green-500/20 gradient-text border-green-500/30">
//                   Completed
//                 </Badge>
//               </div>
//             </div>
//             <CardContent className="p-6">
//               <h3 className="text-xl font-bold mb-2">GoFood</h3>
//               <p className="text-gray-400 mb-4 text-sm">
//                 A MERN stack-based food ordering platform with features like
//                 user authentication, categorized food listings, dynamic cart
//                 system, and real-time order management.
//               </p>
//               <div className="flex flex-wrap gap-2 mb-4">
//                 <Badge
//                   variant="outline"
//                   className="text-xs border-blue-500/30 text-blue-300"
//                 >
//                   MongoDB
//                 </Badge>
//                 <Badge
//                   variant="outline"
//                   className="text-xs border-blue-500/30 text-blue-300"
//                 >
//                   Express.js
//                 </Badge>
//                 <Badge
//                   variant="outline"
//                   className="text-xs border-blue-500/30 text-blue-300"
//                 >
//                   Node.js
//                 </Badge>
//               </div>
//               <div className="flex gap-3">
//                 <Button
//                   size="sm"
//                   variant="outline"
//                   className="btn-outline bg-transparent"
//                   onClick={() =>
//                     window.open(
//                       "https://github.com/NikitaSain20/Go-Food-Mern",
//                       "_blank"
//                     )
//                   }
//                 >
//                   <Github className="mr-2 h-4 w-4" />
//                   Code
//                 </Button>
//                 <Button
//                   size="sm"
//                   className="btn-primary"
//                   onClick={() =>
//                     window.open(
//                       "https://go-food-mern-five.vercel.app/",
//                       "_blank"
//                     )
//                   }
//                 >
//                   <ExternalLink className="mr-2 h-4 w-4" />
//                   Demo
//                 </Button>
//               </div>
//             </CardContent>
//           </Card>

//           <Card className="glass-effect rounded-2xl overflow-hidden border-white/10 group">
//             <div className="relative">
//               <Image
//                 src="/archicraft-project.png"
//                 alt="ArchiCraft"
//                 width={400}
//                 height={200}
//                 className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
//               />
//               <div className="absolute top-4 right-4">
//                 <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
//                   Completed
//                 </Badge>
//               </div>
//             </div>
//             <CardContent className="p-6">
//               <h3 className="text-xl font-bold mb-2">ArchiCraft</h3>
//               <p className="text-gray-400 mb-4 text-sm">
//                 A full-stack platform where users can request custom
//                 architectural designs. Admins manage orders, set pricing, and
//                 deliver final designs post-payment, with role-based
//                 functionality.
//               </p>
//               <div className="flex flex-wrap gap-2 mb-4">
//                 <Badge
//                   variant="outline"
//                   className="text-xs border-blue-500/30 text-blue-300"
//                 >
//                   React.js
//                 </Badge>
//                 <Badge
//                   variant="outline"
//                   className="text-xs border-blue-500/30 text-blue-300"
//                 >
//                   Node.js
//                 </Badge>
//                 <Badge
//                   variant="outline"
//                   className="text-xs border-blue-500/30 text-blue-300"
//                 >
//                   MongoDB
//                 </Badge>
//               </div>
//               <div className="flex gap-3">
//                 <Button
//                   size="sm"
//                   variant="outline"
//                   className="btn-outline bg-transparent"
//                   onClick={() =>
//                     window.open(
//                       "https://github.com/NikitaSain20/ArchiCraft-React-Firebase",
//                       "_blank"
//                     )
//                   }
//                 >
//                   <Github className="mr-2 h-4 w-4" />
//                   Code
//                 </Button>
//                 <Button
//                   size="sm"
//                   className="btn-primary"
//                   onClick={() =>
//                     window.open(
//                       "https://archi-craft-react-firebase.vercel.app/",
//                       "_blank"
//                     )
//                   }
//                 >
//                   <ExternalLink className="mr-2 h-4 w-4" />
//                   Demo
//                 </Button>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-20 px-4 lg:px-8 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-to-r from-purple-500/5 to-purple-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 animate-slide-up">
            My{" "}
            <span className="bg-gradient-to-r from-purple-400 to-purple-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-20 h-2 bg-gradient-to-r from-purple-500/20 to-purple-400/20 mx-auto mb-8 opacity-50"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Real-world applications built with modern technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <Card className="glass-effect rounded-2xl overflow-hidden border-white/10 group">
            <div className="relative">
              <Image
                src="/dial-a-meal-project.png"
                alt="Dial a Meal"
                width={400}
                height={200}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 right-4">
                <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                  Completed
                </Badge>
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Dial a Meal</h3>
              <p className="text-gray-300 mb-4 text-sm">
                A user-friendly web application offering customizable tiffin
                service plans (daily, weekly, monthly). Users can personalize
                their meal plans through a responsive UI.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge
                  variant="outline"
                  className="text-xs border-purple-500/30 text-purple-300"
                >
                  React.js
                </Badge>
                <Badge
                  variant="outline"
                  className="text-xs border-purple-500/30 text-purple-300"
                >
                  Firebase
                </Badge>
                <Badge
                  variant="outline"
                  className="text-xs border-purple-500/30 text-purple-300"
                >
                  Tailwind CSS
                </Badge>
              </div>
              <div className="flex gap-3">
                <Button
                  size="sm"
                  variant="outline"
                  className="btn-outline bg-transparent"
                  onClick={() =>
                    window.open(
                      "https://github.com/NikitaSain20/Dial-A-Meal-React-Firebase",
                      "_blank"
                    )
                  }
                >
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </Button>
                <Button
                  size="sm"
                  className="btn-primary"
                  onClick={() =>
                    window.open(
                      "https://dial-a-meal-react-firebase.vercel.app/",
                      "_blank"
                    )
                  }
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Demo
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Project 2 */}
          <Card className="glass-effect rounded-2xl overflow-hidden border-white/10 group">
            <div className="relative">
              <Image
                src="/gofood-project.png"
                alt="GoFood"
                width={400}
                height={200}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 right-4">
                <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                  Completed
                </Badge>
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">GoFood</h3>
              <p className="text-gray-300 mb-4 text-sm">
                A MERN stack-based food ordering platform with features like
                user authentication, categorized food listings, dynamic cart
                system, and real-time order management.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge
                  variant="outline"
                  className="text-xs border-purple-500/30 text-purple-300"
                >
                  MongoDB
                </Badge>
                <Badge
                  variant="outline"
                  className="text-xs border-purple-500/30 text-purple-300"
                >
                  Express.js
                </Badge>
                <Badge
                  variant="outline"
                  className="text-xs border-purple-500/30 text-purple-300"
                >
                  Node.js
                </Badge>
              </div>
              <div className="flex gap-3">
                <Button
                  size="sm"
                  variant="outline"
                  className="btn-outline bg-transparent"
                  onClick={() =>
                    window.open(
                      "https://github.com/NikitaSain20/Go-Food-Mern",
                      "_blank"
                    )
                  }
                >
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </Button>
                <Button
                  size="sm"
                  className="btn-primary"
                  onClick={() =>
                    window.open(
                      "https://go-food-mern-five.vercel.app/",
                      "_blank"
                    )
                  }
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Demo
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Project 3 */}
          <Card className="glass-effect rounded-2xl overflow-hidden border-white/10 group">
            <div className="relative">
              <Image
                src="/archicraft-project.png"
                alt="ArchiCraft"
                width={400}
                height={200}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 right-4">
                <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                  Completed
                </Badge>
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">ArchiCraft</h3>
              <p className="text-gray-300 mb-4 text-sm">
                A full-stack platform where users can request custom
                architectural designs. Admins manage orders, set pricing, and
                deliver final designs post-payment, with role-based
                functionality.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge
                  variant="outline"
                  className="text-xs border-purple-500/30 text-purple-300"
                >
                  React.js
                </Badge>
                <Badge
                  variant="outline"
                  className="text-xs border-purple-500/30 text-purple-300"
                >
                  Node.js
                </Badge>
                <Badge
                  variant="outline"
                  className="text-xs border-purple-500/30 text-purple-300"
                >
                  MongoDB
                </Badge>
              </div>
              <div className="flex gap-3">
                <Button
                  size="sm"
                  variant="outline"
                  className="btn-outline bg-transparent"
                  onClick={() =>
                    window.open(
                      "https://github.com/NikitaSain20/ArchiCraft-React-Firebase",
                      "_blank"
                    )
                  }
                >
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </Button>
                <Button
                  size="sm"
                  className="btn-primary"
                  onClick={() =>
                    window.open(
                      "https://archi-craft-react-firebase.vercel.app/",
                      "_blank"
                    )
                  }
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Demo
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
