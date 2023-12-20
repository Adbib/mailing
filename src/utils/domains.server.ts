import formData from "form-data";
import Mailgun, { type TDomain } from "mailgun.js";

const mailgun = new Mailgun(formData);

export async function getAllDomains(apiKey: string) {
  const client = mailgun.client({ username: "api", key: apiKey || "" });
  try {
    const domainsList = await client.domains.list();
    // console.log("domainsList", domainsList);
    return domainsList as TDomain[];
  } catch (error: any) {
    console.error("error", error);
    return { error: true, message: error?.message };
  }
}
