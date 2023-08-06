
export type Weekday = 'Måndag' | 'Tisdag' | 'Onsdag' | 'Torsdag' | 'Fredag' | 'Lördag' | 'Söndag';

export type OpeningHours = {
    [key in Weekday]: string;
};

export const openingHours: OpeningHours = {
    'Måndag': 'Stängt',
    'Tisdag': 'Stängt',
    'Onsdag': '11 - 18',
    'Torsdag': '11 - 18',
    'Fredag': '11 - 18',
    'Lördag': '11 - 15',
    'Söndag': 'Stängt',
};