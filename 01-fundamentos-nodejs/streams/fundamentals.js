// process.stdin.pipe(process.stdout);

import { Readable, Transform, Writable } from "node:stream";

//Lê meus dados
class OneToHundredStream extends Readable {
  index = 1;

  _read() {
    const i = this.index++;

    setTimeout(() => {
      if (i > 100) {
        this.push(null);
      } else {
        const buf = Buffer.from(String(i));

        this.push(buf);
      }
    }, 1000);
  }
}

//Trabalha com meus dados
class MultiplyByTenStream extends Writable {

    _write(chunk, encoding, callback) {
        console.log(Number(chunk.toString()) * 10);

        callback()
    }
}

//Transforma meus dados
class InverseNumberStream extends Transform {
    _transform(chunk, encoding, callback) {
        const transformed = Number(chunk.toString()) * -1

        callback(null, Buffer.from(String(transformed)))
    }
}

//Resposta do readable estou jogando para minha stream de escrita
new OneToHundredStream()
    .pipe(new InverseNumberStream())
    .pipe(new MultiplyByTenStream());
