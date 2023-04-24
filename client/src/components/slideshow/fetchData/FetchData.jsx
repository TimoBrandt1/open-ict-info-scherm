// import DebugSlide from '../../debug-slide/component.DebugSlide';
// import KennisDelingSlide from "../../kennisdeling-slide/component.KennisdelingSlide";

// export const videoProps = {
//     src: "videos/DebugSlideVideo.mp4",
//     type: "video/mp4",
//     width: 640,
//     height: 360,
//     autoplay: true,
//     controls: false,
//     muted: true
//   };
  
//   export const debugSlideInfo = {
//     ScreenName: 'Screen 1',
//     GroupName: 'Group Debugslide',
//     CurrentSlide: 'Debugslide',
//     VideoAtributes: videoProps
//   };
  
//   export const getKennisDelingSlideData = async () => {
//     try {
//       const response1 = await fetch("http://145.89.192.107/api/kennisdeling/13");
//       const response2 = await fetch("http://145.89.192.107/api/kennisdeling/17");
  
//       if (!response1.ok || !response2.ok) {
//         throw new Error("Network response was not ok");
//       }
  
//       const data1 = await response1.json();
//       const data2 = await response2.json();
  
//       return [
//         {
//           Subject: data1.onderwerp || "",
//           Speaker: data1.spreker || "",
//           Location: data1.locatie || "",
//           Time: data1.tijd || "",
//           Datum: data1.datum || "",
//           Details: data1.details || ""
//         },
//         {
//           Subject: data2.onderwerp || "",
//           Speaker: data2.spreker || "",
//           Location: data2.locatie || "",
//           Time: data2.tijd || "",
//           Datum: data2.datum || "",
//           Details: data2.details || ""
//         },
//         {
//           Subject: data1.onderwerp || "",
//           Speaker: data1.spreker || "",
//           Location: data1.locatie || "",
//           Time: data1.tijd || "",
//           Datum: data1.datum || "",
//           Details: data1.details || ""
//         },
//         {
//           Subject: data2.onderwerp || "",
//           Speaker: data2.spreker || "",
//           Location: data2.locatie || "",
//           Time: data2.tijd || "",
//           Datum: data2.datum || "",
//           Details: data2.details || ""
//         }
//       ];
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       // Handle error as appropriate for your app
//     }
//   };
  
//   export const getSlides = async () => {
//     const slideData = await getKennisDelingSlideData();
//     return [
//       <DebugSlide {...debugSlideInfo} />,
//       <KennisDelingSlide slideData={slideData} />,
//       // <KennisDelingSlide {...kennisDelingInfoDupe} />
//     ];
//   };