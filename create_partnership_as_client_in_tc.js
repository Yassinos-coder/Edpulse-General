const AddEdlingoAffiliate = async () => {
    const API_URL = 'https://secure.tutorcruncher.com/api/agents/'
    const API_TOKEN = '9f49cd4044a09a9cff68dc7848236445131009dc'
    const HEADERS = {
        'Authorization': `token ${API_TOKEN}`,
        'Content-Type': 'application/json'
    }
    const DATA = {
        'first_name': 'Billy',
        'last_name': 'Bob',
        'email': 'billy_bob@example.com',
        'mobile': '07123456789',
        'phone': '02081234567',
        'street': '177 South Lambeth Road',
        'state': None,
        'town': 'London',
        'country': 183,
        'postcode': 'SW8 1XP',
        'timezone': 'Europe/London',
        'commission_rate': 10.1,
        'calendar_colour': 'LimeGreen',
        'extra_attrs': { 'user_dob': '1993-06-23' },
        'send_emails': True,
    };



    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: HEADERS,
            body: JSON.stringify(DATA)
        });

        const data = await response.json(); // ✅ Important: parse JSON from response
        return { success: true, response: data };

    } catch (error) {
        return { success: false, error: error.message || error.toString() };
    }
}

return AddEdlingoAffiliate();