"use server";

export const sendEmail = async (formData: FormData) => {
  "use server";
  console.log("Running on server");
  console.log(formData.get("senderEmail"));
  console.log(formData.get("message"));
};
