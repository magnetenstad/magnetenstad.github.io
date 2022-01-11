
export { Message }

class Message {
  from: string;
  text: string;

  constructor(from, text) {
    this.from = from;
    this.text = text;
  }
}
