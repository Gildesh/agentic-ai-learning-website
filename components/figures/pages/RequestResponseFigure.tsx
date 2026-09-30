import { Sequence } from "../primitives";

export function RequestResponseFigure() {
  return (
    <Sequence
      title="One request, one response"
      caption="The status code is the server's report. The body is the payload. They are different lines."
      actors={["Browser", "Server"]}
      messages={[
        { n: 1, from: "Browser", to: "Server", label: "GET /books/42" },
        { n: 2, from: "Server", to: "Browser", label: "200 and a JSON body" },
        { n: 3, from: "Browser", to: "Server", label: "GET /books/999" },
        { n: 4, from: "Server", to: "Browser", label: "404" },
      ]}
    />
  );
}
