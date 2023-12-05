export default async function page() {
    await fetch("localhost:8002/entry");
    return (
        <div>
            <div>123</div>
        </div>
    );
}
