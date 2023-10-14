// npm package imports
import { v4 as uuid } from "uuid";

// asset imports
import eula from "../assets/eula.webp";
import fischl from "../assets/fischl.webp";
import ganyu from "../assets/ganyu.webp";
import keqing from "../assets/keqing.webp";
import mona from "../assets/mona.webp";
import raiden_shogun from "../assets/raiden_shogun.webp";
import shenhe from "../assets/shenhe.webp";

const genshintcg = {
    [uuid()]: {
        name: "eula",
        src: eula,
        clicked: false,
    },
    [uuid()]: {
        name: "fischl",
        src: fischl,
        clicked: false,
    },
    [uuid()]: {
        name: "keqing",
        src: keqing,
        clicked: false,
    },
    [uuid()]: {
        name: "mona",
        src: mona,
        clicked: false,
    },
    [uuid()]: {
        name: "raiden_shogun",
        src: raiden_shogun,
        clicked: false,
    },
    [uuid()]: {
        name: "shenhe",
        src: shenhe,
        clicked: false,
    },
};

export default genshintcg;
