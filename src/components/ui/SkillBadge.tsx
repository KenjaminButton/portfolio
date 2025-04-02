import type { ReactNode } from "react";
import { Badge } from "./badge";

interface SkillBadgeProps {
  skill: string;
  icon?: ReactNode;
  color?: string;
}

export function SkillBadge({ skill, icon, color }: SkillBadgeProps) {
  return (
    <Badge 
      variant="outline"
      style={{ 
        backgroundColor: color || '#4A5568', 
        color: 'white',
        borderColor: 'transparent',
        margin: '2px',
        padding: '4px 8px',
        fontSize: '0.75rem'
      }}
    >
      {icon && <span className="mr-1 h-4 w-4">{icon}</span>}
      {skill}
    </Badge>
  );
}
