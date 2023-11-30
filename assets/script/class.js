'use strict';


class User{
    #id; 
    #name;
    #userName;
    #email;

    constructor (id, name, userName, email) {
        this.#id = id;
        this.#name = name;
        this.#userName = userName;
        this.#email = email;
    }

    get id() {
        return this.#id;
    }
    get name() {
        return this.#name;
    }
    get userName() {
        return this.#userName;
    }
    get email() {
        return this.#email;
    }
}

class Subscriber extends User {
    #pages;
    #groups;
    #canMonetize;

    constructor (id, name, userName, email, pages, groups, canMonetize) {
        super(id);
        super(name);
        super(userName);
        super(email);

        this.#pages = pages;
        this.#groups = groups;
        this.#canMonetize = canMonetize;

    }

    get pages() {
        return this.#pages;
    }

    get groups() {
        return this.#groups;
    }

    get canMonetize() {
        return this.#canMonetize;
    }
}

export { User, Subscriber }