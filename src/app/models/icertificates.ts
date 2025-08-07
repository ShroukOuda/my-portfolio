export interface ICertificate {
  id: number;
  title: string;
  description: string;
  issuer: string;
  issueDate: Date;
  expirationDate?: Date;
  certificateImage?: string; 
  technologiesUsed?: string[];
}

