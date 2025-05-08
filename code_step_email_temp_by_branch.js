const BRANCH = "3268";

function mapBranchToResources() {
    const branchResources = {
        3268: {
            driveLink:
                "https://drive.google.com/file/d/1iWiTMiGGnCZK9cHQM_DnijlhUh-SmHrm/view?usp=sharing",
            quizLink:
                "https://docs.google.com/forms/d/e/1FAIpQLSd12X3DGH3BDn7hvjGabm72YJ-M54ss0wcTNGE_b1OHyiKv5w/viewform?usp=pp_url",
            profileLink:
                "https://drive.google.com/uc?export=download&id=1N3iUSLC_EO6uf78yvEJYH3LgGn7WgwSN",
            contact: "Julie Morin",
            guide_phrase: "Télécharger et lire le Guide des tuteurs en appuyant",
            emailInbox: "cv@tutorax.com",
        },
        8427: {
            driveLink:
                "https://drive.google.com/uc?export=download&id=18aT6qVvxjN2Q3DT9orWbN2ozLGaXatDb",
            quizLink:
                "https://docs.google.com/forms/d/e/1FAIpQLSd-SxdFq1aZL5tsKpW9Rut-j8v2jNHq5MvQXkTnxygFJ065xg/viewform?usp=pp_url",
            profileLink:
                "https://drive.google.com/uc?export=download&id=1_BWjPvUDtU5L_kxkIMFh2mAoOj2Qx4Z0",
            contact: "Julie Morin",
            guide_phrase: "Télécharger et lire le Guide des intervenants en appuyant",
            emailInbox: "cv.orthopedagogue@tutorax.com",
        },
        5737: {
            driveLink:
                "https://drive.google.com/file/d/1-4sqvH4ikha2at5FVzDSRUz6qQunArHc/view?usp=sharing",
            quizLink:
                "https://docs.google.com/forms/d/e/1FAIpQLSf-fFgTMFM00ee6skB3KmvM4PoXHEXxQCS1R2TOIpDN2q3XaA/viewform?usp=pp_url",
            profileLink:
                "https://drive.google.com/uc?export=download&id=1Sk0C7DX32eom8ijwbJbULm92qGGqsgZS",
            contact: "Julie Morin",
            guide_phrase: "Lire le Guide des ASL en appuyant",
            emailInbox: "cv.asl@tutorax.com",
        },
        7673: {
            driveLink:
                "https://drive.google.com/file/d/1tx77qV_qpy7FeSWH_cFr0gOCD3YFalie/view?usp=sharing",
            quizLink:
                "https://docs.google.com/forms/d/e/1FAIpQLSfLFfKS9B2JkPZlr5w8EyN8jua41V0nkSbxAy-sdbu05sDgKw/viewform?usp=pp_url",
            profileLink:
                "https://drive.google.com/uc?export=download&id=1T4o25UrJVsh0N8THTf7Mo2q-tcrZ3W8S",
            contact: "Melissa Davidson",
            guide_phrase: "Read the Tutor's guide by clicking",
            emailInbox: "cv.tutor@tutorax.com",
        },
        15751: {
            driveLink:
                "https://drive.google.com/file/d/1pR-fdC13NrtfsbQooVd5TdO0xilqsrCH/view?usp=sharing",
            quizLink:
                "https://docs.google.com/forms/d/e/1FAIpQLSdOcsP2CWvIyKr2bM7-OP9C5ldd0Kkkd8SXvkfCOeTDRbiRLQ/viewform?usp=pp_url",
            profileLink:
                "https://drive.google.com/uc?export=download&id=1S3XO472OlRWXbNq46hC1cM3BxXl_6_5o",
            contact: "Amanda Evans",
            guide_phrase: "Read the Tutor's guide by clicking",
            emailInbox: "tutors.us@tutorax.com",
        },
    };

    return branchResources[BRANCH] ?? null;
}

return mapBranchToResources();