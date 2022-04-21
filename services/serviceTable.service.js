
const db = require("../config/dbConfig.js");

const getServiceDetail = async () => {
    const soapdetails = await getSoapResponse();

    const result = await db("service");
    return result;
};

const getServiceDetailByID = async (paUniqueID) => {
    const result = await db("service").where("portal_account_guid", paUniqueID);
    return result
};

const insertServiceDetail = async (paDetails) => {
    const result = await db("service").insert(paDetails, "portal_account_guid");
    return result
};
const updateServiceDetail = async (paUniqueID, paDetails) => {
    const result = await db("service").where("portal_account_guid", paUniqueID).update(paDetails);
    return result
};

const deleteServiceDetail = async (paUniqueID) => {
    const result = await db("service").where("portal_account_guid", paUniqueID).del();
    return result
};



module.exports = {
    getServiceDetail,
    getServiceDetailByID,
    insertServiceDetail,
    updateServiceDetail,
    deleteServiceDetail
};