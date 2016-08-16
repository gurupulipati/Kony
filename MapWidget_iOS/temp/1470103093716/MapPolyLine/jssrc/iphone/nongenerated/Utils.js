//function mapLocationDataWithPolyLine()
//{
//	
//	frmMap.map1235278714410197.addPolyline(
//					 {id: "polyid1",
//					 startLocation:{lat :"25.2889837", lon :" 51.5465536", name:"Kony",desc:"Kony IT",meta:{color:"green",label:"C"}},
//                     endLocation:{lat :"25.2891009", lon :"51.5469217", name:"Hi-Tech", desc: "Cyber Pearl",meta:{color:"red",label:"A"}},
//                     locations : [ { lat :" 25.28898", lon : "51.54655" } ,{ lat : "25.2891", lon : "51.54692" } ,{ lat : "25.28932", lon : "51.54678" },
//                                    { lat : "25.28939", lon : "51.54673"} ,{ lat :" 25.28965", lon : "51.54654" } ,{ lat :" 25.28981", lon : "51.54632" } ,
//                                    { lat :" 25.28993", lon :" 51.54607" } ,{ lat : "25.28999", lon :" 51.54583" } ,{ lat : "25.29001", lon : "51.54557"} ,
//                                    { lat : "25.29", lon :" 51.54539" } ,{ lat : "25.2899", lon :" 51.54501" } ,{ lat : "25.28983", lon : "51.54478" } ,
//                                    { lat : "25.28974", lon :" 51.54447" } ,{ lat : "25.28976", lon : "51.5444" } ,{ lat : "25.28983", lon : "51.54433" } ,
//                                    { lat : "25.2899", lon :" 51.54432" } ,{ lat : "25.29029", lon : "51.54432" } ,{ lat : "25.29066", lon : "51.54431" } ,
//                                    { lat : "25.29146", lon : "51.54424" } ,{ lat : "25.29174", lon :" 51.54422" } ,{ lat :" 25.29173", lon : "51.54406" } ,
//                                    { lat : "25.29165", lon : "51.54406" } ,{ lat : "25.29145", lon : "51.54408" } ,{ lat : "25.29095", lon : "51.54412" } ,
//                                    { lat :" 25.29054", lon : "51.54408" } ,{ lat : "25.28957", lon : "51.54405" } ,{ lat : "25.28922", lon :" 51.54404" }],
//                     polylineConfig:{lineColor:"0x0000ffff", lineWidth:"2"}});
//	
//	
//}
function mapLocationDataWithPolyLine() {
    frmMap.map1235278714410197.addPolyline({
        id: "polyid1",
        startLocation: {
            lat: "17.447663",
            lon: "78.371632",
            name: "Kony",
            desc: "Kony IT",
            meta: {
                color: "green",
                label: "C"
            }
        },
        endLocation: {
            lat: "17.450191",
            lon: "78.381078",
            name: "Hi-Tech",
            desc: "Cyber Pearl",
            meta: {
                color: "red",
                label: "A"
            }
        },
        locations: [{
            lat: "17.447285",
            lon: "78.371927"
        }, {
            lat: "17.446793",
            lon: "78.373536"
        }, {
            lat: "17.446793",
            lon: "78.374652"
        }, {
            lat: "17.446108",
            lon: "78.374582"
        }, {
            lat: "17.445514",
            lon: "78.374893"
        }, {
            lat: "17.443938",
            lon: "78.374711"
        }, {
            lat: "17.443457",
            lon: "78.377135"
        }, {
            lat: "17.445903",
            lon: "78.377414"
        }, {
            lat: "17.447704",
            lon: "78.378316"
        }, {
            lat: "17.450283",
            lon: "78.379485"
        }],
        polylineConfig: {
            lineColor: "0x0000ffff",
            lineWidth: "2"
        }
    });
}