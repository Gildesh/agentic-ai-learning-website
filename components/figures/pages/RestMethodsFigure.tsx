import { Flow } from "../primitives";

export function RestMethodsFigure() {
  return (
    <Flow
      title="Method and URL out, status code back"
      caption="The method says what to do. The URL names the resource. The status code says what happened, before you read the body."
      steps={[
        { label: "GET /books/42", detail: "200 OK. The book is in the response body." },
        { label: "POST /books", detail: "201 Created. The server assigns the new URL." },
        { label: "GET /books/999", detail: "404 Not Found. No book exists at that URL." },
      ]}
    />
  );
}
