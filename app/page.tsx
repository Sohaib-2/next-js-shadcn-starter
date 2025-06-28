import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <main className="container mx-auto py-10">
      <div className="flex flex-col items-center space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Next.js 15 + shadcn/ui
          </h1>
          <p className="text-xl text-slate-600">
            Modern starter template with Tailwind CSS
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <Badge className="bg-blue-100 text-blue-800">Next.js 15</Badge>
          <Badge className="bg-green-100 text-green-800">React 19</Badge>
          <Badge className="bg-purple-100 text-purple-800">Tailwind v4</Badge>
          <Badge className="bg-orange-100 text-orange-800">shadcn/ui</Badge>
        </div>

        <Card className="w-full max-w-md border-slate-200">
          <CardHeader>
            <CardTitle>Ready to build</CardTitle>
            <CardDescription>
              Start adding components and edit app/page.tsx to get started
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              Start Adding Components
            </Button>
            <Button
              variant="outline"
              className="w-full border-slate-300 hover:bg-slate-50"
              asChild
            >
              <a
                href="https://github.com/Sohaib-2/next-js-shadcn-starter"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                ⭐ Star on GitHub
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
