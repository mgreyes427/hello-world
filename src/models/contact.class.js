

export class Contact {
    first_name = 'Firstname';
    last_name = 'Lastname';
    email = 'email@email.com';
    connected = false;

    constructor(first_name, last_name, email, connected){
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.connected = connected;
    }

}