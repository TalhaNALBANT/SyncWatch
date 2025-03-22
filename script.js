async function startSharing() {
    // choose the video tag inside the html
    const myvideo = document.getElementById('localVideo');

    try{
        //take the video stream permission
        const stream = await navigator.mediaDevices.getDisplayMedia({
            vide0: true,
            audio:true
        });

        myvideo.srcObject = stream;
    }catch{
        console.log("error occured");
    }
    
}