import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShieldAlert, Home, ArrowRight, FolderGit2 } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-destructive/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-2xl mx-auto text-center space-y-8 relative z-10">
        {/* Security Alert Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-xs font-mono font-bold uppercase tracking-wider">
          <ShieldAlert className="w-4 h-4" />
          <span>HTTP 404 • Resource Not Found</span>
        </div>

        {/* Large 404 Hero */}
        <div className="space-y-4">
          <h1 className="text-7xl sm:text-9xl font-extrabold text-foreground tracking-tight font-mono">
            4<span className="text-primary">0</span>4
          </h1>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            Target Endpoint Not Found
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-lg mx-auto leading-relaxed">
            The requested page route does not exist or has been relocated. Please verify the URL or return to the main security architecture.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Button asChild size="lg" variant="default">
            <Link href="/">
              <Home className="w-4 h-4 mr-2" />
              Return to Home
            </Link>
          </Button>

          <Button asChild size="lg" variant="outline">
            <Link href="/projects">
              <FolderGit2 className="w-4 h-4 mr-2 text-primary" />
              Explore Projects
            </Link>
          </Button>
        </div>

        {/* Security Note */}
        <p className="text-xs font-mono text-muted-foreground/80 pt-6 border-t border-muted/40">
          🔒 <span className="font-semibold text-foreground">System Audit:</span> No unauthorized directory traversal detected.
        </p>
      </div>
    </main>
  );
}
