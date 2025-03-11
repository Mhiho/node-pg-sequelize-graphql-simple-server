export type UserType = {
  id: number;
  name: string;
  email: string;
  phone: string;
  gender: Gender;
  serviceDepartment: string;
  birthdate: string;
  noOfOffices: number;
  optionalComment: string;
};

export enum Gender {
  MALE = "male",
  FEMALE = "female",
  OTHER = "other",
}
