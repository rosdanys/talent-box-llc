export type ContactForm = {
  fullName: string;
  email: string;
  phone: string;
  message: string;
};
export type TalentForm = {
  firstName: string;
  lastName: string;
  companyName: string;
  email: string;
  phone: string;
  role: string;
};
export type HiredForm = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  cvfile?: any;
  iam?: string,
  workPlace?: string,
  taxStatus?: string
};
