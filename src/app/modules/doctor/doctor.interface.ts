import { Gender } from "../../../generated/prisma/enums";

export interface IUpdateDoctorPayload {
  name: string;
  profilePhoto: string;
  contactNumber: string;
  address: string;
  isDeleted: boolean;
  deletedAt: Date;
  registrationNumber: string;
  experience: number;
  gender: Gender;
  appointmentFee: number;
  qualification: string;
  currentWorkingPlace: string;
  designation: string;
  averageRating: number;
}
