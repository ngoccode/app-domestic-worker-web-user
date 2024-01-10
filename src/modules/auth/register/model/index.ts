class RegisterPayload {
  full_name: string;
  phone_number: string;
  date_of_birth: string;
  address: string;
  password: string;
  constructor({
    fullName = '',
    phoneNumber = '',
    dateOfBirth = '',
    address = '',
    password = '',
  }: {
    fullName: string;
    phoneNumber: string;
    dateOfBirth: string;
    address: string;
    password: string;
  }) {
    this.full_name = fullName;
    this.phone_number = phoneNumber;
    this.date_of_birth = dateOfBirth;
    this.address = address;
    this.password = password;
  }
}

export { RegisterPayload };
