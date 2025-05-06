const createOrDeleteTutor = async () => {
    const SUPABASE_URL = "https://evzxlyclzesodzorchku.supabase.co/rest/v1/new_tutorax_tutoring_applicants";
    const SUPABASE_KEY = "{{supabasePublicKeyEdpulse}}"; // hide this in production

    const headers = {
        "Content-Type": "application/json",
        "apikey": SUPABASE_KEY,
        "Content-Profile": "tutorax",
        "Authorization": `Bearer ${SUPABASE_KEY}`,
        "Prefer": "return=representation",
    };

    let jemedeplaceslmt = "1. Uniquement Trp Commun : Oui";
    let dob = "1. Birthdate : 27/05/2025";
    let address_complete = "1. Submission User Inputs Address 1 : Maârif, APPT 4, Casablanca, 20100";

    jemedeplaceslmt = jemedeplaceslmt.toLowerCase().includes("oui");

    const [day, month, year] = dob.split('/'); // Split the date string by "/"
    const formatted_date = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
    const data = {
        "first_name": "1. Names First Name : Yassine",
        "last_name": "1. Names Last Name : Castro",
        "application_status": "tutor_pending",
        "branch": "1. Branch : Tutorat QC",
        "email": "1. Email : yassine.castro@edpulse.com",
        "phone": "1. Phone : 212654593277",
        "etudes_details": "1. Description Etudes : Non",
        "address": address_complete,
        "zipcode": "1. Address 1 Zip : 20100",
        "province": "1. Province : Alberta",
        "deplace_slmt_en_trp_en_commun": jemedeplaceslmt,
        "city": "1. Address 1 City : Casablanca",
        "date_of_birth": formatted_date,
        "gender": "1. Gender : Homme"
    };

    const condition = { "email": "eq." + data.email };
    const queryString = new URLSearchParams(condition).toString();
    const urlWithParams = `${SUPABASE_URL}?${queryString}`;

    // API CALL
    let response = await fetch(urlWithParams, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data),
    });

    const response_of_adding = await response.json();


    return response_of_adding


};

// Call the function
return await createOrDeleteTutor();