const AppendSkillsToContactor = async () => {
    const CONTRACTOR_BRANCH = '3268';

    const mappingIdToToken = {
        "3268": "fa64205f2c24a986ddbf4ba223957c2b40390ce6",
        "7673": "47160bd5d5e601cf56aa2ab86226b7033de22162",
        "8427": "3005ae7c151f1d104c82e7ff6a232898c29ed1f1",
        "15751": "0ad0746cfe4309661c0c26c6a9368b0a3d2ec169",
        "14409": "b9042d2577ba92415f47a66b826ed11f517e082e",
        "5737": "3df70ef7b74e0a34c7a6e3620b13c4fc3cdb8c57",
        "3269": "b4e57c43ac08ca011fe75b5097da9a2ab261a235",
    };

    const CONTRACTOR_BRANCH_TOKEN = mappingIdToToken[CONTRACTOR_BRANCH];
    const HEADERS = {
        'Authorization': `token ${CONTRACTOR_BRANCH_TOKEN}`,
        'Content-Type': 'application/json'
    };

    const API_URL = "https://secure.tutorcruncher.com/api/contractor-skills/";

    const CONTRACTOR_SKILLS = {
        "contractor": 4431752,
        "subject": 68863,
        "qual_level": 111238
    };

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: HEADERS,
            body: JSON.stringify(CONTRACTOR_SKILLS)
        });

        const data = await response.json(); // ✅ Important: parse JSON from response
        return { success: true, response: data };

    } catch (error) {
        return { success: false, error: error.message || error.toString() };
    }
};

return AppendSkillsToContactor();
