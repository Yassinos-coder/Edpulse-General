// UPDATE STATUS FOR KPIS
const SUPABASE_URL_KPI = "https://evzxlyclzesodzorchku.supabase.co";
const TABLE_NAME = "new_applicants";
const API_KEY = "{{supabasePublicKeyEdpulse}}"; // Replace with your actual key
const ROW_EMAIL = "1. Email : yassine.castro@edpulse.com"; // Set the email or identifier to match the row

const updateData = {
is_entente_signed: true,
submission_status: "entente_submitted"
};

const response_kpi = await fetch(`${SUPABASE_URL_KPI}/rest/v1/${TABLE_NAME}?email=eq.${encodeURIComponent(ROW_EMAIL)}`, {
method: 'PATCH',
headers: {
'apikey': API_KEY,
'Authorization': `Bearer ${API_KEY}`,
'Content-Type': 'application/json',
'Prefer': 'return=representation',
"Content-Profile": "kpis",
},
body: JSON.stringify(updateData)
});

const response_of_kpi = await response_kpi.json();