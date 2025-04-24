const createOrDeleteTutor = async () => {
    const SUPABASE_URL = "https://evzxlyclzesodzorchku.supabase.co/rest/v1/new_tutorax_tutoring_applicants";
    const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV2enhseWNsemVzb2R6b3JjaGt1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUzNDE0MTUsImV4cCI6MjA0MDkxNzQxNX0.mkGiQ-8x_u_7ZfhLSGUCnHpcRGkGp5bQXQcYeSlAM_k"; // hide this in production

    const headers = {
        "Content-Type": "application/json",
        "apikey": SUPABASE_KEY,
        "Content-Profile": "tutorax",
        "Authorization": `Bearer ${SUPABASE_KEY}`,
        "Prefer": "return=representation",
    };

    let jemedeplaceslmt = "1. Uniquement Trp Commun : Oui";
    let dob = "1. Birthdate : 31/01/2025";
    let address_complete = "1. Address 1 Address Line 1 : Adresse 1, 1. Address 1 Address Line 2 : complement adrtesse 1";

    jemedeplaceslmt = jemedeplaceslmt.toLowerCase().includes("oui");

    const [day, month, year] = dob.split('/'); // Split the date string by "/"
    const formatted_date = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
    const data = {
        "first_name": "1. Names First Name : Nazire",
        "last_name": "1. Names Last Name : tazwi",
        "application_status": "tutor_pending",
        "branch": "1. Branch : Tutorat QC",
        "email": "1. Email : mail@mailtomail.com",
        "phone": "1. Phone : 15062345678",
        "etudes_details": "1. Description Etudes : mes etudes sont tres bien, au faite jeter hiper for on math haha",
        "address": address_complete,
        "zipcode": "1. Address 1 Zip : 15120",
        "province": "1. Province : Ontario",
        "deplace_slmt_en_trp_en_commun": jemedeplaceslmt,
        "city": "1. Address 1 City : mycity",
        "date_of_birth": formatted_date,
        "gender": "1. Gender : Préfère ne pas répondre"
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

    const json = await response.json();


};

// Call the function
return await createOrDeleteTutor();
