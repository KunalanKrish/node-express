
const { getPortalAccountDetailsByID, getPortalAccountDetails, insertPortalAccountDetails, updatePortalAccountDetails, deletePortalAccountDetails } = require('../services/portalAccount.service');
const router = require("express").Router();
// Get all portal details
router.get("/", async (req, res) => {
  try {
    const portalAccountDetails = await getPortalAccountDetails();
    res.status(200).json(portalAccountDetails);
  } catch (err) {
    res.status(501).json({ err: err });
  }
});

// get portal account by user id
router.get("/:guid", async (req, res) => {
  const portalAccountGuid = req.params.guid;
  try {
    const portalAccountDetails = await getPortalAccountDetailsByID(portalAccountGuid);
    if (!portalAccountDetails) {
      res
        .status(404)
        .json({ err: "The GUID does not exist" });
    } else {
      res.status(200).json(portalAccountDetails);
    }
  } catch (err) {
    res.status(500).json({ err: "" });
  }
});

// Insert portal account into table
router.post("/", async (req, res) => {
  const newPortalAccount = req.body;
  if (!newPortalAccount.portal_account_guid) {
    res.status(404).json({ err: "Please provide the guid" });
  } else {
    try {
      const user = await insertPortalAccountDetails(newPortalAccount);
      res.status(201).json(user);
    } catch (err) {
      res.status(500).json({ err: "Error in adding portal details" });
    }
  }
});

router.put("/:guid", async (req, res) => {
  const portalAccountGuid = req.params.guid;
  const newChanges = req.body;
  if (!newChanges.portal_account_guid) {
    res.status(404).json({ err: "You are missing information" });
  } else {
    try {
      const addChanges = await updatePortalAccountDetails(portalAccountGuid, newChanges);
      res.status(200).json(addChanges);
    } catch (err) {
      res.status(500).json({ err: "Error in updating portal account" });
    }
  }
});

router.delete("/:guid", async (req, res) => {
  const portalAccountGuid = req.params.guid;
  try {
    const deleting = await deletePortalAccountDetails(portalAccountGuid);
    res.status(204).json(deleting);
  } catch (err) {
    res.status(500).json({ err: "Error in deleting portal account" });
  }
});

module.exports = router;
