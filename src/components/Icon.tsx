import {
  Network,
  Route,
  FileText,
  Users,
  ClipboardList,
  Award,
  MapPin,
  ShieldCheck,
  Clock,
  Layers,
  type LucideProps,
} from "lucide-react";

const map = {
  network: Network,
  route: Route,
  fileText: FileText,
  users: Users,
  clipboard: ClipboardList,
  award: Award,
  mapPin: MapPin,
  shieldCheck: ShieldCheck,
  clock: Clock,
  layers: Layers,
};

export type IconName = keyof typeof map;

export function Icon({ name, ...props }: { name: IconName } & LucideProps) {
  const Cmp = map[name] ?? Network;
  return <Cmp {...props} />;
}
