interface CreateRiderData {
    first_name: string;
    last_name: string;
    phone: string;
    password: string;
}

interface CreateRiderProfile {
    location: string;
    address: string;
    gender: string;
    // avatar: string;
    stage: string;
}
interface BikeDetails {
    bikeType: string,
    plateNumber: string,
    // bikePhoto: string,
    insuranceProvider: string,
    insurancePolicyNumber: string
}