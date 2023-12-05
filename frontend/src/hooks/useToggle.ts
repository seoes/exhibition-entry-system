import { useCallback, useState } from "react";

export default function useToggle(status: boolean = false): [boolean, () => void] {
    const [toggle, setToggle] = useState<boolean>(status);
    const toggleStatus = useCallback(() => setToggle((toggle) => !toggle), []);
    return [toggle, toggleStatus];
}
