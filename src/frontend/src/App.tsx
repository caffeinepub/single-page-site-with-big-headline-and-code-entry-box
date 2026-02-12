import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function App() {
  const [code, setCode] = useState('');

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-2xl space-y-12">
          {/* Headline */}
          <div className="text-center space-y-4">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight leading-none">
              <span className="block text-primary">Bytes</span>
              <span className="block text-accent">console</span>
              <span className="block text-foreground">winning!</span>
            </h1>
          </div>

          {/* Code Entry Box */}
          <div className="space-y-3 max-w-md mx-auto">
            <Label 
              htmlFor="code-input" 
              className="text-lg font-semibold text-muted-foreground uppercase tracking-wider"
            >
              Enter Code
            </Label>
            <Input
              id="code-input"
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="XXXX-XXXX-XXXX"
              className="h-14 text-xl font-mono tracking-widest text-center uppercase border-2 focus-visible:ring-2 focus-visible:ring-accent transition-all"
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 px-4 border-t border-border/50">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} · Built with love using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                typeof window !== 'undefined' ? window.location.hostname : 'bytes-console'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent/80 transition-colors font-medium"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
