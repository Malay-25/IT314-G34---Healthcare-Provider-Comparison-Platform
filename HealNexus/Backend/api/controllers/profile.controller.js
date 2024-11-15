import getErrorDetails from '../../Utilites/errorCodes.js';
import AdminProfile from '../../data/models/profile/profile.admin.js';
import PatientProfile from '../../data/models/profile/profile.patient.js';
import DoctorProfile from '../../data/models/profile/profile.doctor.js';
import LabTechnicianProfile from '../../data/models/profile/profile.labTechnician.js';
import PharmacistProfile from '../../data/models/profile/profile.pharmacist.js';

export const createAdminProfile = async (req, res) => {
  try {
    const { address, permissions = ['manageUsers', 'viewReports'] } = req.body;
    const { userID } = req;

    const adminProfile = new AdminProfile({
      userID,
      permissions,
      address
    });

    await adminProfile.save();

    const successResponse = getErrorDetails('CREATED');
    res.status(successResponse.code).json({
      message: 'Admin profile created successfully',
    });

  } catch (error) {
    const errorResponse = getErrorDetails('INTERNAL_SERVER_ERROR', 'Error in creating the profile for admin');
    console.log(error)
    return res.status(errorResponse.code).json({ message: errorResponse.message });
  }
};

export const getAdminProfile = async (req, res) => {
  try {
    const adminProfile = await AdminProfile.findById(req.params.id);
    const response = { 
      address: adminProfile.address, 
      permissions: adminProfile.permissions 
    };

    const error = getErrorDetails('SUCCESS');
    res.status(error.code).json({
      response
    });

  } catch (error) {
    const error_response = getErrorDetails('INTERNAL_SERVER_ERROR', 'Error in getting the profile for admin');
    return res.status(error_response.code).json({message : error_response.message});
  }
};

export const updateAdminProfile = async (req, res) => {
  try {
    const { address, permissions } = req.body;
    const oldAdminProfile = {
      address, 
      permissions
    };

    await AdminProfile.findByIdAndUpdate(
      req.params.id,
      oldAdminProfile,
      { new: true, runValidators: true }
    );

    const error = getErrorDetails('SUCCESS');
    res.status(error.code).json({
      message: 'Admin profile Updated successfully',
    });

  } catch (error) {
    const error_response = getErrorDetails('INTERNAL_SERVER_ERROR', 'Error in Updating the profile for admin');
    return res.status(error_response.code).json({message : error_response.message});
  }
};

export const createPatientProfile = async (req, res) => {
  try {
    const { age, gender, contactNumber, emergencyContact, address, medicalHistory } = req.body;
    const { userID } = req;

    const patientProfile = new PatientProfile({
      userID,
      age,
      gender,
      contactNumber,
      emergencyContact,
      address,
      medicalHistory
    });
    
    await patientProfile.save();
    const error = getErrorDetails('CREATED');
    res.status(error.code).json({
      message: 'Patient profile Created successfully',
    });

  } catch (error) {
    const error_response = getErrorDetails('INTERNAL_SERVER_ERROR', 'Error in creating the profile for Patient');
    return res.status(error_response.code).json({message : error_response.message});
  }
};

export const getPatientProfile = async (req, res) => {
  try {
    const patientProfile = await PatientProfile.findById(req.params.id);
    const response = { 
      age: patientProfile.age,
      gender: patientProfile.gender,
      contactNumber: patientProfile.contactNumber,
      emergencyContact: patientProfile.emergencyContact,
      address: patientProfile.address,
      medicalHistory: patientProfile.medicalHistory
    };

    const error = getErrorDetails('SUCCESS');
    res.status(error.code).json({
      response
    });
    
  } catch (error) {
    const error_response = getErrorDetails('INTERNAL_SERVER_ERROR', 'Error in getting the profile for Patient');
    return res.status(error_response.code).json({message : error_response.message});
  }
};

export const updatePatientProfile = async (req, res) => {
  try {
    const { age, gender, contactNumber, emergencyContact, address, medicalHistory } = req.body;
    const oldPatientProfile = {
      age,
      gender,
      contactNumber,
      emergencyContact,
      address,
      medicalHistory
    };

    await PatientProfile.findByIdAndUpdate(
      req.params.id,
      oldPatientProfile,
      { new: true, runValidators: true }
    );

    const error = getErrorDetails('SUCCESS');
    res.status(error.code).json({
      message: 'Patient profile Updated successfully',
    });

  } catch (error) {
    const error_response = getErrorDetails('INTERNAL_SERVER_ERROR', 'Error in Updating the profile for Patient');
    return res.status(error_response.code).json({message : error_response.message});
  }
};

export const createDoctorProfile = async (req, res) => {
  try {
    const { specialty, qualifications, experience, contactNumber, clinicAddress, ratings, biography, consultationFee } = req.body;
    const { userID } = req;

    const doctorProfile = new DoctorProfile({
      userID,
      specialty,
      qualifications,
      experience,
      contactNumber,
      clinicAddress, 
      ratings,
      biography,
      consultationFee
    });
    
    await doctorProfile.save();
    const error = getErrorDetails('CREATED');
    res.status(error.code).json({
      message: 'Doctor profile Created successfully',
    });

  } catch (error) {
    const error_response = getErrorDetails('INTERNAL_SERVER_ERROR', 'Error in creating the profile for Doctor');   
    return res.status(error_response.code).json({message : error_response.message});
  }
};

export const getDoctorProfile = async (req, res) => {
  try {
    const doctorProfile = await DoctorProfile.findById(req.params.id);
    const response = { 
      specialty: doctorProfile.specialty,
      qualifications: doctorProfile.qualifications,
      experience: doctorProfile.experience,
      contactNumber: doctorProfile.contactNumber,
      clinicAddress: doctorProfile.clinicAddress, 
      ratings: doctorProfile.ratings,
      biography: doctorProfile.biography,
      consultationFee: doctorProfile.consultationFee
    };

    const error = getErrorDetails('SUCCESS');
    res.status(error.code).json({
      response
    });

  } catch (error) {
    const error_response = getErrorDetails('INTERNAL_SERVER_ERROR', 'Error in getting the profile for Doctor');
    return res.status(error_response.code).json({message : error_response.message});
  }
};

export const updateDoctorProfile = async (req, res) => {
  try {
    const { specialty, qualifications, experience, contactNumber, clinicAddress, ratings, biography, consultationFee } = req.body;
    const oldDoctorProfile = {
      specialty,
      qualifications,
      experience,
      contactNumber,
      clinicAddress, 
      ratings, 
      biography, 
      consultationFee
    };

    await DoctorProfile.findByIdAndUpdate(
      req.params.id,
      oldDoctorProfile,
      { new: true, runValidators: true }
    );

    const error = getErrorDetails('SUCCESS');
    res.status(error.code).json({
      message: 'Doctor profile Updated successfully',
    });

  } catch (error) {
    const error_response = getErrorDetails('INTERNAL_SERVER_ERROR', 'Error in Updating the profile for Doctor');
    return res.status(error_response.code).json({message : error_response.message});
  }
};

export const createPharmacistProfile = async (req, res) => {
  try {
    const { certification, pharmacyName, pharmacyLocation, contactNumber, yearsOfExperience } = req.body;
    const { userID } = req;

    const pharmacistProfile = new PharmacistProfile({
      userID,
      certification,
      pharmacyName,
      pharmacyLocation,
      contactNumber,
      yearsOfExperience
    });
    
    await pharmacistProfile.save();
    const error = getErrorDetails('CREATED');
    res.status(error.code).json({
      message: 'Pharmacist profile Created successfully',
    });

  } catch (error) {
    const error_response = getErrorDetails('INTERNAL_SERVER_ERROR', 'Error in creating the profile for Pharmacist');
    console.log(error);
    return res.status(error_response.code).json({message : error_response.message});
  }
};

export const getPharmacistProfile = async (req, res) => {
  try {
    const pharmacistProfile = await PharmacistProfile.findById(req.params.id);
    const response = { 
      certification: pharmacistProfile.certification,
      pharmacyName: pharmacistProfile.pharmacyName,
      pharmacyLocation: pharmacistProfile.pharmacyLocation,
      contactNumber: pharmacistProfile.contactNumber,
      yearsOfExperience: pharmacistProfile.yearsOfExperience
    };

    const error = getErrorDetails('SUCCESS');
    res.status(error.code).json({
      response
    });

  } catch (error) {
    const error_response = getErrorDetails('INTERNAL_SERVER_ERROR', 'Error in getting the profile for Pharmacist');
    return res.status(error_response.code).json({message : error_response.message});
  }
};

export const updatePharmacistProfile = async (req, res) => {
  try {
    const { certification, pharmacyName, pharmacyLocation, contactNumber, yearsOfExperience } = req.body;
    const oldPharmacistProfile = {
      certification,
      pharmacyName,
      pharmacyLocation,
      contactNumber,
      yearsOfExperience
    };

    await PharmacistProfile.findByIdAndUpdate(
      req.params.id,
      oldPharmacistProfile,
      { new: true, runValidators: true }
    );
    
    const error = getErrorDetails('SUCCESS');
    res.status(error.code).json({
      message: 'Pharmacist profile Updated successfully',
    });

  } catch (error) {
    const error_response = getErrorDetails('INTERNAL_SERVER_ERROR', 'Error in Updating the profile for Pharmacist');
    console.log(error)
    return res.status(error_response.code).json({message : error_response.message});
  }
};

export const createLabTechnicianProfile = async (req, res) => {
  try {
    const { qualifications, associatedLab, specialization, contactNumber, address, certifications, yearsOfExperience } = req.body;
    const { userID } = req;

    const labTechnicianProfile = new LabTechnicianProfile({
      userID,
      qualifications,
      associatedLab,
      specialization,
      contactNumber, 
      address,
      certifications,
      yearsOfExperience
    });
    
    await labTechnicianProfile.save();
    const error = getErrorDetails('CREATED');
    res.status(error.code).json({
      message: 'Lab-Technician profile Created successfully',
    });

  } catch (error) {
    const error_response = getErrorDetails('INTERNAL_SERVER_ERROR', 'Error in creating the profile for Lab Technician');
    return res.status(error_response.code).json({message : error_response.message});
  }
};

export const getLabTechnicianProfile = async (req, res) => {
  try {
    const labTechnicianProfile = await LabTechnicianProfile.findById(req.params.id);
    const response = { 
      qualifications: labTechnicianProfile.qualifications,
      associatedLab: labTechnicianProfile.associatedLab,
      specialization: labTechnicianProfile.specialization,
      contactNumber: labTechnicianProfile.contactNumber, 
      address: labTechnicianProfile.address,
      certifications: labTechnicianProfile.certifications,
      yearsOfExperience: labTechnicianProfile.yearsOfExperience
    };

    const error = getErrorDetails('SUCCESS');
    res.status(error.code).json({
      response
    });

  } catch (error) {
    const error_response = getErrorDetails('INTERNAL_SERVER_ERROR', 'Error in getting the profile for Lab Technician');
    return res.status(error_response.code).json({message : error_response.message});
  }
};


export const updateLabTechnicianProfile = async (req, res) => {
  try {
    const { qualifications, associatedLab, specialization, contactNumber, address, certifications, yearsOfExperience } = req.body;
    const { userID } = req;

    const oldLabTechnicianProfile = {
      userID,
      qualifications,
      associatedLab,
      specialization,
      contactNumber, 
      address,
      certifications,
      yearsOfExperience
    };

    const updatedLabTechnicianProfile = await LabTechnicianProfile.findByIdAndUpdate(
      req.params.id,
      oldLabTechnicianProfile,
      { new: true, runValidators: true }
    );
    
    const error = getErrorDetails('SUCCESS');
    res.status(error.code).json({
      message: 'Lab-Technician profile Updated successfully',
    });

  } catch (error) {
    const error_response = getErrorDetails('INTERNAL_SERVER_ERROR', 'Error in Updating the profile for Lab Technician');
    return res.status(error_response.code).json({message : error_response.message});
  }
};