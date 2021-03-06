// Generated from https://msdn.microsoft.com/en-us/library/azure/dn783368.aspx

import * as crypto from "crypto";
import * as restify from "restify";


export function getAuthorizationUsingMasterKey(verb: string, resourceId: string, resourceType: string, date: string, masterKey: string): string {
    var key = new Buffer(masterKey, "base64");

    var text = (verb || "").toLowerCase() + "\n" +
        (resourceType || "").toLowerCase() + "\n" +
        (resourceId || "") + "\n" +
        (date || "").toLowerCase() + "\n" +
        "" + "\n";

    var body = new Buffer(text, "utf8");
    var signature = crypto.createHmac("sha256", key).update(body).digest("base64");

    var MasterToken = "master";

    var TokenVersion = "1.0";

    return encodeURIComponent("type=" + MasterToken + "&ver=" + TokenVersion + "&sig=" + signature);
}

export function getMasterKey(req: restify.Request) : string {
    return process.env.masterkey || req.header('x-ms-masterkey');
}
