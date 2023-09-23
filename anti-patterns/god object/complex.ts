hospital.generateBill("p123");

class Patient {
    constructor(private patients: any[] = [], private treatments: any[] = [], private bills: any[] = []) {}

    addPatient(patient: any) {
        this.patients.push(patient);
    }
    getPatientDetails(patientID: string) {
        return this.patients.find(patient => patient.id === patientID);
    }
    addTreatment(treatment: any) {
        this.treatments.push(treatment);
    }
    generateBill(patientID: string) {
        const patientTreatments = this.treatments.filter(treatment => treatment.patientId === patientID);
        const totalCost = patientTreatments.reduce((acc, treatment) => acc + treatment.cost, 0);
        this.bills.push({ patientID, totalCost });
    }
    getPatientTreatments(patientID: string) {
        return this.treatments.filter(treatment => treatment.patientId === patientID);
    }
    getPatientBill(patientID: string) {
        return this.bills.find(bill => bill.patientID === patientID);
    }
}
class Doctor {
    constructor(private doctors: any[] = [], private appointments: any[] = []) {}

    hireDoctor(doctor: any) {
        this.doctors.push(doctor);
    }
    assignDoctorToPatient(doctorID: string, patientID: string) {
        const appointment = {
            doctorId: doctorID,
            patientId: patientID,
            date: new Date().toISOString() // Se genera automáticamente la fecha actual
        };
        this.appointments.push(appointment);
    }
    getDoctorAppointments(doctorID: string) {
        return this.appointments.filter(appointment => appointment.doctorId === doctorID);
    }
}
class HospitalSystem {
    patients: Patient;
    doctors: Doctor;

    constructor() {
        this.patients = new Patient();
        this.doctors = new Doctor();
    }
}
const hospital = new HospitalSystem();
hospital.patients.addPatient({ id: "p123", name: "John", age: 30 });
hospital.doctors.hireDoctor({ id: "d456", name: "Dr. Smith", specialty: "Cardiology" });
hospital.doctors.assignDoctorToPatient("d456", "p123");
hospital.patients.addTreatment({ patientId: "p123", description: "Cardiac Checkup", cost: 100 });
hospital.patients.generateBill("p123");
const patientTreatments = hospital.patients.getPatientTreatments("p123");
const patientBill = hospital.patients.getPatientBill("p123");
const doctorAppointments = hospital.doctors.getDoctorAppointments("d456");

console.log("Información del paciente:", hospital.patients.getPatientDetails("p123"));
console.log("Tratamientos del paciente:", patientTreatments);
console.log("Factura del paciente:", patientBill);
console.log("Citas del médico:", doctorAppointments);
