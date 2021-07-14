export const portalProperties = {
  aggregator: "canada",
  title: "{Title}",
  logoPath: "assets/logo.png",
  sectionFooter:
`
<div class="uk-section-primary uk-section uk-section-xsmall">
    <div class="uk-container uk-container-expand">
    <div class="uk-h2 uk-text-center">{This is Footer section}</div>
        <div class="uk-grid-margin uk-grid" uk-grid="">
            <div class="uk-width-small@m uk-first-column"></div>
            <div class="uk-width-expand@m">
                <div class=" uk-text-small uk-margin uk-margin-remove-bottom uk-text-center@m uk-text-center uk-text-lead" id="footer#22">
                    <a class="license" href="http://creativecommons.org/licenses/by/4.0/" rel="license">
                        <svg class=" uk-svg" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <title></title>
                            <g data-name="Creative Commons" id="Creative_Commons">
                                <circle cx="12" cy="12" r="11.5" style="fill:none;stroke:#ffffff;stroke-linecap:round;stroke-linejoin:round"></circle>
                                <path d="M10.87,10a3.5,3.5,0,1,0,0,4" style="fill:none;stroke:#ffffff;stroke-linecap:round;stroke-linejoin:round"></path>
                                <path d="M18.87,10a3.5,3.5,0,1,0,0,4" style="fill:none;stroke:#ffffff;stroke-linecap:round;stroke-linejoin:round"></path>
                            </g>
                        </svg> &nbsp;
                        <svg class=" uk-svg" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <title></title>
                            <g id="Attribution">
                                <g data-name="<Group>" id="_Group_">
                                    <circle cx="12" cy="5" data-name="<Path>" id="_Path_" r="1.5" style="fill:none;stroke:#ffffff;stroke-linecap:round;stroke-linejoin:round"></circle>
                                    <path d="M12,8a5,5,0,0,0-3.07.71,1,1,0,0,0-.43.83V15H10v5.5h4V15h1.5V9.54a1,1,0,0,0-.43-.83A5,5,0,0,0,12,8Z" data-name="<Path>" id="_Path_2" style="fill:none;stroke:#ffffff;stroke-linecap:round;stroke-linejoin:round"></path>
                                </g>
                                <circle cx="12" cy="12" r="11.5" style="fill:none;stroke:#ffffff;stroke-linecap:round;stroke-linejoin:round"></circle>
                            </g>
                        </svg>
                    </a> &nbsp;Unless otherwise indicated, all materials created by OpenAIRE are licenced under&nbsp;<a href="http://creativecommons.org/licenses/by/4.0/" rel="license">CC ATTRIBUTION 4.0 INTERNATIONAL LICENSE</a>. </div>
            </div>
            <div class="uk-width-small@m">
                <div class="uk-margin uk-margin-remove-top uk-margin-remove-bottom uk-text-right@m uk-text-center">
                    <a class="uk-totop uk-icon" href="#" uk-scroll="" uk-totop="">
                        <svg width="15" height="20" viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg" icon="totop" ratio="1">
                            <polyline fill="none" stroke="#0000" stroke-width="1.1" points="1,8 7.5,1.5 14,8 "></polyline>
                            <rect fill="000" x="7" y="2" width="1" height="20"></rect>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
`,
  showNumbersInHhomePage:false,
  searchFormSection: `<div class='uk-text-center'> <div class="uk-h2">{Search Form Section}</div></div>`,
  homeSectionOne: `<div class='uk-section uk-text-center'> <div class="uk-h2">{This is section One}</div></div>`,
  homeSectionTwo: `<div class='uk-section uk-text-center'> <div class="uk-h2">{This is section Two}</div></div>`,
  entities:{
    publication:{isEnabled:true,simpleSearchPage:true,advancedSearchPage:true},
    dataset:{isEnabled:true,simpleSearchPage:true,advancedSearchPage:true},
    software:{isEnabled:true,simpleSearchPage:true,advancedSearchPage:true},
    other:{isEnabled:true,simpleSearchPage:true,advancedSearchPage:true},
    datasource:{isEnabled:true,simpleSearchPage:true,advancedSearchPage:true},
    organization:{isEnabled:true,simpleSearchPage:true,advancedSearchPage:true},
    project:{isEnabled:true,simpleSearchPage:true,advancedSearchPage:true}},
  searchServiceUrl:""

};
