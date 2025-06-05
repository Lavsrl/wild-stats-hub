
import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { mockClans } from "@/lib/mockData";
import { Users, Trophy, TrendingUp, Crown, UserPlus, Mail } from "lucide-react";

const ClanProfile = () => {
  const { clanId } = useParams();
  const clan = mockClans.find(c => c.id === clanId);

  if (!clan) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold mb-4">Clã não encontrado</h1>
        <p className="text-muted-foreground">O clã "{clanId}" não foi encontrado.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Clan Header */}
      <Card className="glass-effect">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center">
                <Crown className="w-10 h-10 text-primary" />
              </div>
              <div>
                <div className="flex items-center space-x-3 mb-2">
                  <h1 className="text-3xl font-bold">{clan.name}</h1>
                  <Badge className={clan.rank === 1 ? "rank-gold" : clan.rank === 2 ? "rank-silver" : "rank-bronze"}>
                    #{clan.rank}
                  </Badge>
                </div>
                <p className="text-muted-foreground">{clan.description}</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Líder: <span className="font-semibold">{clan.leader}</span>
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Clan Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="glass-effect">
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-blue-500/20 rounded-lg">
                <Users className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total de Membros</p>
                <p className="text-2xl font-bold">{clan.members}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-effect">
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-yellow-500/20 rounded-lg">
                <Trophy className="w-6 h-6 text-yellow-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total de Vitórias</p>
                <p className="text-2xl font-bold">{clan.totalWins.toLocaleString()}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-effect">
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-green-500/20 rounded-lg">
                <TrendingUp className="w-6 h-6 text-green-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">K/D Médio</p>
                <p className="text-2xl font-bold">{clan.averageKD}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Members List */}
      <Card className="glass-effect">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Users className="w-5 h-5" />
            <span>Membros do Clã</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {clan.members_list.map((member, index) => (
              <div 
                key={index} 
                className="flex items-center justify-between p-4 bg-card/50 rounded-lg hover:bg-card/70 transition-colors cursor-pointer"
                onClick={() => window.location.href = `/player/${member.name}`}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                    <img 
                      src={`https://mc-heads.net/avatar/${member.name}/40`}
                      alt={`${member.name} skin`}
                      className="w-8 h-8 rounded"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{member.name}</h4>
                    <Badge variant="outline" className="text-xs">
                      {member.role}
                    </Badge>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold">{member.wins} vitórias</p>
                  <p className="text-sm text-muted-foreground">{member.kd} K/D</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ClanProfile;
