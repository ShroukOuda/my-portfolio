export interface Ieducation {
    id: number;
    institution: string;
    degree: string;
    fieldOfStudy: string;
    startDate: Date;
    endDate: Date;
    description?: string;
    gpa?: number;
    imageUrl?: string;
}
