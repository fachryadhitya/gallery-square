type Props = {
  color: string;
  opacity: string;
};

export default function Box(props: Props) {
  return (
    <div
      //had to do inline styling to pass color and opacity props
      style={{
        padding: "3rem 0.5rem",
        background: props.color,
        width: "18%",
        opacity: props.opacity,
      }}
    />
  );
}
