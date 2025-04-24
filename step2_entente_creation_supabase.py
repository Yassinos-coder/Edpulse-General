import pprint, requests
from datetime import datetime

jemedeplaceslmt="1. Uniquement Trp Commun : Oui"
dob="1. Birthdate : 31/01/2025"

address_complete="1. Address 1 Address Line 1 : Adresse 1"+", "+"1. Address 1 Address Line 2 : complement adrtesse 1"
jemedeplaceslmt = jemedeplaceslmt == "Oui"

date_obj = datetime.strptime(dob, "%d/%m/%Y")
formatted_date = date_obj.strftime("%Y-%m-%d")



SUPABASE_URL = "https://evzxlyclzesodzorchku.supabase.co/rest/v1/new_tutorax_tutoring_applicants"
SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV2enhseWNsemVzb2R6b3JjaGt1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUzNDE0MTUsImV4cCI6MjA0MDkxNzQxNX0.mkGiQ-8x_u_7ZfhLSGUCnHpcRGkGp5bQXQcYeSlAM_k"


#Headers
headers = {
"Content-Type": "application/json",
"apikey": SUPABASE_KEY,
"Content-Profile": "tutorax",
"Authorization": f"Bearer {SUPABASE_KEY}",
"Prefer": "return=representation",
}


# Data to update
data = {
"first_name": "1. Names First Name : Nazire",
"last_name": "1. Names Last Name : tazwi",
"application_status":"tutor_pending",
"branch": "1. Branch : Tutorat QC",
"email": "1. Email : mail@mailtomail.com",
"phone":"1. Phone : 15062345678",
"etudes_details":"1. Description Etudes : mes etudes sont tres bien, au faite jeter hiper for on math haha",
"address":address_complete,
"zipcode":"1. Address 1 Zip : 15120",
"province":"1. Province : Ontario",
"deplace_slmt_en_trp_en_commun":jemedeplaceslmt,
"city":"1. Address 1 City : mycity",
"date_of_birth":formatted_date,
"gender":"1. Gender : Préfère ne pas répondre"
}


# Specify the condition to find the row (use the "eq" operator for email equality)
condition = {
"email": "eq."+data["email"] # Using the correct "eq" operator syntax for Supabase
}


# Make the PATCH request to update the row
response = requests.patch(SUPABASE_URL, headers=headers, params=condition, json=data)
res_len=len(response.json())

if res_len != 0:
return response.json()
else:
response = requests.post(SUPABASE_URL, headers=headers, json=data)
return response.json()


#print(response.status_code)