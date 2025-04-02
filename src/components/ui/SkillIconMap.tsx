import { Badge } from "./badge";

interface SkillBadgeProps {
  skill: string;
  color?: string;
}

export function SkillBadge({ skill, color }: SkillBadgeProps) {
  return (
    <Badge style={{ backgroundColor: color, color: 'white' }}>
      {skill}
    </Badge>
  );
}