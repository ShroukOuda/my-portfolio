export interface Iservices {
    id: number;
    title: string;
    description: string;
    icon: string; // URL or path to the icon image
    link?: string; // Optional link for more information
    technologiesUsed?: string[]; // Optional array of technologies used in the service
}
