import { useSelector } from "react-redux";
import { Appstate } from "../store";

export default function useWidth() {
    return useSelector<Appstate, number>((state) => state.width);
}
