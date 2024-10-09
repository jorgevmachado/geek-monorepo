import GDefault from "../../../packages/ui/src/components/GDefault";
import {FaBeer} from "react-icons/fa";
export default function Home() {
    return (
        <GDefault logo="/logo/logo.svg">
            <h3> Lets go for a <FaBeer/>? </h3>
        </GDefault>
    );
}
