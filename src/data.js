import { v4 as uuidv4 } from "uuid"; 

function chillHop() {
    return [

        {
            name:"Café Romántico",
            artist: "Café Romántico",
            cover: "https://img.freepik.com/psd-gratis/ilustracion-3d-trazado-recorte-microfono-rojo_1419-2307.jpg",
            id: uuidv4(),
            color: ["#F24933", "#F9B437"],
            audio: "https://panel.retrolandigital.com/listen/cafe_romantico_radio/listen?refresh=1656674596617",
            active: true,
        },
        {
            name:"Radio Amor 95.3",
            artist: "Radio Amor 95.3",
            cover: "https://img.freepik.com/psd-gratis/ilustracion-3d-trazado-recorte-microfono-rojo_1419-2307.jpg",
            id: uuidv4(),
            color: ["#D7B0D5", "#CBDFE0"],
            audio: "https://14083.live.streamtheworld.com/XHSHFMAAC_SC",
            active: false,
        },
        {
            name:"Alfa 91.3",
            artist: "Alfa 91.3",
            cover: "https://img.freepik.com/psd-gratis/ilustracion-3d-trazado-recorte-microfono-rojo_1419-2307.jpg",
            id: uuidv4(),
            color: ["#1D2731", "#F17E76"],
            audio: "https://26353.live.streamtheworld.com/XHFAJ_FMAAC_SC",
            active: false,
        },
        {
            name:"88.9 Noticias en vivo",
            artist: "88.9 Noticias en vivo",
            cover: "https://img.freepik.com/psd-gratis/ilustracion-3d-trazado-recorte-microfono-rojo_1419-2307.jpg",
            id: uuidv4(),
            color: ["#008781", "#cfc08c"],
            audio: "https://25063.live.streamtheworld.com/XHMFMAAC_SC",
            active: false,
        },
        {
            name:"Radio Latina 104.5",
            artist: "Radio Latina 104.5",
            cover: "https://img.freepik.com/psd-gratis/ilustracion-3d-trazado-recorte-microfono-rojo_1419-2307.jpg",
            id: uuidv4(),
            color: ["#845648","#FDFBDF"],
            audio: "https://18853.live.streamtheworld.com/XLTNFM_SC",
            active: false,
        },
        {
            name:"Radio Baladas Viejitas Romànticas en vivo",
            artist: "Radio Baladas Viejitas Romànticas en vivo",
            cover: "https://img.freepik.com/psd-gratis/ilustracion-3d-trazado-recorte-microfono-rojo_1419-2307.jpg",
            id: uuidv4(),
            color: ["#578CCE", "#E9D6D0"],
            audio: "https://media.streamingradiomx.com/radio/8000/radio.mp3",
            active: false,
        },
        {
            name:"Los 40 Principales en vivo",
            artist: "Los 40 Principales en vivo",
            cover: "https://img.freepik.com/psd-gratis/ilustracion-3d-trazado-recorte-microfono-rojo_1419-2307.jpg",
            id: uuidv4(),
            color: ["#191516", "#82698E"],
            audio: "https://26113.live.streamtheworld.com/LOS40_MEXICOAAC_SC",
            active: false,
        },
    ];
}

export default chillHop;


