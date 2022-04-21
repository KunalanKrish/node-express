
const db = require("../config/dbConfig.js");
const { getSoapResponse } = require("./UDP.soap.js");

// get all portal account detail
const getServiceTnDetails = async () => {
    const soapdetails = await getSoapResponse();

    const result = await db("service_tn");
    return result;
};

// get particular portal account detail
const getServiceTnDetailsByID = async (paUniqueID) => {
    const result = await db("service_tn").where("service_tn_guid", paUniqueID);
    return result
};

const insertServiceTnDetails = async (paDetails) => {
    const result = await db("service_tn").insert(paDetails, "service_tn_guid");
    return result
};
const updateServiceTnDetails = async (paUniqueID, paDetails) => {
    const result = await db("service_tn").where("service_tn_guid", paUniqueID).update(paDetails);
    return result
};

const deleteServiceTnDetails = async (paUniqueID) => {
    const result = await db("service_tn").where("service_tn_guid", paUniqueID).del();
    return result
};



module.exports = {
    getServiceTnDetailsByID,
    getServiceTnDetails,
    insertServiceTnDetails,
    updateServiceTnDetails,
    deleteServiceTnDetails
};