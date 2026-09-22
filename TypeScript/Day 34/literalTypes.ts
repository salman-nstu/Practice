type Greeting = `Hello ${string}`;

let message2: Greeting;

message2 = "Hello Salman";
message2 = "Hello World";

message2 = "Hi Salman";

type EventName = "click" | "focus" | "blur";

type HandlerName = `on${Capitalize<EventName>}`;

let handler: HandlerName;

handler = "onClick";
handler = "onFocus";
handler = "onBlur";

handler = "onSubmit";


