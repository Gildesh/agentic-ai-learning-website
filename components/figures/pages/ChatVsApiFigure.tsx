import { Compare } from "../primitives";

export function ChatVsApiFigure() {
  return (
    <Compare
      title="Same model id, two doors"
      caption="The chat app sends the request for you. The API is that request, which your program sends."
      columns={[
        {
          heading: "Chat app",
          cells: ["You type", "App stores the thread", "You see a bubble"],
        },
        {
          heading: "API",
          cells: ["Your program sends HTTP", "You choose what to store", "You read the JSON"],
        },
      ]}
    />
  );
}
