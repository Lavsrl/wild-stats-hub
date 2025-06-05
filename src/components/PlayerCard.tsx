
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Sword, Shield, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface PlayerCardProps {
  player: {
    id: string;
    name: string;
    rank: number;
    wins: number;
    losses: number;
    kills: number;
    deaths: number;
    clan?: string;
    avatar?: string;
  };
  gameMode: string;
  showRank?: boolean;
}

export const PlayerCard = ({ player, gameMode, showRank = true }: PlayerCardProps) => {
  const navigate = useNavigate();
  const kd = player.deaths > 0 ? (player.kills / player.deaths).toFixed(2) : player.kills.toFixed(2);
  const winRate = player.wins + player.losses > 0 ? ((player.wins / (player.wins + player.losses)) * 100).toFixed(1) : "0.0";

  const getRankBadge = (rank: number) => {
    if (rank === 1) return <Badge className="rank-gold">🥇 #{rank}</Badge>;
    if (rank === 2) return <Badge className="rank-silver">🥈 #{rank}</Badge>;
    if (rank === 3) return <Badge className="rank-bronze">🥉 #{rank}</Badge>;
    return <Badge variant="outline">#{rank}</Badge>;
  };

  const handleClick = () => {
    navigate(`/player/${player.name}`);
  };

  return (
    <Card className="glass-effect hover:bg-card/90 transition-all duration-300 cursor-pointer group" onClick={handleClick}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
              <img 
                src={player.avatar || `https://mc-heads.net/avatar/${player.name}/64`}
                alt={`${player.name} skin`}
                className="w-10 h-10 rounded"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `https://ui-avatars.com/api/?name=${player.name}&background=22c55e&color=fff&size=64`;
                }}
              />
            </div>
            <div>
              <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                {player.name}
              </h3>
              {player.clan && (
                <Badge variant="secondary" className="text-xs">
                  {player.clan}
                </Badge>
              )}
            </div>
          </div>
          {showRank && getRankBadge(player.rank)}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center space-x-2">
            <Trophy className="w-4 h-4 text-yellow-500" />
            <div>
              <p className="text-sm text-muted-foreground">Vitórias</p>
              <p className="font-semibold">{player.wins.toLocaleString()}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Shield className="w-4 h-4 text-red-500" />
            <div>
              <p className="text-sm text-muted-foreground">Derrotas</p>
              <p className="font-semibold">{player.losses.toLocaleString()}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Sword className="w-4 h-4 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">K/D</p>
              <p className="font-semibold">{kd}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Target className="w-4 h-4 text-blue-500" />
            <div>
              <p className="text-sm text-muted-foreground">Win Rate</p>
              <p className="font-semibold">{winRate}%</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
