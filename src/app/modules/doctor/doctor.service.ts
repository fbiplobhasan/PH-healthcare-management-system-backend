import { prisma } from "../../lib/prisma";
import { IUpdateDoctorPayload } from "./doctor.interface";

const getAllDoctors = async () => {
  const doctors = await prisma.doctor.findMany({
    include: {
      user: true,
      specialties: {
        include: {
          specialty: true,
        },
      },
    },
  });
  return doctors;
};

const getDoctorById = async (id: string) => {
  const data = await prisma.doctor.findUnique({
    where: {
      id,
    },
    include: {
      user: true,
      specialties: {
        include: {
          specialty: true,
        },
      },
    },
  });
  return data;
};

const updateDoctor = async (
  id: string,
  payload: Partial<IUpdateDoctorPayload>,
) => {
  const doctor = await prisma.doctor.update({
    where: {
      id,
    },
    data: payload,
  });
  return doctor;
};

const deleteDoctor = async (id: string) => {
  const doctor = await prisma.doctor.delete({
    where: {
      id,
    },
  });
  return doctor;
};

export const DoctorService = {
  getAllDoctors,
  getDoctorById,
  updateDoctor,
  deleteDoctor,
};
