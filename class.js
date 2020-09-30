class Persoon {
    voornaam;
    achternaam;
    email;

    constructor(_voornaam, _achternaam, _email) {
        this.voornaam = _voornaam;
        this.achternaam = _achternaam;
        this.email = _email;
    }
}

class Leerling extends Persoon {
    adres;
    telefoonnummer;
    klas;

    constructor(_voornaam, _achternaam, _email, _adres, _telefoonnummer, _klas) {
        super(_voornaam, _achternaam, _email);
        this.adres = _adres;
        this.telefoonnummer = _telefoonnummer;
        this.klas = _klas;
    }
}

class Leraar extends Persoon {
    afkorting;
    mentorklas;

    constructor(_voornaam, _achternaam, _email, _afkorting, _mentorklas) {
        super(_voornaam, _achternaam, _email);
        this.afkorting = _afkorting;
        this.mentorklas = _mentorklas;
    }
}