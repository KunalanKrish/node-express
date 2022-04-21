
const db = require("../config/dbConfig.js");
const { getSoapResponse } = require("./UDP.soap.js");

// get all portal account detail
const getPortalAccountDetails = async () => {
    const soapdetails = await getSoapResponse();

    const result = await db("portal_account");
    return result;
};

// get particular portal account detail
const getPortalAccountDetailsByID = async (paUniqueID) => {
    const result = await db("portal_account").where("portal_account_guid", paUniqueID);
    return result
};

const insertPortalAccountDetails = async (paDetails) => {
    const result = await db("portal_account").insert(paDetails, "portal_account_guid");
    return result
};
const updatePortalAccountDetails = async (paUniqueID, paDetails) => {
    const result = await db("portal_account").where("portal_account_guid", paUniqueID).update(paDetails);
    return result
};

const deletePortalAccountDetails = async (paUniqueID) => {
    const result = await db("portal_account").where("portal_account_guid", paUniqueID).del();
    return result
};



module.exports = {
    getPortalAccountDetailsByID,
    getPortalAccountDetails,
    insertPortalAccountDetails,
    updatePortalAccountDetails,
    deletePortalAccountDetails
};