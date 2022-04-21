
const db = require("../config/dbConfig.js");
const { getSoapResponse } = require("./UDP.soap.js");

// get all portal account detail
const getVoiceAccountDetails = async () => {
    const soapdetails = await getSoapResponse();

    const result = await db("voice_account");
    return result;
};

// get particular portal account detail
const getVoiceAccountDetailsByID = async (paUniqueID) => {
    const result = await db("voice_account").where("voice_account_guid", paUniqueID);
    return result
};

const insertVoiceAccountDetails = async (paDetails) => {
    const result = await db("voice_account").insert(paDetails, "voice_account_guid");
    return result
};
const updateVoiceAccountDetails = async (paUniqueID, paDetails) => {
    const result = await db("voice_account").where("voice_account_guid", paUniqueID).update(paDetails);
    return result
};

const deleteVoiceAccountDetails = async (paUniqueID) => {
    const result = await db("voice_account").where("voice_account_guid", paUniqueID).del();
    return result
};



module.exports = {
    getVoiceAccountDetailsByID,
    getVoiceAccountDetails,
    insertVoiceAccountDetails,
    updateVoiceAccountDetails,
    deleteVoiceAccountDetails
};