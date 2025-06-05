
import { Button } from "@/components/ui/button";
import { Sword, Target, Shield } from "lucide-react";

interface GameModeSelectorProps {
  selectedMode: string;
  onModeChange: (mode: string) => void;
}

export const GameModeSelector = ({ selectedMode, onModeChange }: GameModeSelectorProps) => {
  const gameModes = [
    { id: "hg", name: "Hunger Games", icon: Sword, color: "text-red-500" },
    { id: "duels", name: "Duels", icon: Target, color: "text-blue-500" },
    { id: "academy", name: "Academy", icon: Shield, color: "text-green-500" },
  ];

  return (
    <div className="flex flex-wrap gap-3 mb-6">
      {gameModes.map((mode) => {
        const Icon = mode.icon;
        return (
          <Button
            key={mode.id}
            variant={selectedMode === mode.id ? "default" : "outline"}
            onClick={() => onModeChange(mode.id)}
            className="flex items-center space-x-2"
          >
            <Icon className={`w-4 h-4 ${selectedMode === mode.id ? 'text-primary-foreground' : mode.color}`} />
            <span>{mode.name}</span>
          </Button>
        );
      })}
    </div>
  );
};
