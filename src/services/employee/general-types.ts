
export interface Address {
    street: string;
    city: string;
    state: string;
    zip: string;
  }
  
  export interface Documents {
    appointment_letter: string | null;
    salary_slips: string[];
    relieving_letter: string | null;
    experience_letter: string | null;
  }
  
  export interface AccountAccess {
    email: string;
    slack_id: string | null;
    skype_id: string | null;
    github_id: string | null;
  }
  
  export interface Employee {
    emp_Img: string;
    emp_id: string;
    emp_name: string;
    email: string;
    mobile: string;
    dob: string;
    gender: string;
    marital_status: string;
    nationality: string;
    address: Address;
    department: string;
    designation: string;
    employee_type: string; 
    working_days: string;
    joining_date: string;
    office_location: string;
    documents: Documents;
    account_access: AccountAccess;
  }
  