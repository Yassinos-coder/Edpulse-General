const supabaseKey = "{{supabasePublicKeyEdpulse}}";
const supabaseUrl = "{{supabaseProjectUrl}}";

const data = {
    firstname: "1. Names First Name : Yassine",
    lastname: "1. Names Last Name : Castro",
    email: "1. Email : yassine.castro@edpulse.com",
    phonenumber: "1. Phone Number : +212654593277",
    user_ip_address: "1. Submission Ip : 196.217.153.0",
    branch: "1. Branch : tutorax_qc",
    submission_status: "newly_submitted"
};

async function addContractorData() {
    try {
        const response = await fetch(`${supabaseUrl}/rest/v1/new_applicants`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'apikey': supabaseKey,
                'Authorization': `Bearer ${supabaseKey}`,
                'Content-Profile': 'kpis',
                'Accept-Profile': 'kpis'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            return {
                status: "success",
                message: "Contractor data submitted successfully!"
            };
        } else {
            const errorDetails = await response.json();
            return {
                status: "error",
                message: "Submission failed",
                details: errorDetails
            };
        }
    } catch (error) {
        return error.message

    }
}

addContractorData().then(result => {
    console.log(result); // Or return it if this is in a serverless function
});