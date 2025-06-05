
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GameModeSelector } from "@/components/GameModeSelector";
import { PlayerCard } from "@/components/PlayerCard";
import { mockPlayers } from "@/lib/mockData";
import { Trophy } from "lucide-react";

const Leaderboard = () => {
  const [selectedMode, setSelectedMode] = useState("hg");

  const players = mockPlayers[selectedMode as keyof typeof mockPlayers] || [];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2 flex items-center justify-center space-x-2">
          <Trophy className="w-8 h-8 text-yellow-500" />
          <span>Rankings Globais</span>
        </h1>
        <p className="text-muted-foreground">
          Melhores jogadores do servidor Wild por modalidade
        </p>
      </div>

      <GameModeSelector selectedMode={selectedMode} onModeChange={setSelectedMode} />

      <Card className="glass-effect">
        <CardHeader>
          <CardTitle className="capitalize">
            Top {players.length} - {selectedMode === "hg" ? "Hunger Games" : selectedMode === "duels" ? "Duels" : "Academy"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {players.map((player) => (
              <div key={player.id} onClick={() => window.location.href = `/player/${player.name}`}>
                <PlayerCard
                  player={player}
                  gameMode={selectedMode}
                  showRank={true}
                />
              </div>
            ))}
          </div>
          
          {players.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                Nenhum jogador encontrado para esta modalidade.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Leaderboard;
