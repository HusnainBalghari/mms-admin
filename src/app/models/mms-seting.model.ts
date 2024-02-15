export interface MMSSetting {
    id: number;    
    name: string;
    description: string;
    active: boolean;
}

export interface MMSSettingDetails{
    id: number;
    fieldName: string;
    fieldValue: string;
    active: boolean;
}