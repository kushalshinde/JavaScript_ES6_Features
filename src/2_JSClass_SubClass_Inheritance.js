"use strict"

class User{

    constructor(name, email, password){
        this.name = name;
        this.email = email;
        this.password = password;
    }

    register(){
        document.write(this.name + " has been registed" + "<BR>");
    }

    static countUsers(){
        document.write('There are 50 users'+ "<BR>");
    }

}

let bob = new User('bob', 'bob@gmail.com', '1234');

bob.register();

User.countUsers();

//------------------------------------------------------------------------

class Member extends User{

    constructor(name, email, password, memberPackage){
        super(name, email, password);
        this.memberPackage = memberPackage;
    }

    getPackage(){
        document.write(this.name+ " is subscribed to to the " + this.memberPackage+ " package."+ "<BR>");
    }

}

let mike = new Member('mike', 'mike@gmail.com', '12345', 'standard');

mike.getPackage();

mike.register();