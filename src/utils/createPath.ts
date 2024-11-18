export function createPath(url: string) {
    return `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${url.replace(
        /^\//,
        ''
    )}`;
}
