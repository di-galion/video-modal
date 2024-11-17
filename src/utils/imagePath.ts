export function imagePath(url: string) {
    return `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${url.replace(
        /^\//,
        ''
    )}`;
}
