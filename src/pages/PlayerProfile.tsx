
import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GameModeSelector } from "@/components/GameModeSelector";
import { useState } from "react";
import { mockPlayerProfile } from "@/lib/mockData";
import { User, Clock, Calendar, Trophy, Sword, Shield, Target, TrendingUp } from "lucide-react";

const PlayerProfile = () => {
  const { nickname } = useParams();
  const [selectedMode, setSelectedMode] = useState("hg");
  
  // Em uma aplicação real, buscaríamos os dados do jogador pela API
  const player = mockPlayerProfile;
  const stats = player.stats[selectedMode as keyof typeof player.stats];

  if (!player) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold mb-4">Jogador não encontrado</h1>
        <p className="text-muted-foreground">O jogador "{nickname}" não foi encontrado.</p>
      </div>
    );
  }

  const kd = stats.deaths > 0 ? (stats.kills / stats.deaths).toFixed(2) : stats.kills.toFixed(2);
  const winRate = stats.wins + stats.losses > 0 ? ((stats.wins / (stats.wins + stats.losses)) * 100).toFixed(1) : "0.0";

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Player Header */}
      <Card className="glass-effect">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
            <div className="w-24 h-24 bg-primary/20 rounded-xl flex items-center justify-center">
              <img 
                src={`https://mc-heads.net/avatar/${player.name}/96`}
                alt={`${player.name} skin`}
                className="w-20 h-20 rounded-lg"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-2">
                <h1 className="text-3xl font-bold">{player.name}</h1>
                {player.clan && (
                  <Badge variant="secondary" className="text-lg px-3 py-1">
                    {player.clan}
                  </Badge>
                )}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Trophy className="w-4 h-4 text-yellow-500" />
                  <span className="text-muted-foreground">Rank Global:</span>
                  <span className="font-semibold">#{player.rank}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-blue-500" />
                  <span className="text-muted-foreground">Entrou em:</span>
                  <span className="font-semibold">{new Date(player.joinDate).toLocaleDateString('pt-BR')}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-green-500" />
                  <span className="text-muted-foreground">Último acesso:</span>
                  <span className="font-semibold">{new Date(player.lastSeen).toLocaleDateString('pt-BR')}</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Game Mode Selector */}
      <GameModeSelector selectedMode={selectedMode} onModeChange={setSelectedMode} />

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="glass-effect">
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-yellow-500/20 rounded-lg">
                <Trophy className="w-6 h-6 text-yellow-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Vitórias</p>
                <p className="text-2xl font-bold">{stats.wins.toLocaleString()}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-effect">
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-red-500/20 rounded-lg">
                <Shield className="w-6 h-6 text-red-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Derrotas</p>
                <p className="text-2xl font-bold">{stats.losses.toLocaleString()}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-effect">
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-primary/20 rounded-lg">
                <Sword className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">K/D Ratio</p>
                <p className="text-2xl font-bold">{kd}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-effect">
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-blue-500/20 rounded-lg">
                <Target className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Win Rate</p>
                <p className="text-2xl font-bold">{winRate}%</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="glass-effect">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5" />
              <span>Estatísticas Detalhadas</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Total de Kills:</span>
                <span className="font-semibold">{stats.kills.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Total de Deaths:</span>
                <span className="font-semibold">{stats.deaths.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Sequência Atual:</span>
                <span className="font-semibold">{stats.winStreak} vitórias</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Melhor Sequência:</span>
                <span className="font-semibold">{stats.bestStreak} vitórias</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-effect">
          <CardHeader>
            <CardTitle>Partidas Recentes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {player.recentMatches.map((match) => (
                <div key={match.id} className="flex items-center justify-between p-3 bg-card/50 rounded-lg">
                  <div>
                    <div className="flex items-center space-x-2">
                      <Badge variant={match.result === "Vitória" ? "default" : "destructive"}>
                        {match.result}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{match.mode}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {match.kills}K / {match.deaths}D • {match.duration}
                    </p>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {new Date(match.date).toLocaleDateString('pt-BR')}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PlayerProfile;
