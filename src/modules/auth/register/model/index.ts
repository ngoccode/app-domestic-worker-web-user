class RegisterPayload {
  full_name: string;
  phone_number: string;
  date_of_birth: Date | null;
  province: string;
  district: string;
  ward: string;
  password: string;
  constructor({
    fullName = '',
    phoneNumber = '',
    dateOfBirth = null,
    province = '',
    district = '',
    ward = '',
    password = '',
  }: {
    fullName: string;
    phoneNumber: string;
    dateOfBirth: Date | null;
    province: string;
    district: string;
    ward: string;
    password: string;
  }) {
    this.full_name = fullName;
    this.phone_number = phoneNumber;
    this.date_of_birth = dateOfBirth;
    this.province = province;
    this.district = district;
    this.ward = ward;
    this.password = password;
  }
}

export { RegisterPayload };
