export class Product {
    id: string;
    sku: string;
    name: string;
    description: string;
    unitPrice: number;
    imageUrl: string;
    active: boolean;
    unitsInStock: number;
    dateCreated: Date;
    lastUpdate: Date;
}

export interface Page<T> {
    content: T[];
    size: number;
    totalElements: number;
    totalPages: number;
    number: number;
}
