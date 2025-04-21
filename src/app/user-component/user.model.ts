
export class User {
    
    name: string;
    email: string;
    age: number;
    address: string;
    phone: string;
    static email: any;
    static age: any;
    static address: any;
    static phone: any;

    constructor(name: string, email: string, age: number, address: string, phone: string) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.address = address;
        this.phone = phone;
    }

    public getName(): string {
        return this.name;
    }

    public getEmail(): string {
        return this.email;
    }

    public setName(name: string): String {
        return this.name = name;
    }

    public setEmail(email: string): String {
        return this.email = email;
    }
    public getAge(): number {
        return this.age;
    }
    public getAddress(): string {
        return this.address;
    }
    public getPhone(): string {
        return this.phone;
    }
    public setAge(age: number): number {
        return this.age = age;
    }
    public setAddress(address: string): string {
        return this.address = address;
    }
    public setPhone(phone: string): string {
        return this.phone = phone;
    }
    public toString(): string {
        return `Name: ${this.name}, Email: ${this.email}, Age: ${this.age}, Address: ${this.address}, Phone: ${this.phone}`;
    }
    public toJSON(): string {
        return JSON.stringify(this);
    }
    public fromJSON(json: string): User {
        const data = JSON.parse(json);
        this.name = data.name;
        this.email = data.email;
        this.age = data.age;
        this.address = data.address;
        this.phone = data.phone;
        return this;
    }
} 

function injectable(arg0: { providedIn: string; }): (target: typeof User) => void | typeof User {
    throw new Error("Function not implemented.");
}
