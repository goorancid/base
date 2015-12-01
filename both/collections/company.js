Company = new Mongo.Collection("company");

Company.allow({
    insert: function (userId, doc) {
        return !!userId;
    }
});

Company.attachSchema(new SimpleSchema({
    name: {
        type: String,
        label: "Name"
    },
    ACT_STAT: {
        type: String,
        label: "Account Status"
    },
    CENSUS_NUM: {
        type: String,
        label: "Census Number"
    },
    CARSHIP_NAME: {
        type: String,
        label: "Carship Name"
    },
    NAME_DBA: {
        type: String,
        label: "Doing Business As"
    },
    ICC_DOCKET_1_PREFIX: {
        type: String,
        label: "ICC Docket #1"
    },
    ICC1: {
        type: String,
        label: "ICC1"
    },
    ICC_DOCKET_2_PREFIX: {
        type: String,
        label: "ICC Docket #2"
    },
    ICC2: {
        type: String,
        label: "ICC2"
    },
    ICC_DOCKET_3_PREFIX: {
        type: String,
        label: "ICC Docket #3"
    },
    ICC3: {
        type: String,
        label: "ICC3"
    },
    MAI_STR: {
        type: String,
        label: "Street Mailing Address"
    },
    MAI_CITY: {
        type: String,
        label: "City"
    },
    MAI_ST: {
        type: String,
        label: "State"
    },
    MAI_ZIP: {
        type: String,
        label: "Zip"
    },
    PHY_STR: {
        type: String,
        label: "Physical Mailing Address"
    },
    PHY_CITY: {
        type: String,
        label: "City"
    },
    PHY_ST: {
        type: String,
        label: "State"
    },
    PHY_ZIP: {
        type: String,
        label: "Zip"
    },
    TEL_NUM: {
        type: String,
        label: "Phone Number"
    },
    CELL_NUM: {
        type: String,
        label: "Cell Number"
    },
    FAX_NUM: {
        type: String,
        label: "Fax Number"
    },
    EMAILADDRESS: {
        type: String,
        label: "Email Address"
    },
    FLEETSIZE: {
        type: String,
        label: "Fleet Size"
    },
    COMPANY_REP1: {
        type: String,
        label: "Primary Representative"
    },
    COMPANY_REP2: {
        type: String,
        label: "Secondary Representative"
    }
}));