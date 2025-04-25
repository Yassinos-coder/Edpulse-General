const supabaseKey = "{{supabasePublicKeyEdpulse}}";
const supabaseUrl = "{{supabaseProjectUrl}}";
const data = {
firstname: "1. Names First Name : Yassine",
lastname: "1. Names Last Name : Castro",
email: "1. Email : yassine.castro@edpulse.com",
phonenumber: "1. Phone Number : +212654593277",
user_ip_address: "1. Submission Ip : 105.156.1.174",
branch: "1. Branch : tutorax_qc",
submission_status: "1. Submission Status : newly_submitted"
};

async function addContractorData() {
const response = await fetch(`${supabaseUrl}/rest/v1/new_applicants`, {
method: 'POST',
headers: {
'Content-Type': 'application/json',
'apikey': supabaseKey,
'Authorization': `Bearer ${supabaseKey}`,
'Content-Profile': 'kpis',
'Accept-Profile': 'kpis'
  }
});
  const result = await response;
return result;
}

const result = await addContractorData();
return result;