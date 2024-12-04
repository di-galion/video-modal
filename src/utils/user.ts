export function parseUserData(data: any, online = true) {
    return {
        name: `${data.name} ${data.surname}`,
        id: data.id,
        online,
    };
}
