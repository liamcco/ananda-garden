import { ganeshaData, lakshmiData, hanumanData } from '@/mockdata/roomData'

type Room = {
    name: string;
    description: string;
    image: string;
}

export async function getMockRoomData(room: string) {
    switch (room) {
        case 'ganesha':
            return ganeshaData
        case 'lakshmi':
            return lakshmiData
        case 'hanuman':
            return hanumanData
        default:
            return null
    }
}