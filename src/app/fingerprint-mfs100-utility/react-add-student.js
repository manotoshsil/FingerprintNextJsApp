'use client'
import CaptureFinger from './mfs100';
// eslint-disable-next-line @next/next/no-async-client-component
export default async function CaptureMyFingerprint(fingerVal) {

    let flag = 0;
    let quality = 90; //(1 to 100) (recommanded minimum 55)
    let timeout = 50; 
    try {
        
        var res = await CaptureFinger(quality, timeout);
        
        console.log("res.httpStaus :"+ res.httpStaus);
        console.log("res.data.Quality :"+ res.data.Quality);

        if (res.httpStaus) {
            flag = 1;
            if (res.data.ErrorCode == "0") {

                console.log("CaptureMyFingerprint: "+res.data.Quality);
                if (fingerVal < 6) {
                    alert("Image" + fingerVal + " is captured successfully. Proceed to capture Image" + (fingerVal + 1))
                    document.getElementById('finger' + fingerVal + 'Value').setAttribute('src',"data:image/bmp;base64," + res.data.BitmapData);
                   // document.querySelector('#finger' + fingerVal + 'Value').val(document.getElementById('finger' + fingerVal + 'Value').value)
                    document.querySelector('#q' + fingerVal).innerHTML= "Quality:: "+res.data.Quality +"%";
                   // document.querySelector('#imgFinger' + fingerVal).hide();
                   // document.querySelector('#cim' + fingerVal).show();
                   // document.querySelector('#cim' + fingerVal).attr('src', document.getElementById('finger' + fingerVal + 'Value').value)
                } else if (fingerVal == 6) {
                    alert("All Images are captured successfully. Please Proceed to save the information")
                    document.getElementById('finger' + fingerVal + 'Value').setAttribute('src',"data:image/bmp;base64," + res.data.BitmapData);
                   // document.querySelector('#finger' + fingerVal + 'Value').val(document.getElementById('finger' + fingerVal + 'Value').value)
                    document.querySelector('#q' + fingerVal).innerHTML= "Quality:: "+res.data.Quality +"%";
                    // document.querySelector('#imgFinger' + fingerVal).hide();
                    // document.querySelector('#cim' + fingerVal).show();
                    // document.querySelector('#cim' + fingerVal).attr('src', document.getElementById('finger' + fingerVal + 'Value').value)
                }

            } else {
                alert("Image not captured.")

            }
        }
        else {
            console.log(res);
        }
    }
    catch (e) {
        console.log(e);
    }
    return false;
}


const delay = ms => new Promise(res => setTimeout(res, ms));