import { Component, OnInit } from '@angular/core';
declare let jQuery: any;
declare let $: any;
@Component({
  selector: 'app-imageanalyze',
  templateUrl: './imageanalyze.component.html',
  styleUrls: ['./imageanalyze.component.scss']
})
export class ImageanalyzeComponent implements OnInit {

  public imgRes = [];
  public imgCategory = [];
  public imgCaption = [];
  public imgmetadata = [];
  public linkAddress;
  public errString = '';
  constructor() { }

  ngOnInit() {
  }

  processImage() {
    // **********************************************
    // *** Update or verify the following values. ***
    // **********************************************

    // Replace the subscriptionKey string value with your valid subscription key.
    const subscriptionKey = '02c56d2df19c487084ebcce3bdbecfcf';

    // Replace or verify the region.
    //
    // You must use the same region in your REST API call as you used to obtain your subscription keys.
    // For example, if you obtained your subscription keys from the westus region, replace
    // "westcentralus" in the URI below with "westus".
    //
    // NOTE: Free trial subscription keys are generated in the westcentralus region, so if you are using
    // a free trial subscription key, you should not need to change this region.
    const uriBase = 'https://westcentralus.api.cognitive.microsoft.com/vision/v1.0/analyze';

    // Request parameters.
    const params = {
      'visualFeatures': 'Categories,Description,Color',
      'details': '',
      'language': 'en',
    };

    // Display the image.
    const sourceImageUrl = this.linkAddress;
    $('#sourceImage').attr('src', sourceImageUrl);
    const img = this;
    // Perform the REST API call.
    $.ajax({
      url: uriBase + '?' + $.param(params),

      // Request headers.
      beforeSend: function (xhrObj) {
        xhrObj.setRequestHeader('Content-Type', 'application/json');
        xhrObj.setRequestHeader('Ocp-Apim-Subscription-Key', subscriptionKey);
      },

      type: 'POST',

      // Request body.
      data: '{"url": ' + '"' + sourceImageUrl + '"}',
    })

        .done(function (data) {
          // Show formatted JSON on webpage
          img.imgCategory = data.categories;
          img.imgCaption = data.description.captions;
          img.imgmetadata = data.metadata;
          img.imgRes = [data.description.tags];
          // $('#responseTextArea').val(JSON.stringify(data, null, 2));
        })

        .fail(function (jqXHR, textStatus, errorThrown) {
          // Display error message.
          let errorString = (errorThrown === '') ? 'Error. ' : errorThrown + ' (' + jqXHR.status + '): ';
          errorString += (jqXHR.responseText === '') ? '' : jQuery.parseJSON(jqXHR.responseText).message;
          img.errString = errorString;
        });
  }

}
