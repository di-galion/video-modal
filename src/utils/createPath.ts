import { CloudType } from '../api/http/api';

export function createPath(url: string) {
    return `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${url.replace(
        /^\//,
        ''
    )}`;
}

export function createCloudVideoUrl(
    type: CloudType,
    fileName: string
): [CloudType, string] {
    return [type, fileName];
}
