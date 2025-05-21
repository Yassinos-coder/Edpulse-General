async function createShortLink() {
  const url = "https://api.short.io/links";

  const payload = {
    domain: "share.tutorax.com",
    originalURL: "https://app.edlingo.com/agents/4570493/?type=affiliateEnLigne&edid=4570758",
    folderId: "kthuR1bpjvJEpdWEppaKGT",
    allowDuplicates: false,
    title: "Yassine Castro"
  };

  const headers = {
    "accept": "application/json",
    "content-type": "application/json",
    "Authorization": "sk_n2S5frA9olLcCE7g"
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(payload)
    });

    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}

// Call the function
return createShortLink();
