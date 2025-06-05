
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Trophy, Users, User, Home } from "lucide-react";
import { useState } from "react";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");

  const isActive = (path: string) => location.pathname === path;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/player/${searchQuery.trim()}`;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">W</span>
              </div>
              <h1 className="text-2xl font-bold text-primary">Wild Stats</h1>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/">
                <Button 
                  variant={isActive("/") ? "default" : "ghost"}
                  className="flex items-center space-x-2"
                >
                  <Home className="w-4 h-4" />
                  <span>Início</span>
                </Button>
              </Link>
              <Link to="/leaderboard">
                <Button 
                  variant={isActive("/leaderboard") ? "default" : "ghost"}
                  className="flex items-center space-x-2"
                >
                  <Trophy className="w-4 h-4" />
                  <span>Rankings</span>
                </Button>
              </Link>
              <Link to="/clans">
                <Button 
                  variant={isActive("/clans") ? "default" : "ghost"}
                  className="flex items-center space-x-2"
                >
                  <Users className="w-4 h-4" />
                  <span>Clãs</span>
                </Button>
              </Link>
            </nav>

            {/* Search */}
            <form onSubmit={handleSearch} className="flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Buscar jogador..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-64"
                />
              </div>
              <Button type="submit" size="sm">
                <User className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-muted-foreground">
            <p>&copy; 2024 Wild Server. Todos os direitos reservados.</p>
            <p className="mt-2">Sistema de estatísticas para jogadores de Minecraft</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
