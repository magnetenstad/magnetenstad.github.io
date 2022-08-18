export { Message };

class Message {
  incoming: boolean;
  text: string;

  constructor(incoming: boolean, text: string) {
    this.incoming = incoming;
    this.text = text;
  }
}
