interface CardComponentProps {
  title: string;
  value: string | number;
  description: string;
  icon: SVGProps<SVGSVGElement>;
}

interface EntityStore<T> {
  entity: T;
  setEntity: (entity: T) => void;
}
