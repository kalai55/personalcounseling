import { Component, OnInit } from '@angular/core';
declare let jQuery: any;
declare let $: any;
@Component({
  selector: 'app-faceanalyze',
  templateUrl: './faceanalyze.component.html',
  styleUrls: ['./faceanalyze.component.scss']
})
export class FaceanalyzeComponent implements OnInit {
  public faceAttributes;
  public linkAddress;
  public faceAttributesErr = false;
  public errString = '';
  constructor() { }

  ngOnInit() {
  }
  processImage() {
    // Replace <Subscription Key> with your valid subscription key.
    const subscriptionKey = '05e8851c5e524a13b7a94ab5f819ab22';

    // NOTE: You must use the same region in your REST call as you used to
    // obtain your subscription keys. For example, if you obtained your
    // subscription keys from westus, replace "westcentralus" in the URL
    // below with "westus".
    //
    // Free trial subscription keys are generated in the westcentralus region.
    // If you use a free trial subscription key, you shouldn't need to change
    // this region.
    const uriBase =
        'https://westcentralus.api.cognitive.microsoft.com/face/v1.0/detect';

    // Request parameters.
    const params = {
      'returnFaceId': 'true',
      'returnFaceLandmarks': 'false',
      'returnFaceAttributes':
      'age,gender,headPose,smile,facialHair,glasses,emotion,' +
      'hair,makeup,occlusion,accessories,blur,exposure,noise'
    };

    // Display the image.
    const sourceImageUrl = this.linkAddress;
    $('#sourceImage').attr('src', sourceImageUrl);
    const img = this;
    // Perform the REST API call.
    $.ajax({
      url: uriBase + '?' + $.param(params),

      // Request headers.
      beforeSend: function(xhrObj) {
        xhrObj.setRequestHeader('Content-Type', 'application/json');
        xhrObj.setRequestHeader('Ocp-Apim-Subscription-Key', subscriptionKey);
      },

      type: 'POST',

      // Request body.
      data: '{"url": ' + '"' + sourceImageUrl + '"}',
    })

        .done(function(data) {
          // Show formatted JSON on webpage.
          // $('#responseTextArea').val(JSON.stringify(data, null, 2));
          if (data.length !== 0) {
            img.faceAttributes = data[0].faceAttributes;
            img.faceAttributesErr = false;
          } else {
            img.faceAttributesErr = true;
          }
        })

        .fail(function(jqXHR, textStatus, errorThrown) {
          // Display error message.
          let errorString = (errorThrown === '') ?
              'Error. ' : errorThrown + ' (' + jqXHR.status + '): ';
          errorString += (jqXHR.responseText === '') ?
              '' : (jQuery.parseJSON(jqXHR.responseText).message) ?
                  jQuery.parseJSON(jqXHR.responseText).message :
                  jQuery.parseJSON(jqXHR.responseText).error.message;
          img.errString = errorString;
        });
  }
}
