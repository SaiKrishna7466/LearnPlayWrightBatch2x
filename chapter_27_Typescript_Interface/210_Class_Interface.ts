//Class Interface
interface Executable {
    name: string;
    run(): void;
    getStatus() : string;
}

class Testcase implements Executable {
    name: string
    constructor (name:string) {
        this.name = name ;
    }

    run() : void {
        console.log("[RUN]" + this.name);
    }

    getStatus() : string {
        return "PASS";
    }
}

let tc : Executable = new Testcase("Verify login redirect");
tc.run();