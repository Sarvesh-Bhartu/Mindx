
'use client';

import {
  BrainCircuit,
  LayoutDashboard,
  Sparkles,
  Trophy,
  BotMessageSquare,
  Users,
  Menu,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { cn } from '@/lib/utils';

const menuItems = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/nirvana-ai', label: 'Nirvana AI', icon: BotMessageSquare },
  { href: '/soul-sprint', label: 'Soul Sprint', icon: Sparkles },
  { href: '/race-challenges', label: 'Race Challenges', icon: Trophy },
  { href: '/meeting-pods', label: 'Meeting Pods', icon: Users },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/dashboard" className="mr-6 flex items-center space-x-2">
            <BrainCircuit className="h-6 w-6 text-primary" />
            <span className="hidden font-bold sm:inline-block">
              mindX Agent
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'transition-colors hover:text-foreground/80',
                  pathname.startsWith(item.href) ? 'text-foreground' : 'text-foreground/60'
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px]">
            <Link href="/dashboard" className="mr-6 flex items-center space-x-2">
              <BrainCircuit className="h-6 w-6 text-primary" />
              <span className="font-bold">mindX Agent</span>
            </Link>
            <div className="mt-6 flex flex-col space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'flex items-center gap-2 rounded-md p-2 text-sm font-medium',
                     pathname.startsWith(item.href) ? 'bg-accent text-accent-foreground' : 'hover:bg-accent'
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  {item.label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>

        <div className="flex flex-1 items-center justify-end space-x-4">
          {/* User profile button removed */}
        </div>
      </div>
    </header>
  );
}
