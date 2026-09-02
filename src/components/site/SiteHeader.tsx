import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Mountain, Search, X } from "lucide-react";
import { navGroups } from "@/data/nav";
import { SearchDialog } from "./SearchDialog";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-5 py-3">
          <Link to="/" className="flex items-center gap-2.5" aria-label="The Complete History of Coorg — home">
            <span className="grid size-9 place-items-center rounded-md bg-primary text-primary-foreground">
              <Mountain aria-hidden="true" className="size-4.5" />
            </span>
            <span className="leading-tight">
              <span className="block font-display text-[0.95rem] font-semibold">
                The Complete History of Coorg
              </span>
              <span className="block text-[0.68rem] tracking-[0.16em] text-muted-foreground">
                KODAGU • ಕೊಡಗು
              </span>
            </span>
          </Link>

          <nav aria-label="Primary" className="ml-auto hidden items-center gap-1 lg:flex">
            {navGroups.map((group) => (
              <div key={group.title} className="group relative">
                <button
                  type="button"
                  className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground"
                  aria-haspopup="true"
                >
                  {group.title}
                </button>
                <div className="invisible absolute right-0 top-full w-80 pt-2 opacity-0 transition-all group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                  <ul className="archive-card max-h-[70vh] overflow-y-auto p-2">
                    {group.items.map((item) => (
                      <li key={item.to}>
                        <Link
                          to={item.to}
                          className="block rounded-md px-3 py-2 hover:bg-secondary"
                          activeProps={{ className: "bg-secondary" }}
                        >
                          <span className="block text-sm font-medium">{item.label}</span>
                          {item.blurb ? (
                            <span className="block text-xs text-muted-foreground">{item.blurb}</span>
                          ) : null}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-2 lg:ml-0">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setSearchOpen(true)}
              className="gap-2"
              aria-label="Search the archive"
            >
              <Search aria-hidden="true" className="size-4" />
              <span className="hidden sm:inline">Search</span>
              <kbd className="hidden rounded border border-border px-1 text-[0.65rem] text-muted-foreground md:inline">
                ⌘K
              </kbd>
            </Button>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="rounded-md border border-border p-2 lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? (
                <X aria-hidden="true" className="size-4" />
              ) : (
                <Menu aria-hidden="true" className="size-4" />
              )}
            </button>
          </div>
        </div>

        {open ? (
          <nav
            id="mobile-nav"
            aria-label="Primary mobile"
            className="max-h-[75vh] overflow-y-auto border-t border-border bg-card px-5 py-4 lg:hidden"
          >
            {navGroups.map((group) => (
              <div key={group.title} className="mb-5">
                <p className="rule-eyebrow">{group.title}</p>
                <ul className="mt-2 space-y-1">
                  {group.items.map((item) => (
                    <li key={item.to}>
                      <Link
                        to={item.to}
                        onClick={() => setOpen(false)}
                        className="block rounded-md px-2 py-2 text-sm hover:bg-secondary"
                        activeProps={{ className: "bg-secondary font-semibold" }}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        ) : null}
      </header>
      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </>
  );
}
