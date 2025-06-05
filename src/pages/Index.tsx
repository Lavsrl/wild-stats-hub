
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trophy, Users, Activity, TrendingUp, Crown, Sword } from "lucide-react";
import { mockPlayers, mockClans } from "@/lib/mockData";

const Index = () => {
  const topHGPlayer = mockPlayers.hg[0];
  const topDuelsPlayer = mockPlayers.duels[0];
  const topClan = mockClans[0];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Hero Section */}
      <section className="text-center py-12 bg-gradient-to-r from-primary/20 to-primary/5 rounded-xl border border-primary/20">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-green-400 bg-clip-text text-transparent">
            Wild Stats
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Acompanhe suas estatísticas, rankings e desempenho no servidor Wild
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link to="/leaderboard">
              <Button size="lg" className="flex items-center space-x-2">
                <Trophy className="w-5 h-5" />
                <span>Ver Rankings</span>
              </Button>
            </Link>
            <Link to="/clans">
              <Button variant="outline" size="lg" className="flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span>Explorar Clãs</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="glass-effect">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-primary/20 rounded-lg">
                <Activity className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Jogadores Online</p>
                <p className="text-2xl font-bold">1,247</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-effect">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-yellow-500/20 rounded-lg">
                <Trophy className="w-6 h-6 text-yellow-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Partidas Hoje</p>
                <p className="text-2xl font-bold">8,932</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-effect">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-blue-500/20 rounded-lg">
                <Users className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Clãs Ativos</p>
                <p className="text-2xl font-bold">156</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-effect">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-green-500/20 rounded-lg">
                <TrendingUp className="w-6 h-6 text-green-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total de Kills</p>
                <p className="text-2xl font-bold">2.1M</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Top Players Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="glass-effect">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Crown className="w-5 h-5 text-yellow-500" />
              <span>Campeão HG</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center">
                <img 
                  src={`https://mc-heads.net/avatar/${topHGPlayer.name}/64`}
                  alt={`${topHGPlayer.name} skin`}
                  className="w-14 h-14 rounded"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">{topHGPlayer.name}</h3>
                <Badge className="rank-gold">🥇 #1 HG</Badge>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground">Vitórias</p>
                <p className="font-semibold">{topHGPlayer.wins.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-muted-foreground">K/D</p>
                <p className="font-semibold">{(topHGPlayer.kills / topHGPlayer.deaths).toFixed(2)}</p>
              </div>
            </div>
            <Link to={`/player/${topHGPlayer.name}`}>
              <Button className="w-full mt-4" variant="outline">Ver Perfil</Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="glass-effect">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Sword className="w-5 h-5 text-blue-500" />
              <span>Campeão Duels</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center">
                <img 
                  src={`https://mc-heads.net/avatar/${topDuelsPlayer.name}/64`}
                  alt={`${topDuelsPlayer.name} skin`}
                  className="w-14 h-14 rounded"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">{topDuelsPlayer.name}</h3>
                <Badge className="rank-gold">🥇 #1 Duels</Badge>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground">Vitórias</p>
                <p className="font-semibold">{topDuelsPlayer.wins.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-muted-foreground">K/D</p>
                <p className="font-semibold">{(topDuelsPlayer.kills / topDuelsPlayer.deaths).toFixed(2)}</p>
              </div>
            </div>
            <Link to={`/player/${topDuelsPlayer.name}`}>
              <Button className="w-full mt-4" variant="outline">Ver Perfil</Button>
            </Link>
          </CardContent>
        </Card>
      </section>

      {/* Top Clan */}
      <section>
        <Card className="glass-effect">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-primary" />
              <span>Clã em Destaque</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold">{topClan.name}</h3>
                <p className="text-muted-foreground">{topClan.description}</p>
              </div>
              <Badge className="rank-gold">🏆 #1</Badge>
            </div>
            <div className="grid grid-cols-3 gap-4 text-sm mb-4">
              <div>
                <p className="text-muted-foreground">Membros</p>
                <p className="font-semibold">{topClan.members}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Vitórias</p>
                <p className="font-semibold">{topClan.totalWins.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-muted-foreground">K/D Médio</p>
                <p className="font-semibold">{topClan.averageKD}</p>
              </div>
            </div>
            <Link to={`/clan/${topClan.id}`}>
              <Button className="w-full" variant="outline">Ver Clã</Button>
            </Link>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Index;
