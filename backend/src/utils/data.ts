export function generateSerialNumber(): string {
    const randomNumbers = () =>
        Math.floor(Math.random() * 10000)
            .toString()
            .padStart(4, "0");
    return `${randomNumbers()}-${randomNumbers()}-${randomNumbers()}`;
}
