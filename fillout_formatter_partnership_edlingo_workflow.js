class DataInitializer {
    constructor(submissionData) {
        this.questions = submissionData;  // Full submission data

        // Map human-readable keys to Fillout form field IDs
        this.FIELD_IDS = {
            sellerEmail: "jExk",
            accountManagerEmail: "pQGZ",
            partnerName: "h2mD",
            formLanguages: "q1br",
            partnerType: "75Hq",
            newPage: "kCMr",
            tutorCruncherId: "rAXJ",
            partnershipSummary: "7PPv",
            city: "gZAm",
            address: "r8w9",
            state: "4Gim",
            postalCode: "vmFi",
            country: "86xc",
            phone: "5AUQ",
            email1: "ma7F",
            url: "phxB",
            firstName: "v4Cc",
            lastName: "vsJS",
            email: "k1aP",
            jobTitle: "ndu8",
            extension: "5ig6",
            phone1: "fTN6",
            notes: "gAkb",
            additionalContactsCount: "i6ey",
            serviceLocation: "e5Nd",
            whoPays: "tw7K",
            hourlyCost: "9V5C",
            billingRates: "fUVV",
            openingFees: "oN8N",
            maxAllowedHours: "iHiF",
            sendSurveyEmails: "nbLY"
        };
    }

    // Get the value of the field by ID
    getFieldValueById(fieldId, defaultValue = "N/A") {
        // Find the question by ID
        const question = this.questions.find(q => q.id === fieldId);
        // Return the value of the question or the default value
        return question && question.value !== null ? question.value : defaultValue;
    }

    // Initialize and map the data into the required format
    initializeMappedData() {
        const result = {};

        // Map all the fields using the FIELD_IDS mapping
        for (const [fieldName, fieldId] of Object.entries(this.FIELD_IDS)) {
            result[fieldName] = this.getFieldValueById(fieldId);
        }

        return result;
    }
}

// Use the incoming webhook data (passed in as 'input' in the Pabbly code step)
const formData = JSON.parse(`[{"id":"jExk","name":"Adresse courriel du vendeur","type":"EmailInput","value":"yassine.castro@edpulse.com"},{"id":"pQGZ","name":"Adresse courriel de la chargée de comptes du partenariat","type":"EmailInput","value":"yassine.castro@edpulse.com"},{"id":"h2mD","name":"Nom du partenaire","type":"ShortAnswer","value":"yassine.castro@edpulse.com"},{"id":"q1br","name":"Langue(s) du formulaire d'inscription","type":"MultiSelect","value":["Anglais"]},{"id":"75Hq","name":"Type de partenaire","type":"MultiSelect","value":["École publique"]},{"id":"kCMr","name":"Est - ce qu'on génére une nouvelle page pour le partenaire?","type":"MultipleChoice","value":"Oui"},{"id":"rAXJ","name":"ID TutorCruncher","type":"ShortAnswer","value":"yassine.castro@edpulse.com"},{"id":"7PPv","name":"Résumé du partnenariat","type":"LongAnswer","value":"yassine.castro@edpulse.com"},{"id":"gZAm","name":"Ville","type":"ShortAnswer","value":"yassine.castro@edpulse.com"},{"id":"r8w9","name":"Adresse","type":"ShortAnswer","value":"yassine.castro@edpulse.com"},{"id":"4Gim","name":"État\/Province","type":"ShortAnswer","value":"yassine.castro@edpulse.com"},{"id":"vmFi","name":"Code postal","type":"ShortAnswer","value":"yassine.castro@edpulse.com"},{"id":"86xc","name":"Pays","type":"Dropdown","value":"Option 1"},{"id":"5AUQ","name":"Téléphone","type":"PhoneNumber","value":"+16454324654"},{"id":"ma7F","name":"Courriel (1)","type":"EmailInput","value":"yassine.castro@edpulse.com"},{"id":"phxB","name":"URL","type":"URLInput","value":"yassinecastro.com"},{"id":"v4Cc","name":"Prénom","type":"ShortAnswer","value":"yassine.castro@edpulse.com"},{"id":"vsJS","name":"Nom","type":"ShortAnswer","value":"yassine.castro@edpulse.com"},{"id":"k1aP","name":"Courriel","type":"ShortAnswer","value":"yassine.castro@edpulse.com"},{"id":"ndu8","name":"Poste \/ Titre","type":"ShortAnswer","value":"yassine.castro@edpulse.com"},{"id":"5ig6","name":"Extension (Numéro de poste)","type":"NumberInput","value":null},{"id":"fTN6","name":"Téléphone (1)","type":"PhoneNumber","value":"+14645"},{"id":"gAkb","name":"Note(s)","type":"LongAnswer","value":"yassine.castro@edpulse.com"},{"id":"i6ey","name":"Nombre de personnes contact supplémentaires","type":"Dropdown","value":"2"},{"id":"e5Nd","name":"Lieu des services","type":"Dropdown","value":"E ligne + à domicile"},{"id":"tw7K","name":"Qui paye ?","type":"Dropdown","value":"Le partenaire"},{"id":"9V5C","name":"Coût horaire Edlingo(en ligne)","type":"ShortAnswer","value":"yassine.castro@edpulse.com"},{"id":"fUVV","name":"Tarifs facturés","type":"Dropdown","value":"Tarifs spéciaux"},{"id":"oN8N","name":"Frais d'ouverture de dossier","type":"Dropdown","value":"Non"},{"id":"iHiF","name":"Les élèves ont - ils un nombre maximal d'heures permises?","type":"Dropdown","value":"Oui"},{"id":"nbLY","name":"Envoyons-nous des courriels de sondage ?","type":"Dropdown","value":"Oui"}]`);

// Instantiate and run the DataInitializer
const initializer = new DataInitializer(formData);
const mappedData = initializer.initializeMappedData();

// Return the result to Pabbly
output = mappedData;
