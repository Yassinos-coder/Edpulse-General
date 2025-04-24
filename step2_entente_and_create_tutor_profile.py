import pprint, requests
from datetime import datetime

headers = {'Authorization': 'token b4e57c43ac08ca011fe75b5097da9a2ab261a235'}
url = 'https://app.tutorax.com/api/contractors/'

gender="1. Gender : Préfère ne pas répondre"
jemedeplaceslmt="1. Submission User Inputs Uniquement Trp Commun : Oui"
dob="1. Birthdate : 31/01/2025"

gender=gender.lower
gender = gender if gender in ["homme", "femme"] else "non-precise"
jemedeplaceslmt = jemedeplaceslmt == "Oui"
date_obj = datetime.strptime(dob, "%d/%m/%Y")
formatted_date = date_obj.strftime("%Y-%m-%d")


data={ "user":{
"first_name":"1. Names First Name : Nazire",
"last_name":"1. Names Last Name : tazwi",
"mobile":"1. Phone : 15062345678",
"email":"1. Email : mail@mailtomail.com",
"street":"1. Address 1 Address Line 1 : Adresse 1",
"town":"1. Address 1 City : mycity",
"postcode":"1. Address 1 Zip : 15120"
},
"extra_attrs":{
"contractor_dob":formatted_date,
"contractor_gender":gender,
"contractor_exp":"1. Exp Tutorat Ou Jeunes : oh moi jadore les onfon",
"contractor_bio":"1. Description Etudes : mes etudes sont tres bien, au faite jeter hiper for on math haha",
"je_me_deplace_seulement_en_transport_en_commun":jemedeplaceslmt ,
"disponibilites":"1. Disponibilites : demain svp jai une famille a nourrir",
"contractor_id":"2. Output 0 Id : 40",
},
}

r = requests.post(url, json=data, headers=headers)
return r.json()