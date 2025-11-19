// src/api/contactApi.js

export const sendContact = async (data) => {
  try {
    const res = await fetch("http://127.0.0.1:8000/api/contact/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    // On lit une seule fois le JSON
    const responseData = await res.json();

    // Vérifie si le backend renvoie une erreur
    if (!res.ok) {
      throw new Error(responseData.detail || "Erreur lors de l'envoi du formulaire");
    }

    return responseData;
  } catch (error) {
    console.error("sendContact error:", error);
    throw error;
  }
};
