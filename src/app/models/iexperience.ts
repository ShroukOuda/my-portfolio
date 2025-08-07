export interface Iexperience {
    id: number;
    company: string;
    position: string;
    startDate: Date;
    endDate: Date | null;
    description?: string;
    location?: string;
    technologiesUsed?: string[];
}
