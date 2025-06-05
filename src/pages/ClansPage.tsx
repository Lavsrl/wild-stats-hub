
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { mockClans } from "@/lib/mockData";
import { Users, Trophy, TrendingUp, Crown } from "lucide-react";

const ClansPage = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2 flex items-center justify-center space-x-2">
          <Users className="w-8 h-8 text-primary" />
          <span>Rankings de Clãs</span>
        </h1>
        <p className="text-muted-foreground">
          Os clãs mais poderosos do servidor Wild
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {mockClans.map((clan) => (
          <Card key={clan.id} className="glass-effect hover:bg-card/90 transition-all duration-300">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center space-x-2">
                  <Crown className="w-5 h-5 text-yellow-500" />
                  <span>{clan.name}</span>
                </CardTitle>
                <Badge className={clan.rank === 1 ? "rank-gold" : clan.rank === 2 ? "rank-silver" : "rank-bronze"}>
                  #{clan.rank}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{clan.description}</p>
              
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-1 mb-1">
                    <Users className="w-4 h-4 text-blue-500" />
                  </div>
                  <p className="text-sm text-muted-foreground">Membros</p>
                  <p className="font-semibold">{clan.members}</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-1 mb-1">
                    <Trophy className="w-4 h-4 text-yellow-500" />
                  </div>
                  <p className="text-sm text-muted-foreground">Vitórias</p>
                  <p className="font-semibold">{clan.totalWins.toLocaleString()}</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-1 mb-1">
                    <TrendingUp className="w-4 h-4 text-green-500" />
                  </div>
                  <p className="text-sm text-muted-foreground">K/D Médio</p>
                  <p className="font-semibold">{clan.averageKD}</p>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <h4 className="font-semibold text-sm">Principais Membros:</h4>
                {clan.members_list.slice(0, 3).map((member, index) => (
                  <div key={index} className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">{member.name}</span>
                      <Badge variant="outline" className="text-xs">
                        {member.role}
                      </Badge>
                    </div>
                    <span className="text-muted-foreground">
                      {member.wins}W • {member.kd} K/D
                    </span>
                  </div>
                ))}
              </div>

              <Link to={`/clan/${clan.id}`}>
                <Button className="w-full" variant="outline">
                  Ver Detalhes do Clã
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ClansPage;
