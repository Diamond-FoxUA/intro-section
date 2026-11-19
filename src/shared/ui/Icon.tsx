type IconProps = {
  name: string;
  className?: string;
  width: number;
  height: number;
};

export default function Icon({ name, className, width, height }: IconProps) {
  return (
    <svg className={className} width={width} height={height}>
      <use href={`/icons/${name}.svg`}></use>
    </svg>
  );
}
