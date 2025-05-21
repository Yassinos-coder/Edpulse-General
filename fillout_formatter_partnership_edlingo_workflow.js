class DataInitializer {
    constructor(submissionData) {
        this.questions = submissionData; // Full submission data

        // Map human-readable keys to Fillout form field IDs
        this.FIELD_IDS = {
            courriel_vendeur: "jExk",
            courriel_charge_comptes_partenariat: "pQGZ",
            nom_partenaire: "h2mD",
            langues_formulaire_inscription: "q1br",
            type_partenaire: "75Hq",
            nouvelle_page_partenaire: "kCMr",
            id_tutor_cruncher: "rAXJ",
            resume_partenariat: "7PPv",
            ville: "gZAm",
            adresse: "r8w9",
            etat_province: "4Gim",
            code_postal: "vmFi",
            pays: "86xc",
            telephone: "5AUQ",
            courriel_4: "ma7F",
            url: "phxB",
            prenom_3: "v4Cc",
            nom_3: "vsJS",
            courriel_3: "k1aP",
            poste_titre_2: "ndu8",
            extension_num_poste: "5ig6",
            telephone_2: "fTN6",
            notes: "gAkb",
            nombre_personnes_contact_supplementaires: "i6ey",

            // Contact 1
            nom_1: "8Voj",
            prenom: "d8HW",
            poste_titre_1: "cTE3",
            courriel_2: "cgcG",
            extension_num_poste_2: "rDpn",
            telephone_3: "uJPL",
            langue_parlee_1: "gLJo",
            notes_1: "4ao3",

            // Contact 2
            nom: "5SpH",
            prenom_1: "pG2E",
            courriel_1: "57xK",
            poste_titre: "5vRE",
            extension_num_poste_3: "wBWC",
            telephone_4: "wmi5",
            langue_parlee: "fFuF",
            notes_2: "gemJ",

            // Contact 3
            prenom_2: "rH9k",
            nom_2: "ubfb",
            courriel: "1ckD",
            poste_titre_3: "syQB",
            telephone_1: "9mEx",
            extension_num_poste_1: "aFjJ",
            langue_parlee_2: "oSMH",
            notes_3: "9d6J",

            // Tarification et sondages
            lieu_des_services: "e5Nd",
            qui_paye: "tw7K",
            type_de_cours: "sab5",
            noms_des_participants: "rsFY",
            cout_horaire_edlingo: "9V5C",
            tarifs_factures: "fUVV",
            //frais_ouverture_dossier: "oN8N",
            montant_tarif_special_en_ligne: "7VDH",
            montant_tarif_special_a_domicile: "px6z",
            nombre_max_heures_permises: "iHiF",
            envoyons_courriels_sondage: "nbLY",
            nombre_heures_permises: "p9PS",
            heures_avant_premier_sondage: "xr4m",
            heures_avant_deuxieme_sondage: "ifux",
            heures_avant_troisieme_sondage: "bh6x"
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
const formData = JSON.parse(`[{"id":"jExk","name":"Adresse courriel du vendeur","type":"EmailInput","value":"vendeur_email@exemple.com"},{"id":"pQGZ","name":"Adresse courriel de la chargée de comptes du partenariat","type":"EmailInput","value":"charge_email@exemple.com"},{"id":"h2mD","name":"Nom du partenaire","type":"ShortAnswer","value":"nom_partenaire@exemple.com"},{"id":"q1br","name":"Langue(s) du formulaire d'inscription","type":"MultiSelect","value":["Anglais","Français","Espagnol"]},{"id":"75Hq","name":"Type de partenaire","type":"MultiSelect","value":["École privée"]},{"id":"kCMr","name":"Est-ce qu'on génére une nouvelle page pour le partenaire?","type":"MultipleChoice","value":"Oui"},{"id":"rAXJ","name":"ID TutorCruncher","type":"ShortAnswer","value":"ID EDLINGO"},{"id":"7PPv","name":"Résumé du partnenariat","type":"LongAnswer","value":"Résumé du partnenariat"},{"id":"gZAm","name":"Ville","type":"ShortAnswer","value":"ville"},{"id":"r8w9","name":"Adresse","type":"ShortAnswer","value":"address"},{"id":"4Gim","name":"État\/Province","type":"ShortAnswer","value":"province"},{"id":"vmFi","name":"Code postal","type":"ShortAnswer","value":"20100"},{"id":"86xc","name":"Pays","type":"Dropdown","value":"Option 1"},{"id":"5AUQ","name":"Téléphone","type":"PhoneNumber","value":"+212654593277"},{"id":"ma7F","name":"Courriel (4)","type":"EmailInput","value":"courriel_partenaire@exemple.com"},{"id":"phxB","name":"URL","type":"URLInput","value":"url.com"},{"id":"v4Cc","name":"Prénom (3)","type":"ShortAnswer","value":"prenom_general"},{"id":"vsJS","name":"Nom (3)","type":"ShortAnswer","value":"nom_general"},{"id":"k1aP","name":"Courriel (3)","type":"ShortAnswer","value":"courriel_generale@exemple.com"},{"id":"ndu8","name":"Poste \/ Titre (2)","type":"ShortAnswer","value":"poste_general"},{"id":"5ig6","name":"Extension (Numéro de poste)","type":"NumberInput","value":5},{"id":"fTN6","name":"Téléphone (2)","type":"PhoneNumber","value":"+212654593277"},{"id":"gAkb","name":"Note(s)","type":"LongAnswer","value":"note contact general"},{"id":"i6ey","name":"Nombre de personnes contact supplémentaires","type":"Dropdown","value":"1"},{"id":"8Voj","name":"Nom (1)","type":"ShortAnswer","value":"contact 1 nom"},{"id":"d8HW","name":"Prénom","type":"ShortAnswer","value":"contact 1 prenom"},{"id":"cTE3","name":"Poste \/ Titre (1)","type":"ShortAnswer","value":"poste contact 1"},{"id":"cgcG","name":"Courriel (2)","type":"EmailInput","value":"contact_1@exemple.com"},{"id":"rDpn","name":"Extension (Numéro de poste) (2)","type":"ShortAnswer","value":"1"},{"id":"uJPL","name":"Téléphone (3)","type":"PhoneNumber","value":"+212654593277"},{"id":"gLJo","name":"Langue parlée (1)","type":"ShortAnswer","value":"contact 1 langue parlèè"},{"id":"4ao3","name":"Notes","type":"ShortAnswer","value":"contact 1 notes"},{"id":"5SpH","name":"Nom","type":"ShortAnswer","value":"contact 2 nom"},{"id":"pG2E","name":"Prénom (1)","type":"ShortAnswer","value":"contact 2 prenom"},{"id":"57xK","name":"Courriel (1)","type":"EmailInput","value":"contact_2@exemple.com"},{"id":"5vRE","name":"Poste \/ Titre","type":"ShortAnswer","value":"contact 2 poste"},{"id":"wBWC","name":"Extension (Numéro de poste) (3)","type":"ShortAnswer","value":"3"},{"id":"wmi5","name":"Téléphone (4)","type":"PhoneNumber","value":"+212654593277"},{"id":"fFuF","name":"Langue parlée","type":"ShortAnswer","value":"contact 2 lange parlée"},{"id":"gemJ","name":"Notes (2)","type":"ShortAnswer","value":null},{"id":"rH9k","name":"Prénom (2)","type":"ShortAnswer","value":"contact 3 prenom"},{"id":"ubfb","name":"Nom (2)","type":"ShortAnswer","value":"contact 3 nom"},{"id":"1ckD","name":"Courriel","type":"EmailInput","value":"contact_3@exemple.com"},{"id":"syQB","name":"Poste \/ Titre (3)","type":"ShortAnswer","value":"contact 3 poste"},{"id":"9mEx","name":"Téléphone (1)","type":"PhoneNumber","value":"+212654593277"},{"id":"aFjJ","name":"Extension (Numéro de poste) (1)","type":"ShortAnswer","value":"8"},{"id":"oSMH","name":"Langue parlée (2)","type":"ShortAnswer","value":"contact 3 langue"},{"id":"9d6J","name":"Notes (1)","type":"ShortAnswer","value":null},{"id":"e5Nd","name":"Lieu des services","type":"Dropdown","value":"En ligne"},{"id":"tw7K","name":"Qui paye ?","type":"Dropdown","value":"Les clients (l'affilié réfère des clients)"},{"id":"9V5C","name":"Coût horaire Edlingo(en ligne)","type":"ShortAnswer","value":"10"},{"id":"fUVV","name":"Tarifs facturés","type":"Dropdown","value":"Tarifs spéciaux"},{"id":"oN8N","name":"Frais d'ouverture de dossier","type":"Dropdown","value":"Oui"},{"id":"7VDH","name":"Montant du tarif spécial - en ligne","type":"ShortAnswer","value":"10"},{"id":"px6z","name":"Montant du tarif spécial - à domicile","type":"ShortAnswer","value":null},{"id":"iHiF","name":"Les élèves ont-ils un nombre maximal d'heures permises?","type":"Dropdown","value":"Oui"},{"id":"nbLY","name":"Envoyons-nous des courriels de sondage ?","type":"Dropdown","value":"Oui"},{"id":"nNsz","name":"Nombre d'heures permises","type":"ShortAnswer","value":"10"},{"id":"xr4m","name":"Nombre d'heures avant le premier sondage","type":"ShortAnswer","value":"10"},{"id":"ifux","name":"Nombre d'heures avant le deuxième sondage","type":"ShortAnswer","value":"10"},{"id":"bh6x","name":"Nombre d'heures avant le troisième sondage","type":"ShortAnswer","value":"10"}]`);

// Instantiate and run the DataInitializer
const initializer = new DataInitializer(formData);
const mappedData = initializer.initializeMappedData();

// Return the result to Pabbly
output = mappedData;