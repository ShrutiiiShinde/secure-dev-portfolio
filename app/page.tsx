export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-6 sm:p-12">
      <div className="max-w-xl w-full border border-muted bg-muted/30 rounded-2xl p-8 backdrop-blur shadow-2xl text-center space-y-6">
        {/* Placeholder Heading */}
        <h1 className="text-5xl font-extrabold tracking-tight text-primary">
          Hello
        </h1>
        <p className="text-muted-foreground text-lg">
          Portfolio design system successfully initialized for <span className="text-foreground font-semibold">Shruti</span>.
        </p>

        {/* Theme Swatches to verify all colors work */}
        <div className="pt-4 border-t border-muted/80">
          <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-4">
            Design System Theme Verification
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-mono">
            {/* Primary Accent */}
            <div className="flex items-center space-x-2 bg-primary/10 border border-primary/30 p-2.5 rounded-lg text-primary">
              <span className="w-3 h-3 rounded-full bg-primary inline-block"></span>
              <span>Primary (#06B6D4)</span>
            </div>

            {/* Secondary Accent */}
            <div className="flex items-center space-x-2 bg-secondary/10 border border-secondary/30 p-2.5 rounded-lg text-secondary">
              <span className="w-3 h-3 rounded-full bg-secondary inline-block"></span>
              <span>Secondary (#10B981)</span>
            </div>

            {/* Warning */}
            <div className="flex items-center space-x-2 bg-warning/10 border border-warning/30 p-2.5 rounded-lg text-warning">
              <span className="w-3 h-3 rounded-full bg-warning inline-block"></span>
              <span>Warning (#F59E0B)</span>
            </div>

            {/* Error */}
            <div className="flex items-center space-x-2 bg-error/10 border border-error/30 p-2.5 rounded-lg text-error">
              <span className="w-3 h-3 rounded-full bg-error inline-block"></span>
              <span>Error (#EF4444)</span>
            </div>

            {/* Background */}
            <div className="flex items-center space-x-2 bg-background border border-muted p-2.5 rounded-lg text-foreground">
              <span className="w-3 h-3 rounded-full bg-background border border-muted-foreground inline-block"></span>
              <span>Bg (#0F172A)</span>
            </div>

            {/* Text / Light Gray */}
            <div className="flex items-center space-x-2 bg-muted p-2.5 rounded-lg text-muted-foreground">
              <span className="w-3 h-3 rounded-full bg-muted-foreground inline-block"></span>
              <span>Text (#94A3B8)</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
