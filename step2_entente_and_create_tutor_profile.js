const createTutorInTc = () => {
    // SETUP
    const mappingIdToToken = {
        "3268": "fa64205f2c24a986ddbf4ba223957c2b40390ce6",
        "7673": "47160bd5d5e601cf56aa2ab86226b7033de22162",
        "8427": "3005ae7c151f1d104c82e7ff6a232898c29ed1f1",
        "15751": "0ad0746cfe4309661c0c26c6a9368b0a3d2ec169",
        "14409": "b9042d2577ba92415f47a66b826ed11f517e082e",
        "5737": "3df70ef7b74e0a34c7a6e3620b13c4fc3cdb8c57",
        "3269": "b4e57c43ac08ca011fe75b5097da9a2ab261a235",
    };
    const BRANCH_ID = '1. BRANCH ID : 3268' // Hidden Field in entente form
    const BRANCH_TOKEN = mappingIdToToken[BRANCH_ID];

    const headers = { 'Authorization': `token ${BRANCH_TOKEN}` }
    const url = 'https://app.tutorax.com/api/contractors/'


    // setting variables needed
    let gender = "1. Gender : Homme"
    let dob = "1. Birthdate : 18/01/2003"
    let jemedeplaceslmt = "1. Uniquement Trp Commun : Non"

    // cleaning and formatting of variables
    gender = gender.toLowerCase()
    gender = (["homme", "femme"].includes(gender)) ? gender : "non-precise"
    jemedeplaceslmt = jemedeplaceslmt === "oui"
    const [day, month, year] = dob.split('/'); // Split the date string by "/"
    const formatted_date = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;

    // Function to handle different extra_attrs through different branches
    function handleExtraAttrs() {
        let extra_attrs;
        switch (BRANCH_ID) {
            case "3268":
                extra_attrs = {
                    "contractor_dob": formatted_date,
                    "contractor_gender": gender,
                    "contractor_exp": "1. Dpdown Exp Tutorat : Non",
                    "contractor_bio": "1. Description Etudes : Non Mirci",
                    "je_me_deplace_seulement_en_transport_en_commun": jemedeplaceslmt,
                    "disponibilites": "1. Disponibilites : potit experience",
                    "contractor_id": "2. Output 0 Id : 52",
                }
                return extra_attrs
            case "5737":

                return extra_attrs;
            case "7673":

                return extra_attrs;
            case "8427":

                return extra_attrs;
            case "15751":

                return extra_attrs;
            case "3269":

                return extra_attrs;
            case "14409":

                return extra_attrs;
            default:
                return extra_attrs || {};

        }
    }

    // setting up data object to pass to api
    let data = {
        "user": {
            "first_name": "1. Names First Name : Yassine",
            "last_name": "1. Names Last Name : Castro",
            "mobile": "1. Phone : 212654593277",
            "email": "1. Email : yassine.castro@edpulse.com",
            "street": "1. Address 1 Address Line 1 : Maârif",
            "town": "1. Address 1 City : Casablanca",
            "postcode": "1. Address 1 Zip : 20100"
        },
        "extra_attrs": handleExtraAttrs(),
    }


    fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data)
    })
}

return await createTutorInTc();