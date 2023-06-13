# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

*For each release, use the following sub-sections:*

- *Added (for new features)*
- *Changed (for changes in existing functionality)*
- *Deprecated (for soon-to-be removed features)*
- *Removed (for now removed features)*
- *Fixed (for any bug fixes)*
- *Security (in case of vulnerabilities)*

## [3.0.0] - 13/06/2023
### Changed
* Upgraded uikit version to 3.13.10
* NEW user interface & API calls to Data Transfer Service

## [2.0.2] - 01/06/2023
### Added
* Expose EOSC::Data Cube subject and link it with Compatible EOSC Services.
* Added LICENSE.txt file (Apache 2.0 license)
### Changed
* Updated "Go to search" link: Expected url parameters are "return_path" and "search_params"
* Changed EGI Check-in environment for the EGI login client from DEV to DEMO
### Fixed
* Updated links to Compatible EOSC Services (according to eosc interoperability framework guidelines)

## [2.0.1] - 21/04/2023
### Changed
* Updated "Go to search" link: Redirect to the previous page of marketplace
  * Combine referrer and new url parameter "pv"
* Updated Uikit version
### Fixed
* Result Detailed page: Renamed "Providers" to "Data sources"
* Added font-family "Inter" to align with Marketplace and set default font to 'Inter', sans-serif

## [2.0.0]
### Added
* Added top bar to go "back" to eosc search.
### Changed
* Redirect to eosc search portal from any page except landing.
* * In landing pages used Graph badge to acknowledge OpenAIRE Graph.
### Fixed
* Updated favicon to show the eosc logo, not OpenAIRE. 
* Updated colors (synched with all eosc portals).

## [1.1.0]
Angular 14 upgrade

## [1.0.3]
### Changed
* Updated styles according to new view in EOSC Marketplace  & new Search
  * Blue banner
  * White logo 
  * Search form rounded and aligned to the center 
  * Fonts adjusted
  * Grey background on page & white background on results
* Detailed page: Display of EOSC subjects updated
### Fixed
* [Bug fix] In description of research products' versions
* Strip html tags from titles & descriptions

## [1.0.2]
### Fixed
* Fixes and updates in advanced search form and data transfer functionality. 

## [1.0.1]
### Added
* Data Transfer: NEW Browse functionality
* EOSC Subjects: NEW field eoscifguidelines
* Filter "Type" in search services: NEW field eoscdatasourcetype
### Changed
* Production search

## [1.0.0] 
Initial release of EOSC Explore Portal.

It contists of the search pages and the landing pages for the content of the BETA OpenAIRE Graph.

For datasets there is the demo functionality of Data Transfer service, using zenodo as source and EGI demo dcache as destination.
There is link to EOSC marketplace (beta) for results connected to EOSC services.
